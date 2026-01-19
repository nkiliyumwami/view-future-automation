import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  FileText,
  Brain,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Wrench,
} from "lucide-react";

const caseStudies = [
  {
    id: "kpi-reporting",
    icon: TrendingUp,
    title: "Automated Weekly KPI Reporting",
    category: "Data Analytics",
    industry: "Financial Services",
    problem:
      "A regional financial services firm spent 12+ hours weekly manually compiling KPI reports from 6 different systems. Reports were often delayed, contained errors, and leadership lacked timely insights for decision-making.",
    approach:
      "We designed an automated data pipeline that extracts data from all source systems nightly, cleanses and transforms the data, and populates a real-time dashboard. Smart alerts notify stakeholders of anomalies and threshold breaches.",
    tools: ["n8n", "PostgreSQL", "Metabase", "Slack", "Google Sheets API"],
    outcomes: [
      { metric: "12 hours", label: "Saved weekly" },
      { metric: "99.9%", label: "Data accuracy" },
      { metric: "Same-day", label: "Insights delivery" },
      { metric: "6 systems", label: "Unified" },
    ],
    timeline: "4 weeks from discovery to deployment",
  },
  {
    id: "intake-workflow",
    icon: FileText,
    title: "Client Intake & Referral Workflow",
    category: "Workflow Automation",
    industry: "Healthcare Services",
    problem:
      "A healthcare organization processed 200+ client referrals monthly using email, paper forms, and spreadsheets. Information was frequently lost, intake took 5+ days, and there was no visibility into the pipeline.",
    approach:
      "We built an end-to-end digital intake system with smart forms, automated routing based on service type, approval workflows, and a centralized tracking dashboard. All stakeholders now have real-time visibility.",
    tools: ["Make", "Airtable", "Typeform", "Gmail API", "Twilio"],
    outcomes: [
      { metric: "80%", label: "Faster intake" },
      { metric: "Zero", label: "Lost referrals" },
      { metric: "100%", label: "Audit trail" },
      { metric: "Real-time", label: "Pipeline visibility" },
    ],
    timeline: "6 weeks from discovery to deployment",
  },
  {
    id: "knowledge-assistant",
    icon: Brain,
    title: "Knowledge Assistant for Policies & SOPs",
    category: "AI Assistants",
    industry: "Manufacturing",
    problem:
      "A manufacturing company had 500+ policy documents spread across SharePoint, email, and local drives. Employees spent hours searching for information, and compliance queries often went unanswered or were answered inconsistently.",
    approach:
      "We deployed an AI-powered knowledge assistant that indexes all policy documents, understands natural language questions, and provides instant, accurate answers with source citations. The system learns from user feedback to improve over time.",
    tools: ["OpenAI", "LangChain", "Pinecone", "Microsoft Graph API", "Slack"],
    outcomes: [
      { metric: "5x", label: "Faster answers" },
      { metric: "90%", label: "Query resolution" },
      { metric: "24/7", label: "Availability" },
      { metric: "500+", label: "Documents indexed" },
    ],
    timeline: "5 weeks from discovery to deployment",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              Case Studies
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real Results, <span className="text-gradient">Proven Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore how we've helped organizations automate their operations
              and achieve measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section
          key={study.id}
          id={study.id}
          className={`py-20 lg:py-28 ${
            index % 2 === 0 ? "bg-background" : "bg-muted/30"
          }`}
        >
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex flex-wrap items-start gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <study.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-medium">
                    {study.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {study.industry}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {study.title}
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Problem */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-destructive" />
                    The Problem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Approach */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Our Approach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.approach}
                  </p>
                </div>

                {/* Tools */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    Tools Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg border border-border bg-muted/50 text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcomes Sidebar */}
              <div className="space-y-6">
                {/* Outcomes */}
                <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                  <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Outcomes
                  </h3>
                  <div className="space-y-4">
                    {study.outcomes.map((outcome) => (
                      <div key={outcome.label}>
                        <div className="font-display text-2xl font-bold text-gradient">
                          {outcome.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    Timeline
                  </h3>
                  <p className="text-muted-foreground">{study.timeline}</p>
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
              Ready to become our next success story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can automate your workflows and deliver
              measurable results for your organization.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
