import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Portfolio = () => {
  const images = [
    { src: gallery1, alt: "Traditional Indian wedding", location: "Mumbai" },
    { src: gallery2, alt: "Beach wedding at sunset", location: "Goa" },
    { src: gallery3, alt: "Intimate bridal portrait", location: "Udaipur" },
    { src: gallery4, alt: "Elegant couple portrait", location: "Dubai" },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Portfolio</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">Timeless Memories,<span className="italic text-gold"> Beautiful Stories</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden aspect-[3/4] cursor-pointer hover-lift">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-light">Destination Wedding</p>
                <p className="font-serif text-xl text-cream mt-1">{image.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
