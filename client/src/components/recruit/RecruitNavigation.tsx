import SideNavigation from "@/components/shared/SideNavigation";

interface NavigationProps {
  activeSection: string;
}

const RecruitNavigation = ({ activeSection }: NavigationProps) => {
  const recruitNavItems = [
    { id: "culture", label: "企業文化" },
    { id: "message", label: "代表メッセージ" },
    { id: "interview", label: "社員インタビュー" },
    { id: "intern", label: "インターンシップ" },
    { id: "new-graduate", label: "新卒採用" },
    { id: "mid-career", label: "中途採用" },
  ];

  return (
    <SideNavigation 
      items={recruitNavItems}
      activeSection={activeSection}
      baseUrl="/recruit"
    />
  );
};

export default RecruitNavigation;