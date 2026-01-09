import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Let's Create Magic Together</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-8">Ready to Tell Your<span className="italic text-gold"> Love Story?</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Button variant="gold" size="xl" asChild><a href="https://wa.me/916281792400" target="_blank">WhatsApp Us</a></Button>
            <Button variant="elegant" size="xl" asChild><a href="mailto:sivajicaptures7@gmail.com">Send Email</a></Button>
            <Button variant="elegant" size="xl" asChild><a href="tel:+916281792400">Call Now</a></Button>
            <Button variant="elegant" size="xl" asChild><a href="tel:+919182344613">Developer</a></Button>
          </div>
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">SivajiCaptures, Pileru, Andhra Pradesh 517214</p>
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.instagram.com/sivajicaptures" target="_blank" className="font-sans text-xs tracking-wider uppercase text-muted-foreground hover:text-gold">Instagram</a>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <a href="https://www.facebook.com/share/1DWJ5EqhDW/" target="_blank" className="font-sans text-xs tracking-wider uppercase text-muted-foreground hover:text-gold">Facebook</a>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <a href="https://www.youtube.com/@SivajiCaptures" target="_blank" className="font-sans text-xs tracking-wider uppercase text-muted-foreground hover:text-gold">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
