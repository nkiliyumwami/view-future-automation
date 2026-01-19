import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Tag,
  Cpu,
  BarChart3,
  Shield,
  Bot,
  Workflow,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";

const blogPosts = [
  {
    slug: "ai-automation-african-enterprises",
    title: "How AI Automation is Reshaping African Enterprises",
    excerpt:
      "African businesses are adopting automation at unprecedented rates, leapfrogging legacy systems to embrace cloud-first, AI-powered operations. Here's what's driving this transformation.",
    category: "AI Trends",
    readTime: "6 min read",
    date: "January 2025",
    icon: Cpu,
    featured: true,
    gradient: "from-brand-cyan/20 via-brand-cyan/10 to-transparent",
  },
  {
    slug: "compliance-reporting-automation",
    title: "Automating Compliance Reporting: A Practical Guide",
    excerpt:
      "Manual compliance reporting is error-prone and time-consuming. Learn how automation can ensure accuracy, reduce risk, and free your team for higher-value work.",
    category: "Compliance",
    readTime: "8 min read",
    date: "January 2025",
    icon: Shield,
    gradient: "from-brand-violet/20 via-brand-violet/10 to-transparent",
  },
  {
    slug: "kpi-dashboards-real-time",
    title: "Building Real-Time KPI Dashboards That Actually Get Used",
    excerpt:
      "Most dashboards fail because they don't solve real problems. Here's how to design KPI dashboards that deliver actionable insights and drive decision-making.",
    category: "Data Analytics",
    readTime: "5 min read",
    date: "December 2024",
    icon: BarChart3,
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    slug: "ai-assistants-enterprise",
    title: "AI Assistants in the Enterprise: Beyond the Hype",
    excerpt:
      "Separating AI assistant reality from hype. What works, what doesn't, and how to deploy AI assistants that actually augment your team's capabilities.",
    category: "AI Assistants",
    readTime: "7 min read",
    date: "December 2024",
    icon: Bot,
    gradient: "from-brand-cyan/20 via-brand-cyan/10 to-transparent",
  },
  {
    slug: "workflow-automation-mistakes",
    title: "5 Workflow Automation Mistakes (And How to Avoid Them)",
    excerpt:
      "From automating the wrong processes to neglecting change management, these common mistakes can derail your automation initiatives. Here's how to get it right.",
    category: "Best Practices",
    readTime: "4 min read",
    date: "November 2024",
    icon: Workflow,
    gradient: "from-brand-violet/20 via-brand-violet/10 to-transparent",
  },
  {
    slug: "future-robotics-africa",
    title: "The Future of Robotics in African Industry",
    excerpt:
      "From agricultural automation to warehouse robotics, Africa is poised for a robotics revolution. Exploring the opportunities, challenges, and responsible paths forward.",
    category: "Future Tech",
    readTime: "9 min read",
    date: "November 2024",
    icon: Lightbulb,
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
];

const Insights = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <div className="badge-premium mb-8">
              <BookOpen className="h-4 w-4" />
              <span>Insights & Ideas</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              Ideas on <span className="text-gradient">Automation</span> & AI
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Practical insights on automation, AI operations, and the future of work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <Link
                to={`/insights/${featuredPost.slug}`}
                className="group block"
              >
                <motion.div 
                  className="card-premium p-8 lg:p-12"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          <Tag className="h-3.5 w-3.5" />
                          Featured
                        </span>
                        <span className="text-sm text-muted-foreground font-medium">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5 group-hover:text-primary transition-colors duration-300 flex items-start gap-3">
                        {featuredPost.title}
                        <ArrowUpRight className="h-7 w-7 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                        <span className="font-medium">{featuredPost.date}</span>
                      </div>
                    </div>
                    <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient}`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <featuredPost.icon className="h-24 w-24 text-primary/30" />
                        </motion.div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-6 right-6 w-20 h-20 border border-primary/10 rounded-full" />
                      <div className="absolute bottom-10 left-10 w-12 h-12 border border-primary/10 rounded-lg rotate-12" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularPosts.map((post) => (
              <motion.div key={post.slug} variants={staggerItem as any}>
                <Link
                  to={`/insights/${post.slug}`}
                  className="group flex flex-col h-full"
                >
                  <motion.div 
                    className="card-premium flex flex-col h-full overflow-hidden"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Thumbnail */}
                    <div className={`relative h-52 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="transition-transform duration-500 group-hover:scale-110"
                        >
                          <post.icon className="h-20 w-20 text-primary/20" />
                        </motion.div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium shadow-sm">
                          {post.category}
                        </span>
                      </div>
                      {/* Decorative circle */}
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/10 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-8 flex flex-col">
                      <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 flex items-start gap-2">
                        <span className="flex-1">{post.title}</span>
                        <ArrowUpRight className="h-5 w-5 mt-0.5 opacity-0 shrink-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                        <span className="font-medium">{post.date}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="badge-premium mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Stay Informed
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Get the Latest <span className="text-gradient">Insights</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Join forward-thinking leaders receiving our weekly insights on automation, AI, and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-base"
                />
                <Button variant="hero" size="lg" className="group">
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No spam. Unsubscribe anytime. Read by 2,000+ professionals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;