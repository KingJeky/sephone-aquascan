import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCaseSection from "@/components/UseCaseSection";
import SpecsSection from "@/components/SpecsSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <UseCaseSection />
      <SpecsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
