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
      
      <section className="pt-32 pb-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in text-primary">Nossos Serviços</h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Soluções completas e integradas para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-2xl shadow-lg overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl -z-10 group-hover:from-accent/10 transition-all"></div>
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-md">
                      <service.icon className="text-accent-foreground" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-primary">{service.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2 rounded-md hover:bg-accent/5 transition-colors">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center rounded-lg p-12 relative overflow-hidden shadow-xl" style={{ background: 'var(--gradient-primary)' }}>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Precisa de uma Solução Personalizada?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Cada empresa é única. Entre em contato conosco para desenvolvermos uma solução sob medida para o seu negócio.
              </p>
              <a href="/contato" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent-light shadow-lg hover:shadow-xl transition-all">
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
