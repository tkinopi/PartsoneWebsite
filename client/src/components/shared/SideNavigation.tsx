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
    <div className="bg-white rounded p-2">
      {/* 大画面では縦並び */}
      <nav className="hidden md:block space-y-1">
        {items.map((item) => (
          <Link
            key={`desktop-${item.id}`}
            href={`${baseUrl}/${item.id}`}
            className={`block py-2 text-sm transition-colors border-l-2 ${
              activeSection === item.id
                ? "text-primary font-medium border-primary pl-3"
                : "text-gray-600 hover:text-primary border-transparent pl-3"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      {/* スマホサイズでは横並び */}
      <nav className="md:hidden">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Link
              key={`mobile-${item.id}`}
              href={`${baseUrl}/${item.id}`}
              className={`py-1 px-3 text-xs rounded-full transition-colors ${
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