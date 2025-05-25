import { SectionTitle } from "@/components/ui/section-title";

const MissionSection = () => {
  return (
    <section className="mb-16">
      <SectionTitle 
        title="ミッション" 
        subtitle="私たちの存在意義" 
        center={true}
      />
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-primary">産業リサイクルの常識を変え、<br />地球とビジネスを循環させる</h3>
        <p className="text-xl leading-relaxed mb-8">
          私たちParts Oneは、廃棄されるはずの自動車パーツに再び命を吹き込み、
          CO₂排出を削減しながら企業の収益性も高める循環型サプライチェーンを提供します。
          データとテクノロジーを掛け合わせた独自プラットフォームで、
          全国のパートナーとリアルタイムに在庫を共有し、
          必要な部品を最短・最適・最小インパクトで届ける——
          それが、私たちのミッションです。
        </p>
        <p className="text-lg text-muted-foreground">
          Parts Oneはサービス提供者に留まらず、
          <strong>「環境課題をビジネスで解決する」</strong>という新しい産業モデルを切り拓きます。
          善意だけに頼らない持続可能な仕組みを世界標準へ——
          私たちは仲間とともに、リユースを"当たり前"にする未来を創造します。
        </p>
      </div>
    </section>
  );
};

export default MissionSection;