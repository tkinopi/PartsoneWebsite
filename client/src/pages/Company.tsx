import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { teamMembersData } from "@/lib/constants";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { motion } from "framer-motion";

const Company = () => {
  const [_, setLocation] = useLocation();
  
  // Set page title and meta data
  useEffect(() => {
    document.title = "会社情報 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneの企業理念、ミッション、ビジョン、会社概要についてご紹介します。私たちは革新的なソリューションでお客様のビジネスを支援します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="pt-20">
      <Container className="py-16">
        <Button 
          variant="outline" 
          className="mb-8 flex items-center gap-2"
          onClick={() => setLocation("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          トップに戻る
        </Button>
        
        {/* Mission Section */}
        <section className="mb-24">
          <SectionTitle 
            title="ミッション" 
            subtitle="私たちの存在意義" 
            center={true}
          />
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-primary">ビジネスの可能性を最大化する</h3>
            <p className="text-xl leading-relaxed">
              私たちは、革新的なソリューションを通じて、企業のビジネス成長と効率化を実現します。
              最先端のテクノロジーと専門知識を活用し、お客様のビジネスが直面する課題を解決し、
              新たな価値創造を支援します。
            </p>
          </div>
        </section>
        
        {/* 企業理念 */}
        <section className="mb-24 bg-muted py-16 rounded-lg">
          <SectionTitle 
            title="企業理念" 
            subtitle="変化・挑戦・貢献" 
            center={true}
          />
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-xl leading-relaxed">
              「変化・挑戦・貢献」を基本理念とし、社会に貢献し続ける企業を目指しています。
              多様な価値観を持つお客様のニーズを的確に捉え、最適なソリューションを提供します。
            </p>
          </div>
        </section>
        
        {/* Vision Section */}
        <section className="mb-24">
          <SectionTitle 
            title="ビジョン" 
            subtitle="私たちが目指す未来" 
            center={true}
          />
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-primary">未来を創るビジネスパートナーに</h3>
            <p className="text-xl leading-relaxed">
              すべての企業が、最適なリソースとテクノロジーを活用して持続的に成長できる世界を目指します。
              私たちは単なるサービス提供者ではなく、お客様と共に未来を創るパートナーとして、
              ビジネスの新たな可能性を切り開きます。
            </p>
          </div>
        </section>
        
        {/* 会社沿革 */}
        <section className="mb-24">
          <SectionTitle 
            title="会社沿革" 
            subtitle="Partsoneの歩み" 
            center={true}
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                { year: "2007年", event: "パーツワン株式会社 設立" },
                { year: "2010年", event: "東京支社 開設" },
                { year: "2015年", event: "大阪支社 開設" },
                { year: "2018年", event: "ISO9001認証取得" },
                { year: "2020年", event: "福岡支社 開設" },
                { year: "2022年", event: "名古屋支社 開設" },
              ].map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white shadow-md shadow-slate-200 text-primary z-10 md:mx-0">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8v4l2 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white shadow-md">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-xl text-primary">{item.year}</div>
                    </div>
                    <div className="text-slate-800">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mb-24">
          <SectionTitle 
            title="バリュー" 
            subtitle="私たちの行動指針" 
            center={true}
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-bold mb-4 text-primary">革新</h4>
              <p className="text-muted-foreground">
                常に新しいアイデアを追求し、現状に満足せず、より良いソリューションを創造します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-bold mb-4 text-primary">誠実</h4>
              <p className="text-muted-foreground">
                すべての関係において透明性と誠実さを大切にし、信頼関係を構築します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h4 className="text-2xl font-bold mb-4 text-primary">結果</h4>
              <p className="text-muted-foreground">
                お客様の成功にコミットし、具体的な成果を出すことにフォーカスします。
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-24">
          <SectionTitle 
            title="私たちのチーム" 
            subtitle="Partsoneの成長を支える専門家たち" 
            center={true}
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {teamMembersData.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                position={member.position}
                description={member.description}
                imageSrc={member.imageSrc}
                index={index}
              />
            ))}
          </motion.div>
        </section>
        
        {/* Company Information */}
        <section className="mb-12">
          <SectionTitle 
            title="会社概要" 
            subtitle="Partsoneの基本情報" 
            center={true}
          />
          
          <div className="mt-8 max-w-3xl mx-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/3 bg-muted">会社名</th>
                  <td className="py-4 px-4">株式会社パーツワン</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/3 bg-muted">設立</th>
                  <td className="py-4 px-4">2018年4月</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/3 bg-muted">代表取締役</th>
                  <td className="py-4 px-4">佐藤 健太</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/3 bg-muted">資本金</th>
                  <td className="py-4 px-4">1億円</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/3 bg-muted">従業員数</th>
                  <td className="py-4 px-4">65名（2023年4月現在）</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/3 bg-muted">事業内容</th>
                  <td className="py-4 px-4">ソーシング事業、デジタルプラットフォーム事業</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left w-1/3 bg-muted">本社所在地</th>
                  <td className="py-4 px-4">〒100-0001 東京都千代田区丸の内1-1-1 パーツワンビル8F</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Company;