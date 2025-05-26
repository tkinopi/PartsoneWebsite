import { SectionTitle } from "@/components/ui/section-title";

const OverviewSection = () => {
  const companyDetails = [
    { label: "社名", value: "株式会社パーツワン" },
    { label: "所在地", value: "〒150-0033 東京都渋谷区猿楽町3-3 imas Shibuya 2F" },
    { label: "連絡先", value: "TEL.03-3463-2065 / FAX.03-3463-3782" },
    { label: "代表者名", value: "長倉 達也" },
    { label: "設立日", value: "2009年11月17日" },
    { 
      label: "事業内容", 
      value: (
        <ul>
          <li>・自動車のリサイクル部品・リビルト部品の卸売</li>
          <li>・リビルト部品の企画</li>
        </ul>
      )
    },
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
      </div>
    </section>
  );
};

export default OverviewSection;