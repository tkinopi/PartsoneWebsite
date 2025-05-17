import { SectionTitle } from "@/components/ui/section-title";

const ValuesSection = () => {
  const values = [
    {
      title: "革新",
      description: "常に新しいアイデアを追求し、現状に満足せず、より良いソリューションを創造します。",
      details: "私たちは変化を恐れず、常に新しい技術やアイデアを取り入れることで、お客様に最適なソリューションを提供します。既存の枠組みにとらわれない発想と行動力で、業界の先駆者としての役割を果たします。"
    },
    {
      title: "誠実",
      description: "すべての関係において透明性と誠実さを大切にし、信頼関係を構築します。",
      details: "私たちはお客様、社員、パートナー、そして社会との関係において常に誠実であることを重視します。約束を守り、オープンなコミュニケーションを通じて、長期的な信頼関係を築きます。"
    },
    {
      title: "結果",
      description: "お客様の成功にコミットし、具体的な成果を出すことにフォーカスします。",
      details: "私たちは常に結果を重視し、お客様のビジネス目標達成に向けて全力で取り組みます。具体的な成果を生み出すために、最後までやり抜く姿勢と責任感を持って行動します。"
    },
    {
      title: "共創",
      description: "お客様やパートナーと共に価値を創造し、相互の成長を実現します。",
      details: "私たちは一方的なサービス提供ではなく、お客様やパートナーと共に課題を解決し、新たな価値を創造することを目指します。多様な視点を尊重し、協力して最適な解決策を見出します。"
    },
    {
      title: "成長",
      description: "個人と組織の継続的な成長を追求し、常に自己研鑽に努めます。",
      details: "私たちは学び続ける姿勢を大切にし、個人と組織の両方が持続的に成長できる環境づくりに取り組みます。新しい知識やスキルの獲得を奨励し、プロフェッショナルとしての能力向上を支援します。"
    }
  ];

  return (
    <section className="mb-16">
      <SectionTitle 
        title="バリュー" 
        subtitle="私たちの行動指針" 
        center={true}
      />
      
      <div className="mt-12 max-w-4xl mx-auto">
        <p className="text-xl text-center mb-12">
          Partsoneの全ての活動の基盤となる5つの価値観をご紹介します。
          これらの価値観は私たちの判断や行動の指針となり、企業文化を形成しています。
        </p>
        
        <div className="space-y-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary p-6">
                <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-white/90 mt-2 text-lg">{value.description}</p>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{value.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;