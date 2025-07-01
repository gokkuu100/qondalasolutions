import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import qondalaLogo from "@assets/Logo Q_1751396176613.png";
import qondalaLogoWhite from "@assets/Logo Q copy_1751396222158.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isHomePage = location === "/";

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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? "bg-transparent" 
        : "bg-white shadow-sm border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={isHomePage ? qondalaLogoWhite : qondalaLogo} 
                alt="Qondala" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isHomePage 
                    ? `text-white hover:text-gray-200 ${location === item.href ? "text-gray-200 font-medium" : ""}` 
                    : `text-ms-dark hover:text-ms-blue ${location === item.href ? "text-ms-blue font-medium" : ""}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className={`hidden md:block ${
                isHomePage 
                  ? "bg-primary text-white hover:bg-primary/90 border border-primary"
                  : "bg-ms-blue text-white hover:bg-ms-blue-dark"
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
                  className={`md:hidden ${isHomePage ? "text-white hover:text-gray-200" : ""}`}
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
