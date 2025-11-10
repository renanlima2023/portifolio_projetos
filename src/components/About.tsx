
import { BarChart3, Database, Brain, TrendingUp, Trophy, Clock, Code, PieChart, FileSpreadsheet, Grid3x3, Calculator, LineChart, AreaChart, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiApacheairflow } from 'react-icons/si';

export const About = () => {
  const skills = [
    {
      icon: Database,
      title: "Análise de Dados",
      description: "Especialista em SQL, Python e manipulação de grandes volumes de dados para extrair insights valiosos"
    },
    {
      icon: BarChart3,
      title: "Visualização",
      description: "Criação de dashboards interativos e relatórios visuais usando Power BI, Looker Studio e Tableau e Matplotlib"
    },
    
  ];

  const stats = [
    { icon: Trophy, number: "10+", label: "Projetos de Análise" },
    { icon: Database, number: "100M+", label: "Registros Analisados" },
    { icon: Clock, number: "10+", label: "Anos de Experiência em Tecnologia" },
    { icon: TrendingUp, number: "10+", label: "Insights Estratégicos" }
  ];

  const sectionDelay = 0.2;

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <p
           className="text-xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
           style={{ animationDelay: `${sectionDelay + 0.3}s` }}
         >
            Como Analista de BI Jr, minha missão é transformar dados complexos em insights acionáveis que impulsionam o crescimento e a tomada de decisões estratégicas.
          </p>

          <p
            className="text-xl text-gray-300 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${sectionDelay + 0.6}s` }}
          >
            Com experiência em projetos focados em inteligência de negócios, desenvolvi e aplico habilidades em visualização de dados e processos de ETL. Meu foco é crescer e inovar, buscando continuamente novas tecnologias e metodologias para entregar soluções de alto valor que geram impacto real nas organizações.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                "Visualização de Dados", 
                "Business Intelligence",
                "Processo de ETL",
                "Estatística"
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              {/* Main stat */}
              <div className="text-center mb-8">
                <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-xl text-cyan-400 font-semibold">Anos de Experiência em Tecnologia</div>
              </div>

              {/* Secondary stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-400">Projetos</div>
                </div>
                {/* Add more secondary stats here 
                <div>
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-gray-400">Clientes</div>
                </div>*/}
                <div>
                  <div className="text-3xl font-bold text-white mb-1">8+</div>
                  <div className="text-sm text-gray-400">Ferramentas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">
              Minhas{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Combinação de habilidades técnicas e analíticas que me permitem transformar dados 
              brutos em insights acionáveis e visualizações impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4 rounded-full"></div>
                Níveis de Proficiência
              </h4>
              <div className="space-y-8">
                {[
                  { name: "Python", level: 75, color: "from-blue-500 to-purple-600" },
                  { name: "SQL", level: 75, color: "from-purple-500 to-pink-600" },
                  { name: "Power BI", level: 100, color: "from-blue-500 to-purple-600" },
                  { name: "DAX", level: 80, color: "from-purple-500 to-pink-600" }
                ].map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium text-lg">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-400 mr-4 rounded-full"></div>
                Níveis de Proficiência
              </h4>
              <div className="space-y-8">
                {[
                  { name: "Excel", level: 70, color: "from-cyan-400 to-blue-500" },
                  { name: "Estatística", level: 60, color: "from-purple-500 to-pink-600" },
                  { name: "AWS/Azure", level: 65, color: "from-blue-500 to-purple-600" },
                  {name: "Apache Airflow", level: 60, color: "from-blue-500 to-purple-600" }

                ].map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium text-lg">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Ferramentas & Tecnologias</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Python", icon: Code },
              { name: "SQL", icon: Database },
              { name: "Power BI", icon: BarChart3 },
              { name: "Tableau", icon: PieChart },
              { name: "Excel", icon: FileSpreadsheet },
              //{ name: "R", icon: TrendingUp },
              { name: "Pandas", icon: Grid3x3 },
              { name: "NumPy", icon: Calculator },
              { name: "Matplotlib", icon: LineChart },
              { name: "Seaborn", icon: AreaChart },
              { name: "Scikit-learn", icon: Brain },
              { name: "Apache Airflow", icon: SiApacheairflow },
             // { name: "TensorFlow", icon: Cpu }
            ].map((tech) => (
              <div 
                key={tech.name}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-all duration-300">
                  <tech.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-white font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
