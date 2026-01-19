import { Link } from "react-router-dom";
import { ArrowRight, Clock, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";

const caseStudies = [
  {
    title: "Automated Weekly KPI Reporting",
    category: "Data Analytics",
    description: "Transformed manual reporting into automated dashboards with real-time alerts.",
    metrics: ["12 hours saved weekly", "99.9% accuracy", "Same-day insights"],
    icon: TrendingUp,
    slug: "kpi-reporting",
  },
  {
    title: "Client Intake & Referral Workflow",
    category: "Workflow Automation",
    description: "Streamlined client onboarding from inquiry to service delivery.",
    metrics: ["80% faster intake", "Zero manual data entry", "Full audit trail"],
    icon: FileText,
    slug: "intake-workflow",
  },
  {
    title: "Knowledge Assistant for SOPs",
    category: "AI Assistants",
    description: "AI-powered assistant for instant policy and procedure lookups.",
    metrics: ["5x faster answers", "90% query resolution", "24/7 availability"],
    icon: Clock,
    slug: "knowledge-assistant",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Case <span className="text-gradient">Studies</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Real automation projects delivering measurable outcomes for organizations.
              </p>
            </div>
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Case Study Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {caseStudies.map((study, index) => (
            <motion.div key={study.slug} variants={staggerItem as any}>
              <Link
                to={`/case-studies#${study.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Top Bar */}
                  <motion.div 
                    className="h-1 bg-gradient-brand"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />

                  <div className="p-6 lg:p-8">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      <study.icon className="h-3 w-3" />
                      {study.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2">
                      {study.metrics.map((metric, i) => (
                        <motion.div
                          key={metric}
                          className="flex items-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                          <span className="text-foreground">{metric}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <motion.div 
                      className="mt-6 flex items-center gap-2 text-sm font-medium text-primary"
                      initial={{ opacity: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Read full case study
                      </span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
