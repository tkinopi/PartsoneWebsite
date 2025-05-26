import { SectionTitle } from "@/components/ui/section-title";

const ValuesSection = () => {
  const values = [
    {
      title: "循環志向",
      summary: "資源を無駄にせず、未来に活かす。",
      details: "すべての部品に「第二の生命」を与えることを前提に考えます。リユースとリサイクルの発想を事業の隅々まで浸透させ、環境負荷を最小化します。"
    },
    {
      title: "革新",
      summary: "常識を疑い、技術で突破する。",
      details: "AI・データ活用をはじめ最先端テクノロジーを積極導入。枠にとらわれない発想とスピードで、循環型サプライチェーンを進化させ続けます。"
    },
    {
      title: "誠実",
      summary: "透明性と責任が信頼を築く。",
      details: "ステークホルダーへのオープンな情報開示と、コンプライアンス徹底を最優先。約束を守り、持続的な関係を築きます。"
    },
    {
      title: "共創",
      summary: "多様な力を束ね、価値を拡げる。",
      details: "顧客・パートナー・地域社会と協働して課題を解決し、新たな価値を創出。互いの強みを引き出し合うエコシステムを構築します。"
    },
    {
      title: "成長",
      summary: "学びを続け、挑戦し続ける。",
      details: "個々のキャリア開発を支援し、組織としても常にアップデート。失敗から学び、成果へつなげることでより大きなインパクトを生み出します。"
    }
  ];

  return (
    <section className="mb-16">
      <SectionTitle 
        title="バリュー" 
        subtitle="私たちの行動指針" 
        center={true}
      />
      
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-8 text-primary text-center">循環型未来を駆動する 5 つの価値観</h3>
        <p className="text-xl text-center mb-12 leading-relaxed">
          Parts One のすべての挑戦は、資源循環を軸とした 5 つのコアバリューに根ざしています。<br />
          これらの価値観は、私たちの日々の判断と行動を導き、持続可能で信頼される企業文化を形づくります。
        </p>
        
        <div className="space-y-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary p-6">
                <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                <p className="text-white/90 mt-2 text-lg font-bold">{value.summary}</p>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">{value.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;