import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Cpu, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, FloatingElement, GlowPulse, Parallax } from "@/components/ui/scroll-animations";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <GlowPulse className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-3xl" />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        
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
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Automation & Applied AI Studio</span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              We automate repetitive work with{" "}
              <span className="text-gradient">applied AI</span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              So teams move faster today, and scale into real-world automation tomorrow.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </ScrollReveal>

          {/* Stats Row */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">40+</div>
                <div className="text-sm text-muted-foreground">Automations Deployed</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating Elements */}
        <FloatingElement className="absolute top-20 left-10 hidden lg:block" duration={5}>
          <Parallax speed={0.3}>
            <div className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-card">
              <Cpu className="h-6 w-6 text-brand-cyan" />
            </div>
          </Parallax>
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 right-16 hidden lg:block" duration={6} distance={20}>
          <Parallax speed={0.4} direction="down">
            <div className="p-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-card">
              <Bot className="h-6 w-6 text-brand-violet" />
            </div>
          </Parallax>
        </FloatingElement>
      </div>
    </section>
  );
}
