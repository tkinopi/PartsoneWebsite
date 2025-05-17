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
          <h3 className="text-3xl font-bold mb-8 text-primary">未来を創るビジネスパートナーに</h3>
          <p className="text-xl leading-relaxed">
            すべての企業が、最適なリソースとテクノロジーを活用して持続的に成長できる世界を目指します。
            私たちは単なるサービス提供者ではなく、お客様と共に未来を創るパートナーとして、
            ビジネスの新たな可能性を切り開きます。
          </p>
        </div>
        
        <div className="bg-muted p-8 rounded-lg">
          <h4 className="text-2xl font-bold mb-6 text-center">2030年に向けたビジョン</h4>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">テクノロジーを通じた事業変革</h5>
              <p className="text-muted-foreground">
                最先端のテクノロジーを活用し、企業の事業変革を支援します。デジタルトランスフォーメーションの推進により、お客様のビジネスプロセスを効率化し、新たな価値創造を実現します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">グローバルなビジネスエコシステムの構築</h5>
              <p className="text-muted-foreground">
                国内外のパートナーと連携し、多様な価値観とスキルを持つプロフェッショナルのネットワークを構築します。これにより、グローバルな視点からお客様のビジネス課題解決を支援します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-4 text-primary">持続可能な社会への貢献</h5>
              <p className="text-muted-foreground">
                事業活動を通じてSDGsの達成に貢献し、環境や社会に配慮した持続可能なビジネスモデルの構築を支援します。経済的価値と社会的価値の両立を目指します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;