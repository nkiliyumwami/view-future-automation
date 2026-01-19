import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { LabRoadmapPreview } from "@/components/home/LabRoadmapPreview";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <TrustedBySection />
      <HowItWorksSection />
      <CaseStudiesPreview />
      <LabRoadmapPreview />
      <TechStackSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
