import { useEffect } from "react";
import CompanyPageLayout from "@/components/company/CompanyPageLayout";
import ValuesSection from "@/components/company/ValuesSection";

const ValuesPage = () => {
  // Set page title and meta data
  useEffect(() => {
    document.title = "バリュー | 会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのバリュー - 革新、誠実、結果、共創、成長。私たちの行動指針となる5つの価値観を紹介します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <CompanyPageLayout activeSection="values">
      <ValuesSection />
    </CompanyPageLayout>
  );
};

export default ValuesPage;