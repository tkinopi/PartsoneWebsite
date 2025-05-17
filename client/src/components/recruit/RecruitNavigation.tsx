import { Link } from "wouter";

interface NavigationProps {
  activeSection: string;
}

const RecruitNavigation = ({ activeSection }: NavigationProps) => {
  const sections = [
    { id: "culture", label: "企業文化" },
    { id: "message", label: "代表メッセージ" },
    { id: "interview", label: "社員インタビュー" },
    { id: "intern", label: "インターンシップ" },
    { id: "new-graduate", label: "新卒採用" },
    { id: "mid-career", label: "中途採用" },
  ];

  return (
    <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl text-primary mb-6">採用情報</h3>
      <nav className="space-y-2">
        {sections.map(section => (
          <Link 
            key={section.id} 
            href={`/recruit/${section.id}`}
            className={`block py-2 px-4 rounded-md transition-colors ${
              activeSection === section.id 
                ? 'bg-primary/10 text-primary font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default RecruitNavigation;