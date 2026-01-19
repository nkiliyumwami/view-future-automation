import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Target,
  Eye,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity",
    description:
      "We communicate clearly, set realistic expectations, and deliver what we promise. No jargon, no hype—just honest assessments and actionable solutions.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our automations are built to work consistently, with monitoring, error handling, and documentation. We stand behind everything we deploy.",
  },
  {
    icon: Eye,
    title: "Measurable Outcomes",
    description:
      "Every project starts with defined success metrics. We track hours saved, error rates reduced, and ROI delivered—because automation should pay for itself.",
  },
];

const principles = [
  "Start with the problem, not the technology",
  "Automate the repetitive to unlock the creative",
  "Build for the long term, iterate fast",
  "Human oversight is always part of the system",
  "Simple solutions beat complex ones",
  "Documentation is part of the deliverable",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              About Us
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Bridging <span className="text-gradient">Practical</span> with{" "}
              <span className="text-gradient-reverse">Future-Forward</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're an Automation & Applied AI Studio based in Africa, building
              solutions that work today while pioneering what's possible tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                SmartViewAfrica exists to help organizations eliminate
                repetitive work through intelligent automation. We believe that
                when teams are freed from manual, error-prone tasks, they can
                focus on what truly matters: innovation, customer relationships,
                and strategic growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're building a bridge between the practical automation that
                delivers ROI today and the advanced AI and robotics capabilities
                that will define tomorrow's enterprises.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  Why SmartViewAfrica?
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Africa's enterprises are leapfrogging legacy systems, adopting
                cloud-first architectures, and embracing automation at
                unprecedented rates. We're positioned at this intersection—
                combining global best practices with deep understanding of local
                business contexts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our name reflects our vision: providing smart perspectives on
                business operations, powered by AI, rooted in Africa, serving
                the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Operating Principles
                </h3>
                <ul className="space-y-4">
                  {principles.map((principle) => (
                    <li
                      key={principle}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We approach every engagement with curiosity and discipline. Our
                process starts with deep discovery—understanding not just what
                you want to automate, but why it matters to your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We build iteratively, deploying working systems quickly and
                refining based on real-world feedback. Every automation comes
                with monitoring, documentation, and training—because a system
                your team can't use isn't truly automated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
              Leadership
            </h2>
            <div className="p-8 rounded-2xl border border-border bg-card">
              <div className="w-20 h-20 rounded-full bg-gradient-brand mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  SV
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                Founder & Lead
              </h3>
              <p className="text-muted-foreground mb-4">SmartViewAfrica</p>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                With a background in enterprise software and applied AI, our
                founder brings together technical expertise with practical
                business acumen. The vision for SmartViewAfrica was born from
                seeing organizations struggle with repetitive work that
                technology could easily handle—and the belief that Africa's
                enterprises deserve world-class automation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to explore how automation can transform your operations?
              We'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
