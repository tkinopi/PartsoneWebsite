import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SourcingBusiness from "@/pages/SourcingBusiness";
import DigitalPlatformBusiness from "@/pages/DigitalPlatformBusiness";
import Company from "@/pages/Company";
import NewsDetail from "@/pages/NewsDetail";
import NewsList from "@/pages/NewsList";
import Services from "@/pages/Services";
import DigitalServiceDetail from "@/pages/DigitalServiceDetail";
import SourcingServiceDetail from "@/pages/SourcingServiceDetail";
import Contact from "@/pages/Contact";

// サポートページ
import FAQPage from "@/pages/support/FAQ";
import SupportCenterPage from "@/pages/support/SupportCenter";
import PrivacyPolicyPage from "@/pages/support/PrivacyPolicy";
import TermsPage from "@/pages/support/Terms";
import SitemapPage from "@/pages/support/Sitemap";

// 会社情報ページ
import MissionPage from "@/pages/company/mission";
import PhilosophyPage from "@/pages/company/philosophy";
import VisionPage from "@/pages/company/vision";
import HistoryPage from "@/pages/company/history";
import ValuesPage from "@/pages/company/values";
import TeamPage from "@/pages/company/team";
import OverviewPage from "@/pages/company/overview";

// 採用情報ページ
import CulturePage from "@/pages/recruit/culture";
import MessagePage from "@/pages/recruit/message";
import InterviewPage from "@/pages/recruit/interview";
import InternPage from "@/pages/recruit/intern";
import NewGraduatePage from "@/pages/recruit/new-graduate";
import MidCareerPage from "@/pages/recruit/mid-career";
import ApplyPage from "@/pages/recruit/apply";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

function Router() {
  // Set page title
  useEffect(() => {
    document.title = "Partsone | 総合レンタル会社";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'パーツワンは総合レンタル会社として、オフィス機器からイベント用品まで、あらゆるビジネスニーズに最適なレンタルソリューションを提供しています。';
    document.head.appendChild(metaDescription);
    
    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Partsone | 総合レンタル会社';
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'パーツワンは総合レンタル会社として、オフィス機器からイベント用品まで、あらゆるビジネスニーズに最適なレンタルソリューションを提供しています。';
    document.head.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
    
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/business/sourcing" component={SourcingBusiness} />
          <Route path="/business/digital-platform" component={DigitalPlatformBusiness} />
          
          {/* 会社情報ページ */}
          <Route path="/company" component={Company} />
          <Route path="/company/mission" component={MissionPage} />
          <Route path="/company/philosophy" component={PhilosophyPage} />
          <Route path="/company/vision" component={VisionPage} />
          <Route path="/company/history" component={HistoryPage} />
          <Route path="/company/values" component={ValuesPage} />
          <Route path="/company/team" component={TeamPage} />
          <Route path="/company/overview" component={OverviewPage} />
          
          {/* 採用情報ページ */}
          <Route path="/recruit/culture" component={CulturePage} />
          <Route path="/recruit/message" component={MessagePage} />
          <Route path="/recruit/interview" component={InterviewPage} />
          <Route path="/recruit/intern" component={InternPage} />
          <Route path="/recruit/new-graduate" component={NewGraduatePage} />
          <Route path="/recruit/mid-career" component={MidCareerPage} />
          <Route path="/recruit/apply" component={ApplyPage} />
          
          {/* ニュース関連ページ */}
          <Route path="/news" component={NewsList} />
          <Route path="/news/:id" component={NewsDetail} />

          {/* 事業内容ページ */}
          <Route path="/services" component={Services} />
          <Route path="/services/digital-platform" component={DigitalServiceDetail} />
          <Route path="/services/sourcing" component={SourcingServiceDetail} />
          
          {/* お問い合わせページ */}
          <Route path="/contact" component={Contact} />

          {/* サポートページ */}
          <Route path="/support/faq" component={FAQPage} />
          <Route path="/support/center" component={SupportCenterPage} />
          <Route path="/support/privacy-policy" component={PrivacyPolicyPage} />
          <Route path="/support/terms" component={TermsPage} />
          <Route path="/support/sitemap" component={SitemapPage} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
