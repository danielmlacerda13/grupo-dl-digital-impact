import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";

const Clients = () => {
  // Placeholder for client logos
  const clients = Array(12).fill(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in text-primary">Nossos Clientes</h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Orgulhamo-nos de fazer parte do sucesso de empresas de diversos segmentos.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Empresas que Confiam em Nós</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clients.map((_, index) => (
                <div
                  key={index}
                  className="aspect-video bg-card rounded-lg flex items-center justify-center hover:bg-accent/5 transition-all border-2 border-border hover:border-accent hover:shadow-lg group"
                >
                  <Building2 className="text-muted-foreground group-hover:text-accent transition-colors" size={48} />
                </div>
              ))}
            </div>
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
