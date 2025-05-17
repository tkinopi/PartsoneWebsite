import { useEffect } from "react";
import CompanyPageLayout from "@/components/company/CompanyPageLayout";
import TeamSection from "@/components/company/TeamSection";

const TeamPage = () => {
  // Set page title and meta data
  useEffect(() => {
    document.title = "私たちのチーム | 会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのチームメンバーをご紹介します。それぞれの専門分野で豊富な経験と知識を持つメンバーが、お客様のビジネス成功のために日々取り組んでいます。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <CompanyPageLayout activeSection="team">
      <TeamSection />
    </CompanyPageLayout>
  );
};

export default TeamPage;