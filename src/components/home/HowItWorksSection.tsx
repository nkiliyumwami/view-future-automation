import { Search, Wrench, Rocket, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We audit your workflows, identify bottlenecks, and map automation opportunities with clear ROI projections.",
    number: "01",
  },
  {
    icon: Wrench,
    title: "Build",
    description: "Our team designs and develops custom automations using best-in-class tools, tailored to your exact needs.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "We launch your automations with comprehensive testing, documentation, and team training.",
    number: "03",
  },
  {
    icon: RefreshCw,
    title: "Improve",
    description: "Continuous monitoring and optimization ensures your automations evolve with your business.",
    number: "04",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven process that delivers measurable results in weeks, not months.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={staggerItem as any}
                className="relative group"
              >
                {/* Card */}
                <motion.div 
                  className="relative p-6 rounded-2xl bg-card border border-border transition-all duration-300"
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 } 
                  }}
                >
                  {/* Number */}
                  <motion.div 
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-bold text-primary-foreground"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow (between cards on desktop) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
