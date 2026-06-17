<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboard from "@/assets/hero-dashboard.png";
import Reveal from "./Reveal";

export default function Hero() {
=======
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import dashboard from "@/assets/hero-dashboard.png";
import Reveal from "./Reveal";
import Counter from "./Counter";

const Hero = () => {
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-hero">
      <div className="glow-blob h-[480px] w-[480px] -top-32 -left-32 bg-primary/30 animate-float-slow" />
      <div className="glow-blob h-[520px] w-[520px] top-20 -right-40 bg-secondary/25 animate-float" />

      <div className="relative mx-auto max-w-content px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs text-muted-foreground mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
<<<<<<< HEAD
              AI Automation & Software Development
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
              Build Smarter
              <br />
              Solutions with <span className="text-gradient">SkillYug</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We help businesses automate workflows, build custom software,
              develop AI-powered solutions, and create digital products that
              drive growth and efficiency.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Consultant
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
=======
              AI Automation for modern businesses
            </div>
          </Reveal>
          <Reveal delay={100} as="h1" className="font-display text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
            Automate Your <br />
            Business with <span className="text-gradient">AI</span>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build smart systems that save time, reduce costs, and scale your operations — chatbots, workflows, and tailored AI solutions.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" className="btn-press btn-glow btn-animated" asChild>
                <a href="#cta">Get Started <ArrowRight className="ml-1" /></a>
              </Button>
              <Button variant="glass" size="lg" className="btn-press" asChild>
                <a href="tel:9450935939"><PhoneCall className="mr-1" /> Book a Call</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-6 md:gap-8 text-sm text-muted-foreground">
              <div>
                <div className="text-foreground font-bold text-2xl"><Counter to={120} suffix="+" /></div>
                <div>Projects shipped</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-foreground font-bold text-2xl"><Counter to={40} suffix="%" /></div>
                <div>Avg. cost saved</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-foreground font-bold text-2xl">24/7</div>
                <div>AI working</div>
              </div>
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
            </div>
          </Reveal>
        </div>

<<<<<<< HEAD
        <Reveal delay={300}>
          <div className="relative">
            <div className="relative rounded-2xl bg-white border border-border p-2 shadow-elegant">
              <img
                src={dashboard}
                alt="SkillYug Technologies Dashboard"
                className="rounded-xl w-full h-auto"
              />
=======
        <Reveal delay={300} y={32} duration={600}>
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
            <div className="relative rounded-2xl bg-white border border-border p-2 shadow-elegant transition-medium hover:shadow-glow-primary">
              <img src={dashboard} alt="AI automation dashboard preview" width={1280} height={960} className="rounded-xl w-full h-auto" />
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
};

export default Hero;
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
