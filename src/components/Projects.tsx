
import { useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Todos", "Financeira", "Business Intelligence", "Análise Estatística"];

  const projects = [
   
    {
      title: "Gestão Inteligente de Recursos Humanos",
      description: "O Gestão Inteligente de Recursos Humanos é um dashboard avançado projetado para proporcionar uma visão abrangente e detalhada da força de trabalho de uma organização. Este projeto visa otimizar a gestão de recursos humanos através da coleta, análise e visualização de dados críticos, permitindo decisões mais informadas e estratégias mais eficazes.",
      image: "/images/rh.jpeg",
      category: "Business Intelligence",
      technologies: ["Excel", "Power BI", "Power Query"],
       featured: true,
      liveDemoUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzI2OTg2YjYtYTc0Ny00ZTY2LWFhNTItMjcwYTdmMmZjZjFmIiwidCI6ImUwYzI1ZTgyLTY4N2EtNDc2Ni05ZGYxLTA0ZjljZWI2ZTE0OSJ9"
    },
     {
      title: "Análise de Desempenho de Vendas para uma Distribuidora de Alimentos e Bebidas",
      description: "Desenvolvi uma solução de análise de desempenho de vendedores e faturamento, automatizando o processo de atualização de relatórios e aprimorando a eficiência na tomada de decisão. Esse projeto oferece uma visão clara e assertiva, reduzindo tarefas operacionais e focando em dados que realmente agregam valor",
      image: "/images/img02.jpg",
      category: "Business Intelligence",
      technologies: ["Excel", "Power BI", "Power Query"],
      liveDemoUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjA0NDllZDEtYjliMi00ZTkzLThlNDAtMWU4Mzk5NzU0NGM5IiwidCI6ImUwYzI1ZTgyLTY4N2EtNDc2Ni05ZGYxLTA0ZjljZWI2ZTE0OSJ9&pageName=ReportSectionf952ca90ab5bea261dec",
      githubUrl:"https://github.com/renanlima2023"
    },
    {
      title: "Dashboard de Análise Financeira",
      description: "Neste projeto, desenvolvi um dashboard de análise financeira que integra dados de balanço patrimonial e demonstração de resultados (DRE). O objetivo principal é fornecer uma visão abrangente e clara da saúde financeira da empresa, permitindo uma análise detalhada das receitas, despesas e saldo de contas ao longo do tempo.",
      image: "/images/finance.jpg",
      category: "Financeira",
      technologies: ["Excel", "Power BI", "Power Query"],
      liveDemoUrl: "https://app.powerbi.com/view?r=eyJrIjoiZWNhMzVjNTEtYjY0NC00M2Y4LTlkNzUtY2YzYWRiN2YxMzIyIiwidCI6ImUwYzI1ZTgyLTY4N2EtNDc2Ni05ZGYxLTA0ZjljZWI2ZTE0OSJ9&pageName=13238d3b8555b509a9e3"
    },
    {
      title: "Estimativa de Faturamento para o Compartilhamento de Bicicletas",
      description: "Neste projeto, busquei avaliar o potencial de investimento em um negócio de compartilhamento de bicicletas no Brasil. Através da análise de dados, utilizei Google Sheets para organizar e transformar as informações e Looker Studio para criar visualizações interativas e detalhadas.",
      image: "/images/bike.jpg",
      category: "Análise Estatística",
      technologies: ["Google Sheets", "Looker Studio"],
      liveDemoUrl: "https://lookerstudio.google.com/s/gQD5JVt7HHE"
    },
    {
      title: "Marketplace de Restaurantes",
      description: "Neste projeto, busquei avaliar e analisar o desempenho de um marketplace de restaurantes internacional, o Elegant Restaurant. Utilizando dados do Zomato.csv (disponível no Kaggle), meu objetivo foi identificar oportunidades estratégicas e avaliar o potencial de crescimento da empresa em diferentes regiões.",
      image: "/images/restaurante.png",
      category: "Business Intelligence",
      technologies: ["Python","VS Code","Streamlit"],
      liveDemoUrl: "https://projetozomato-5muoknzquws5w7dcoxkfw6.streamlit.app/",
      githubUrl:"https://github.com/renanlima2023/projetozomato"

    },
    {
      title: "Análise de Chamados de Suporte - LK Consulting",
      description: "Neste projeto, desenvolvi um dashboard no Power BI para analisar o desempenho do atendimento de chamados de suporte da LK Consulting. O objetivo foi monitorar métricas-chave como o volume de chamados abertos e fechados, o percentual de SLA atendido e os principais motivos dos chamados.",
      image: "/images/suporte.png",
      category: "Business Intelligence",
      technologies: ["Power BI", "Power Query", "Excel", "DAX"],
      liveDemoUrl: "https://app.powerbi.com/view?r=eyJrIjoiOGZhYzJiZmUtNWFlNC00MmZlLTg1NGYtYzBkOWJhMTkyZTIxIiwidCI6ImUwYzI1ZTgyLTY4N2EtNDc2Ni05ZGYxLTA0ZjljZWI2ZTE0OSJ9"
    }
    /*}
    {
      title: "Estimativa de Faturamento para Bicicletas",
      description: "Neste projeto, busquei avaliar o potencial de investimento em um negócio de compartilhamento de bicicletas no Brasil.",
      image: "/lovable-uploads/f8c9e005-d2d4-4cfa-9fa3-279ee81b175c.png",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-learn", "Google Sheets", "Looker Studio"]
    },
    {
      title: "Marketplace de Restaurantes",
      description: "Neste projeto, busquei avaliar e analisar o desempenho de um marketplace de restaurantes internacional, o Elegant Restaurant.",
      image: "/lovable-uploads/775d4189-1dc2-4325-8cc2-adb45defb478.png",
      category: "Análise Estatística",
      technologies: ["Python", "Pandas", "Matplotlib", "Kaggle"]
    },
    {
      title: "Análise de Chamados de Suporte - LK Consulting",
      description: "Neste projeto, desenvolvi um dashboard no Power BI para analisar o desempenho do atendimento de chamados de suporte da LK Consulting.",
      image: "/lovable-uploads/775d4189-1dc2-4325-8cc2-adb45defb478.png",
      category: "Business Intelligence",
      technologies: ["Power BI", "SQL", "Excel", "DAX"]
    }}*/
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === "Todos" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
   const sectionDelay = 0.2;

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-mono tracking-wider">
              PORTFÓLIO
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Meus{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Alguns dos projetos de análise de dados mais impactantes que desenvolvi, 
            demonstrando diferentes habilidades e tecnologias.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-80 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:border-purple-500/50 focus:ring-purple-500/20"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveDemoUrl && (
                    
                  <Button 
                    asChild 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                    >
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </a>
                  </Button>
                  )}
                 {/* Botão "Código" */}
                  {project.githubUrl && ( // Renderiza apenas se githubUrl existe
                    <Button
                      asChild
                      variant="outline"
                      className="px-4 border-white/20 text-white hover:bg-white/10"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action 
        <div className="text-center mt-20">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold">
            Ver Todos os Projetos
          </Button>
        </div>*/}
      </div>
    </section>
  );
};
