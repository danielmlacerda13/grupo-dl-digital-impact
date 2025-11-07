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

  console.log("Admin Component - State:", { 
    user: user?.id, 
    isAdmin, 
    authLoading, 
    adminLoading 
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    console.log("Admin useEffect - Checking redirect conditions:", {
      authLoading,
      adminLoading,
      user: !!user,
      isAdmin,
      shouldRedirect: !authLoading && !adminLoading && user && !isAdmin
    });

    // Só redireciona se não estiver carregando E não for admin E tiver usuário
    // Garante que o estado foi completamente atualizado antes de redirecionar
    if (!authLoading && !adminLoading && user && !isAdmin) {
      console.log("Admin: Redirecting - not admin");
      toast.error("Você não tem permissão para acessar esta página");
      navigate("/");
    }
  }, [isAdmin, adminLoading, authLoading, user, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Mostra loading enquanto verifica autenticação e permissões
  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  // Se não está mais carregando e não é admin, não renderiza nada
  // (o useEffect vai redirecionar)
  if (!authLoading && !adminLoading && !isAdmin) {
    return null;
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
