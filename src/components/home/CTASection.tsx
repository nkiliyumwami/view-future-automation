import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollReveal, GlowPulse } from "@/components/ui/scroll-animations";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <GlowPulse className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-cyan/10 to-brand-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">automate</span> your operations?
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Book a discovery call to discuss your automation opportunities and see how we can help your team move faster.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <Calendar className="h-5 w-5" />
                    Book a Demo
                  </Button>
                </motion.div>
              </Link>
              <a href="mailto:hello@smartviewafrica.com">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    <Mail className="h-5 w-5" />
                    hello@smartviewafrica.com
                  </Button>
                </motion.div>
              </a>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-brand-cyan"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Free consultation
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-brand-violet"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                No commitment required
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                Response within 24 hours
              </motion.span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
