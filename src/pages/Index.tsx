import HeroSection from "@/HeroSection";
import SecuritySection from "@/SecuritySection";
import FeaturesSection from "@/FeaturesSection";
import HowItWorksSection from "@/HowItWorksSection";
import DownloadSection from "@/DownloadSection";
import CommunitySection from "@/CommunitySection";
import Footer from "@/Footer";

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
