import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import ClientsManager from "@/components/admin/ClientsManager";
import TestimonialsManager from "@/components/admin/TestimonialsManager";
import { toast } from "sonner";

const Admin = () => {
  const navigate = useNavigate();
  const { user, signOut, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useIsAdmin();

  console.log("=== ADMIN COMPONENT ===", { 
    user: user?.id, 
    isAdmin, 
    authLoading, 
    adminLoading,
    willShowAccessDenied: !authLoading && !adminLoading && user && !isAdmin
  });

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Redireciona para login se não tiver usuário
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  // Aguarda o carregamento completo
  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  // Se não tem usuário, não renderiza nada (useEffect vai redirecionar)
  if (!user) {
    return null;
  }

  // Se não é admin, mostra mensagem
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Acesso Negado</h1>
        <p className="text-muted-foreground mb-8">Você não tem permissão para acessar esta página.</p>
        <Button onClick={() => navigate("/")}>Voltar para Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary/30">
        <div className="container mx-auto px-4 py-8 pt-28">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-primary">Portal Administrativo</h1>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>

          <Tabs defaultValue="clients" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="clients">Clientes</TabsTrigger>
              <TabsTrigger value="testimonials">Depoimentos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clients" className="mt-6">
              <ClientsManager />
            </TabsContent>
            
            <TabsContent value="testimonials" className="mt-6">
              <TestimonialsManager />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
