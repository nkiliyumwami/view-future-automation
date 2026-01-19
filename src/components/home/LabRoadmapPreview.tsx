import { Link } from "react-router-dom";
import { Cpu, Eye, Bot, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const phases = [
  {
    icon: Cpu,
    title: "AI Automation",
    subtitle: "Phase 1 — Now",
    description: "Building robust AI-powered automation for digital workflows across enterprises.",
    status: "active",
    items: ["Workflow orchestration", "Document processing", "Intelligent routing"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    subtitle: "Phase 2 — 6-12 months",
    description: "Expanding into visual intelligence and IoT sensor data integration.",
    status: "upcoming",
    items: ["Quality inspection", "Inventory monitoring", "Safety compliance"],
  },
  {
    icon: Bot,
    title: "Robotics Pilots",
    subtitle: "Phase 3 — 12-24 months",
    description: "Controlled robotics experiments in partnership with industry leaders.",
    status: "future",
    items: ["Warehouse automation", "Agricultural robotics", "Industrial cobots"],
  },
];

export function LabRoadmapPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-sm font-medium mb-4">
              <Cpu className="h-4 w-4" />
              R&D Lab
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Building the <span className="text-gradient-reverse">Future</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Our disciplined roadmap from digital automation to real-world robotics.
            </p>
          </div>
          <Link to="/lab">
            <Button variant="secondary" size="lg">
              Explore Lab
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className={`relative p-6 lg:p-8 rounded-2xl border ${
                phase.status === "active"
                  ? "border-primary bg-card shadow-glow-cyan"
                  : "border-border bg-card/50"
              } transition-all duration-300`}
            >
              {/* Status Indicator */}
              <div className="absolute -top-3 right-6">
                {phase.status === "active" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    <Clock className="h-3 w-3" />
                    Upcoming
                  </span>
                )}
              </div>

              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4 mt-2">
                <div className={`p-3 rounded-xl ${
                  phase.status === "active" 
                    ? "bg-primary/20 border border-primary/30" 
                    : "bg-muted border border-border"
                }`}>
                  <phase.icon className={`h-6 w-6 ${
                    phase.status === "active" ? "text-primary" : "text-muted-foreground"
                  }`} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {phase.description}
              </p>

              {/* Items */}
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`h-4 w-4 ${
                      phase.status === "active" ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
