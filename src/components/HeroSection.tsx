import heroImage from "@/assets/sephone-hero.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-ocean-deep min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep/95 via-primary/80 to-ocean-glow/40" />
      <div className="container mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="text-ocean-glow font-medium tracking-widest uppercase text-sm mb-4">
            Sephone 32 — Underwater Drone
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Solusi Cerdas Monitoring Kualitas Air
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Sephone 32 membantu Anda memantau kondisi air secara real-time dengan sensor turbidity, pH, dan suhu.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-ocean-glow hover:bg-ocean-glow/90 text-accent-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-ocean-glow/30">
              Pesan Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base rounded-full">
              Lihat Detail
            </Button>
          </div>
        </div>
        <div className="animate-fade-up-delay-2 flex justify-center">
          <img
            src={heroImage}
            alt="Sephone 32 underwater drone"
            width={1024}
            height={768}
            className="rounded-2xl shadow-2xl shadow-black/30 max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
