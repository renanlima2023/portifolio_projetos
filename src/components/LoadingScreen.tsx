import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showFallback, setShowFallback] = useState(false);
  const fullText = "Transformando dados...";

  useEffect(() => {
    // Animação de progresso mais realista
    const progressTimer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 100;
        
        // Simulação mais realista: rápido no início, mais lento no final
        const remaining = 100 - oldProgress;
        const increment = remaining > 20 ? Math.random() * 8 + 2 : Math.random() * 2 + 0.5;
        return Math.min(oldProgress + increment, 100);
      });
    }, 150);

    // Efeito de digitação
    let textIndex = 0;
    const typeTimer = setInterval(() => {
      if (textIndex < fullText.length) {
        setTypedText(fullText.slice(0, textIndex + 1));
        textIndex++;
      }
    }, 100);

    // Fallback para conexões lentas (após 5 segundos)
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(typeTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo circular com animação */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full border-2 border-primary/20 flex items-center justify-center bg-card/50 animate-pulse">
        <img src = "/lovable-uploads/python.png" alt="Logo Python" className="w-full h-full object-contain p-2 animate-fade-in" />
        </div>

        {/* Barra de progresso */}
        <div className="w-80 mb-6">
          <Progress value={progress} className="h-2 bg-muted" />
        </div>

        {/* Texto e porcentagem */}
        <div className="flex items-center justify-center gap-4 text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-primary animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <span className="text-sm">|</span>
          <span className="text-sm min-w-[160px] text-left">{typedText}</span>
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-1 h-3 bg-primary rounded-full transition-all duration-300`}
                style={{
                  animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        {/* Pontos indicadores com animação sequencial */}
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i < Math.floor(progress / 12.5)
                  ? "bg-primary scale-125"
                  : "bg-muted scale-100"
              }`}
              style={{
                animation: i < Math.floor(progress / 12.5) ? `pulse 2s ease-in-out ${i * 0.1}s infinite` : 'none'
              }}
            />
          ))}
        </div>

        {/* Fallback para conexões lentas */}
        {showFallback && (
          <div className="text-xs text-muted-foreground animate-fade-in mb-4">
            Ainda transformando... Isso pode levar alguns segundos.
          </div>
        )}

        {/* Loading dots na parte inferior */}
        <div className="flex justify-center gap-1 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              style={{
                animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;