import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { supabase } from "@/integrations/supabase/client";
import { Building2 } from "lucide-react";

type Client = {
  id: string;
  name: string;
  logo_url: string;
  display_order: number;
};

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <PageHeader 
        title="Nossos Clientes"
        subtitle="Orgulhamo-nos de fazer parte do sucesso de empresas de diversos segmentos."
      />
      
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Empresas que Confiam em Nós</h2>
            
            {loading ? (
              <div className="text-center text-muted-foreground">Carregando...</div>
            ) : clients.length === 0 ? (
              <div className="text-center text-muted-foreground">Nenhum cliente cadastrado ainda.</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="aspect-video bg-card rounded-lg flex items-center justify-center hover:bg-accent/5 transition-all border-2 border-border hover:border-accent hover:shadow-lg group p-4"
                  >
                    <img 
                      src={client.logo_url} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-lg p-12 text-center relative overflow-hidden shadow-xl" style={{ background: 'var(--gradient-primary)' }}>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Faça Parte desta Lista</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Junte-se às empresas que já transformaram sua gestão com as soluções do Grupo DL.
              </p>
              <a
                href="/contato"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent-light shadow-lg hover:shadow-xl transition-all"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
