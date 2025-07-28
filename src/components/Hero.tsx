//hero.tsx
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const initialHeroDelay = 0.2

  const scrollToAbout = () => {
  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="space-y-8 ">
          {/* Main heading with gradient text */}
          <div className="space-y-4">
           <p className="text-lg md:text-xl text-blue-400 font-mono tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: `${initialHeroDelay}s` }}>
           Bem vindo, eu sou
         </p>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent inline-block opacity-0 animate-fade-in-up" /* Adicionado opacity-0 e animate-fade-in-up */
          style={{ animationDelay: `${initialHeroDelay + 0.3}s` }} /* Delay para a palavra "Renan" inteira */
        >
                Renan
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white/90 opacity-0 animate-fade-in-up" style={{ animationDelay: `${initialHeroDelay + 0.6}s` }}>
              Lima
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Transformo dados em insights estratégicos e decisões inteligentes. 
            Especializado em Python, SQL, Power BI e Looker Studio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Ver Meus Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Entre em Contato
            </Button>
          </div>
         {/* Scroll indicator - MOVIDO PARA AQUI ABAIXO DE TUDO NO CONTEÚDO PRINCIPAL */}
          <div
          onClick={scrollToAbout} // ADICIONADO: Evento de clique para rolar
            className="mt-16 opacity-0 animate-fade-in-up cursor-pointer group" // ADICIONADO: cursor-pointer e group
            style={{ animationDelay: `${initialHeroDelay + 1.6}s` }}
           >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-gray-500 tracking-wider">SCROLL</span>
              <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
            </div>
          </div>


          {/* Tech stack indicators }
          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-4 tracking-wider">FERRAMENTAS PRINCIPAIS</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "SQL", "Power BI", "Excel", "Tableau", "Machine Learning"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
         </div>*/}
        </div>

        
      </div>
    </section>
  );
};
