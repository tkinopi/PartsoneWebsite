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
    <div className="bg-white border border-gray-100 p-4 rounded sticky top-24">
      <nav className="space-y-1">
        {sections.map(section => (
          <Link 
            key={section.id} 
            href={`/recruit/${section.id}`}
            className={`block py-2 px-3 text-sm transition-colors ${
              activeSection === section.id 
                ? 'text-primary font-medium border-l-2 border-primary pl-2' 
                : 'text-gray-600 hover:text-primary'
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