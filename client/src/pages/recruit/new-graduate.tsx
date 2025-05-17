import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function NewGraduatePage() {
  return (
    <RecruitPageLayout activeSection="new-graduate">
      <div className="space-y-8">
        <SectionTitle 
          title="新卒採用" 
          subtitle="次世代のリーダーを目指す方へ" 
        />
        
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Partsoneでは、好奇心旺盛で成長意欲の高い新卒人材を積極的に採用しています。私たちは単なる「社員」ではなく、会社と共に成長し、未来を創造するパートナーを求めています。
          </p>
          
          <p>
            私たちのミッションは、デジタル技術を通じてビジネスと社会に革新をもたらすこと。そのために必要なのは、技術的スキルだけでなく、課題を発見し解決する力、チームで協働する力、そして何より「変化を恐れず挑戦し続ける姿勢」です。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">エンジニアリング職</h3>
            <p className="mb-4">最新の技術を駆使して、革新的なソリューションを開発するエンジニアを募集しています。</p>
            
            <h4 className="font-bold mt-6 mb-2">求める人物像</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>新しい技術やツールを学ぶことに意欲的な方</li>
              <li>ユーザー視点でのプロダクト開発に興味がある方</li>
              <li>論理的思考力と問題解決能力を持つ方</li>
              <li>チームでの協働を大切にできる方</li>
            </ul>
            
            <h4 className="font-bold mt-6 mb-2">業務内容</h4>
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>Webアプリケーション開発（フロントエンド・バックエンド）</li>
              <li>クラウドインフラの設計・構築・運用</li>
              <li>データ分析基盤の開発</li>
              <li>自社サービスの機能設計・実装</li>
            </ul>
            
            <Button className="w-full" asChild>
              <Link href="/recruit/apply">応募する</Link>
            </Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">ビジネス職</h3>
            <p className="mb-4">マーケティング、営業、ビジネス開発など、ビジネスの最前線で活躍できる人材を募集しています。</p>
            
            <h4 className="font-bold mt-6 mb-2">求める人物像</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>デジタルビジネスに興味・関心がある方</li>
              <li>顧客の課題を理解し、最適な解決策を提案できる方</li>
              <li>データに基づいた戦略立案ができる方</li>
              <li>コミュニケーション能力が高く、チームプレーヤーである方</li>
            </ul>
            
            <h4 className="font-bold mt-6 mb-2">業務内容</h4>
            <ul className="list-disc list-inside space-y-1 mb-6">
              <li>法人営業・ソリューション提案</li>
              <li>マーケティング戦略の企画・実行</li>
              <li>新規事業開発・市場調査</li>
              <li>顧客サクセス・カスタマーサポート</li>
            </ul>
            
            <Button className="w-full" asChild>
              <Link href="/recruit/apply">応募する</Link>
            </Button>
          </Card>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mt-12">
          <h3 className="text-2xl font-bold mb-6">募集要項</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">募集職種</div>
              <div className="col-span-3">エンジニアリング職、ビジネス職</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">応募資格</div>
              <div className="col-span-3">2026年3月に大学・大学院を卒業見込みの方</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">選考フロー</div>
              <div className="col-span-3">
                <ol className="list-decimal list-inside">
                  <li>エントリー（履歴書・職務経歴書提出）</li>
                  <li>書類選考</li>
                  <li>適性検査</li>
                  <li>1次面接（オンライン）</li>
                  <li>2次面接（対面）</li>
                  <li>最終面接</li>
                  <li>内定</li>
                </ol>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">給与</div>
              <div className="col-span-3">月給25万円以上（能力・経験を考慮の上、当社規定により決定）</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">勤務地</div>
              <div className="col-span-3">東京都渋谷区（リモートワーク併用あり）</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">勤務時間</div>
              <div className="col-span-3">フレックスタイム制（コアタイム 10:00〜15:00）</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">休日休暇</div>
              <div className="col-span-3">完全週休2日制（土日）、祝日、年末年始、有給休暇、慶弔休暇</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">福利厚生</div>
              <div className="col-span-3">各種社会保険完備、交通費支給、住宅手当、研修支援制度、書籍購入支援</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="font-bold">応募締切</div>
              <div className="col-span-3">2025年6月30日</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/recruit/apply">応募する</Link>
          </Button>
        </div>
      </div>
    </RecruitPageLayout>
  );
}