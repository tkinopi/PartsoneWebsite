import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SocialIcons } from "@/components/ui/social-icons";
import { Link } from "wouter";
import partsoneLogoPath from "@/assets/partsone_logo.png";

const Footer = () => {
  const footerLinks = {
    services: [
      { label: "ソーシング事業", href: "/services/sourcing" },
      { label: "デジタルプラットフォーム事業", href: "/services/digital-platform" },
    ],
    company: [
      { label: "ミッション", href: "/company/mission" },
      { label: "企業理念", href: "/company/philosophy" },
      { label: "ビジョン", href: "/company/vision" },
      { label: "バリュー", href: "/company/values" },
      { label: "会社沿革", href: "/company/history" },
      { label: "私たちのチーム", href: "/company/team" },
      { label: "会社概要", href: "/company/overview" },
    ],
    recruit: [
      { label: "企業文化", href: "/recruit/culture" },
      { label: "代表メッセージ", href: "/recruit/message" },
      { label: "社員インタビュー", href: "/recruit/interview" },
      { label: "インターンシップ", href: "/recruit/intern" },
      { label: "新卒採用", href: "/recruit/new-graduate" },
      { label: "中途採用", href: "/recruit/mid-career" },
    ],
    support: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/support/faq" },
      { label: "サポートセンター", href: "/support/center" },
      { label: "個人情報保護方針", href: "/support/privacy-policy" },
      { label: "利用規約", href: "/support/terms" },
      { label: "サイトマップ", href: "/support/sitemap" },
    ],
  };

  return (
    <footer className="bg-secondary text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-3">
              <div className="bg-secondary p-1 inline-block rounded mb-4">
                <img
                  src={partsoneLogoPath}
                  alt="Partsone Logo"
                  className="h-8"
                />
              </div>
              <p className="text-gray-400 mb-4">
                総合レンタル会社として、お客様のビジネスをサポートするための最適なソリューションを提供します。
              </p>
              <SocialIcons className="text-gray-400 hover:text-white" />
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-4">事業内容</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-4">会社情報</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Recruit Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-4">採用情報</h4>
              <ul className="space-y-2">
                {footerLinks.recruit.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-4">サポート</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Partsone Inc. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
