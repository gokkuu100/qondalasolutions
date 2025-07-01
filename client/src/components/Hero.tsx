import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="gradient-hero text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-4xl">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Healthcare and Logistics
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-ms-blue hover:bg-gray-100 font-semibold shadow-lg"
                asChild
              >
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-ms-blue font-semibold transition-all duration-200"
                asChild
              >
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
