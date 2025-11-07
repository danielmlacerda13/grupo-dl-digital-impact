import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import logoSistemas from "@/assets/logo-sistemas.png";
import logoConsultoria from "@/assets/logo-consultoria.png";
import logoContabilidade from "@/assets/logo-contabilidade.png";

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
      
      <PageHeader 
        title="Sobre o Grupo DL"
        subtitle="Somos especialistas em transformar desafios empresariais em oportunidades de crescimento."
      />
      
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="border-none shadow-lg p-8" style={{ background: 'var(--gradient-primary)' }}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary-foreground">Nossa História</h2>
                <p className="text-primary-foreground/90 leading-relaxed">
                  O Grupo DL nasceu da visão de transformar a forma como empresas gerenciam seus negócios. 
                  Com anos de experiência no mercado, consolidamos nossa posição como referência em soluções 
                  empresariais integradas.
                </p>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Hoje, atendemos empresas de diversos portes e segmentos, oferecendo consultoria estratégica, 
                  software de gestão e serviços contábeis de excelência.
                </p>
              </div>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-primary-light text-primary-foreground p-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Nossa Missão</h2>
                <p className="leading-relaxed opacity-90">
                  Capacitar empresas a alcançarem seu máximo potencial através de soluções inovadoras em 
                  gestão empresarial, proporcionando crescimento sustentável e competitividade no mercado.
                </p>
                <h2 className="text-3xl font-bold mt-8">Nossa Visão</h2>
                <p className="leading-relaxed opacity-90">
                  Ser reconhecido como o principal parceiro estratégico em gestão empresarial, 
                  referência em inovação e excelência no atendimento.
                </p>
              </div>
            </Card>
          </div>

          <div className="mb-20 rounded-lg p-12 bg-gradient-to-r from-secondary via-background to-secondary">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Empresas do Grupo DL</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
              <div className="flex justify-center">
                <img src={logoSistemas} alt="DL Sistemas" className="max-w-[280px] h-auto" />
              </div>
              <div className="flex justify-center">
                <img src={logoConsultoria} alt="DL Consultoria Empresarial" className="max-w-[280px] h-auto" />
              </div>
              <div className="flex justify-center">
                <img src={logoContabilidade} alt="DL Contabilidade" className="max-w-[280px] h-auto" />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                      <value.icon className="text-accent-foreground" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
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
