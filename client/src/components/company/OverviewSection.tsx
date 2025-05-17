import { SectionTitle } from "@/components/ui/section-title";

const OverviewSection = () => {
  const companyDetails = [
    { label: "会社名", value: "株式会社パーツワン" },
    { label: "設立", value: "2007年4月" },
    { label: "代表取締役", value: "佐藤 健太" },
    { label: "資本金", value: "1億円" },
    { label: "従業員数", value: "65名（2023年4月現在）" },
    { label: "事業内容", value: "ソーシング事業、デジタルプラットフォーム事業" },
    { label: "本社所在地", value: "〒100-0001 東京都千代田区丸の内1-1-1 パーツワンビル8F" },
    { label: "TEL", value: "03-1234-5678" },
    { label: "FAX", value: "03-1234-5679" },
    { label: "URL", value: "https://www.partsone.co.jp" },
    { label: "取引銀行", value: "みずほ銀行、三菱UFJ銀行、三井住友銀行" },
  ];

  return (
    <section className="mb-16">
      <SectionTitle 
        title="会社概要" 
        subtitle="Partsoneの基本情報" 
        center={true}
      />
      
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              {companyDetails.map((detail, index) => (
                <tr key={index} className={index !== companyDetails.length - 1 ? "border-b" : ""}>
                  <th className="py-4 px-6 text-left w-1/3 bg-muted">{detail.label}</th>
                  <td className="py-4 px-6">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">アクセスマップ</h3>
          <div className="aspect-[16/9] bg-slate-200 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-lg text-muted-foreground">
              ここに地図が表示されます
            </p>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">交通アクセス</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• JR東京駅 丸の内北口より徒歩5分</li>
              <li>• 東京メトロ丸ノ内線 東京駅より徒歩3分</li>
              <li>• 東京メトロ千代田線 二重橋前駅より徒歩4分</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;