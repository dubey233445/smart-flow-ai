import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import logo from "@/assets/logo.jpg";
import { cn } from "@/lib/utils";

const links = [
{ label: "Home", href: "#home", id: "home" },
=======
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
{ label: "Services", href: "#services", id: "services" },
{ label: "How it Works", href: "#how", id: "how" },
{ label: "Why Us", href: "#why", id: "why" },
{ label: "Portfolio", href: "#portfolio", id: "portfolio" },
<<<<<<< HEAD
{ label: "Team", href: "#team", id: "team" },
];


=======
];

>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
const Navbar = () => {
const [active, setActive] = useState<string>("");
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 12);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

<<<<<<< HEAD

return () => window.removeEventListener("scroll", onScroll);
=======
```
return () => window.removeEventListener("scroll", onScroll);
```

>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
}, []);

useEffect(() => {
const sections = links
.map((l) => document.getElementById(l.id))
.filter((el): el is HTMLElement => !!el);

<<<<<<< HEAD

=======
```
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
if (!sections.length) return;

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) setActive(e.target.id);
    });
  },
  {
    rootMargin: "-45% 0px -50% 0px",
    threshold: 0,
  }
);

sections.forEach((s) => obs.observe(s));

return () => obs.disconnect();
<<<<<<< HEAD
}, []);

return (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="mx-auto max-w-content px-6 md:px-10 py-4">
      <div
        className={cn(
          "rounded-2xl shadow-lg border border-border flex items-center justify-between px-6 py-2 transition-medium",
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-card"
            : "bg-white/70 backdrop-blur-md shadow-sm"
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 transition-fast hover:opacity-90"
        >
          <img
            src={logo}
            alt="SkillYug Technologies Logo"
            className="h-10 md:h-12 w-auto object-contain drop-shadow-md"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold tracking-tight whitespace-nowrap">
              <span className="text-primary">SKILL</span><span className="text-secondary">YUG</span>
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Vision Engineered</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative transition-fast",
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}

              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-primary transition-medium",
                  active === l.id
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                )}
              />
            </a>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Button
          variant="hero"
          size="sm"
          className="btn-press btn-glow-sm btn-animated"
          asChild
        >
          <a
            href="https://docs.google.com/forms/d/12RdL1PB6xmfXQOTf6tjx4T1xmJNZPZKv5pBIudeYnyQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </Button>
      </div>
    </div>
  </header>
);
};

export default Navbar;
=======
```

}, []);

return ( <header className="fixed top-0 inset-x-0 z-50"> <div className="mx-auto max-w-content px-6 md:px-10 py-4">
<div
className={cn(
"rounded-2xl shadow-lg border border-border flex items-center justify-between px-6 py-2 transition-medium",
scrolled
? "bg-white/85 backdrop-blur-xl shadow-card"
: "bg-white/70 backdrop-blur-md shadow-sm"
)}
>
{/* Logo */} <a
         href="#"
         className="flex items-center gap-3 transition-fast hover:opacity-90"
       > <img
           src={logo}
           alt="SkillYug Technologies Logo"
           className="h-12 md:h-14 w-auto object-contain"
         />

```
        <div className="flex flex-col leading-none items-center">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap">
            <span className="text-primary">SKILL</span>
            <span className="text-[#0B1C3F]">YUG</span>
          </span>

          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500">
            TECHNOLOGIES
          </span>
        </div>
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={cn(
              "relative transition-fast",
              active === l.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {l.label}

            <span
              className={cn(
                "absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-primary transition-medium",
                active === l.id
                  ? "w-full opacity-100"
                  : "w-0 opacity-0"
              )}
            />
          </a>
        ))}
      </nav>

      {/* Contact Us Button */}
      <Button
        variant="hero"
        size="sm"
        className="btn-press btn-glow-sm btn-animated"
        asChild
      >
        <a
          href="https://docs.google.com/forms/d/12RdL1PB6xmfXQOTf6tjx4T1xmJNZPZKv5pBIudeYnyQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </Button>
    </div>
  </div>
</header>
```

);
};

export default Navbar;
>>>>>>> 1913dd492bed85961f5300c841f2edc284060fa9
