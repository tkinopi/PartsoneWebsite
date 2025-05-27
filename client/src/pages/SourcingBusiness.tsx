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
    metaDescription.content = 'Partsoneのソーシング事業では、廃棄される予定の自動車部品に新たな命を吹き込み、資源化を通じてサーキュラーエコノミーの実現と地球温暖化防止に貢献します。';
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
          subtitle="ソーシング＝資源化。本来ゴミになるはずだった自動車部品に新たな命を吹き込み、サーキュラーエコノミーを実現します。"
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
            <h3 className="text-2xl font-bold mb-4">産業リサイクルの常識を変える</h3>
            <p className="text-muted-foreground mb-6">
              Partsoneのソーシング事業は、ソーシング＝資源化を意味します。地球温暖化を止め、サーキュラーエコノミーを実現するために、パーツワンは自動車部品の資源化＝ソーシングを行います。本来ゴミになるはずだった自動車部品に新たな命を吹き込み、必要としているお客様へつなげることで環境保全と経済活動の両立を目指しています。
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">脳に汗をかく本質的な思考</h4>
                <p className="text-muted-foreground mt-2 mb-3">
                  パーツワンでは論理的に仮説を立て、お客様にヒアリングを行い、お客様以上にお客様のことを考えることが求められます。「思考体力が尽きる」と社内でよく言いますが、思考力を毎日鍛えることで、少しずつ思考の筋肉が大きくなり、思考体力がつきます。自らの頭で考えて、脳に汗をかくことを大切にしています。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">三方よしを超える四方よし</h4>
                <p className="text-muted-foreground mt-2">
                  パーツワンのソーシング事業は、売り手と買い手をつなぐ商社事業です。売り手は廃棄される予定だったパーツが売れてお金になる、買い手はリーズナブルにパーツを購入できる、パーツワンは売り上げを上げる、さらにはリサイクルをすることで、結果的にCO²が削減されて環境にやさしい。お客様にも、取引先にも、会社にも、環境にも喜ばれるビジネスがパーツワンのソーシング事業です。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">サーキュラーエコノミーの実現</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">資源の循環</h4>
              <p className="text-muted-foreground">
                サーキュラーエコノミーとは、リサイクルをはじめとする資源の循環活動によって環境問題解決を目指す経済モデルです。パーツワンは、車両としての役目を終えた自動車が、部品としては価値があることに着目し、それを必要としてくださるお客様と結びつけています。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">環境貢献の数値化</h4>
              <p className="text-muted-foreground">
                リサイクル自動車部品の流通促進により、CO2排出量削減と資源の有効活用を実現。環境負荷を数値化し、お客様の環境貢献を可視化することで、持続可能な社会づくりへの貢献を実感いただけます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">価値の再創造</h4>
              <p className="text-muted-foreground">
                廃棄される予定だった部品に新たな命を吹き込み、必要とするお客様へ届けることで、「廃棄物」を「資源」へと変換。資源化＝ソーシングを通じて、環境と経済の好循環を生み出しています。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">資源化の成功事例</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">四方よしの実現（自動車修理工場との連携）</h4>
              <p className="text-muted-foreground mb-4">
                自動車修理工場と連携し、廃車予定の車両から高品質パーツを選別・再生。修理工場は修理コストの削減、車両オーナーは修理費用の負担軽減、パーツワンは適正利益を確保、そしてCO2排出削減による環境貢献を実現。四方よしのビジネスモデルが完成しました。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">サーキュラーエコノミーの構築（部品再生ネットワーク）</h4>
              <p className="text-muted-foreground mb-4">
                全国の自動車解体業者と連携し、廃棄予定部品の流通ネットワークを構築。多数の部品が「廃棄物」から「資源」へと生まれ変わり、新品製造に比べてCO2削減を実現。資源循環型社会の実現に向けた具体的な一歩を示しています。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">お問い合わせ</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partsoneの自動車部品資源化（ソーシング）事業についてのご質問や、お探しの部品に関するお問い合わせは、お気軽にご連絡ください。四方よしのビジネスモデルを通じて、環境貢献とコスト削減の両立を実現するソリューションをご提案いたします。サーキュラーエコノミー実現に向けた一歩を、共に踏み出しましょう。
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

export default SourcingBusiness;