import { Search, Wrench, Rocket, RefreshCw, ArrowRight } from "lucide-react";

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven process that delivers measurable results in weeks, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.number}
                  </div>

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
                </div>

                {/* Arrow (between cards on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
