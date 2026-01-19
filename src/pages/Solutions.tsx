import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  BarChart3,
  MessageSquareText,
  CheckCircle,
  ArrowRight,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";
import aiWorkflow from "@/assets/ai-workflow.jpg";
import aiAnalytics from "@/assets/ai-analytics.jpg";
import aiAssistant from "@/assets/ai-assistant.jpg";

const solutions = [
  {
    id: "workflow",
    icon: Workflow,
    image: aiWorkflow,
    title: "Workflow Automation",
    subtitle: "Operations & Compliance",
    description:
      "Eliminate manual handoffs and human error in your critical business processes. We connect your tools, automate approvals, and ensure compliance at every step.",
    automations: [
      "Document routing and approval workflows",
      "Employee onboarding automation",
      "Contract lifecycle management",
      "Compliance reporting and audit trails",
      "Invoice processing and AP automation",
      "Service request ticketing systems",
    ],
    outcomes: [
      { metric: "80%", label: "Reduction in processing time" },
      { metric: "Zero", label: "Manual data entry errors" },
      { metric: "100%", label: "Audit trail coverage" },
    ],
    gradient: "from-brand-cyan/20 to-brand-cyan/5",
  },
  {
    id: "data",
    icon: BarChart3,
    image: aiAnalytics,
    title: "Data Automation & Analytics",
    subtitle: "Insights & Intelligence",
    description:
      "Transform scattered data into unified insights. We build automated pipelines that clean, process, and visualize your data in real-time dashboards with intelligent alerts.",
    automations: [
      "Automated data extraction and cleansing",
      "Multi-source data integration pipelines",
      "Real-time KPI dashboards",
      "Anomaly detection and smart alerts",
      "Scheduled report generation",
      "Data quality monitoring",
    ],
    outcomes: [
      { metric: "15hrs", label: "Saved per week on reporting" },
      { metric: "Real-time", label: "Data availability" },
      { metric: "99.9%", label: "Data accuracy" },
    ],
    gradient: "from-brand-violet/20 to-brand-violet/5",
  },
  {
    id: "ai",
    icon: MessageSquareText,
    image: aiAssistant,
    title: "Applied AI Assistants",
    subtitle: "Intelligent Augmentation",
    description:
      "Deploy AI assistants that understand your documents, answer complex questions, and augment your team's capabilities without replacing human judgment.",
    automations: [
      "Document Q&A and summarization",
      "Policy and SOP knowledge bases",
      "Email triage and response drafting",
      "Meeting transcription and action items",
      "Customer inquiry classification",
      "Research and analysis assistance",
    ],
    outcomes: [
      { metric: "5x", label: "Faster information retrieval" },
      { metric: "90%", label: "Query resolution rate" },
      { metric: "24/7", label: "Availability" },
    ],
    gradient: "from-primary/20 to-primary/5",
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <div className="badge-premium mb-8">
              <Zap className="h-4 w-4" />
              <span>Solutions</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              What We <span className="text-gradient">Automate</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Three pillars of automation designed to eliminate repetitive work, reduce errors, and unlock your team's potential.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 lg:py-28 relative ${
            index % 2 === 0 ? "bg-background" : "bg-muted/30"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Content */}
              <ScrollReveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                {/* Icon & Title */}
                <div className="flex items-start gap-5 mb-8">
                  <motion.div 
                    className={`p-5 rounded-2xl bg-gradient-to-br ${solution.gradient} border border-border/50`}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <solution.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold mb-2">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">{solution.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {solution.description}
                </p>

                {/* Outcomes */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {solution.outcomes.map((outcome) => (
                    <motion.div
                      key={outcome.label}
                      className="card-premium p-5 text-center"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="stat-number text-2xl sm:text-3xl mb-2">
                        {outcome.metric}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {outcome.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Automations List with Image */}
              <ScrollReveal className={index % 2 === 1 ? "lg:order-1" : ""} delay={0.2}>
                <motion.div
                  className="card-premium overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Solution Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-gradient-brand rounded-full" />
                      Typical Automations
                    </h3>
                    <ul className="space-y-4">
                      {solution.automations.map((automation) => (
                        <li
                          key={automation}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-base">{automation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <div className="badge-premium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Get Started
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Request an Automation <span className="text-gradient">Audit</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let us analyze your workflows and identify the highest-impact automation opportunities for your organization.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                <span>Request an Audit</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;