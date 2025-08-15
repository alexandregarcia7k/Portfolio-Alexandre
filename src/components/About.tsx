import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Code,
      title: 'Desenvolvimento Front-End',
      description: 'Criação de interfaces performáticas com tecnologias modernas como React, TypeScript, Next.js, HTML, CSS e JavaScript.',
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'UI/UX',
      description: 'Design de interfaces intuitivas e experiências centradas no usuário, focadas em usabilidade e conversão.',
      color: 'text-accent'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Aprimoramento de performance com foco em velocidade de carregamento, SEO técnico e acessibilidade.',
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Colaboração em equipe com metodologias ágeis e comunicação clara em todas as etapas do projeto.',
      color: 'text-primary-glow'
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 lg:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre <span className="gradient-text">Alexandre</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transformo ideias em experiências digitais que aproximam pessoas e marcas, com foco em código limpo e arquitetura bem estruturada.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-foreground">
                Onde ideias ganham vida no mundo digital.
              </h3>
              
              {/*<p className="text-muted-foreground leading-relaxed">
                
              </p>
              */}
              <p className="text-muted-foreground leading-relaxed">
                Minha abordagem integra conhecimentos sólidos em HTML, CSS, JavaScript, React, TypeScript e outras tecnologias modernas, sempre com foco em arquiteturas escaláveis e código de fácil manutenção. Acredito que um bom código deve ser compreensível e evolutivo para qualquer desenvolvedor.
              </p>
              
             {/* <p className="text-muted-foreground leading-relaxed">
                Quando não estou codificando, gosto de estudar novas tecnologias, contribuir 
                com projetos open source e compartilhar conhecimento com a comunidade de 
                desenvolvedores.
              </p>*/}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">1+</div>
                  <div className="text-sm text-muted-foreground">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Dedicação</div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
              {skills.map((skill, index) => (
                <div 
                  key={skill.title}
                  className="bg-card border border-border rounded-xl p-6 shadow-card hover-float"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Stack de tecnologias
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 
                'HTML', 'Git', 'CSS', 'Javascript',
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium hover-float"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;