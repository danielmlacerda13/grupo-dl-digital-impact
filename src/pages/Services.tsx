import { TrendingUp, Laptop, FileText, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Consultoria em Gestão",
      description: "Estratégias personalizadas para otimizar processos e resultados",
      features: [
        "Análise e diagnóstico empresarial",
        "Planejamento estratégico",
        "Gestão de processos e operações",
        "Indicadores de performance (KPIs)",
        "Gestão de mudanças organizacionais"
      ]
    },
    {
      icon: Laptop,
      title: "Software de Gestão",
      description: "Tecnologia de ponta para controle total do seu negócio",
      features: [
        "ERP integrado e customizável",
        "Gestão financeira completa",
        "Controle de estoque e vendas",
        "Business Intelligence e relatórios",
        "Integração com sistemas existentes"
      ]
    },
    {
      icon: FileText,
      title: "Serviços Contábeis",
      description: "Compliance e gestão fiscal completa para sua empresa",
      features: [
        "Escrituração contábil e fiscal",
        "Departamento pessoal completo",
        "Planejamento tributário",
        "Compliance e governança",
        "Consultoria fiscal especializada"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Nossos Serviços</h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Soluções completas e integradas para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <service.icon className="text-accent" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center bg-muted/50 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Precisa de uma Solução Personalizada?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada empresa é única. Entre em contato conosco para desenvolvermos uma solução sob medida para o seu negócio.
            </p>
            <a href="/contato" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
