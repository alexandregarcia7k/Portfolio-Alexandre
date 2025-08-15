import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import toplogo from '@/assets/toplogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowBackToTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/70 backdrop-blur-sm shadow-card border-b border-border/20' 
            : 'bg-transparent backdrop-blur-0'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div 
              className="text-2xl font-bold cursor-pointer gradient-text"
              onClick={() => scrollToSection('home')}
            >
              <img src={toplogo} 
                className="w-24 h-auto lg:w-32"
                alt="Alexandre" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-4 py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          back-to-top 
          ${showBackToTop ? 'visible' : ''}
          flex justify-center items-center  /* Adicione estas classes */
          w-12 h-12                       /* Defina um tamanho fixo para o botão */
          rounded-full                    /* Opcional: para fazer um botão circular */
        `}
        aria-label="Voltar ao topo"
>
  <ChevronUp size={30} />
</button>
    </>
  );
};

export default Header;