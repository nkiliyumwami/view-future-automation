import { Layout } from "@/components/layout/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              Legal
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the SmartViewAfrica website and
                  services, you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartViewAfrica provides automation and applied AI consulting
                  services. The specific scope, deliverables, and terms of any
                  engagement will be defined in a separate service agreement.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos,
                  and software, is the property of SmartViewAfrica or its content
                  suppliers and is protected by intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartViewAfrica shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  resulting from your access to or use of our services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes
                  will be effective immediately upon posting to the website. Your
                  continued use of the services constitutes acceptance of the
                  modified terms.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us
                  at{" "}
                  <a
                    href="mailto:hello@smartviewafrica.com"
                    className="text-primary hover:underline"
                  >
                    hello@smartviewafrica.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
