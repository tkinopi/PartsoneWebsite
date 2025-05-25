import { SectionTitle } from "@/components/ui/section-title";

const PhilosophySection = () => {
  return (
    <section className="mb-16">
      <SectionTitle 
        title="企業理念" 
        subtitle="挑む ・ 創る ・ つなぐ" 
        center={true}
      />
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8 text-primary">挑戦と共創で、<br />循環型社会のエンジンになる</h3>
        <p className="text-xl leading-relaxed mb-10">
          私たちは「挑む・創る・つなぐ」を核に、<br />
          廃棄されるはずの資源に新たな価値を灯し続けます。<br />
          テクノロジーとデータを武器に、パートナーと共に<br />
          循環型社会を駆動するビジネスを実装します。
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-xl mb-4 text-primary">挑む</h4>
            <p className="text-muted-foreground">
              慣習や限界を恐れず、果敢に革新へ踏み出す。<br />
              失敗さえ学びに変え、次の突破口を開く。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-xl mb-4 text-primary">創る</h4>
            <p className="text-muted-foreground">
              データと発想を掛け算し、廃棄物から<br />
              持続可能な価値を生み出す"循環イノベーション"。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-xl mb-4 text-primary">つなぐ</h4>
            <p className="text-muted-foreground">
              顧客・社員・社会を結び、協働する輪を拡大。<br />
              共に学び、共に成長し、地球に還元する。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;