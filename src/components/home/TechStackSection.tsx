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
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Tools We Use
          </p>
        </div>

        {/* Tools Strip */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative px-5 py-3 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {tool.category}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          We partner with leading technology providers to deliver best-in-class solutions.
        </p>
      </div>
    </section>
  );
}
