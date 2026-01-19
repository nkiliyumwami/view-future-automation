import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Cpu, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, FloatingElement, GlowPulse, Parallax } from "@/components/ui/scroll-animations";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const stats = [
  { value: "500+", label: "Hours Saved Weekly", suffix: "" },
  { value: "40+", label: "Automations Deployed", suffix: "" },
  { value: "98%", label: "Client Retention", suffix: "" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="AI automation visualization" 
          className="w-full h-full object-cover opacity-40 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-mesh" />
      </div>
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlowPulse className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-cyan/15 rounded-full blur-[120px]" />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-violet/15 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 right-[20%] w-2 h-2 rounded-full bg-brand-cyan"
          animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-[15%] w-3 h-3 rounded-full bg-brand-violet"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium Badge */}
          <ScrollReveal delay={0}>
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary text-sm font-medium mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Automation & Applied AI Studio</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </motion.div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
              We automate{" "}
              <br className="hidden sm:block" />
              repetitive work with{" "}
              <span className="text-gradient-animated">applied AI</span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.2}>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              So teams move faster today, and scale into real-world automation tomorrow.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group text-base px-8">
                  <span>Book a Demo</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group text-base px-8">
                  <Play className="h-5 w-5" />
                  <span>See Case Studies</span>
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats Row */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20 lg:mt-24">
              <div className="inline-flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 py-8 px-12 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-xl">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="stat-number text-4xl sm:text-5xl lg:text-6xl mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating Elements */}
        <FloatingElement className="absolute top-32 left-10 hidden lg:block" duration={5}>
          <Parallax speed={0.3}>
            <motion.div 
              className="p-4 rounded-2xl glass-card shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Cpu className="h-7 w-7 text-brand-cyan" />
            </motion.div>
          </Parallax>
        </FloatingElement>
        
        <FloatingElement className="absolute top-48 right-12 hidden lg:block" duration={6} distance={20}>
          <Parallax speed={0.4} direction="down">
            <motion.div 
              className="p-4 rounded-2xl glass-card shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Bot className="h-7 w-7 text-brand-violet" />
            </motion.div>
          </Parallax>
        </FloatingElement>

        <FloatingElement className="absolute bottom-40 left-[15%] hidden lg:block" duration={7} distance={15}>
          <Parallax speed={0.2}>
            <motion.div 
              className="p-3 rounded-xl glass-card shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <Zap className="h-5 w-5 text-primary" />
            </motion.div>
          </Parallax>
        </FloatingElement>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}