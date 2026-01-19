import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/scroll-animations";
import { Star, Quote } from "lucide-react";

// Import logos
import mtnLogo from "@/assets/logos/mtn-logo.png";
import airtelLogo from "@/assets/logos/airtel-logo.png";
import bkLogo from "@/assets/logos/bk-logo.webp";

const clients = [
  { name: "MTN Rwanda", logo: mtnLogo },
  { name: "Airtel Rwanda", logo: airtelLogo },
  { name: "Bank of Kigali", logo: bkLogo },
];

const testimonials = [
  {
    quote: "SmartViewAfrica transformed our operations with AI-powered automation. We've seen a 40% reduction in manual processes and significantly improved accuracy.",
    author: "Sarah Okonkwo",
    role: "CTO, TechCorp Africa",
    rating: 5,
  },
  {
    quote: "Their expertise in workflow automation helped us scale customer support without increasing headcount. The ROI was visible within the first quarter.",
    author: "James Mwangi",
    role: "Head of Operations, Fintech Solutions",
    rating: 5,
  },
  {
    quote: "The Lab's vision for IoT integration aligns perfectly with our digital transformation goals. SmartViewAfrica is a true innovation partner.",
    author: "Amina Diallo",
    role: "Digital Director, Enterprise Group",
    rating: 5,
  },
];

export const TrustedBySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Trusted By Logos */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge-premium mb-4">
              <Star className="w-3 h-3" />
              Trusted Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with forward-thinking enterprises across Africa to deliver transformative automation solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Client Logos Grid */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-32 h-20 md:w-40 md:h-24 rounded-2xl glass-card flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-glow-cyan group-hover:border-primary/30">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-display">
              What Our <span className="text-gradient">Clients Say</span>
            </h3>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card-premium p-6 lg:p-8 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Stats bar */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Enterprise Clients" },
              { value: "200+", label: "Automations Deployed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "40%", label: "Avg. Cost Reduction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl glass-card"
              >
                <p className="text-3xl md:text-4xl font-bold font-display text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
