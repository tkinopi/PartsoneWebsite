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
    metaDescription.content = 'Partsoneのソーシング事業 - 企業のニーズに合わせた最適な人材や設備のソーシングソリューションを提供します。';
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
      description: "全国の自動車整備工場チェーンに高品質リサイクル部品を安定供給し、修理コスト30%削減と年間CO2排出量20トン削減を実現しました。",
      image: carParts1Image
    },
    {
      title: "クラシックカー愛好家向け希少部品調達",
      description: "生産終了から30年以上経過した希少なクラシックカー部品を独自ネットワークで調達し、貴重な車両の維持と文化的価値の保全に貢献しています。",
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
                "廃棄物から資源へ、価値の再創造"
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                Partsoneのソーシング事業は、廃棄される予定の自動車から取り外された部品に新しい価値を見出し、
                必要としているお客様へつなげる環境配慮型ビジネスです。本来ゴミとなる運命だった部品を再利用することで、
                資源の有効活用とCO2削減を促進し、持続可能な社会の実現に貢献しています。
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