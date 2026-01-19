import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Eye,
  Bot,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Lightbulb,
  FlaskConical,
} from "lucide-react";

const phases = [
  {
    icon: Cpu,
    title: "AI Automation for Digital Workflows",
    phase: "Phase 1",
    timeline: "Now",
    status: "active",
    description:
      "Building robust, production-grade AI-powered automation systems for enterprise digital workflows. This is our foundation—reliable, scalable automation that delivers measurable ROI today.",
    capabilities: [
      "Intelligent document processing and extraction",
      "Natural language understanding for unstructured data",
      "Automated decision support systems",
      "Multi-system workflow orchestration",
      "AI-powered quality assurance",
    ],
    deliverables: [
      "Production automation systems",
      "Integration with existing enterprise tools",
      "Monitoring and optimization dashboards",
      "Team training and documentation",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision & Sensor Integration",
    phase: "Phase 2",
    timeline: "6-12 months",
    status: "upcoming",
    description:
      "Expanding into visual intelligence and IoT sensor data integration. We're developing capabilities to process real-world visual and sensor data for automated monitoring, quality control, and predictive maintenance.",
    capabilities: [
      "Visual quality inspection systems",
      "Inventory and asset monitoring",
      "Safety and compliance visual audits",
      "Environmental sensor data processing",
      "Predictive maintenance from sensor patterns",
    ],
    deliverables: [
      "Pilot projects with selected partners",
      "Computer vision model development",
      "Sensor integration frameworks",
      "Real-time alerting systems",
    ],
  },
  {
    icon: Bot,
    title: "Robotics Pilots in Controlled Environments",
    phase: "Phase 3",
    timeline: "12-24 months",
    status: "future",
    description:
      "Careful exploration of physical automation through robotics pilots in partnership with industry leaders. We're approaching this with discipline—controlled environments, rigorous testing, and a focus on safety.",
    capabilities: [
      "Warehouse and logistics automation",
      "Agricultural robotics applications",
      "Industrial collaborative robots (cobots)",
      "Autonomous inspection systems",
      "Human-robot collaboration workflows",
    ],
    deliverables: [
      "Partnership development with hardware providers",
      "Controlled pilot implementations",
      "Safety and compliance frameworks",
      "Scalability assessments",
    ],
  },
];

const Lab = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-violet/30 bg-brand-violet/5 text-brand-violet text-sm font-medium mb-6">
              <FlaskConical className="h-4 w-4" />
              R&D Lab
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Building the <span className="text-gradient-reverse">Future</span> of Automation
            </h1>
            <p className="text-lg text-muted-foreground">
              A disciplined roadmap from digital AI automation to real-world
              robotics, with responsibility and safety at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Phases */}
      {phases.map((phase, index) => (
        <section
          key={phase.phase}
          className={`py-20 lg:py-28 ${
            index % 2 === 0 ? "bg-background" : "bg-muted/30"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Header & Description */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-4 rounded-2xl ${
                      phase.status === "active"
                        ? "bg-primary/20 border border-primary/30"
                        : "bg-muted border border-border"
                    }`}
                  >
                    <phase.icon
                      className={`h-8 w-8 ${
                        phase.status === "active"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {phase.phase}
                      </span>
                      {phase.status === "active" ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          <Clock className="h-3 w-3" />
                          {phase.timeline}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold">
                      {phase.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {phase.description}
                </p>

                {/* Capabilities */}
                <div className="p-6 rounded-2xl border border-border bg-card mb-6">
                  <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Key Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {phase.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables */}
              <div
                className={`p-6 lg:p-8 rounded-2xl border ${
                  phase.status === "active"
                    ? "border-primary/20 bg-primary/5"
                    : "border-border bg-card"
                } ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <h3 className="font-display text-lg font-semibold mb-6">
                  Deliverables
                </h3>
                <ul className="space-y-4">
                  {phase.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          phase.status === "active"
                            ? "bg-primary"
                            : "bg-muted-foreground"
                        }`}
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Responsible AI Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 lg:p-12 rounded-2xl border border-border bg-card text-center">
              <div className="inline-flex p-4 rounded-2xl bg-brand-violet/10 border border-brand-violet/20 mb-6">
                <Shield className="h-8 w-8 text-brand-violet" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Responsible AI & Safety
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We approach automation with discipline and responsibility. Every
                system we build prioritizes human oversight, data privacy, and
                operational safety. As we move toward physical automation, we
                commit to rigorous testing, controlled deployments, and
                transparent communication about capabilities and limitations.
              </p>
              <p className="text-muted-foreground">
                Our goal is not to replace human judgment, but to augment human
                capabilities—freeing teams to focus on work that matters while
                automation handles the repetitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Partner with our Lab
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in piloting advanced automation capabilities? We're
              looking for forward-thinking organizations to collaborate on our
              Phase 2 and Phase 3 initiatives.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Explore Partnership
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lab;
