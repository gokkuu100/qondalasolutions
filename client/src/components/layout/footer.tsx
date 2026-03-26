import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,20%)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Zinex Technology</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering enterprises with innovative technology solutions that drive growth, efficiency, and digital transformation across industries.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 bg-[hsl(207,90%,54%)] border-[hsl(207,90%,54%)] text-white hover:bg-[hsl(207,85%,48%)] hover:border-[hsl(207,85%,48%)]"
              >
                <FaLinkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 bg-[hsl(207,90%,54%)] border-[hsl(207,90%,54%)] text-white hover:bg-[hsl(207,85%,48%)] hover:border-[hsl(207,85%,48%)]"
              >
                <FaTwitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 bg-[hsl(207,90%,54%)] border-[hsl(207,90%,54%)] text-white hover:bg-[hsl(207,85%,48%)] hover:border-[hsl(207,85%,48%)]"
              >
                <FaFacebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/solutions">
                  <a className="hover:text-white transition-colors duration-200">Software Development</a>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <a className="hover:text-white transition-colors duration-200">Hardware Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <a className="hover:text-white transition-colors duration-200">AI & Automation</a>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <a className="hover:text-white transition-colors duration-200">Cloud Services</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors duration-200">Manufacturing</a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors duration-200">Transportation</a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors duration-200">Security</a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="hover:text-white transition-colors duration-200">Enterprise</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Zinex Technology. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
