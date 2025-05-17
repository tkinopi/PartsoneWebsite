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
    { href: "/company", label: "会社情報", isPage: true },
    { href: "#services", label: "事業内容", isPage: false },
    { href: "#contact", label: "お問い合わせ", isPage: false },
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
        scrolled ? "bg-secondary shadow-md py-2" : "bg-secondary/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 relative z-10 -ml-2">
            <div className="bg-black p-1 rounded">
              <img 
                src={partsoneLogoPath} 
                alt="Partsone Logo" 
                className="h-10"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 mr-4">
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

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              <a href="#contact" onClick={(e) => handleNavLinkClick(e, false)}>
                お問い合わせ
              </a>
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
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
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
                    <a href="#contact" onClick={(e) => handleNavLinkClick(e, false)}>
                      お問い合わせ
                    </a>
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
