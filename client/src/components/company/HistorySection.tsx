import { SectionTitle } from "@/components/ui/section-title";

const HistorySection = () => {
  const historyItems = [
    { year: "2007年", event: "パーツワン株式会社 設立", description: "東京都渋谷区に本社を設立し、レンタルサービス事業を開始" },
    { year: "2010年", event: "東京支社 開設", description: "事業拡大に伴い、東京都中央区に東京支社を開設し、営業体制を強化" },
    { year: "2015年", event: "大阪支社 開設", description: "関西地区のお客様のニーズに応えるため、大阪市に支社を開設" },
    { year: "2018年", event: "ISO9001認証取得", description: "品質マネジメントシステムの国際規格ISO9001の認証を取得し、サービス品質の向上に努める" },
    { year: "2020年", event: "福岡支社 開設", description: "九州地区での事業拡大のため、福岡市に支社を開設" },
    { year: "2022年", event: "名古屋支社 開設", description: "中部地区のお客様へのサービス向上を目指し、名古屋市に支社を開設" },
  ];

  return (
    <section className="mb-16">
      <SectionTitle 
        title="会社沿革" 
        subtitle="Partsoneの歩み" 
        center={true}
      />
      
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {historyItems.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white shadow-md shadow-slate-200 text-primary z-10 md:mx-0">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4l2 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-xl text-primary">{item.year}</div>
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