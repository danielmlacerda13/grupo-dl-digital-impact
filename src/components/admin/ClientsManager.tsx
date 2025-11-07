import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, GripVertical, Plus } from "lucide-react";
import { z } from "zod";

const clientSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  logo_url: z.string().trim().url("URL inválida").max(500, "URL muito longa"),
});

type Client = {
  id: string;
  name: string;
  logo_url: string;
  display_order: number;
};

const ClientsManager = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error("Error fetching clients:", error);
      toast.error("Erro ao carregar clientes");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = clientSchema.parse({ name, logo_url: logoUrl });
      setSubmitting(true);

      const maxOrder = clients.length > 0 
        ? Math.max(...clients.map(c => c.display_order)) 
        : -1;

      const { error } = await supabase
        .from("clients")
        .insert([{ 
          name: validatedData.name, 
          logo_url: validatedData.logo_url, 
          display_order: maxOrder + 1 
        }]);

      if (error) throw error;

      toast.success("Cliente adicionado com sucesso!");
      setName("");
      setLogoUrl("");
      fetchClients();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error("Error adding client:", error);
        toast.error("Erro ao adicionar cliente");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este cliente?")) return;

    try {
      const { error } = await supabase.from("clients").delete().eq("id", id);
      if (error) throw error;
      toast.success("Cliente excluído com sucesso!");
      fetchClients();
    } catch (error) {
      console.error("Error deleting client:", error);
      toast.error("Erro ao excluir cliente");
    }
  };

  const moveClient = async (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === clients.length - 1)
    ) {
      return;
    }

    const newClients = [...clients];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    [newClients[index], newClients[targetIndex]] = [newClients[targetIndex], newClients[index]];

    try {
      const updates = newClients.map((client, idx) => ({
        id: client.id,
        display_order: idx,
      }));

      for (const update of updates) {
        const { error } = await supabase
          .from("clients")
          .update({ display_order: update.display_order })
          .eq("id", update.id);

        if (error) throw error;
      }

      setClients(newClients);
      toast.success("Ordem atualizada!");
    } catch (error) {
      console.error("Error updating order:", error);
      toast.error("Erro ao atualizar ordem");
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Adicionar Novo Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Cliente</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome da empresa"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <Label htmlFor="logoUrl">URL do Logotipo</Label>
              <Input
                id="logoUrl"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                placeholder="https://..."
                required
                disabled={submitting}
              />
            </div>
            <Button type="submit" disabled={submitting}>
              <Plus className="mr-2 h-4 w-4" />
              {submitting ? "Adicionando..." : "Adicionar Cliente"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clientes Cadastrados</CardTitle>
        </CardHeader>
        <CardContent>
          {clients.length === 0 ? (
            <p className="text-muted-foreground">Nenhum cliente cadastrado</p>
          ) : (
            <div className="space-y-2">
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  className="flex items-center gap-4 p-4 border rounded-lg"
                >
                  <div className="flex flex-col gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveClient(index, "up")}
                      disabled={index === 0}
                    >
                      ↑
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveClient(index, "down")}
                      disabled={index === clients.length - 1}
                    >
                      ↓
                    </Button>
                  </div>
                  <GripVertical className="text-muted-foreground" />
                  <img
                    src={client.logo_url}
                    alt={client.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.logo_url}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(client.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientsManager;
