import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    const subject = encodeURIComponent(data.subject || "Contato do Portfólio");
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`
    );

    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:alexandregarciassj@outlook.com?subject=${subject}&body=${body}`;
    mailtoLink.target = '_blank';
    mailtoLink.rel = 'noopener noreferrer';
    mailtoLink.click();

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Cliente de e-mail aberto",
        description: "Por favor complete o envio no seu aplicativo de e-mail",
      });
      localStorage.setItem('lastContactForm', JSON.stringify(data));
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'alexandregarciassj@outlook.com',
      link: 'mailto:alexandregarciassj@outlook.com',
      targetBlank: false
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '(35) 99755-2367',
      link: `https://wa.me/5535997552367?text=${encodeURIComponent('Olá Alexandre, vim pelo seu portfólio!')}`,
      targetBlank: true
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Minas Gerais, Brasil',
      link: '#',
      targetBlank: false
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/alexandregarcia7k',
      username: '@alexandregarcia7k',
      targetBlank: true
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alexandregarcia7k',
      username: 'Alexandre Garcia',
      targetBlank: true
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/alexandre.garcia7k',
      username: '@alexandre.garcia7k',
      targetBlank: true
    }
  ];

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 lg:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para tirar seu próximo projeto do papel? Vamos conversar sobre como posso transformar suas ideias em soluções digitais reais.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="bg-card border border-border rounded-xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Envie uma mensagem
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full"
                      placeholder="Sobre o que você gostaria de falar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full"
                      placeholder="Conte-me mais sobre seu projeto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-white py-3 rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send size={18} />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="animate-fade-in-right space-y-8">

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de contato
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      target={info.targetBlank ? '_blank' : '_self'}
                      rel={info.targetBlank ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-xl p-8 shadow-card">
                <h3
 className="text-xl font-bold mb-4">
                  Vamos trabalhar juntos!
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Aberto a projetos, parcerias ou boas conversas sobre desenvolvimento. Fique à vontade para entrar em contato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;