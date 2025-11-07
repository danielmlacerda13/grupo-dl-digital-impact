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
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Estamos prontos para atender suas necessidades. Entre em contato conosco!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">E-mail</h3>
                <p className="text-muted-foreground">contato@grupodl.com.br</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-muted-foreground">(11) 9999-9999</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Localização</h3>
                <p className="text-muted-foreground">São Paulo, SP</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto border-2">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Envie sua Mensagem</h2>
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

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
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
