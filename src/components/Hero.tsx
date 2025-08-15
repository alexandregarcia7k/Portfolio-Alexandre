import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import alexandreProfile from '@/assets/alexandre-profile.jpeg';
import bgStatic from '@/assets/bg-static.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-static"
      style={{
        backgroundImage: `url(${bgStatic})`,
      }}
    >
      
      <div className="absolute inset-0 bg-background/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left side - Text content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Tagline */}
            <div className="mb-6">
              <p className="text-muted-foreground text-lg font-light">
                Construindo pontes digitais,
              </p>
              <p className="text-muted-foreground text-lg font-light">
                pixel a pixel.
              </p>
            </div>

            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
                DESENVOLVEDOR
              </h1>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                & <span className="gradient-text">FRONT-END</span>.
              </h1>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Ajudo marcas a desenvolver <span className="text-primary font-medium">experiências digitais únicas</span>, 
                pensadas no contexto do mundo digital moderno. Cada detalhe é planejado para provocar uma 
                <span className="text-primary font-medium"> transformação real e memorável</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            {/* <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="btn-hero"
                >
                  Ver principais implementações
                </button>
              </div>
            </div> */}

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/alexandregarcia7k" 
                target="_blank" 
                rel="github"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/alexandregarcia7k" 
                target="_blank" 
                rel="Linkedin"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:alexandregarciassj@outlook.com" target='_blank'
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Profile and info */}
          <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Profile Image */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="profile-circle">
                <img
                  src={alexandreProfile}
                  alt="Alexandre - Desenvolvedor Front-End"
                  loading="eager"
                />
              </div>
            </div>

            {/* Name Badge */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Alexandre</h2>
              <p className="text-primary font-medium">Desenvolvedor</p>
              <p className="text-primary font-medium">Front-End</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;