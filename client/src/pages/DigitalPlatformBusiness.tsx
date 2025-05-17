import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";

const DigitalPlatformBusiness = () => {
  const [_, setLocation] = useLocation();
  
  // Set page title and meta data
  useEffect(() => {
    document.title = "デジタルプラットフォーム事業 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのデジタルプラットフォーム事業では、最新テクノロジーを活用した独自のデジタルプラットフォームを提供し、企業のDX推進を支援します。';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

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
        
        <SectionTitle 
          title="デジタルプラットフォーム事業" 
          subtitle="最新テクノロジーを活用した独自のデジタルプラットフォームを提供し、企業のDX推進を支援します。"
          center={false}
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="デジタルプラットフォーム事業" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">事業概要</h3>
            <p className="text-muted-foreground mb-6">
              Partsoneのデジタルプラットフォーム事業は、最新テクノロジーを活用した独自のデジタルプラットフォームを提供し、企業のDX（デジタルトランスフォーメーション）推進を包括的に支援します。クラウドベースのソリューションにより、ビジネスプロセスの効率化と新たな価値創造を実現します。
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">主なサービス</h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>クラウドベースの業務管理プラットフォーム</li>
                  <li>データ分析・可視化ツール</li>
                  <li>AI活用ソリューション</li>
                  <li>カスタマイズ可能なビジネスアプリケーション</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">サービスの特徴</h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>業界別に最適化された専用プラットフォーム</li>
                  <li>簡単な操作で高度なデータ活用が可能</li>
                  <li>他システムとの連携性の高さ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">デジタルプラットフォーム事業の強み</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">柔軟なカスタマイズ</h4>
              <p className="text-muted-foreground">
                お客様の業種や規模、業務プロセスに合わせて柔軟にカスタマイズが可能です。必要な機能だけを選択し、最適なシステムを構築できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">先進技術の活用</h4>
              <p className="text-muted-foreground">
                AI、機械学習、ビッグデータ分析などの先進技術を活用し、データドリブンな意思決定と業務効率化を支援します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">段階的な導入支援</h4>
              <p className="text-muted-foreground">
                初期コンサルティングからシステム導入、運用サポートまで一貫したサービスを提供し、企業のDX推進を持続的にサポートします。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">導入事例</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">C社（小売業）</h4>
              <p className="text-muted-foreground mb-4">
                複数店舗の在庫管理と顧客データ分析に課題を抱えていたC社に対し、クラウドベースの統合管理システムを導入。リアルタイムでの在庫確認と顧客行動分析が可能となり、売上が15%向上しました。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">D社（サービス業）</h4>
              <p className="text-muted-foreground mb-4">
                顧客対応の効率化と品質向上を目指していたD社に対し、AIを活用したカスタマーサポートプラットフォームを導入。対応時間の短縮と顧客満足度の向上を実現しました。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">お問い合わせ</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partsoneのデジタルプラットフォーム事業についてのご質問や、詳細な情報をご希望の方は、お気軽にお問い合わせください。専門のコンサルタントがご対応いたします。
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            size="lg"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("contact")?.offsetTop || 0,
                behavior: "smooth"
              });
              setLocation("/");
            }}
          >
            お問い合わせはこちら
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DigitalPlatformBusiness;