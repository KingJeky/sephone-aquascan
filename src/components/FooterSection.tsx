const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground">Sephone 32</h3>
            <p className="text-primary-foreground/50 text-sm mt-1">Underwater Drone for Water Quality Monitoring</p>
          </div>
          <div className="text-center md:text-right">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-glow hover:underline font-medium"
            >
              Hubungi via WhatsApp
            </a>
            <p className="text-primary-foreground/40 text-sm mt-2">
              © {new Date().getFullYear()} Sephone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
