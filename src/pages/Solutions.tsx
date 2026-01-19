import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  BarChart3,
  MessageSquareText,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingDown,
  Zap,
  FileSearch,
  Bot,
  Database,
} from "lucide-react";
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
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What We <span className="text-gradient">Automate</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Three pillars of automation designed to eliminate repetitive work,
              reduce errors, and unlock your team's potential.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 lg:py-28 ${
            index % 2 === 0 ? "bg-background" : "bg-muted/30"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold mb-2">
                      {solution.title}
                    </h2>
                    <p className="text-muted-foreground">{solution.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {solution.description}
                </p>

                {/* Outcomes */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {solution.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="p-4 rounded-xl bg-card border border-border text-center"
                    >
                      <div className="font-display text-2xl font-bold text-gradient mb-1">
                        {outcome.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {outcome.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automations List with Image */}
              <div
                className={`rounded-2xl border border-border bg-card overflow-hidden ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                {/* Solution Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-lg font-semibold mb-6">
                    Typical Automations
                  </h3>
                  <ul className="space-y-4">
                    {solution.automations.map((automation) => (
                      <li
                        key={automation}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{automation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Request an Automation Audit
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us analyze your workflows and identify the highest-impact
              automation opportunities for your organization.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Request an Audit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
