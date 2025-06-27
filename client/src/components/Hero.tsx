import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="gradient-hero text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Enterprise Innovation
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Comprehensive technology solutions combining software, hardware, and AI-driven automation for modern businesses.
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
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=700"
              alt="Modern corporate technology workspace"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
