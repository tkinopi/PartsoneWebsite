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
      {/* 現在の画面の大きさに関わらず横並びで表示 */}
      <nav>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Link
              key={item.id}
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