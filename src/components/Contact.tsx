
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


  
  
  
export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzpjdgb"; 

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o recarregamento padrão da página
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado por entrar em contato. Responderei em breve.",
          variant: "default",
        });
        form.reset(); // Limpa o formulário
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Ocorreu um erro. Por favor, tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      toast({
        title: "Erro de conexão",
        description: "Não foi possível conectar ao servidor. Verifique sua internet.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  // Delay base para as animações de entrada
  const sectionDelay = 0.2;

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "renan.lima04@gmail.com",
      link: "mailto:renan.lima04@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (71) 99328-9448",
      link: "tel:+5571993289448"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Salvador, Bahia, Brasil",
      link: "#"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/renanlima2023", 
      label: "GitHub", 
      color: "hover:bg-gray-600",
      description: "Veja meus projetos"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/renan-slima", 
      label: "LinkedIn", 
      color: "hover:bg-blue-600",
      description: "Conecte-se comigo"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-mono tracking-wider">
              CONTATO
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Vamos{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              conversar
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interessado em análise de dados ou tem um projeto em mente? Estou sempre aberto para 
            discutir novas oportunidades e colaborações.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Send className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Envie uma mensagem</h3>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      name="name"
                      placeholder="Seu nome"
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Input
                    name="email"
                      type="email" 
                      placeholder="Seu email" 
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300"
                    />
                  </div>
                </div>
                <Input
                name="subject"
                  placeholder="Assunto" 
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300"
                />
                <Textarea
                name="message"
                  placeholder="Sua mensagem" 
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 transition-all duration-300 resize-none"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                type="submit"
                disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : ""}
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Vamos nos conectar</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{info.title}</p>
                      <a 
                        href={info.link}
                        className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Redes sociais</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center ${social.color} hover:border-transparent transition-all duration-300 group-hover:scale-110`}>
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">{social.label}</p>
                      <p className="text-gray-400 text-sm">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action Card
            <Card className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Pronto para começar?</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Vamos transformar dados em insights valiosos para o seu negócio!
                </p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Iniciar Projeto Agora
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};
