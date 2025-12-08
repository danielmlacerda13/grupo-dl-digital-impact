import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Consultoria em Gestão",
      description: "Estratégias personalizadas para otimizar processos e aumentar a eficiência empresarial.",
    },
    {
      icon: Target,
      title: "Software de Gestão",
      description: "Soluções tecnológicas integradas para controle total do seu negócio.",
    },
    {
      icon: Shield,
      title: "Serviços Contábeis",
      description: "Compliance e gestão fiscal completa para sua empresa estar sempre em dia.",
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      description: "Time qualificado pronto para atender suas necessidades empresariais.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2RjOWMwNCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-primary-foreground">
              Transforme sua Gestão Empresarial
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 animate-fade-in">
              Soluções integradas, desenvolvidas por quem realmente entende de gestão e negócios!
              <br />
              Uma empresa comprometida em gerar <span style="color: #F9BB1F; font-weight: bold">RESULTADOS!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/contato">
                  Fale Conosco <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <Link to="/servicos">Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nossas Soluções</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferecemos um portfólio completo de serviços para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-border/50 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-2 duration-300 bg-card group"
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                    <feature.icon className="text-accent-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00MCAyMGMyLjc2MSAwIDUgMi4yMzkgNSA1cy0yLjIzOSA1LTUgNS01LTIuMjM5LTUtNSAyLjIzOS01IDUtNXoiIHN0cm9rZT0iI2RjOWMwNCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Pronto para Crescer?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent-light text-accent-foreground shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/contato">Solicite uma Consulta</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
