import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";

export default function CulturePage() {
  return (
    <RecruitPageLayout activeSection="culture">
      <div className="space-y-8">
        <SectionTitle 
          title="企業文化" 
          subtitle="Parts One の価値観を形づくる文化" 
        />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            Parts One は「勇気とアイディアで新たな価値観を創造する」という理念のもと、<br />
            愛情・個性・プロ意識の3つを核にしたカルチャーを育んでいます。<br />
            多様なバックグラウンドを持つメンバーが互いを尊重し、学び合いながら<br />
            循環型ビジネスを前進させる——それが私たちの企業文化です。<br />
            <span className="text-muted-foreground">株式会社パーツワン</span>
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">私たちの価値観</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-3">チャレンジ精神</h4>
              <p className="text-sm text-muted-foreground mb-2">新しいアイデアを恐れず試し、失敗から学ぶ。</p>
              <p className="text-sm">個性×個性の化学反応を歓迎し、革新的ソリューションを探求します。<br />
              <span className="text-muted-foreground">株式会社パーツワン</span></p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-3">協力と信頼</h4>
              <p className="text-sm text-muted-foreground mb-2">相手の当事者となり、共に答えを探す。</p>
              <p className="text-sm">1on1やプロジェクトを通じて心から向き合い、長期的な信頼関係を築きます。<br />
              <span className="text-muted-foreground">株式会社パーツワン</span></p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-3">顧客中心主義</h4>
              <p className="text-sm text-muted-foreground mb-2">本質的課題を言語化し、解決するパートナー。</p>
              <p className="text-sm">"誰の・どの過程の・どの課題"を解くかを起点に、深い価値提供を行います。<br />
              <span className="text-muted-foreground">株式会社パーツワン</span></p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-primary mb-3">継続的学習</h4>
              <p className="text-sm text-muted-foreground mb-2">絶えず学び、ベストを尽くす。</p>
              <p className="text-sm">毎朝の1分間スピーチや事業提案プレゼンで知識を共有し合い、成長を加速します。<br />
              <span className="text-muted-foreground">株式会社パーツワン</span></p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">働き方</h3>
          <p className="text-lg leading-relaxed mb-6">
            Parts One では、リモート×オフィスのハイブリッドを基本に、<br />
            メンバーのライフスタイルやプロジェクト特性に合わせた柔軟な働き方を推進。<br />
            定期的なチームビルディングイベントやスキルアップ研修を通じて<br />
            「仕事をする場」だけでなく「キャリアを共に創る場」を提供しています。<br />
            1on1ミーティングやアクションプラン制度が、個々の挑戦を後押しします。
          </p>


        </div>
      </div>
    </RecruitPageLayout>
  );
}