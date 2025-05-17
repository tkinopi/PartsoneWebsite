import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";

export default function CulturePage() {
  return (
    <RecruitPageLayout activeSection="culture">
      <div className="space-y-8">
        <SectionTitle 
          title="企業文化" 
          subtitle="Partsoneの価値観を形作る文化" 
        />
        
        <div className="prose prose-lg max-w-none">
          <p>
            Partsoneでは、イノベーションと協力を重視する文化を育んでいます。私たちは、多様な背景と専門知識を持つチームメンバーが集まり、互いに学び合い、成長する環境を大切にしています。
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">私たちの価値観</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-2">チャレンジ精神</h4>
              <p>新しいアイデアを恐れずに試し、失敗から学ぶことを奨励しています。常に変化する環境に適応し、革新的なソリューションを探求することが私たちの強みです。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-2">協力と信頼</h4>
              <p>チームワークを重視し、お互いを尊重し合う環境を築いています。多様な視点を受け入れ、共に成長することでより良い結果を生み出します。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-2">顧客中心主義</h4>
              <p>お客様のニーズを深く理解し、最適なソリューションを提供することにこだわります。私たちの成功はお客様の成功にかかっています。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-2">継続的学習</h4>
              <p>技術の急速な進化に対応するため、常に新しい知識とスキルを身につけることを重視しています。社員一人ひとりの成長をサポートします。</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">働き方</h3>
          <p>
            Partsoneでは、柔軟な働き方を推進しています。リモートワークとオフィスワークを組み合わせたハイブリッドな環境で、それぞれのライフスタイルに合わせた働き方を選択できます。
          </p>
          <p>
            また、定期的なチームビルディングイベントやスキルアップのための研修プログラムなど、社員の成長とチームの結束を強化するための取り組みを行っています。Partsoneでは、単に仕事をするだけでなく、キャリアを構築し、共に成長していく仲間を見つけることができます。
          </p>
        </div>
      </div>
    </RecruitPageLayout>
  );
}