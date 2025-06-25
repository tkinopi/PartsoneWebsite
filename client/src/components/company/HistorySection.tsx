import { SectionTitle } from "@/components/ui/section-title";

const HistorySection = () => {
  const historyItems = [
    {
      year: "2009年11月",
      event: "パーツワンスタート",
      description: "事業を開始し、自動車部品事業の基盤を築く",
    },
    {
      year: "2014年",
      event: "次代人財養成塾Ｏｎｅ－Ｗｉｌｌに参画",
      description: "大学生に向けた研修プログラムに協力",
    },
    {
      year: "2014年",
      event: "渋谷区道玄坂に事務所移転",
      description: "渋谷区南平台から道玄坂へ事務所を移転し、事業体制を整備",
    },
    {
      year: "2016年",
      event: "新卒採用・長期インターンシップの本格運用",
      description: "人材育成に注力し、長期インターンシップ制度をスタート",
    },
    {
      year: "2019年",
      event: "渋谷区代々木に事務所移転",
      description: "事業拡大に伴い代々木へ移転し、社内事業提案プレゼンを開始",
    },
    {
      year: "2019年",
      event: "ホンダパーツドットショップ開始",
      description: "ホンダディーラー向けサービスを本格的にスタート",
    },
    {
      year: "2020年",
      event: "自動車部品マッチングアプリ提案",
      description:
        "インターン生が社内事業提案でUzoneの原型となるマッチングアプリを提案",
    },
    {
      year: "2022年",
      event: "Uzone開発スタート",
      description: "自動車部品の自動マッチングシステムUzoneの開発を本格開始",
    },
    {
      year: "2024年",
      event: "Uzoneリリース",
      description:
        "革新的な自動車部品マッチングプラットフォームUzoneを正式リリース",
    },
    {
      year: "2024年",
      event: "現在地に事務所移転",
      description: "事業拡大に対応するため、現在の事務所に移転",
    },
    {
      year: "2024年",
      event: "中途採用強化",
      description: "組織拡大のため、中途採用の取り組みを強化",
    },
    {
      year: "2025年",
      event: "マネジメント人材採用強化",
      description: "中途採用でマネジメント層の人員を強化し、組織体制を充実",
    },
  ];

  return (
    <section className="mb-16">
      <SectionTitle title="会社沿革" subtitle="Partsoneの歩み" center={true} />

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {historyItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white shadow-md shadow-slate-200 text-primary z-10 md:mx-0">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8v4l2 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-xl text-primary">
                    {item.year}
                  </div>
                </div>
                <div className="mb-2 font-semibold text-lg">{item.event}</div>
                <div className="text-muted-foreground">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
