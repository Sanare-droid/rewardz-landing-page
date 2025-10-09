import HeroSection from "@/components/HeroSection";
import SecuritySection from "@/components/SecuritySection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DownloadSection from "@/components/DownloadSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SecuritySection />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadSection />
      <CommunitySection />
      <Footer />
    </main>
  );
};

export default Index;
