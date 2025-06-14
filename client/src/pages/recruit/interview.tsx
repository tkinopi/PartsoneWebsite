import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InterviewPage() {
  const [activeTab, setActiveTab] = useState("engineering");
  
  const interviews = {
    engineering: [
      {
        name: "半崎 学",
        position: "バックエンドエンジニア",
        joined: "2020年~",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content: [
          "アクセンチュアで大手コンビニチェーンの案件など、何千万円規模のプロジェクトを複数経験してきました。そこで培った大手企業開発の厳格さと、ミスが許されない環境での経験が、今のPartsoneでの開発においても活かされています。",
          "私が最も重視しているのは、コードレビューの質です。単にコードが動くかどうかではなく、テストケースの網羅性から設計の妥当性まで、参考文献を交えながら原理原則に基づいた指導を心がけています。例えば、Clean Architectureの概念やSOLID原則について、Martin Fowlerの書籍やGoFのデザインパターンを引用しながら、なぜその設計が必要なのかを丁寧に説明します。",
          "バックエンドの主流技術スタックを構築し、後輩エンジニアの成長を支援することに大きなやりがいを感じています。これまで育成したインターン生の多くが大手IT企業に就職を果たしており、原理を理解した上でのスキル習得により、彼らは経験を積むたびに有能なエンジニアへと成長していく姿を見ることができます。教育においては表面的な技術の習得ではなく、根本的な理解を促すことで、どんな技術変化にも対応できるエンジニアを育てることを目指しています。"
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