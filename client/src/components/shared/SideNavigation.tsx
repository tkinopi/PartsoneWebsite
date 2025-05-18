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
  return (
    <div className="bg-white border border-gray-100 p-4 rounded sticky top-24">
      {/* デスクトップ表示 - 縦並び */}
      <nav className="hidden md:block space-y-1">
        {items.map((item) => (
          <Link
            key={`desktop-${item.id}`}
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
      
      {/* モバイル表示 - 横並び */}
      <nav className="md:hidden">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Link
              key={`mobile-${item.id}`}
              href={`${baseUrl}/${item.id}`}
              className={`inline-block py-1 px-3 text-xs rounded-full transition-colors ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SideNavigation;