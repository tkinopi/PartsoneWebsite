import { SectionTitle } from "@/components/ui/section-title";

const PhilosophySection = () => {
  return (
    <section className="mb-16">
      <SectionTitle 
        title="企業理念" 
        subtitle="変化・挑戦・貢献" 
        center={true}
      />
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-primary">共に成長し、社会に貢献する</h3>
        <p className="text-xl leading-relaxed mb-8">
          「変化・挑戦・貢献」を基本理念とし、社会に貢献し続ける企業を目指しています。
          多様な価値観を持つお客様のニーズを的確に捉え、最適なソリューションを提供します。
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-xl mb-4 text-primary">変化</h4>
            <p className="text-muted-foreground">
              常に変化する市場環境に適応し、新たな価値を創造し続けます。固定観念にとらわれず、柔軟な発想で課題に取り組みます。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-xl mb-4 text-primary">挑戦</h4>
            <p className="text-muted-foreground">
              現状に満足せず、常に高い目標に向かって挑戦し続けます。失敗を恐れず、新たな可能性を切り開くために果敢に行動します。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-xl mb-4 text-primary">貢献</h4>
            <p className="text-muted-foreground">
              お客様、社会、そして社員一人ひとりの成長に貢献することを使命とします。私たちの活動を通じて、より良い社会の実現を目指します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;