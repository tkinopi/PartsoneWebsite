import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import digitalPlatformImage from "../assets/digital_platform.png";

const DigitalServiceDetail = () => {
  // SEO設定
  useEffect(() => {
    document.title = "デジタルプラットフォーム事業 | 事業内容 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのデジタルプラットフォーム事業 - 最新テクノロジーを活用した革新的なプラットフォームで企業のデジタル変革を支援します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const features = [
    {
      title: "DXソリューション",
      description: "デジタル技術を駆使した効率化や事業変革の支援",
      icon: CheckCircle2
    },
    {
      title: "システム開発",
      description: "ビジネスニーズに合わせたカスタムシステムの開発",
      icon: CheckCircle2
    },
    {
      title: "AIおよび機械学習統合",
      description: "データ分析と予測モデルによる意思決定支援",
      icon: CheckCircle2
    },
    {
      title: "クラウドインフラ構築",
      description: "スケーラブルで安全なクラウド環境の設計と実装",
      icon: CheckCircle2
    }
  ];

  const caseStudies = [
    {
      title: "製造業向けIoTプラットフォーム",
      description: "生産設備からのリアルタイムデータ収集・分析により、製造プロセスを最適化し、生産性が30%向上しました。",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      title: "金融機関向け顧客分析プラットフォーム",
      description: "AIを活用した顧客行動分析により、パーソナライズされたサービス提案を実現し、顧客満足度が25%向上しました。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
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
          <span className="text-gray-600">デジタルプラットフォーム事業</span>
        </div>
        
        {/* ヒーローセクション */}
        <div className="max-w-5xl mx-auto mb-20">
          <SectionTitle 
            title="DIGITAL PLATFORM" 
            subtitle="デジタルプラットフォーム事業" 
            center
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6"
              >
                "最新テクノロジーで、ビジネスの可能性を広げる"
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                Partsoneのデジタルプラットフォーム事業は、企業のデジタルトランスフォーメーション（DX）を総合的に支援します。
                最新のテクノロジーを活用し、業務効率化やビジネスモデルの革新、顧客体験の向上など、
                企業が直面する様々な課題に対してソリューションを提供しています。
              </motion.p>
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={digitalPlatformImage} 
                alt="デジタルプラットフォーム事業"
                className="w-full h-auto object-cover"
              />
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
              デジタル化の課題、お気軽にご相談ください
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              貴社のビジネス課題に合わせた最適なソリューションをご提案いたします。
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

export default DigitalServiceDetail;