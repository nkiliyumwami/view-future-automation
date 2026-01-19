import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Cpu, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Automation & Applied AI Studio</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            We automate repetitive work with{" "}
            <span className="text-gradient">applied AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            So teams move faster today, and scale into real-world automation tomorrow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Play className="h-5 w-5" />
                See Case Studies
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">40+</div>
              <div className="text-sm text-muted-foreground">Automations Deployed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 hidden lg:block animate-float">
          <div className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-card">
            <Cpu className="h-6 w-6 text-brand-cyan" />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
          <div className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-card">
            <Bot className="h-6 w-6 text-brand-violet" />
          </div>
        </div>
      </div>
    </section>
  );
}
