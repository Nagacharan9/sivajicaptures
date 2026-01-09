import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { quote: "SivajiCaptures didn't just photograph our wedding—they captured our love story.", author: "Priya & Dhruv", role: "Mumbai Wedding", rating: 5 },
    { quote: "The team's attention to detail and their ability to blend in while capturing candid moments was remarkable.", author: "Anika & Rohan", role: "Destination Wedding, Udaipur", rating: 5 },
    { quote: "The wedding film brought tears to our eyes—it was that beautiful.", author: "Meera & Arjun", role: "Beach Wedding, Goa", rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light">Words from Our<span className="italic text-gold"> Beloved Couples</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-background p-8 border border-border hover-lift">
              <div className="flex gap-1 mb-6">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div>
              <blockquote className="font-serif text-lg italic text-foreground mb-8">"{t.quote}"</blockquote>
              <div>
                <p className="font-sans text-sm font-medium text-foreground">{t.author}</p>
                <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
