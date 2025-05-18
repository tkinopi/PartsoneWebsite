import { Link } from "wouter";

interface NavItem {
  id: string;
  label: string;
}

interface SideNavigationProps {
  items: NavItem[];
  activeSection: string;
  baseUrl: string;
}

const SideNavigation = ({ items, activeSection, baseUrl }: SideNavigationProps) => {
  // 大画面用のナビゲーション（縦並び）
  const DesktopNavigation = () => (
    <div className="hidden lg:block">
      <div className="bg-white rounded p-2">
        <nav className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`${baseUrl}/${item.id}`}
              className={`block py-2 px-3 text-sm transition-colors ${
                activeSection === item.id
                  ? "text-primary font-medium border-l-2 border-primary pl-2"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );

  // 小中画面用のナビゲーション（横並び）
  const MobileNavigation = () => (
    <div className="lg:hidden">
      <div className="bg-white rounded p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`${baseUrl}/${item.id}`}
              className={`inline-block py-2 px-4 text-sm rounded-full transition-colors ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
};

export default SideNavigation;