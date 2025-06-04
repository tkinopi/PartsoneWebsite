import { useEffect } from "react";
import CompanyPageLayout from "@/components/company/CompanyPageLayout";
import PhilosophySection from "@/components/company/PhilosophySection";

const PhilosophyPage = () => {
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
    <CompanyPageLayout activeSection="philosophy">
      <PhilosophySection />
    </CompanyPageLayout>
  );
};

export default PhilosophyPage;