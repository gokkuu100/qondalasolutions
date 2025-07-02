import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroBackground from "@assets/Untitled-1s_1751422392117.png";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = heroBackground;
  }, []);
  return (
    <section className="relative text-white h-screen bg-gray-900 flex items-center">
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"></div>
      
      {/* Main background image with loading state */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 mt-4">
            <div className="flex items-center">
              <div className="text-left max-w-4xl">
                <div className="fade-in">
                  <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                    <div className="mb-2">Smarter Systems.</div>
                    <div className="mb-2">Real-Time Insight.</div>
                    <div>Scalable Impact.</div>
                  </h1>
                  <p className="text-lg lg:text-xl mb-12 text-gray-200 leading-relaxed max-w-2xl">
                    Connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration across industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
