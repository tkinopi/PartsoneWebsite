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
  // 縦並びのナビゲーション（画面サイズに関わらず表示）
  return (
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
  );
};

export default SideNavigation;