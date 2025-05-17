import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const SourcingServiceDetail = () => {
  // SEO設定
  useEffect(() => {
    document.title = "ソーシング事業 | 事業内容 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのソーシング事業 - 企業のニーズに合わせた最適な人材や設備のソーシングソリューションを提供します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const features = [
    {
      title: "人材ソーシング",
      description: "高度なスキルを持つ人材の紹介・派遣サービス",
      icon: CheckCircle2
    },
    {
      title: "業務委託サービス",
      description: "専門性の高い業務のアウトソーシングソリューション",
      icon: CheckCircle2
    },
    {
      title: "設備・機器のレンタル",
      description: "オフィス機器からイベント用品まで幅広いレンタルサービス",
      icon: CheckCircle2
    },
    {
      title: "プロジェクト管理支援",
      description: "目標達成のための効率的なリソース配分と進行管理",
      icon: CheckCircle2
    }
  ];

  const caseStudies = [
    {
      title: "大規模イベント向け機材・人材ソーシング",
      description: "国際会議におけるAV機器の提供と専門オペレーターの派遣により、スムーズなイベント運営を実現しました。",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43867a338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "ITプロジェクト向け専門人材ソーシング",
      description: "システム開発プロジェクトに必要な専門エンジニアを短期間で確保し、プロジェクトの納期遵守に貢献しました。",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <Container>
        {/* パンくずリスト */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
          <Link href="/" className="hover:text-primary">
            ホーム
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary">
            事業内容
          </Link>
          <span>/</span>
          <span className="text-gray-600">ソーシング事業</span>
        </div>
        
        {/* ヒーローセクション */}
        <div className="max-w-5xl mx-auto mb-20">
          <SectionTitle 
            title="SOURCING" 
            subtitle="ソーシング事業" 
            center
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-r from-gray-800 to-black rounded-3xl overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="ソーシング事業"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6"
              >
                "最適なリソースで、ビジネスに価値を創出する"
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                Partsoneのソーシング事業は、企業のビジネス成長に必要な人材や設備を適切なタイミングで提供します。
                多様な業界における豊富な経験と幅広いネットワークを活かし、
                企業ごとの特性やニーズに合わせたオーダーメイドのソリューションを実現しています。
              </motion.p>
            </div>
          </div>
        </div>
        
        {/* 特徴セクション */}
        <div className="max-w-5xl mx-auto my-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">主なサービス</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  key={feature.title}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* 事例セクション */}
        <div className="max-w-5xl mx-auto my-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">導入事例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  key={caseStudy.title}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                    <p className="text-gray-600">{caseStudy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* CTAセクション */}
        <div className="max-w-4xl mx-auto my-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/90 to-primary p-12 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl text-white font-bold mb-6">
              リソース調達の課題、お気軽にご相談ください
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              貴社の業務ニーズに合わせた最適なリソースソリューションをご提案いたします。
              まずはお問い合わせからご相談ください。
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#contact">
                お問い合わせ
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* ページフッター */}
        <div className="text-center mt-16">
          <Button variant="outline" asChild className="flex items-center gap-2">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4" />
              事業内容一覧に戻る
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SourcingServiceDetail;