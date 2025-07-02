import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroBackground from "@assets/Untitled-1s_1751422392117.png";
import mobileBackground from "@assets/mobile-bg-new.png";

export default function Hero() {
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Prioritize loading the appropriate image for current screen size
    const isMobileScreen = window.innerWidth < 768;
    
    if (isMobileScreen) {
      // Load mobile image first
      const mobileImg = new Image();
      mobileImg.onload = () => setMobileImageLoaded(true);
      mobileImg.src = mobileBackground;
      
      // Then load desktop image
      setTimeout(() => {
        const desktopImg = new Image();
        desktopImg.onload = () => setDesktopImageLoaded(true);
        desktopImg.src = heroBackground;
      }, 100);
    } else {
      // Load desktop image first
      const desktopImg = new Image();
      desktopImg.onload = () => setDesktopImageLoaded(true);
      desktopImg.src = heroBackground;
      
      // Then load mobile image
      setTimeout(() => {
        const mobileImg = new Image();
        mobileImg.onload = () => setMobileImageLoaded(true);
        mobileImg.src = mobileBackground;
      }, 100);
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const currentImageLoaded = isMobile ? mobileImageLoaded : desktopImageLoaded;

  return (
    <section className="relative text-white h-screen bg-gray-900 flex items-center">
      {/* Loading state */}
      {!currentImageLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ms-green"></div>
            <div className="text-white text-sm">Loading...</div>
          </div>
        </div>
      )}
      
      {/* Desktop Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block transition-opacity duration-500 ${
          desktopImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Mobile Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden transition-opacity duration-500 ${
          mobileImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
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
