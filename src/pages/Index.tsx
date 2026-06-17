import Navbar from "@/components/site/Navbar";
<<<<<<< HEAD
import Home from "@/components/site/Home";
=======
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
import Hero from "@/components/site/Hero";
import TrustedStrip from "@/components/site/TrustedStrip";
import Services from "@/components/site/Services";
import HowItWorks from "@/components/site/HowItWorks";
import WhyChoose from "@/components/site/WhyChoose";
import Portfolio from "@/components/site/Portfolio";
<<<<<<< HEAD
import Team from "@/components/site/Team";
import Contact from "@/components/site/Contact";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Home />
=======
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
      <Hero />
      <TrustedStrip />
      <Services />
      <HowItWorks />
      <WhyChoose />
      <Portfolio />
<<<<<<< HEAD
      <Team />
      <Contact />
      <CTA />
      <Footer />
=======
      <CTA />
      <Footer />

      {/* Sticky mobile CTA */}
      <div
        className={cn(
          "md:hidden fixed bottom-4 inset-x-4 z-40 transition-medium",
          showSticky ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        )}
      >
        <Button variant="hero" size="lg" className="w-full btn-press btn-glow btn-animated shadow-elegant" asChild>
          <a href="tel:9450935939"><PhoneCall className="mr-1" /> Book a Call</a>
        </Button>
      </div>
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
    </main>
  );
};

export default Index;
