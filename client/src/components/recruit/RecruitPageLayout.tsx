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
        <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-10">
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