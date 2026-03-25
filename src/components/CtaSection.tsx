import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 bg-ocean-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-primary to-ocean-glow/30" />
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Pantau Kualitas Air Lebih Mudah
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
          Dapatkan Sephone 32 sekarang dan mulai monitoring kualitas air secara real-time.
        </p>
        <Button size="lg" className="bg-ocean-glow hover:bg-ocean-glow/90 text-accent-foreground font-semibold px-10 py-6 text-lg rounded-full shadow-lg shadow-ocean-glow/30">
          Order Sekarang
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
