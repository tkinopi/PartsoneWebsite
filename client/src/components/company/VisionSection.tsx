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
          <h4 className="text-2xl font-bold mb-6 text-center">2030年に向けたビジョン</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">テクノロジー主導の循環革新</h5>
              <p className="text-muted-foreground">
                AIとブロックチェーンで部品の<br />
                ライフサイクルを完全トレーサブル化。<br />
                廃棄ゼロへ向けた新しい基準を確立します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">グローバル循環ネットワークの確立</h5>
              <p className="text-muted-foreground">
                50か国・2万社とつながる<br />
                "循環アライアンス"を構築。<br />
                国境を超えて資源と知見を共有します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">カーボンネガティブの実現</h5>
              <p className="text-muted-foreground">
                自社オペレーションを2030年までに<br />
                "排出マイナス"へ転換。<br />
                ビジネスで地球温暖化に挑みます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;