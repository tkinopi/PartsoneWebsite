import { useEffect } from "react";
import { Redirect } from "wouter";

// 最初のアクセスでミッションページにリダイレクト
const CompanyIndex = () => {
  useEffect(() => {
    document.title = "会社情報 | Partsone";
  }, []);

  return <Redirect to="/company/mission" />;
};

export default CompanyIndex;