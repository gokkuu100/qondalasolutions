import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBackground from "@assets/Untitled-1s_1751422392117.png";
import mobileBackground from "@assets/mobile-bg-new.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      id: 1,
      title: {
        line1: "Smarter Systems.",
        line2: "Real-Time Insight.", 
        line3: "Scalable Impact."
      },
      description: "Connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration across industries.",
      ctaText: "EXPLORE MORE",
      ctaLink: "/about",
      desktopBg: "/hero-team.jpg",
      mobileBg: "/hero-team.jpg"
    },
    {
      id: 2,
      title: {
        line1: "Advanced AI.",
        line2: "Seamless Integration.",
        line3: "Unlimited Potential."
      },
      description: "Harness the power of artificial intelligence to transform your business operations and unlock new possibilities for growth.",
      ctaText: "DISCOVER AI SOLUTIONS",
      ctaLink: "/solutions",
      desktopBg: "/hero-slide-2-optimized.jpg",
      mobileBg: "/hero-slide-2-optimized.jpg"
    },
    {
      id: 3,
      title: {
        line1: "Innovation Driven.",
        line2: "Future Ready.",
        line3: "Zinex Powered."
      },
      description: "Experience next-generation technology solutions designed to propel your organization into the digital future.",
      ctaText: "START YOUR JOURNEY",
      ctaLink: "/contact",
      desktopBg: "/hero-slide-3-optimized.jpg",
      mobileBg: "/hero-slide-3-optimized.jpg"
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Auto-advance slides every 8 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative text-white min-h-screen bg-gray-900 flex items-center overflow-hidden pt-32 md:pt-28">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
            style={{ backgroundImage: `url(${slide.desktopBg})` }}
          />
          {/* Mobile Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: `url(${slide.mobileBg})` }}
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Content - Centered */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
              <div className="fade-in">
                {/* Logo Icon */}
                <div className="mb-6 md:mb-8">
                  <img 
                    src="/zinex-icon.png" 
                    alt="" 
                    className="h-16 md:h-20 w-auto mx-auto opacity-90"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-white">{slide.title.line1}</span>{" "}
                  <span className="text-zinex-red">{slide.title.line2}</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-gray-200 leading-relaxed max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <Link href={slide.ctaLink}>
                  <button className="bg-zinex-red hover:bg-zinex-red-dark text-white font-semibold py-3 px-8 transition-colors duration-200 text-sm md:text-base uppercase tracking-wide">
                    {slide.ctaText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-zinex-red' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
