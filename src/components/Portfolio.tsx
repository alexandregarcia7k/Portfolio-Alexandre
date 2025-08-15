import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'desenvolvimento',
      description: 'Plataforma completa de e-commerce com React, TypeScript e integração de pagamentos.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      liveUrl: 'https://github.com/alexandregarcia7k',
      githubUrl: 'https://github.com/alexandregarcia7k'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'desenvolvimento',
      description: 'Dashboard responsivo para análise de dados com gráficos interativos e tempo real.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      liveUrl: 'https://github.com/alexandregarcia7k',
      githubUrl: 'https://github.com/alexandregarcia7k'
    },
    {
      id: 5,
      title: 'Landing Page - SaaS',
      category: 'desenvolvimento',
      description: 'Landing page de alta conversão para produto SaaS com animações e otimização SEO.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://github.com/alexandregarcia7k',
      githubUrl: 'https://github.com/alexandregarcia7k'
    },
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
    { id: 'design', label: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="portfolio" 
      ref={portfolioRef}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meu <span className="gradient-text">Portfólio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             
              front-end e design para criar experiências digitais memoráveis.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-primary-foreground shadow-primary' 
                    : 'hover:bg-primary/10 hover:border-primary'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover-float"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                        aria-label="Ver projeto ao vivo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                        aria-label="Ver código no GitHub"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Gostou do que viu? Vamos trabalhar juntos!
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-primary text-white px-8 py-3 rounded-xl hover:shadow-glow transition-all duration-300"
            >
              Iniciar um Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;