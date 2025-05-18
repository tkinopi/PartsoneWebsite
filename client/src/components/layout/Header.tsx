import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useScroll } from "@/hooks/use-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown 
} from "lucide-react";
import partsoneLogoPath from "@/assets/partsone_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScroll(50);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/company/mission", label: "会社情報", isPage: true },
    { href: "/recruit/culture", label: "採用情報", isPage: true },
    { href: "/services", label: "事業内容", isPage: true },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, isPage = false) => {
    if (isPage) {
      // For links to separate pages, let the default navigation happen
      setIsMenuOpen(false);
      return;
    }
    
    // For anchor links within the page
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;
    
    // If the link is to an anchor on the home page but we're not on the home page
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    
    if (!isHomePage && href.startsWith("#")) {
      // Redirect to home page with the anchor
      window.location.href = `/${href}`;
      return;
    }
    
    // For anchor links on the current page
    const targetElement = document.querySelector(href);
    if (!targetElement) return;
    
    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary shadow-md py-2" : "bg-secondary py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 relative z-10 -ml-4">
            <div className="bg-secondary p-1 rounded">
              <img 
                src={partsoneLogoPath} 
                alt="Partsone Logo" 
                className="h-8"
              />
            </div>
          </Link>

          {/* Desktop Navigation and Contact Button */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium text-white hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, false)}
                    className="font-medium text-white hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
            
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              <Link href="/contact">
                お問い合わせ
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <div className="flex flex-col justify-around w-6 h-5">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 pt-4 pb-6">
                {navLinks.map((link) => (
                  link.isPage ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-medium text-white hover:text-primary transition-colors text-lg py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, false)}
                      className="font-medium text-white hover:text-primary transition-colors text-lg py-2"
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <div className="pt-2">
                  <Button 
                    asChild 
                    className="bg-primary hover:bg-primary/90 text-white w-full"
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      お問い合わせ
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
