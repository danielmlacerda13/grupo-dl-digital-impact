import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions Ltda",
      role: "CEO",
      content: "O Grupo DL transformou completamente nossa gestão empresarial. A consultoria foi fundamental para otimizar nossos processos e aumentar nossa eficiência operacional.",
      rating: 5
    },
    {
      name: "Marina Costa",
      company: "Indústria ABC",
      role: "Diretora Financeira",
      content: "Excelentes profissionais! O software de gestão implementado trouxe controle total sobre nossas operações e facilitou muito a tomada de decisões estratégicas.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      company: "Comércio XYZ",
      role: "Gerente Geral",
      content: "Os serviços contábeis são impecáveis. Estamos sempre em dia com nossas obrigações fiscais e contamos com uma equipe extremamente competente e proativa.",
      rating: 5
    },
    {
      name: "Ana Paula Santos",
      company: "Serviços Premium",
      role: "Proprietária",
      content: "A parceria com o Grupo DL foi decisiva para o crescimento da nossa empresa. O suporte é excepcional e as soluções realmente funcionam na prática.",
      rating: 5
    },
    {
      name: "Fernando Lima",
      company: "Logística Expressa",
      role: "Diretor Operacional",
      content: "Profissionalismo e comprometimento definem o Grupo DL. As melhorias implementadas geraram resultados expressivos em poucos meses.",
      rating: 5
    },
    {
      name: "Juliana Rodrigues",
      company: "Varejo Moderno",
      role: "Gerente Administrativa",
      content: "Recomendo de olhos fechados! A integração entre consultoria, software e contabilidade fez toda diferença na organização do nosso negócio.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <PageHeader 
        title="Depoimentos"
        subtitle="Veja o que nossos clientes têm a dizer sobre nossos serviços."
      />
      
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group bg-card">
                <CardContent className="pt-6 relative">
                  <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl"></div>
                  <Quote className="text-accent mb-4 relative z-10" size={32} />
                  <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating).fill(null).map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  <div className="border-t border-accent/20 pt-4">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center rounded-lg p-12 relative overflow-hidden shadow-xl" style={{ background: 'var(--gradient-primary)' }}>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
                Quer Fazer Parte desta Lista?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar a gestão da sua empresa.
              </p>
              <a
                href="/contato"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent-light shadow-lg hover:shadow-xl transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
