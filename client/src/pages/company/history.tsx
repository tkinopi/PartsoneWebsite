import { useEffect } from "react";
import CompanyPageLayout from "@/components/company/CompanyPageLayout";
import HistorySection from "@/components/company/HistorySection";

const HistoryPage = () => {
  // Set page title and meta data
  useEffect(() => {
    document.title = "会社沿革 | 会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneの会社沿革 - 2007年の設立から現在に至るまでの成長の歴史を紹介します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <CompanyPageLayout activeSection="history">
      <HistorySection />
    </CompanyPageLayout>
  );
};

export default HistoryPage;