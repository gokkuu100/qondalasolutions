import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import qondalaLogo from "@assets/Logo Q_1751396176613.png";
import qondalaLogoWhite from "@assets/Logo Q copy_1751396222158.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isHomePage = location === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > heroHeight * 0.8); // Change when 80% through hero
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Determine if we should show white background (scrolled on home page or not on home page)
  const showWhiteBackground = !isHomePage || (isHomePage && isScrolled);
  
  return (
    <header className={`${isHomePage ? "fixed" : "sticky"} top-0 z-[100] w-full transition-all duration-300 ${
      showWhiteBackground
        ? "bg-white shadow-sm border-b border-gray-200" 
        : "bg-black/40"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${showWhiteBackground ? "h-16" : "h-20 mt-4"}`}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={showWhiteBackground ? qondalaLogo : qondalaLogoWhite} 
                alt="Qondala" 
                className={showWhiteBackground ? "h-12 w-auto" : "h-16 w-auto"}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  showWhiteBackground
                    ? `text-ms-dark hover:text-ms-blue ${location === item.href ? "text-ms-blue font-medium" : ""}`
                    : `text-white hover:text-gray-200 ${location === item.href ? "text-white font-medium border-b-2 border-white pb-1" : ""}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className={`hidden md:block ${
                showWhiteBackground
                  ? "bg-ms-blue text-white hover:bg-ms-blue-dark"
                  : "bg-primary text-white hover:bg-primary/90 border border-primary"
              }`}
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`md:hidden ${showWhiteBackground ? "text-ms-dark hover:text-ms-blue" : "text-white hover:text-gray-200"}`}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium text-ms-dark hover:text-ms-blue transition-colors ${
                        location === item.href ? "text-ms-blue" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button 
                    className="bg-ms-blue text-white hover:bg-ms-blue-dark mt-4"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
