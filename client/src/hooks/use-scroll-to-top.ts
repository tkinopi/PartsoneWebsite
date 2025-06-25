import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Hook that scrolls to top when the route changes
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [location]);
}