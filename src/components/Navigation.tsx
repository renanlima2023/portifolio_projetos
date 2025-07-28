
{/* Navigation.tsx */}

import { useState, useEffect } from "react";
import { Menu, X, Code, Section, Database, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Novo useEffect para Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //Se a seção está visivel, adiciona a classe 'active'
            setActiveSection('#${entry.target.id}');
          }
        });
      },
      { root:null,
        rootMargin: "-50% 0% -50% 0%",
        threshold: 0,
      }
    );

    //Observar cada seção
    navItems.forEach((item) => {
      const section = document.querySelector(item.href)
      if (section) {
        observer.observe(section);
      }
    });

    //Limpar quano o componente for desmontado
    return () => {
     observer.disconnect();
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

    // Função para redirecionar para o linkedIn
    const redirectToLinkedIn = () => {
      window.open("https://www.linkedin.com/in/renan-slima", "_blank");
      setIsMobileMenuOpen(false);
    };
  

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        "opacity-0 animate-fade-in-down",
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      )}
      style={{animationDelay: "0.2s"}}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <Database className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portifólio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative text-gray-300 hover:text-white transition-all duration-300 font-medium group py-2",
                    activeSection === item.href && "text-white scale-105" // Destaque se for a seção ativa
                 )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 transition-all duration-500",
                  activeSection === item.href ? "w-full bg-gradient-to-r from-blue-400 to-purple-500" : "w-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full"
                )}></span>
              </button>
            ))}
            <div className="w-px h-6 bg-white/20"></div>
            <button
              onClick={redirectToLinkedIn}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Contratar
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-xl transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                )} 
              />
              <X 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                )} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 mb-2",
                  activeSection === item.href ? "text-white bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300">
              Contratar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
