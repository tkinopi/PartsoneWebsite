import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SocialIcons } from "@/components/ui/social-icons";
import partsoneLogoPath from "@/assets/partsone_logo.png";

const Footer = () => {
  const footerLinks = {
    services: [
      { label: "OA機器レンタル", href: "#services" },
      { label: "イベント機材レンタル", href: "#services" },
      { label: "ネットワーク機器レンタル", href: "#services" },
      { label: "モバイル端末レンタル", href: "#services" },
      { label: "オフィス家具レンタル", href: "#services" },
      { label: "計測機器レンタル", href: "#services" },
    ],
    company: [
      { label: "会社概要", href: "#about" },
      { label: "企業理念", href: "#company" },
      { label: "チーム", href: "#company" },
      { label: "採用情報", href: "#" },
      { label: "ニュース", href: "#" },
      { label: "ブログ", href: "#" },
    ],
    support: [
      { label: "お問い合わせ", href: "#contact" },
      { label: "よくある質問", href: "#" },
      { label: "サポートセンター", href: "#" },
      { label: "個人情報保護方針", href: "#" },
      { label: "利用規約", href: "#" },
      { label: "サイトマップ", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="bg-white p-2 inline-block rounded mb-4">
                <img
                  src={partsoneLogoPath}
                  alt="Partsone Logo"
                  className="h-12"
                />
              </div>
              <p className="text-gray-400 mb-4">
                総合レンタル会社として、お客様のビジネスをサポートするための最適なソリューションを提供します。
              </p>
              <SocialIcons className="text-gray-400 hover:text-white" />
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">サービス</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">会社情報</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">サポート</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
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
