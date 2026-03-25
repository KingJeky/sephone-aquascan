import { Fish, FlaskRound, Waves } from "lucide-react";

const useCases = [
  { icon: Fish, title: "Tambak Ikan / Udang", description: "Pantau kondisi air tambak untuk hasil panen optimal." },
  { icon: FlaskRound, title: "Penelitian Lingkungan", description: "Data akurat untuk riset dan analisis lingkungan perairan." },
  { icon: Waves, title: "Monitoring Sungai & Danau", description: "Awasi kualitas air sungai dan danau secara berkala." },
];

const UseCaseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Use Case</h2>
          <p className="text-muted-foreground text-lg">Berbagai sektor yang dapat memanfaatkan Sephone 32</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className={`animate-fade-up-delay-${i + 1} text-center p-8 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <uc.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{uc.title}</h3>
              <p className="text-muted-foreground">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
