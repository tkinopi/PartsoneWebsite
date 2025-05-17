import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";

export default function MessagePage() {
  return (
    <RecruitPageLayout activeSection="message">
      <div className="space-y-8">
        <SectionTitle 
          title="代表メッセージ" 
          subtitle="未来をともに創り上げる仲間へ" 
        />
        
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
              alt="代表取締役社長 田中 誠" 
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center mt-4">
              <span className="block font-bold text-lg">田中 誠</span>
              <span className="text-gray-600">代表取締役社長</span>
            </p>
          </div>
          
          <div className="md:w-2/3 prose prose-lg max-w-none">
            <p className="text-xl font-medium leading-relaxed mb-6">
              「私たちは単なる企業ではなく、社会に価値を創造する組織であり続けたいと考えています。」
            </p>
            
            <p>
              Partsoneを立ち上げた当初から、私の夢は単に技術を提供するだけでなく、その技術を通じて人々の生活や仕事を根本的に改善することでした。私たちが提供するデジタルプラットフォームやソーシングソリューションは、単なるサービスではなく、お客様のビジネスに真の変革をもたらすツールです。
            </p>
            
            <p>
              急速に変化するデジタル環境において、私たちは常に最先端の技術と革新的なアイデアを追求し続けています。しかし、最も重要なのは、そのような技術やアイデアを生み出す人材です。Partsoneの成功は、情熱、創造性、そして卓越性に対する揺るぎない信念を持つチームメンバーによって支えられています。
            </p>
            
            <p>
              私たちは、多様なバックグラウンドと専門知識を持つ人材を積極的に採用しています。それぞれが持つユニークな視点や経験が、私たちのサービスをより豊かで効果的なものにしていると信じているからです。Partsoneで働くということは、単に職を得るだけでなく、未来を形作る一員になるということです。
            </p>
            
            <p>
              私たちは、社員一人ひとりの成長と発展にコミットしています。継続的な学習の機会、挑戦的なプロジェクト、そして協力的なチーム環境を提供することで、社員がプロフェッショナルとして、そして個人として成長できるよう支援しています。
            </p>
            
            <p>
              もし、あなたが技術の力で世界をより良くしたいと考えているなら、私たちのチームに加わることを検討してみてください。Partsoneでは、あなたの情熱とスキルを発揮し、真の変革を起こす機会があります。私たちとともに、デジタルの未来を築いていきましょう。
            </p>
          </div>
        </div>
      </div>
    </RecruitPageLayout>
  );
}