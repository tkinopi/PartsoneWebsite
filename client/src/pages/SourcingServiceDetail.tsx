import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import sourcingBusinessImage from "../assets/sourcing_business.jpg";
import carParts1Image from "../assets/car_parts_1.jpg";
import carParts2Image from "../assets/car_parts_2.jpg";

const SourcingServiceDetail = () => {
  // SEO設定
  useEffect(() => {
    document.title = "ソーシング事業 | 事業内容 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのソーシング事業 - 廃棄される予定の自動車部品に新たな命を吹き込み、資源化を通じてサーキュラーエコノミーの実現と地球温暖化防止に貢献します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const features = [
    {
      title: "高品質リサイクル部品",
      description: "厳格な品質基準で選定された信頼性の高い自動車リサイクル部品の提供",
      icon: CheckCircle2
    },
    {
      title: "希少部品調達",
      description: "廃盤や入手困難な自動車部品の独自ネットワークによる調達サービス",
      icon: CheckCircle2
    },
    {
      title: "環境負荷削減",
      description: "リサイクル部品活用によるCO2排出量削減効果の数値化と可視化",
      icon: CheckCircle2
    },
    {
      title: "部品価値評価",
      description: "廃車から取り外した部品の価値を最大化する専門的な評価・提案サービス",
      icon: CheckCircle2
    }
  ];

  const caseStudies = [
    {
      title: "自動車整備工場チェーン向け部品供給",
      description: "全国の自動車整備工場チェーンに高品質リサイクル部品を安定供給し、修理コストの削減とCO2排出量削減を実現しました。",
      image: carParts1Image
    },
    {
      title: "クラシックカー愛好家向け希少部品調達",
      description: "生産終了から長期間経過した希少なクラシックカー部品を独自ネットワークで調達し、貴重な車両の維持と文化的価値の保全に貢献しています。",
      image: carParts2Image
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
                src={sourcingBusinessImage} 
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
                "ソーシング＝資源化、三方よしを超える四方よし"
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                Partsoneのソーシング事業は、地球温暖化を止め、サーキュラーエコノミーを実現するための取り組みです。
                本来ゴミになるはずだった自動車部品に新たな命を吹き込み、必要としているお客様へつなげることで、
                売り手、買い手、会社、そして環境にも喜ばれる「四方よし」のビジネスモデルを実現しています。
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
            <h2 className="text-3xl font-bold mb-12 text-center">リサイクル部品価値創造サービス</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">資源化の成功事例</h2>
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
              サーキュラーエコノミー実現に向けて、共に歩みましょう
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              廃棄予定の自動車部品の資源化について、お気軽にご相談ください。
              環境貢献とコスト削減を両立する四方よしのビジネスモデルをご提案いたします。
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
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