import { ReactNode } from "react";
import RecruitNavigation from "./RecruitNavigation";
import PageLayout from "@/components/shared/PageLayout";

interface RecruitPageLayoutProps {
  children: ReactNode;
  activeSection: string;
}

const RecruitPageLayout = ({ children, activeSection }: RecruitPageLayoutProps) => {
  return (
    <PageLayout
      navigation={<RecruitNavigation activeSection={activeSection} />}
    >
      {children}
    </PageLayout>
  );
};

export default RecruitPageLayout;