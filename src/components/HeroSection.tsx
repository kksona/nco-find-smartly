import { Brain, Search, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="relative animate-float">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-search-pulse">
            <Search className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
        NCO Smart Search
      </h1>
      
      <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
        Find the perfect occupation codes from NCO-2015 classification using 
        <span className="text-primary font-semibold"> AI-powered semantic search</span>.
        Simply describe a job role and get instant, intelligent matches.
      </p>
      
      <div className="flex justify-center gap-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground transition-transform duration-200 hover:scale-105">
          <Zap className="w-4 h-4 text-primary" />
          <span>Instant Results</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground transition-transform duration-200 hover:scale-105">
          <Brain className="w-4 h-4 text-primary" />
          <span>AI-Powered</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground transition-transform duration-200 hover:scale-105">
          <Search className="w-4 h-4 text-primary" />
          <span>Semantic Matching</span>
        </div>
      </div>
    </div>
  );
};