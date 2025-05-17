import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";

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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="ソーシング事業" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">事業概要</h3>
            <p className="text-muted-foreground mb-6">
              Partsoneのソーシング事業は、企業の人材ニーズに応じた最適な人材を発掘し、効率的なマッチングを実現するサービスです。国内外のプロフェッショナル人材ネットワークを活用し、企業の成長に不可欠な人材確保をサポートします。
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">主なサービス</h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>エグゼクティブサーチ</li>
                  <li>専門人材の採用支援</li>
                  <li>グローバル人材の発掘</li>
                  <li>採用戦略コンサルティング</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg">サービスの特徴</h4>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>独自の人材データベースによる高精度マッチング</li>
                  <li>業界に特化したスペシャリストによる選考プロセス</li>
                  <li>採用後のフォローアップ体制</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">ソーシング事業の強み</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">豊富なネットワーク</h4>
              <p className="text-muted-foreground">
                国内外の多様な業界・職種の人材とのネットワークを保有し、企業のニーズに合わせた人材紹介が可能です。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">専門知識と経験</h4>
              <p className="text-muted-foreground">
                各業界に精通したコンサルタントが、クライアント企業と候補者の双方の要望を理解し、最適なマッチングを実現します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-primary">カスタマイズされたアプローチ</h4>
              <p className="text-muted-foreground">
                企業の文化や将来ビジョンを理解した上で、単なるスキルマッチングだけでなく、長期的な視点での人材採用を支援します。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">導入事例</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">A社（IT業界）</h4>
              <p className="text-muted-foreground mb-4">
                海外進出に向けてグローバル人材の採用が課題となっていたA社に対し、複数の国際経験豊富なエンジニアとマーケティング専門家を紹介。予定より早い海外拠点設立に貢献しました。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">B社（製造業）</h4>
              <p className="text-muted-foreground mb-4">
                デジタルトランスフォーメーションを推進するにあたり、DX戦略を主導できる人材が不足していたB社に対し、IT業界での実績がある経営幹部を紹介。社内のデジタル化を成功させました。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">お問い合わせ</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partsoneのソーシング事業についてのご質問や、詳細な情報をご希望の方は、お気軽にお問い合わせください。専門のコンサルタントがご対応いたします。
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