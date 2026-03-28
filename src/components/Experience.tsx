import { Calendar, Diamond } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      period: "2025 - Atualmente",
      company: "Analista de BI e Dados",
      role: "CN Data Consultoria",
      description: "Atuo na linha de frente da transformação de dados em inteligência estratégica. Minha missão é converter grandes volumes de informação em decisões de alto impacto, utilizando Power BI, SQL e Python. Com foco em automação e processos de ETL, reduzo em até 30% o tempo gasto em análises manuais, elevando a precisão dos KPIs em 40% através de modelagem robusta e Data Storytelling.",
      side: "right"
    },
    {
      period: "2017 - 2019",
      company: "Supervisor de infraestrutura",
      role: "Universidade Federal de Alagoas",
      description: "Como Supervisor de Infraestrutura, fui responsável por garantir a eficiência operacional e a continuidade dos serviços de TI, liderando equipes e otimizando processos. Minha experiência incluiu o gerenciamento de demandas, coordenação de equipes e implementação de melhorias estratégicas, resultando em maior produtividade e redução de falhas. Essa função me proporcionou uma visão abrangente da infraestrutura de TI, fortalecendo minha capacidade de análise e resolução de problemas, habilidades essenciais para minha transição para a área de dados e BI.",

      side: "left"
    },
    {
      period: "2009 - 2017",
      company: "Analista de Suporte Técnico",
      role: "Universidade Federal de Alagoas",
      description: "Atuei na manutenção e suporte técnico, garantindo a segurança e a eficiência operacional dos sistemas da instituição. Trabalhei na configuração e atualização de softwares essenciais, incluindo soluções de segurança, para proteger os sistemas contra vulnerabilidades. Além disso, ofereci suporte remoto e presencial, otimizando a experiência dos usuários e reduzindo o tempo de inatividade.",
      side: "left"
    },
{
  period: "2007 - 2009",
  company: "Estagiário de Analista de Suporte Técnico",
  role: "Unsina Coruripe - Alagoas",
  description: "Prestei suporte técnico de 1º e 2º nível para usuários internos, solucionando demandas de hardware, software, rede e sistemas corporativos. Realizava manutenção preventiva e corretiva em estações de trabalho e equipamentos de TI. Fui responsável pela instalação e configuração de sistemas operacionais, pacote Office, ferramentas corporativas e pelo monitoramento de servidores e rotinas de backup, garantindo a disponibilidade e integridade das informações. Participei da implantação do sistema de GED (Gestão Eletrônica de Documentos), apoiando a configuração da ferramenta, testes, treinamento de usuários e migração de documentos físicos para o ambiente digital. Atuei também na documentação de procedimentos técnicos e no controle de chamados via sistema de help desk. Prestei suporte técnico de 1º e 2º nível (hardware, software, rede) e realizei manutenção preventiva e corretiva, otimizando a eficiência dos sistemas. Participei da implantação de um sistema de GED, aprimorando habilidades em gestão de informações e resolução de problemas complexos, fundamentais para a análise de dados.",
  side: "right"
}
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-mono tracking-wider">
              EXPERIÊNCIA
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Minha{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Experiência
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Minha trajetória profissional, trabalhando em projetos desafiadores e impactantes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>

          {/* Experience items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${exp.side === 'left' ? 'flex-row-reverse' : ''}`}>
                {/* Content Card */}
                <div className="w-5/12">
                  <Card className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Diamond className="w-5 h-5 text-purple-400" />
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {exp.company}
                        </h3>
                      </div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-4">{exp.role}</h4>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full border-4 border-gray-900 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Period */}
                <div className="w-5/12 flex justify-center">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-6 text-center">
                    <div className="mb-3 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-600/30 rounded-xl">
                      <Calendar className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};