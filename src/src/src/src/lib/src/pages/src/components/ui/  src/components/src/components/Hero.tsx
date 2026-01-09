import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline poster={heroImage} className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold mb-6 animate-fade-in">Award-Winning Wedding Photography</p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 animate-fade-in-up">
          Stories of Love<span className="block italic text-gold">&amp; Joy of Weddings</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          We don't just capture weddings—we celebrate love in its most beautiful, raw, and unforgettable moments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          <Button variant="hero" size="xl" asChild><a href="#contact">Get in Touch</a></Button>
          <Button variant="minimal" size="xl" asChild><a href="#portfolio">View Portfolio</a></Button>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
