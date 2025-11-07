import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in text-primary">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Estamos prontos para atender suas necessidades. Entre em contato conosco!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <Mail className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">E-mail</h3>
                <p className="text-muted-foreground">contato@grupodl.com.br</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <Phone className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Telefone</h3>
                <p className="text-muted-foreground">(11) 9999-9999</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-1 duration-300 group">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <MapPin className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Localização</h3>
                <p className="text-muted-foreground">São Paulo, SP</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-accent/20 shadow-xl">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <Input placeholder="Nome da sua empresa" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <Input placeholder="Como podemos ajudar?" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Descreva suas necessidades..." 
                    rows={6}
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-light shadow-lg hover:shadow-xl transition-all">
                  Enviar Mensagem <Send className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
