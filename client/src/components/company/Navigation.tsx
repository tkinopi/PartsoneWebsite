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
    <div className="bg-muted p-6 rounded-lg sticky top-24">
      <h3 className="text-xl font-bold mb-6">会社情報</h3>
      <nav className="space-y-2">
        {companyNavItems.map((item) => (
          <Link
            key={item.id}
            href={`/company/${item.id}`}
            className={`block p-3 rounded-md transition-colors ${
              activeSection === item.id
                ? "bg-primary text-white font-medium"
                : "hover:bg-slate-200"
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