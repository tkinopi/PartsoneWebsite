import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InterviewPage() {
  const [activeTab, setActiveTab] = useState("engineering");
  
  const interviews = {
    engineering: [
      {
        name: "山田 健太",
        position: "シニアエンジニア",
        joined: "2020年",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: [
          "私は新しい技術を学び、挑戦することが好きなので、Partsoneの環境は私にとって理想的です。ここでは常に最新の技術トレンドに触れる機会があり、実際のプロジェクトで革新的なソリューションを実装することができます。",
          "特に印象的なのは、チーム内でのコラボレーションの質の高さです。エンジニア同士でのコードレビューは非常に建設的で、お互いの成長につながっています。また、顧客の課題に直接取り組むことで、自分の仕事の影響力を実感できるのも魅力の一つです。",
          "社内の勉強会や技術共有セッションも定期的に開催されており、継続的な学習を支援する文化があります。入社してからの3年間で、私自身のスキルセットが大きく広がったと感じています。"
        ]
      },
      {
        name: "佐藤 真子",
        position: "フロントエンドデベロッパー",
        joined: "2022年",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: [
          "前職では大規模企業で働いていましたが、より柔軟な環境で自分のスキルを活かしたいと思い、Partsoneに転職しました。ここでは意思決定が迅速で、新しいアイデアを実装するまでのサイクルが短いことに驚きました。",
          "フロントエンドエンジニアとして、ユーザー体験を最適化することに情熱を持っていますが、Partsoneではその情熱を存分に発揮できる環境があります。デザインチームとの連携も密接で、ユーザー中心の製品開発を実践しています。",
          "リモートとオフィスのハイブリッドな働き方も魅力の一つです。自宅での集中作業とオフィスでの対面コラボレーションのバランスが取れており、生産性を最大化できています。"
        ]
      }
    ],
    business: [
      {
        name: "鈴木 隆",
        position: "ビジネスディベロップメントマネージャー",
        joined: "2019年",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        content: [
          "ビジネス開発の分野で10年以上の経験を積んだ後、成長段階にあるテック企業で新たなチャレンジを求めていました。Partsoneは技術的な革新と堅実なビジネス戦略のバランスが取れており、理想的な環境でした。",
          "日々の業務では、新規市場の調査から戦略的パートナーシップの構築まで、幅広い責任を担っています。自律性が高く、自分のアイデアを実行に移す機会が多いことが、この会社での仕事のやりがいです。",
          "最も価値を感じるのは、技術チームとビジネスチームの間の壁が低いことです。エンジニアと密に連携することで、製品開発の早い段階から市場のニーズを反映させることができます。この連携が、私たちのソリューションが市場で成功している大きな理由だと思います。"
        ]
      },
      {
        name: "中村 美咲",
        position: "マーケティングスペシャリスト",
        joined: "2021年",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: [
          "Partsoneに入社する前は、大手広告代理店でデジタルマーケティングを担当していました。テクノロジー業界に興味があり、B2Bマーケティングのスキルを深めたいと思っていたときに、Partsoneの求人を見つけました。",
          "マーケティングチームは小規模ながらも非常に効率的で、各メンバーが専門分野で力を発揮しています。私はコンテンツマーケティングとSEOを担当していますが、データ分析からクリエイティブ制作まで幅広いスキルを磨く機会があります。",
          "Partsoneの魅力は、マーケティング活動の効果を直接測定し、その結果をもとに戦略を迅速に調整できる点です。意思決定のスピードが速く、常に市場の変化に対応できるアジリティがあります。また、経営陣がマーケティングの価値を深く理解しており、必要なリソースとサポートを提供してくれることも大きな強みです。"
        ]
      }
    ]
  };
  
  return (
    <RecruitPageLayout activeSection="interview">
      <div className="space-y-8">
        <SectionTitle 
          title="社員インタビュー" 
          subtitle="Partsoneで働く仲間たちの声" 
        />
        
        <Tabs defaultValue="engineering" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="engineering">エンジニアリング</TabsTrigger>
            <TabsTrigger value="business">ビジネス</TabsTrigger>
          </TabsList>
          
          {Object.entries(interviews).map(([department, members]) => (
            <TabsContent key={department} value={department} className="space-y-12 mt-8">
              {members.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        className="h-full w-full object-cover" 
                        src={member.image} 
                        alt={member.name} 
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                        {member.position} - {member.joined}入社
                      </div>
                      <h2 className="mt-2 text-2xl font-bold">{member.name}</h2>
                      <div className="mt-4 space-y-4">
                        {member.content.map((paragraph, i) => (
                          <p key={i} className="text-gray-600">{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </RecruitPageLayout>
  );
}