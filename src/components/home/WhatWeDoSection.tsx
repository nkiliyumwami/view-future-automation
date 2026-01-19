import { Workflow, BarChart3, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";

const pillars = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline operations and compliance with intelligent automation that connects your tools and eliminates manual handoffs.",
    color: "text-brand-cyan",
    bgColor: "bg-brand-cyan/10",
    borderColor: "border-brand-cyan/20",
    href: "/solutions#workflow",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with automated pipelines, dashboards, and real-time alerts.",
    color: "text-brand-violet",
    bgColor: "bg-brand-violet/10",
    borderColor: "border-brand-violet/20",
    href: "/solutions#data",
  },
  {
    icon: MessageSquareText,
    title: "AI Assistants",
    description: "Deploy intelligent assistants that understand your documents, answer questions, and augment your team's capabilities.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    href: "/solutions#ai",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Automate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three pillars of automation that transform how organizations operate.
          </p>
        </ScrollReveal>

        {/* Pillars Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} variants={staggerItem as any}>
              <Link
                to={pillar.href}
                className="group relative block p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border mb-6`}>
                    <pillar.icon className={`h-6 w-6 ${pillar.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Hover Glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/5 to-brand-violet/5" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
