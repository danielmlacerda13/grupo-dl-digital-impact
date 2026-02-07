import { TrendingUp, Laptop, FileText, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Consultoria em Gestão",
      description: "Metodologias únicas para otimizar processos gerar resultados",
      features: [
        "Análise e diagnóstico empresarial",
        "Planejamento estratégico",
        "Gestão financeira orientada a resultados",
        "Gestão de processos e operações",
      ],
    },
    {
      icon: Laptop,
      title: "Software de Gestão",
      description: "Sistemas desenvolvidos por quem realmente entende de negócios",
      features: [
        "Gestão financeira completa",
        "Controle de estoque e logística",
        "Emissão de Documentos Fiscais",
        "Relatórios que ajudam você na tomada de decisão",
      ],
    },
    {
      icon: FileText,
      title: "Serviços Contábeis",
      description: "Contabilidade feita por contadores gestores, e não burocratas",
      features: [
        "Todos os departamentos (Fiscal, Pessoal, Contábil e Societário)",
        "Contabilidade perto de você, conte conosco sempre que precisar",
        "Cuidamos do seu negócio como se fosse nosso",
        "Contadores gestores que entendem a sua realidade como empresário",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <PageHeader
        title="Nossos Serviços"
        subtitle="Soluções completas e integradas para impulsionar o crescimento do seu negócio."
      />

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-2xl shadow-lg overflow-hidden group relative flex flex-col"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl -z-10 group-hover:from-accent/10 transition-all"></div>
                <CardHeader className="bg-gradient-to-b from-primary/5 to-transparent">
                  <div className="flex flex-col items-center text-center gap-4 mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-md">
                      <service.icon className="text-accent-foreground" size={36} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex-1">
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-2 rounded-md hover:bg-accent/5 transition-colors"
                      >
                        <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="mt-20 text-center rounded-lg p-12 relative overflow-hidden shadow-xl"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Precisa de uma Solução Personalizada?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Cada empresa é única. Entre em contato conosco para desenvolvermos uma solução sob medida para o seu
                negócio.
              </p>
              <a
                href="/contato"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent-light shadow-lg hover:shadow-xl transition-all"
              >
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
