import { Link } from "wouter";

interface NavigationProps {
  activeSection: string;
}

const companyNavItems = [
  { id: "mission", label: "ミッション" },
  { id: "philosophy", label: "企業理念" },
  { id: "vision", label: "ビジョン" },
  { id: "history", label: "会社沿革" },
  { id: "values", label: "バリュー" },
  { id: "team", label: "私たちのチーム" },
  { id: "overview", label: "会社概要" },
];

const Navigation = ({ activeSection }: NavigationProps) => {
  return (
    <div className="bg-white border border-gray-100 p-4 rounded sticky top-24">
      <nav className="space-y-1">
        {companyNavItems.map((item) => (
          <Link
            key={item.id}
            href={`/company/${item.id}`}
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

export default Navigation;