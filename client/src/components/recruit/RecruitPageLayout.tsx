import { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import RecruitNavigation from "./RecruitNavigation";

interface RecruitPageLayoutProps {
  children: ReactNode;
  activeSection: string;
}

const RecruitPageLayout = ({ children, activeSection }: RecruitPageLayoutProps) => {
  return (
    <div className="pt-24 pb-16">
      <Container className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[180px,1fr] gap-12">
          {/* Left Navigation */}
          <div>
            <RecruitNavigation activeSection={activeSection} />
          </div>
          
          {/* Right Content */}
          <div>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecruitPageLayout;