import { useEffect } from "react";
import CompanyPageLayout from "@/components/company/CompanyPageLayout";
import MissionSection from "@/components/company/MissionSection";

const MissionPage = () => {
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
    <CompanyPageLayout activeSection="mission">
      <MissionSection />
    </CompanyPageLayout>
  );
};

export default MissionPage;