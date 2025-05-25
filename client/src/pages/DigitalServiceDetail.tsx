import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import digitalPlatformImage from "../assets/digital_platform.png";
import developerImage from "../assets/developer.jpg";
import teamImage from "../assets/team.jpg";

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
      title: "ワンクリック注文",
      description: "アプリからのワンクリックでリサイクルパーツを簡単に注文可能",
      icon: CheckCircle2
    },
    {
      title: "在庫即時出品",
      description: "企業が保有する在庫を簡単に出品でき、直接取引を実現",
      icon: CheckCircle2
    },
    {
      title: "環境貢献の可視化",
      description: "リサイクルパーツ利用によるCO2削減効果を数値で表示",
      icon: CheckCircle2
    },
    {
      title: "フラットな開発体制",
      description: "インターン生から役職者まで垣根なく意見を出し合える環境",
      icon: CheckCircle2
    }
  ];

  const caseStudies = [
    {
      title: "インターン発案のUzoneプロジェクト",
      description: "2020年、インターン生の発案からスタートしたUzoneプロジェクト。社内プレゼンをきっかけに、全社的なプロジェクトへと発展し、現在は自動車リサイクル業界の常識を変えるアプリ開発が進行中です。",
      image: developerImage
    },
    {
      title: "チーム垣根を超えた開発体制",
      description: "フロントエンド、バックエンド、データ分析、OCR技術など、各専門チームが垣根を超えて協力。多様な視点からのアイデア創出と技術融合により、業界に革新をもたらすプラットフォームを構築しています。",
      image: teamImage
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
                "産業リサイクルの常識を変える"
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                Partsoneは自動車のリサイクルパーツに特化した流通プラットフォーム「Uzone」を自社開発しています。
                売り手と買い手が直接やり取りできるアプリを通じて流通コストを削減し、リサイクルパーツの流通を促進。
                ファックスや電話に頼った現状をITで解決し、さらなるCO²削減を実現します。
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
            <h2 className="text-3xl font-bold mb-12 text-center">Uzoneアプリの主な特徴</h2>
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
            <h2 className="text-3xl font-bold mb-12 text-center">開発プロジェクトの特徴</h2>
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
              産業リサイクルの常識を変える取り組みに参加しませんか
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              自動車リサイクルパーツの流通促進を通じて環境保全に貢献するUzoneプロジェクト。
              自社アプリ開発に関するご質問やお問い合わせはこちらから。
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