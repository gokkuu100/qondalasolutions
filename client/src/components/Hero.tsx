import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroBackground from "@assets/Untitled-1s_1751422392117.png";
import mobileBackground from "@assets/mobile-bg.png";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = heroBackground;
  }, []);
  return (
    <section className="relative text-white h-screen bg-gray-900 flex items-center">
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${mobileBackground})` }}
      />
      <div className="relative z-10 h-full flex items-end md:items-center pb-16 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left max-w-4xl pt-16 md:pt-20">
            <div className="fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight">
                <div className="mb-1 md:mb-2">Smarter Systems.</div>
                <div className="mb-1 md:mb-2">Real-Time Insight.</div>
                <div>Scalable Impact.</div>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-12 text-gray-200 leading-relaxed max-w-2xl">
                Connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration across industries.
              </p>
              <button className="bg-ms-green hover:bg-ms-green-dark text-black font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-sm md:text-base">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
