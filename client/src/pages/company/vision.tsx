import { useEffect } from "react";
import CompanyPageLayout from "@/components/company/CompanyPageLayout";
import VisionSection from "@/components/company/VisionSection";

const VisionPage = () => {
  // Set page title and meta data
  useEffect(() => {
    document.title = "ビジョン | 会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのビジョン - 未来を創るビジネスパートナーとして、2030年に向けた私たちの目指す姿を紹介します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <CompanyPageLayout activeSection="vision">
      <VisionSection />
    </CompanyPageLayout>
  );
};

export default VisionPage;