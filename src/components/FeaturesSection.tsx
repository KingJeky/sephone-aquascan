import { Droplets, Thermometer, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Sensor Turbidity",
    description: "Mengukur tingkat kekeruhan air secara presisi untuk memastikan kualitas air optimal.",
  },
  {
    icon: FlaskConical,
    title: "Sensor pH",
    description: "Mengetahui tingkat keasaman air secara akurat untuk berbagai kebutuhan monitoring.",
  },
  {
    icon: Thermometer,
    title: "Sensor Suhu",
    description: "Memantau temperatur air secara real-time dengan akurasi tinggi.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fitur Utama</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dilengkapi 3 sensor utama untuk monitoring kualitas air yang komprehensif
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-fade-up-delay-${i + 1} bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-xl bg-ocean-light flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
