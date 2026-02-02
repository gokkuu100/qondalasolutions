import { Link } from "wouter";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinex-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/zinex-logo-white.png" 
              alt="Zinex Technology" 
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming healthcare and logistics through connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/zinex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinex-red rounded-full flex items-center justify-center hover:bg-zinex-red-dark transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://x.com/ZinexTech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinex-red rounded-full flex items-center justify-center hover:bg-zinex-red-dark transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/zinextech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinex-red rounded-full flex items-center justify-center hover:bg-zinex-red-dark transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/advanced-software" className="hover:text-white transition-colors duration-200">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors duration-200">
                  Hardware Solutions
                </Link>
              </li>
              <li>
                <Link href="/drone-technology" className="hover:text-white transition-colors duration-200">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/connected-systems" className="hover:text-white transition-colors duration-200">
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/logistics" className="hover:text-white transition-colors duration-200">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="hover:text-white transition-colors duration-200">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/government" className="hover:text-white transition-colors duration-200">
                  Government
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-white transition-colors duration-200">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Zinex Technology. All rights reserved. | 
            <Link href="/about" className="hover:text-white transition-colors duration-200 ml-1 mr-1">About Us</Link> | 
            <Link href="/contact" className="hover:text-white transition-colors duration-200 ml-1">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
