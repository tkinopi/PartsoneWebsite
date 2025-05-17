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
      <Container>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Navigation */}
          <div className="md:w-1/4">
            <RecruitNavigation activeSection={activeSection} />
          </div>
          
          {/* Right Content */}
          <div className="md:w-3/4">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecruitPageLayout;