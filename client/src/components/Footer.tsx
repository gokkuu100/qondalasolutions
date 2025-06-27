import { Link } from "wouter";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-qondala-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Qondala</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering enterprises with innovative technology solutions that drive growth, efficiency, and digital transformation across industries.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-ms-blue rounded-full flex items-center justify-center hover:bg-ms-blue-dark transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-ms-blue rounded-full flex items-center justify-center hover:bg-ms-blue-dark transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-ms-blue rounded-full flex items-center justify-center hover:bg-ms-blue-dark transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors duration-200">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors duration-200">
                  Hardware Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors duration-200">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors duration-200">
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/industries" className="hover:text-white transition-colors duration-200">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors duration-200">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors duration-200">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors duration-200">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Qondala. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
