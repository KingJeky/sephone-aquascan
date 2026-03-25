import { CheckCircle } from "lucide-react";

const benefits = [
  "Monitoring kualitas air lebih akurat",
  "Efisien tanpa pengambilan manual",
  "Cocok untuk tambak, riset, dan lingkungan",
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-ocean-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Manfaat Penggunaan</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Sephone 32 dirancang untuk memudahkan proses monitoring kualitas air Anda.
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`animate-fade-up-delay-${i + 1} flex items-center gap-4 bg-card rounded-xl p-6 shadow-sm border border-border`}
            >
              <CheckCircle className="w-6 h-6 text-ocean-glow flex-shrink-0" />
              <span className="text-lg text-card-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
