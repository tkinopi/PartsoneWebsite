import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import digitalPlatformImage from "../assets/digital_platform.png";

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
              src={digitalPlatformImage} 
              alt="デジタルプラットフォーム事業" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">事業概要</h3>
            <p className="text-muted-foreground mb-6">
              Partsoneのデジタルプラットフォーム事業は、自動車のリサイクルパーツに特化した流通プラットフォーム「Uzone」を自社開発しています。売り手と買い手が直接やり取りすることで流通コストを下げ、リサイクルパーツの流通を促進し、さらなるCO²削減を実現します。
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">産業リサイクルの常識を変える</h4>
                <p className="text-muted-foreground mt-2 mb-3">
                  そのための1手は"リサイクルのハードルを下げる"こと。現在の自動車パーツにおけるリサイクルの主な連絡手段はファックス・電話・LINEなど。手間も時間もかかる現状をITで解決します。
                </p>
                <p className="text-muted-foreground">
                  アプリからワンクリックでリサイクル注文ができるようになれば。アプリからワンクリックで自社在庫を出品できれば。産業リサイクルの常識が変わり、リサイクルがあたりまえになる。そんな世界をパーツワンが自社開発で作ります。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Uzoneアプリの特徴</h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>アプリからのワンクリック発注・出品システム</li>
                  <li>業界に特化した最適化された流通プラットフォーム</li>
                  <li>直接取引による流通コスト削減</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">自社アプリ開発の強み</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">アプリ開発の発案者はインターン生</h4>
              <p className="text-muted-foreground">
                Uzone（自社アプリ）の発案者は2020年当時のインターン生。社内プレゼン会での発表がUZoneの原点です。社歴や年齢、役職に関係なく、フラットに意見を言い合える環境と、実行に移せる体制があります。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">個別プロジェクト</h4>
              <p className="text-muted-foreground">
                社内の勤怠アプリや、自社ECサイト構築、ファックスの自動化、HP作成などUzoneの開発と同時並行で行われる個別のプロジェクトがあります。別プロジェクトによって新しい技術が身につき、開発アイデアが生まれます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">チーム開発</h4>
              <p className="text-muted-foreground">
                エンジニア組織は、フロントエンド開発、バックエンド開発、データ分析、OCR（画像認識技術）、HPS（自社ECサイト）などのチームに分かれながら、チームの垣根を超えたコミュニケーションを大切にしています。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Uzoneアプリの特徴と期待される効果</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">リサイクルのハードル低減</h4>
              <p className="text-muted-foreground mb-4">
                従来のファックスや電話に頼った自動車リサイクルパーツの取引をアプリで完結できるようにすることで、手間と時間を大幅に削減。ワンクリックで注文・出品ができるため、リサイクルへの障壁を下げ、より多くの事業者が参加できる環境を実現します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">流通コスト削減と環境貢献</h4>
              <p className="text-muted-foreground mb-4">
                売り手と買い手が直接取引できるプラットフォームを提供することで、中間マージンを削減し流通コストを下げます。これにより、リサイクルパーツの流通量が増加し、新品製造に比べて大幅なCO2削減効果が期待できます。産業リサイクルの常識を変え、持続可能な社会の実現に貢献します。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">お問い合わせ</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partsoneの自動車リサイクルパーツ流通アプリ「Uzone」についてのご質問や、詳細な情報をご希望の方は、お気軽にお問い合わせください。専門スタッフがご対応いたします。
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            size="lg"
            onClick={() => setLocation("/contact")}
          >
            お問い合わせはこちら
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DigitalPlatformBusiness;