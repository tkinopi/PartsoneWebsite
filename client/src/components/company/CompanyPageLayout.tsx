import { ReactNode } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/company/Navigation";
import PageLayout from "@/components/shared/PageLayout";

interface CompanyPageLayoutProps {
  children: ReactNode;
  activeSection: string;
}

const CompanyPageLayout = ({ children, activeSection }: CompanyPageLayoutProps) => {
  const [_, setLocation] = useLocation();

  return (
    <PageLayout
      navigation={<Navigation activeSection={activeSection} />}
    >
      {children}
    </PageLayout>
  );
};

export default CompanyPageLayout;