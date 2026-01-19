import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-cyan/10 to-brand-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">automate</span> your operations?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Book a discovery call to discuss your automation opportunities and see how we can help your team move faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Calendar className="h-5 w-5" />
                Book a Demo
              </Button>
            </Link>
            <a href="mailto:hello@smartviewafrica.com">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Mail className="h-5 w-5" />
                hello@smartviewafrica.com
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-violet" />
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Response within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
