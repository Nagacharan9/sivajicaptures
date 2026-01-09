import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: "What is your starting price?", answer: "Our packages start from ₹2,50,000 for a single-day event." },
    { question: "How long to receive photos?", answer: "Editor's Choice within 10 days, complete gallery within 35 days, film within 60 days." },
    { question: "Do you travel for destination weddings?", answer: "Yes! We've covered celebrations across India, Dubai, Thailand, Europe, and more." },
    { question: "Can we customize our package?", answer: "Of course! We'll create a custom package that fits your vision and budget." },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light">Questions?<span className="italic text-gold"> We've Got Answers</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border bg-card overflow-hidden">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span className="font-serif text-lg text-foreground pr-4">{faq.question}</span>
                <ChevronDown className={w-5 h-5 text-gold transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}} />
              </button>
              <div className={overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}}>
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
