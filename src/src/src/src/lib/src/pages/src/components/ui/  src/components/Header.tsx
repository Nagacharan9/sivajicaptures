import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Films", href: "#films" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-4" : "bg-transparent py-6"}}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl md:text-3xl font-light text-foreground">SivajiCaptures</a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">{link.name}</a>
          ))}
          <Button variant="hero" size="lg" asChild><a href="#contact">Get in Touch</a></Button>
        </nav>
        <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-sans text-sm tracking-[0.15em] uppercase text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
            ))}
            <Button variant="hero" size="lg" className="mt-4" asChild><a href="#contact">Get in Touch</a></Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
