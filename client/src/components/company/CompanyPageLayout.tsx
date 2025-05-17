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
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Navigation */}
          <div className="md:col-span-1">
            <Navigation activeSection={activeSection} />
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyPageLayout;