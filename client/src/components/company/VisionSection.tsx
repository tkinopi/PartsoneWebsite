import { SectionTitle } from "@/components/ui/section-title";

const VisionSection = () => {
  return (
    <section className="mb-16">
      <SectionTitle 
        title="ビジョン" 
        subtitle="私たちが目指す未来" 
        center={true}
      />
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-8 text-primary">循環で世界を再起動する</h3>
          <p className="text-xl leading-relaxed">
            私たちは、すべての部品が最後まで価値を発揮し、<br />
            企業も地球も持続的に成長できる社会を実現します。<br />
            サービス提供者にとどまらず、お客様とともに<br />
            "循環"という新しい常識をつくり上げるビジネスパートナーへ。
          </p>
        </div>
        
        <div className="bg-muted p-8 rounded-lg">
          <h4 className="text-2xl font-bold mb-6 text-center">中長期ロードマップ</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">データ駆動リサイクル標準化</h5>
              <p className="text-muted-foreground">
                部品履歴・需要をリアルタイムで共有し、<br />
                安価に「買う／売る」を両立する循環市場を完成させる。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">循環同盟グローバル拡大</h5>
              <p className="text-muted-foreground">
                国内からアジア・欧州へネットワークを拡大し、<br />
                資源・知見を越境で循環させる国際エコシステムを構築。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">若手発DXで業界を再起動</h5>
              <p className="text-muted-foreground">
                既存プロセスを自動化・可視化し、<br />
                現場が革新を生む組織文化でリユースの未来を牽引。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;