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
        <h3 className="text-3xl font-bold mb-8 text-primary">ビジネスの可能性を最大化する</h3>
        <p className="text-xl leading-relaxed mb-8">
          私たちは、革新的なソリューションを通じて、企業のビジネス成長と効率化を実現します。
          最先端のテクノロジーと専門知識を活用し、お客様のビジネスが直面する課題を解決し、
          新たな価値創造を支援します。
        </p>
        <p className="text-lg text-muted-foreground">
          Partsoneは単なるサービス提供者ではなく、お客様のビジネスパートナーとして
          共に成長し、共に未来を創造することを目指しています。
          私たちの専門知識と経験を活かし、お客様のビジネスに最適なソリューションを提供します。
        </p>
      </div>
    </section>
  );
};

export default MissionSection;