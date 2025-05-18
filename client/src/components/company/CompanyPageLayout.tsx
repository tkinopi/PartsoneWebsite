import { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import Navigation from "@/components/company/Navigation";

interface CompanyPageLayoutProps {
  children: ReactNode;
  activeSection: string;
}

const CompanyPageLayout = ({ children, activeSection }: CompanyPageLayoutProps) => {
  const [_, setLocation] = useLocation();

  return (
    <div className="pt-20">
      <Container className="py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[180px,1fr] gap-12">
          {/* Left Navigation */}
          <div>
            <Navigation activeSection={activeSection} />
          </div>
          
          {/* Main Content */}
          <div>
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyPageLayout;