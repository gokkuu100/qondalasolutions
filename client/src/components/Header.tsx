import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

interface SubMenuItem {
  href: string;
  label: string;
  description?: string;
}

interface NavItem {
  href: string;
  label: string;
  subItems?: SubMenuItem[];
}

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const isHomePage = location === "/";

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { 
      href: "/about", 
      label: "About",
      subItems: [
        { href: "/about", label: "About Us", description: "Learn about Zinex Technology" },
        { href: "/about#team", label: "Our Team", description: "Meet the people behind Zinex" },
        { href: "/about#mission", label: "Mission & Vision", description: "Our purpose and goals" },
      ]
    },
    { 
      href: "/solutions", 
      label: "Solutions",
      subItems: [
        { href: "/solutions", label: "All Solutions", description: "Overview of our offerings" },
        { href: "/advanced-software", label: "Advanced Software", description: "Custom software development" },
        { href: "/connected-systems", label: "Connected Systems", description: "IoT and integration solutions" },
        { href: "/drone-technology", label: "Drone Technology", description: "Aerial and autonomous systems" },
        { href: "/process-automation", label: "Process Automation", description: "Streamline your operations" },
      ]
    },
    { 
      href: "/industries", 
      label: "Industries",
      subItems: [
        { href: "/industries", label: "All Industries", description: "Industries we serve" },
        { href: "/healthcare", label: "Healthcare", description: "Medical technology solutions" },
        { href: "/logistics", label: "Logistics", description: "Supply chain optimization" },
        { href: "/government", label: "Government", description: "Public sector solutions" },
        { href: "/enterprise", label: "Enterprise", description: "Large-scale business solutions" },
      ]
    },
    { href: "/contact", label: "Contact" },
  ];

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`${isHomePage ? "fixed" : "sticky"} top-0 z-[100] w-full transition-all duration-300 bg-white shadow-sm border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity -ml-2">
              <img 
                src="/zinex-logo.png" 
                alt="Zinex Technology" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 flex items-center gap-1 transition-colors duration-200 ${
                    location === item.href || location.startsWith(item.href + "/") || 
                    (item.subItems && item.subItems.some(sub => location === sub.href))
                      ? "text-zinex-red font-medium" 
                      : "text-zinex-blue hover:text-zinex-red"
                  }`}
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-72 bg-white shadow-lg border border-gray-200 rounded-b-lg overflow-hidden z-50">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className={`font-medium ${location === subItem.href ? 'text-zinex-red' : 'text-zinex-blue'}`}>
                            {subItem.label}
                          </div>
                          {subItem.description && (
                            <div className="text-sm text-gray-500 mt-0.5">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="hidden md:block bg-zinex-red text-white hover:bg-zinex-red-dark"
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
                  className="md:hidden text-zinex-blue hover:text-zinex-red"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="flex flex-col space-y-2 mt-6">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className={`block text-lg font-medium py-2 text-zinex-blue hover:text-zinex-red transition-colors ${
                          location === item.href ? "text-zinex-red" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 border-l-2 border-gray-200 pl-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block py-1.5 text-sm transition-colors ${
                                location === subItem.href ? "text-zinex-red" : "text-gray-600 hover:text-zinex-red"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button 
                    className="bg-zinex-red text-white hover:bg-zinex-red-dark mt-4"
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
