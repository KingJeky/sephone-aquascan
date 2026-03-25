const specs = [
  { label: "Sensor", value: "Turbidity, pH, Suhu" },
  { label: "Kontrol", value: "Wireless / Kabel" },
  { label: "Output Data", value: "Real-time" },
  { label: "Power", value: "Rechargeable Battery" },
];

const SpecsSection = () => {
  return (
    <section className="py-24 bg-ocean-light">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Spesifikasi Singkat</h2>
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex justify-between items-center px-8 py-5 ${
                  i !== specs.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="font-medium text-card-foreground">{spec.label}</span>
                <span className="text-muted-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
