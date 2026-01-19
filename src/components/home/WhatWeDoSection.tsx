import { Workflow, BarChart3, MessageSquareText, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";

const pillars = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline operations and compliance with intelligent automation that connects your tools and eliminates manual handoffs.",
    gradient: "from-brand-cyan/20 to-brand-cyan/5",
    iconBg: "bg-brand-cyan/10",
    iconColor: "text-brand-cyan",
    href: "/solutions#workflow",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with automated pipelines, dashboards, and real-time alerts.",
    gradient: "from-brand-violet/20 to-brand-violet/5",
    iconBg: "bg-brand-violet/10",
    iconColor: "text-brand-violet",
    href: "/solutions#data",
  },
  {
    icon: MessageSquareText,
    title: "AI Assistants",
    description: "Deploy intelligent assistants that understand your documents, answer questions, and augment your team's capabilities.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    href: "/solutions#ai",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge-premium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            What We Do
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            What We <span className="text-gradient">Automate</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three pillars of automation that transform how organizations operate.
          </p>
        </ScrollReveal>

        {/* Pillars Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} variants={staggerItem as any}>
              <Link
                to={pillar.href}
                className="group relative block h-full"
              >
                <motion.div
                  className="card-premium h-full p-8 lg:p-10"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex p-4 rounded-2xl ${pillar.iconBg} mb-8`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      {pillar.title}
                      <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}