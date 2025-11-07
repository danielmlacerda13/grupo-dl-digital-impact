import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, GripVertical, Plus } from "lucide-react";
import { z } from "zod";

const testimonialSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  role: z.string().trim().min(1, "Cargo é obrigatório").max(100, "Cargo muito longo"),
  company: z.string().trim().min(1, "Empresa é obrigatória").max(100, "Empresa muito longa"),
  content: z.string().trim().min(10, "Depoimento deve ter no mínimo 10 caracteres").max(1000, "Depoimento muito longo"),
  avatar_url: z.string().trim().url("URL inválida").max(500, "URL muito longa").optional().or(z.literal("")),
});

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar_url: string | null;
  display_order: number;
};

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      toast.error("Erro ao carregar depoimentos");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = testimonialSchema.parse({ 
        name, 
        role, 
        company, 
        content, 
        avatar_url: avatarUrl 
      });
      setSubmitting(true);

      const maxOrder = testimonials.length > 0 
        ? Math.max(...testimonials.map(t => t.display_order)) 
        : -1;

      const { error } = await supabase
        .from("testimonials")
        .insert([{ 
          name: validatedData.name,
          role: validatedData.role,
          company: validatedData.company,
          content: validatedData.content,
          avatar_url: validatedData.avatar_url || null,
          display_order: maxOrder + 1 
        }]);

      if (error) throw error;

      toast.success("Depoimento adicionado com sucesso!");
      setName("");
      setRole("");
      setCompany("");
      setContent("");
      setAvatarUrl("");
      fetchTestimonials();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error("Error adding testimonial:", error);
        toast.error("Erro ao adicionar depoimento");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este depoimento?")) return;

    try {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
      toast.success("Depoimento excluído com sucesso!");
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      toast.error("Erro ao excluir depoimento");
    }
  };

  const moveTestimonial = async (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === testimonials.length - 1)
    ) {
      return;
    }

    const newTestimonials = [...testimonials];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    [newTestimonials[index], newTestimonials[targetIndex]] = [
      newTestimonials[targetIndex],
      newTestimonials[index],
    ];

    try {
      const updates = newTestimonials.map((testimonial, idx) => ({
        id: testimonial.id,
        display_order: idx,
      }));

      for (const update of updates) {
        const { error } = await supabase
          .from("testimonials")
          .update({ display_order: update.display_order })
          .eq("id", update.id);

        if (error) throw error;
      }

      setTestimonials(newTestimonials);
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
          <CardTitle>Adicionar Novo Depoimento</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome completo"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <Label htmlFor="role">Cargo</Label>
              <Input
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Ex: CEO"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Nome da empresa"
                required
                disabled={submitting}
              />
            </div>
            <div>
              <Label htmlFor="content">Depoimento</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escreva o depoimento..."
                required
                disabled={submitting}
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="avatarUrl">URL do Avatar (Opcional)</Label>
              <Input
                id="avatarUrl"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://..."
                disabled={submitting}
              />
            </div>
            <Button type="submit" disabled={submitting}>
              <Plus className="mr-2 h-4 w-4" />
              {submitting ? "Adicionando..." : "Adicionar Depoimento"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Depoimentos Cadastrados</CardTitle>
        </CardHeader>
        <CardContent>
          {testimonials.length === 0 ? (
            <p className="text-muted-foreground">Nenhum depoimento cadastrado</p>
          ) : (
            <div className="space-y-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex items-start gap-4 p-4 border rounded-lg"
                >
                  <div className="flex flex-col gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveTestimonial(index, "up")}
                      disabled={index === 0}
                    >
                      ↑
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveTestimonial(index, "down")}
                      disabled={index === testimonials.length - 1}
                    >
                      ↓
                    </Button>
                  </div>
                  <GripVertical className="text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} - {testimonial.company}
                    </p>
                    <p className="text-sm mt-2">{testimonial.content}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(testimonial.id)}
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

export default TestimonialsManager;
