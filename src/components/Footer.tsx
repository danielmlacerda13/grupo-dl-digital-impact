import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAzul from "@/assets/logo-azul.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logoAzul} alt="Grupo DL" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              Soluções empresariais completas para impulsionar seu negócio.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="text-sm hover:text-accent transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-sm hover:text-accent transition-colors">Serviços</Link></li>
              <li><Link to="/clientes" className="text-sm hover:text-accent transition-colors">Clientes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Consultoria em Gestão</li>
              <li>Software de Gestão</li>
              <li>Serviços Contábeis</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-accent" />
                <span>contato@grupodl.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-accent" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-accent" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Grupo DL - Soluções em Negócios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
