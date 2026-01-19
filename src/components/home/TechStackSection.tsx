import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";

const tools = [
  { name: "OpenAI", category: "AI" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "n8n", category: "Automation" },
  { name: "Make", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "Airtable", category: "Data" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Python", category: "Language" },
  { name: "LangChain", category: "AI" },
  { name: "Supabase", category: "Backend" },
];

export function TechStackSection() {
  return (
    <section className="py-16 lg:py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Tools We Use
          </p>
        </ScrollReveal>

        {/* Tools Strip */}
        <StaggerContainer className="flex flex-wrap justify-center gap-4 lg:gap-6" staggerDelay={0.05}>
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={staggerItem as any}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                transition: { duration: 0.2 } 
              }}
              className="group relative px-5 py-3 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
              
              {/* Tooltip */}
              <motion.div 
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-foreground text-background text-xs pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {tool.category}
              </motion.div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Disclaimer */}
        <ScrollReveal delay={0.3} className="text-center text-xs text-muted-foreground mt-8">
          <p>We partner with leading technology providers to deliver best-in-class solutions.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
