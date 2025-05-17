import { useEffect } from "react";
import CompanyPageLayout from "@/components/company/CompanyPageLayout";
import OverviewSection from "@/components/company/OverviewSection";

const OverviewPage = () => {
  // Set page title and meta data
  useEffect(() => {
    document.title = "会社概要 | 会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneの会社概要のページです。所在地、設立、資本金、従業員数など、基本情報をご紹介します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <CompanyPageLayout activeSection="overview">
      <OverviewSection />
    </CompanyPageLayout>
  );
};

export default OverviewPage;