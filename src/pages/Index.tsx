import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WhyNexSunSection from "@/components/WhyNexSunSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <WhyNexSunSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;