import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustSection from "@/components/TrustSection";
import ReviewsSection from "@/components/ReviewsSection";
import ImpactSection from "@/components/ImpactSection";
import NoticeSection from "@/components/NoticeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FeaturesSection />
        <TrustSection />
        <ReviewsSection />
        <ImpactSection />
        <NoticeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
