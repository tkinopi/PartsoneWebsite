import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface PageLayoutProps {
  children: ReactNode;
  navigation: ReactNode;
}

const PageLayout = ({ children, navigation }: PageLayoutProps) => {
  return (
    <div className="pt-20">
      <Container className="py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[180px,1fr] gap-12">
          {/* Left Navigation */}
          <div className="md:-ml-8">
            {navigation}
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

export default PageLayout;