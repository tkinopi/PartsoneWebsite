import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/company/Navigation";
import MissionSection from "@/components/company/MissionSection";

const MissionPage = () => {
  const [_, setLocation] = useLocation();
  
  // Set page title and meta data
  useEffect(() => {
    document.title = "ミッション | 会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのミッション - 「ビジネスの可能性を最大化する」という存在意義について紹介します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="pt-20">
      <Container className="py-16">
        <Button 
          variant="outline" 
          className="mb-8 flex items-center gap-2"
          onClick={() => setLocation("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          トップに戻る
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Navigation */}
          <div className="md:col-span-1">
            <Navigation activeSection="mission" />
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <MissionSection />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MissionPage;