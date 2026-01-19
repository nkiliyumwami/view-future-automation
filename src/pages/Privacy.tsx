import { Layout } from "@/components/layout/Layout";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Legal
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Privacy Policy
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
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartViewAfrica ("we", "our", or "us") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you
                  visit our website smartviewafrica.com and use our services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name and contact information</li>
                  <li>Organization details</li>
                  <li>Messages and communications</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Analyze website usage and optimize user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact
                  us at{" "}
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

export default Privacy;
