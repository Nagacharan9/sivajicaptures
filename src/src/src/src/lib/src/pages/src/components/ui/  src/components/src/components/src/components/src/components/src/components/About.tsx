const About = () => {
  const stats = [
    { number: "600+", label: "Weddings Documented" },
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Destinations Covered" },
    { number: "15+", label: "Awards Won" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">About Us</p>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 leading-tight">Founded with a Dream to Turn Weddings into<span className="italic text-gold"> Timeless Art</span></h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>At SivajiCaptures, we don't just capture weddings—we celebrate love in its most beautiful, raw, and unforgettable moments. Since 2014, we've been telling stories of love from every corner of the world.</p>
              <p>Ranked among India's Top 10 Destination Wedding Photographers, our work has touched couples across the globe.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card border border-border p-8 text-center hover-lift">
                <p className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.number}</p>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
