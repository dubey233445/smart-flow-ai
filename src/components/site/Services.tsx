import { Zap, Globe, Smartphone, TrendingUp, Users, BarChart3, Settings } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { icon: Zap, title: "AI Automation", desc: "Custom AI agents that automate repetitive tasks and streamline workflows." },
  { icon: Globe, title: "Website Development", desc: "Modern, fast, and responsive websites built with latest technologies." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps with seamless user experiences." },
  { icon: TrendingUp, title: "Digital Marketing & SEO", desc: "Strategic digital marketing and SEO services to boost your online presence." },
  { icon: Users, title: "Lead Generation", desc: "Targeted lead generation campaigns to grow your customer base effectively." },
  { icon: BarChart3, title: "Traffic & Growth", desc: "Data-driven strategies to increase website traffic and conversions." },
  { icon: Settings, title: "CRM Dashboard", desc: "Custom CRM solutions and dashboards for efficient customer management." },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal as="div" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-primary mb-3">What we do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Comprehensive solutions to accelerate your business growth and digital transformation.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative h-full rounded-xl bg-card border border-border p-6 shadow-card hover:shadow-card-hover hover:border-primary/30 card-lift">
                <div className="h-12 w-12 rounded-lg grid place-items-center bg-gradient-primary shadow-glow-primary mb-5 transition-medium group-hover:scale-110">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
