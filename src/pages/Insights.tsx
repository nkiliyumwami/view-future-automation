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
} from "lucide-react";

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
  },
];

const Insights = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Insights
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ideas on <span className="text-gradient">Automation</span> & AI
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical insights on automation, AI operations, compliance, and
              the future of work from the SmartViewAfrica team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <Link
              to={`/insights/${featuredPost.slug}`}
              className="group block p-8 lg:p-12 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Tag className="h-3 w-3" />
                      Featured
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 flex items-center justify-center">
                  <featuredPost.icon className="h-20 w-20 text-primary/30" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="h-48 bg-gradient-to-br from-brand-cyan/10 to-brand-violet/10 flex items-center justify-center relative overflow-hidden">
                  <post.icon className="h-16 w-16 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest insights on automation, AI, and operational
              excellence delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
