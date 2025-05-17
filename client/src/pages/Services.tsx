import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Services = () => {
  // SEO設定
  useEffect(() => {
    document.title = "事業内容 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneの事業内容 - デジタルプラットフォーム事業とソーシング事業を通じて、企業のビジネス価値を最大化します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="pt-24 pb-16">
      <Container>
        {/* ヒーローセクション */}
        <div className="max-w-5xl mx-auto mb-20">
          <SectionTitle 
            title="SERVICES" 
            subtitle="事業内容" 
            center
          />
          
          <div className="mt-8 text-center mx-auto max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Partsoneは「ビジネスの可能性を最大化する」をミッションに掲げ、
              デジタルプラットフォーム事業とソーシング事業の2つの事業を展開しています。
              適切な人材とテクノロジーの組み合わせにより、企業のビジネス課題を解決します。
            </p>
          </div>
        </div>
        
        {/* サービス詳細セクション */}
        <div className="space-y-32">
          {servicesData.map((service, index) => (
            <div key={service.title} className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[1.2fr,0.8fr]' : 'md:grid-cols-[0.8fr,1.2fr] md:flex-row-reverse'} gap-10 md:gap-16 items-center`}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <div className="text-base md:text-lg text-gray-700 space-y-4 mb-8">
                  <p className="leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link href={service.detailUrl || "#"} className="flex items-center gap-2">
                      詳しく見る <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden relative order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="p-6 flex flex-col justify-center">
                  <div className="bg-white rounded-xl p-4 shadow-xl">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="rounded-lg w-full h-auto object-cover"
                      style={{ height: '350px' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;