import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";
import sourcingBusinessImage from "../assets/sourcing_business.jpg";

const SourcingBusiness = () => {
  const [_, setLocation] = useLocation();
  
  // Set page title and meta data
  useEffect(() => {
    document.title = "ソーシング事業 | Partsone";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Partsoneのソーシング事業では、企業が必要とする優秀な人材を効率的に発掘し、最適なマッチングを実現します。';
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
          title="ソーシング事業" 
          subtitle="企業が必要とする優秀な人材を効率的に発掘し、最適なマッチングを実現します。"
          center={false}
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <img 
              src={sourcingBusinessImage} 
              alt="ソーシング事業" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">事業概要</h3>
            <p className="text-muted-foreground mb-6">
              Partsoneのソーシング事業は、廃棄される予定の自動車から取り外された部品に新しい価値を見出し、必要としているお客様へつなげる環境配慮型ビジネスです。本来ゴミとなる運命だった自動車部品を再利用することで、資源の有効活用とCO2削減を促進し、地球温暖化防止に貢献しています。
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">主なサービス</h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>高品質リサイクル自動車部品の提供</li>
                  <li>希少部品のソーシングサービス</li>
                  <li>環境負荷低減コンサルティング</li>
                  <li>自動車部品の価値評価サービス</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">サービスの特徴</h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>徹底した品質管理による信頼性の高い部品提供</li>
                  <li>豊富な在庫と幅広い取引ネットワーク</li>
                  <li>環境貢献度の可視化と数値化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">ソーシング事業の強み</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">環境貢献</h4>
              <p className="text-muted-foreground">
                リサイクル自動車部品の流通促進により、CO2排出量削減と資源の有効活用を実現。環境負荷を数値化し、お客様の環境貢献を可視化します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">品質と信頼性</h4>
              <p className="text-muted-foreground">
                厳格な品質基準に基づいた部品選定と検査体制により、リサイクル部品でありながら高い信頼性と安全性を確保しています。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">価値の再創造</h4>
              <p className="text-muted-foreground">
                廃棄される予定だった部品に新たな価値を見出し、必要とするお客様へ届けることで、「廃棄物」を「資源」へと変換する価値創造を実現します。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">導入事例</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">A社（自動車修理工場）</h4>
              <p className="text-muted-foreground mb-4">
                修理費用の低減と環境貢献を両立したいA社に対し、高品質リサイクル部品を継続的に供給。年間約30%のコスト削減と、約15トンのCO2排出削減に貢献しました。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">B社（自動車部品販売業）</h4>
              <p className="text-muted-foreground mb-4">
                廃盤となった希少部品の入手に苦慮していたB社に対し、独自の調達ネットワークを活用して必要部品を提供。顧客満足度の向上と環境負荷低減の両方を実現しました。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">お問い合わせ</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partsoneのリサイクル自動車部品ソーシング事業についてのご質問や、お探しの部品に関するお問い合わせは、お気軽にご連絡ください。環境貢献とコスト削減の両立を実現するソリューションをご提案いたします。
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

export default SourcingBusiness;