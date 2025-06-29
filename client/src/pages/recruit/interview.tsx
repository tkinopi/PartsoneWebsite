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
        image: "/images/hanzaki.png",
        content: [
          "前職では大手コンビニチェーンの案件など、何千万円規模のプロジェクトを複数経験してきました。そこで培った大手企業開発の厳格さと、ミスが許されない環境での経験が、今のPartsoneでの開発においても活かされています。",
          "私が最も重視しているのは、コードレビューの質です。単にコードが動くかどうかではなく、テストケースの網羅性から設計の妥当性まで、参考文献を交えながら原理原則に基づいた指導を心がけています。例えば、Clean Architectureの概念やSOLID原則について、Martin Fowlerの書籍やGoFのデザインパターンを引用しながら、なぜその設計が必要なのかを丁寧に説明します。",
          "バックエンドの主流技術スタックを構築し、後輩エンジニアの成長を支援することに大きなやりがいを感じています。これまで育成したインターン生の多くが大手IT企業に就職を果たしており、原理を理解した上でのスキル習得により、彼らは経験を積むたびに有能なエンジニアへと成長していく姿を見ることができます。教育においては表面的な技術の習得ではなく、根本的な理解を促すことで、どんな技術変化にも対応できるエンジニアを育てることを目指しています。",
        ],
      },
    ],
    business: [
      {
        name: "吉村 遼馬",
        position: "BisDev",
        joined: "2019年~",
        image: "/images/yoshimura.png",
        content: [
          "2022年に外交官志望から一転してPartsoneに入社。情報システム運用からセールス、経理、新卒・インターン対応まで、“困りごと”を自発的に調べ解決する役割を一手に担っています。",
          "仕組み化やコミュニケーション力の向上を課題としつつも、エンジニアとビジネスをつなぐ“通訳”として、市場ニーズを反映した提案ができる点に最大のやりがいを感じています。",
          "自律性が高く、自分のアイデアを速やかに実行できる環境だからこそ、これからも、自分の成長をどんどん加速させていけると感じております。",
        ],
      },
      {
        name: "久保 実央",
        position: "BisDev",
        joined: "2024年~",
        image: "/images/yubo.png",
        content: [
          "群馬県出身で自動車産業に親しみを感じつつ、新卒で大手コンサルファームに入社。しかしスピード感と手応えを求めて、2024年11月にPartsoneへ転職しました。",
          "現在はBizDevとして、現場で顧客課題を体感しながら要件定義からエンジニアへの開発依頼まで一貫して担当しています。。",
          "最も価値を感じるのは、複雑な課題を整理し、エンジニアと密に連携して市場ニーズを反映したプロダクトを生み出せることです",
        ],
      },
    ],
  };

  return (
    <RecruitPageLayout activeSection="interview">
      <div className="space-y-8">
        <SectionTitle
          title="社員インタビュー"
          subtitle="Partsoneで働く仲間たちの声"
        />

        <Tabs
          defaultValue="engineering"
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="engineering">エンジニアリング</TabsTrigger>
            <TabsTrigger value="business">ビジネス</TabsTrigger>
          </TabsList>

          {Object.entries(interviews).map(([department, members]) => (
            <TabsContent
              key={department}
              value={department}
              className="space-y-12 mt-8"
            >
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
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
                        {member.position} - {member.joined}
                      </div>
                      <h2 className="mt-2 text-2xl font-bold">{member.name}</h2>
                      <div className="mt-4 space-y-4">
                        {member.content.map((paragraph, i) => (
                          <p key={i} className="text-gray-600">
                            {paragraph}
                          </p>
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
