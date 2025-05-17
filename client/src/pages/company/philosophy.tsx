import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/company/Navigation";
import PhilosophySection from "@/components/company/PhilosophySection";

const PhilosophyPage = () => {
  const [_, setLocation] = useLocation();
  
  // Set page title and meta data
  useEffect(() => {
    document.title = "企業理念 | 会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneの企業理念「変化・挑戦・貢献」について紹介します。社会に貢献し続ける企業を目指しています。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="pt-20">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Navigation */}
          <div className="md:col-span-1">
            <Navigation activeSection="philosophy" />
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <PhilosophySection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhilosophyPage;