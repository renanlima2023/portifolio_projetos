{/* Footer.tsx */}
import { Database, Code, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/renanlima2023", 
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/renan-slima", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: Mail, 
      href: "mailto:renan.lima04@gmail.com", 
      label: "Email",
      color: "hover:text-cyan-400"
    }
  ];

  const footerSectionDelay = 0.1;

  return (
    <footer className="relative bg-gray-900/50 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Database className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Renan Lima
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Minha missão é transformar dados complexos em insights acionáveis que impulsionam o crescimento e 
              a tomada de decisões estratégicas em Business Intelligence.

            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center ${social.color} hover:bg-white/10 hover:border-white/30 transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-white font-medium">Email:</span><br />
                renan.lima04@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Localização:</span><br />
                Salvador, Bahia, Brasil
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Disponibilidade:</span><br />
                Aberto para oportunidades
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Renan Lima. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300"
          >
            <span className="text-sm">Voltar ao topo</span>
            <div className="w-8 h-8 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
};