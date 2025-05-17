import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";

export default function MidCareerPage() {
  return (
    <RecruitPageLayout activeSection="mid-career">
      <div className="space-y-8">
        <SectionTitle 
          title="中途採用" 
          subtitle="キャリアを次のステージへ" 
        />
        
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Partsoneでは、経験豊富な専門家を迎え入れ、私たちのビジョンの実現を加速させたいと考えています。デジタルプラットフォーム事業やソーシング事業の成長に貢献できる、情熱とスキルを持った方々のご応募をお待ちしています。
          </p>
          
          <p>
            私たちは常に挑戦し続ける組織文化を大切にしています。これまでのキャリアで培った経験を活かしながら、新たな価値創造に取り組みたい方にとって、理想的な環境を提供しています。
          </p>
        </div>
        
        <Tabs defaultValue="engineering" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="engineering">エンジニアリング職</TabsTrigger>
            <TabsTrigger value="business">ビジネス職</TabsTrigger>
          </TabsList>
          
          <TabsContent value="engineering" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">バックエンドエンジニア</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">スケーラブルで堅牢なバックエンドシステムの設計・開発を担当するエンジニアを募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>バックエンド開発経験 3年以上</li>
                  <li>Node.js, Python, Goなどのいずれかの言語での開発経験</li>
                  <li>RDBMSの設計・運用経験</li>
                  <li>RESTful APIの設計・開発経験</li>
                  <li>AWSなどのクラウドサービスの利用経験</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>マイクロサービスアーキテクチャの設計・実装経験</li>
                  <li>CI/CDパイプラインの構築経験</li>
                  <li>コンテナ技術（Docker, Kubernetes）の経験</li>
                  <li>セキュリティに関する知識・経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">フロントエンドエンジニア</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">ユーザー体験を最優先に考えたWebアプリケーションの開発を行うエンジニアを募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>フロントエンド開発経験 2年以上</li>
                  <li>React, Vue.js, Angularなどのいずれかのフレームワークでの開発経験</li>
                  <li>HTML, CSS, JavaScript/TypeScriptの深い理解</li>
                  <li>レスポンシブデザインの実装経験</li>
                  <li>UIコンポーネントの設計・実装経験</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>Next.js, Nuxt.jsなどのメタフレームワークの経験</li>
                  <li>状態管理ライブラリ（Redux, MobX, Vuex）の経験</li>
                  <li>Web標準とアクセシビリティに関する知識</li>
                  <li>WebパフォーマンスとSEOの最適化経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">インフラエンジニア</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">クラウドインフラの設計・構築・運用を担当するエンジニアを募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>クラウドインフラ（AWS, GCP, Azure）の設計・構築経験 3年以上</li>
                  <li>Infrastructure as Code（Terraform, CloudFormation）の経験</li>
                  <li>Linux/Unixシステム管理経験</li>
                  <li>ネットワークの基礎知識</li>
                  <li>シェルスクリプトの実装経験</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>コンテナオーケストレーション（Kubernetes, ECS）の経験</li>
                  <li>CI/CDパイプラインの構築経験</li>
                  <li>セキュリティ関連の知識・経験</li>
                  <li>モニタリングツール（Prometheus, Grafana）の経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">QAエンジニア</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">品質保証と自動テスト戦略の策定・実施を担当するエンジニアを募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>QAエンジニアとしての経験 2年以上</li>
                  <li>テスト計画の策定・実行経験</li>
                  <li>自動テストフレームワークの使用経験</li>
                  <li>テスト戦略の設計経験</li>
                  <li>バグ管理ツールの使用経験</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>CI/CDパイプラインへのテスト統合経験</li>
                  <li>Selenium, Cypress, Jestなどのテストツールの経験</li>
                  <li>セキュリティテストの経験</li>
                  <li>パフォーマンステストの経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="business" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">セールスマネージャー</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">法人顧客への営業活動と顧客関係の構築・維持を担当する営業担当者を募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>法人営業経験 3年以上</li>
                  <li>ソリューション営業の経験</li>
                  <li>顧客折衝スキル</li>
                  <li>プレゼンテーションスキル</li>
                  <li>CRMツールの使用経験</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>IT/SaaS製品の営業経験</li>
                  <li>営業チームのマネジメント経験</li>
                  <li>顧客獲得からアップセルまでの一連のプロセス経験</li>
                  <li>営業戦略の立案経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">マーケティングマネージャー</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">マーケティング戦略の立案・実行を担当するマーケティング専門家を募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>B2Bマーケティング経験 3年以上</li>
                  <li>デジタルマーケティングの知識と経験</li>
                  <li>コンテンツマーケティングの経験</li>
                  <li>マーケティング施策の効果測定経験</li>
                  <li>マーケティングツールの使用経験</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>SaaS/ITサービスのマーケティング経験</li>
                  <li>リードジェネレーション施策の設計・実行経験</li>
                  <li>SEO/SEM/ソーシャルメディアマーケティングの経験</li>
                  <li>データ分析ツールの使用経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">カスタマーサクセスマネージャー</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">顧客の成功を支援し、長期的な関係構築を担当する顧客サクセス担当者を募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>カスタマーサクセスまたはアカウントマネジメント経験 2年以上</li>
                  <li>顧客満足度向上のための戦略立案・実行経験</li>
                  <li>顧客とのコミュニケーションスキル</li>
                  <li>問題解決能力</li>
                  <li>CRMツールの使用経験</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>SaaS/ITサービスのカスタマーサクセス経験</li>
                  <li>顧客育成プログラムの設計・実行経験</li>
                  <li>顧客フィードバックの分析と製品改善への反映経験</li>
                  <li>チャーン率低減施策の実施経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">ビジネスアナリスト</h3>
                <div className="bg-primary/5 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  正社員
                </div>
                <p className="mb-4">データ分析とビジネスインサイトの提供を担当するアナリストを募集しています。</p>
                
                <h4 className="font-bold mt-6 mb-2">必須スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                  <li>ビジネスアナリストまたはデータアナリストとしての経験 2年以上</li>
                  <li>データ分析ツール（SQL, Tableau, Power BI等）の使用経験</li>
                  <li>データに基づいた意思決定支援の経験</li>
                  <li>分析レポートの作成・プレゼンテーション経験</li>
                  <li>Excelの高度な利用スキル</li>
                </ul>
                
                <h4 className="font-bold mt-4 mb-2">歓迎スキル・経験</h4>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm">
                  <li>Python, R等を用いたデータ分析経験</li>
                  <li>機械学習・統計分析の知識</li>
                  <li>ビジネス要件の分析と機能要件への変換経験</li>
                  <li>KPI設計と追跡の経験</li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/recruit/apply">応募する</Link>
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-white p-8 rounded-lg shadow-md mt-12">
          <h3 className="text-2xl font-bold mb-6">募集要項</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">雇用形態</div>
              <div className="col-span-3">正社員（試用期間3ヶ月あり）</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">給与</div>
              <div className="col-span-3">年俸制 400万円〜1,000万円（経験・能力を考慮の上、当社規定により決定）</div>
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
              <div className="col-span-3">完全週休2日制（土日）、祝日、年末年始、有給休暇（入社半年後10日付与）、慶弔休暇</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">福利厚生</div>
              <div className="col-span-3">
                各種社会保険完備、交通費支給（上限月額3万円）、住宅手当、リモートワーク手当、書籍購入支援、資格取得支援、
                社内イベント、健康診断、従業員持株会
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 border-b pb-3">
              <div className="font-bold">選考プロセス</div>
              <div className="col-span-3">
                <ol className="list-decimal list-inside">
                  <li>書類選考</li>
                  <li>1次面接（オンライン）</li>
                  <li>2次面接（課題提出または技術面接）</li>
                  <li>最終面接</li>
                  <li>内定</li>
                </ol>
                ※選考は最短2週間程度で完了します
              </div>
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