import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada projeto e atendimento."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Construímos relacionamentos duradouros baseados em confiança."
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco em entregar soluções que geram valor real para o negócio."
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Sempre buscando as melhores práticas e tecnologias do mercado."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Sobre o Grupo DL</h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Somos especialistas em transformar desafios empresariais em oportunidades de crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nossa História</h2>
              <p className="text-muted-foreground leading-relaxed">
                O Grupo DL nasceu da visão de transformar a forma como empresas gerenciam seus negócios. 
                Com anos de experiência no mercado, consolidamos nossa posição como referência em soluções 
                empresariais integradas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje, atendemos empresas de diversos portes e segmentos, oferecendo consultoria estratégica, 
                software de gestão e serviços contábeis de excelência.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Capacitar empresas a alcançarem seu máximo potencial através de soluções inovadoras em 
                gestão empresarial, proporcionando crescimento sustentável e competitividade no mercado.
              </p>
              <h3 className="text-2xl font-bold mt-8">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecido como o principal parceiro estratégico em gestão empresarial, 
                referência em inovação e excelência no atendimento.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
