import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Link } from "wouter";

export default function SitemapPage() {
  const sitemapData = [
    {
      title: "メインページ",
      links: [
        { label: "ホーム", url: "/" },
        { label: "事業内容", url: "/services" },
        { label: "お問い合わせ", url: "/contact" },
      ]
    },
    {
      title: "会社情報",
      links: [
        { label: "ミッション", url: "/company/mission" },
        { label: "企業理念", url: "/company/philosophy" },
        { label: "ビジョン", url: "/company/vision" },
        { label: "バリュー", url: "/company/values" },
        { label: "会社沿革", url: "/company/history" },
        { label: "私たちのチーム", url: "/company/team" },
        { label: "会社概要", url: "/company/overview" },
      ]
    },
    {
      title: "事業内容",
      links: [
        { label: "ソーシング事業", url: "/services/sourcing" },
        { label: "デジタルプラットフォーム事業", url: "/services/digital-platform" },
      ]
    },
    {
      title: "採用情報",
      links: [
        { label: "企業文化", url: "/recruit/culture" },
        { label: "代表メッセージ", url: "/recruit/message" },
        { label: "社員インタビュー", url: "/recruit/interview" },
        { label: "インターンシップ", url: "/recruit/intern" },
        { label: "新卒採用", url: "/recruit/new-graduate" },
        { label: "中途採用", url: "/recruit/mid-career" },
      ]
    },
    {
      title: "サポート",
      links: [
        { label: "お問い合わせ", url: "/contact" },
        { label: "よくある質問", url: "/support/faq" },
        { label: "サポートセンター", url: "/support/center" },
        { label: "個人情報保護方針", url: "/support/privacy-policy" },
        { label: "利用規約", url: "/support/terms" },
      ]
    },
  ];

  return (
    <div className="py-20">
      <Container>
        <SectionTitle 
          title="サイトマップ" 
          subtitle="Partsoneウェブサイトの全体像"
          center
        />
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.url}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}