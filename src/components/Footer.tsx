import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/alexandregarcia7k',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/alexandregarcia7k',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:alexandregarciassj@outlook.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              Alexandre
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvedor Front-End criando experiências digitais 
              únicas e memoráveis.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Navegação
            </h3>
            <div className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'Sobre' },
                { id: 'portfolio', label: 'Portfólio' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Contato
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>alexandregarciassj@outlook.com</p>
              <p>+55 (35) 99755-2367</p>
              <p>Minas Gerais, Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Alexandre. Todos os direitos reservados.
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;