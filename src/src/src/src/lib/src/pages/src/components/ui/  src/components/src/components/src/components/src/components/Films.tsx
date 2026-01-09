import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import film1 from "@/assets/film-1.jpg";
import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";

const Films = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const films = [
    { id: 1, title: "Priya & Dhruv", location: "Udaipur Palace", image: film1 },
    { id: 2, title: "Anika & Rohan", location: "Mumbai", image: film2 },
    { id: 3, title: "Meera & Arjun", location: "Goa Beach", image: film3 },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % films.length), 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, films.length]);

  const getCardStyle = (index: number) => {
    const diff = ((index - activeIndex + films.length) % films.length);
    if (diff === 0) return { transform: "translateX(0) scale(1)", zIndex: 30, opacity: 1 };
    if (diff === 1) return { transform: "translateX(60%) scale(0.8)", zIndex: 20, opacity: 0.7 };
    return { transform: "translateX(-60%) scale(0.8)", zIndex: 20, opacity: 0.7 };
  };

  return (
    <section id="films" className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Wedding Films</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-cream mb-6">Beautiful Weddings,<span className="italic text-gold"> Breathtaking Films</span></h2>
        </div>
        <div className="relative h-[500px] perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            {films.map((film, index) => (
              <div key={film.id} className="absolute w-[280px] md:w-[350px] aspect-[3/4] cursor-pointer transition-all duration-700" style={getCardStyle(index)} onClick={() => { setIsAutoPlaying(false); setActiveIndex(index); }}>
                <div className="relative w-full h-full group">
                  <img src={film.image} alt={film.title} className="w-full h-full object-cover rounded-sm shadow-elegant" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-gold/80 flex items-center justify-center bg-charcoal/30">
                      <Play className="w-6 h-6 text-gold fill-gold/30" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-light mb-1">{film.location}</p>
                    <h3 className="font-serif text-xl text-cream">{film.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => { setIsAutoPlaying(false); setActiveIndex((prev) => (prev - 1 + films.length) % films.length); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => { setIsAutoPlaying(false); setActiveIndex((prev) => (prev + 1) % films.length); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Films;
