
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VoiceUploader from "@/components/VoiceUploader";
import ScamDemo from "@/components/ScamDemo";
import VerificationGuide from "@/components/VerificationGuide";
import EducationSection from "@/components/EducationSection";
import TipCard from "@/components/TipCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <VoiceUploader />
        <ScamDemo />
        <VerificationGuide />
        <EducationSection />
        <TipCard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
