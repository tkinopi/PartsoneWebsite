import SideNavigation from "@/components/shared/SideNavigation";

interface NavigationProps {
  activeSection: string;
}

const companyNavItems = [
  { id: "mission", label: "ミッション" },
  { id: "philosophy", label: "企業理念" },
  { id: "vision", label: "ビジョン" },
  { id: "values", label: "バリュー" },
  { id: "history", label: "会社沿革" },
  { id: "team", label: "私たちのチーム" },
  { id: "overview", label: "会社概要" },
];

const Navigation = ({ activeSection }: NavigationProps) => {
  return (
    <SideNavigation 
      items={companyNavItems}
      activeSection={activeSection}
      baseUrl="/company"
    />
  );
};

export default Navigation;