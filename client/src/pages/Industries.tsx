import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Factory, Truck, Shield, Building, Cog, Wrench, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Industries() {
  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      image: "/healthcare-image.jpg",
      description: "Transform healthcare delivery with data-driven platforms that enhance patient outcomes, streamline operations, and foster collaboration across healthcare ecosystems.",
      solutions: ["Electronic Health Records", "Patient Management Systems", "Medical Device Integration", "Healthcare Analytics"],
      benefits: ["Improved Patient Care", "Operational Efficiency", "Data-Driven Decisions", "Enhanced Collaboration"]
    },
    {
      name: "Manufacturing",
      icon: Factory,
      image: "/manufacturing-image.jpg",
      description: "Transform your manufacturing operations with smart factory solutions, predictive maintenance, and production optimization technologies.",
      solutions: ["Smart Factory Automation", "Predictive Maintenance", "Quality Control Systems", "Supply Chain Optimization"],
      benefits: ["Increased Efficiency", "Reduced Downtime", "Cost Savings", "Quality Improvement"]
    },
    {
      name: "Transportation",
      icon: Truck,
      image: "/transportation-image.jpg",
      description: "Optimize your logistics and transportation networks with intelligent fleet management, route optimization, and real-time tracking systems.",
      solutions: ["Fleet Management", "Route Optimization", "Real-time Tracking", "Fuel Management"],
      benefits: ["Reduced Costs", "Improved Delivery Times", "Enhanced Safety", "Environmental Impact"]
    },
    {
      name: "Security",
      icon: Shield,
      image: "/security-image.jpg",
      description: "Protect your assets and data with comprehensive cybersecurity solutions, surveillance systems, and advanced threat detection.",
      solutions: ["Cybersecurity Solutions", "Surveillance Systems", "Access Control", "Threat Detection"],
      benefits: ["Enhanced Security", "Risk Mitigation", "Compliance", "Peace of Mind"]
    },
    {
      name: "Enterprise",
      icon: Building,
      image: "/enterprise-business-new.jpg",
      description: "Scale your enterprise operations with large-scale solutions, system integration, and comprehensive digital platforms.",
      solutions: ["Enterprise Resource Planning", "System Integration", "Digital Platforms", "Data Analytics"],
      benefits: ["Scalability", "Integration", "Efficiency", "Data-Driven Decisions"]
    },
    {
      name: "Business Automation",
      icon: Cog,
      image: "/business-automation-updated.png",
      description: "Streamline your business processes with workflow automation, process optimization, and digital transformation solutions.",
      solutions: ["Workflow Automation", "Process Optimization", "Digital Transformation", "Business Intelligence"],
      benefits: ["Process Efficiency", "Cost Reduction", "Accuracy", "Competitive Advantage"]
    },
    {
      name: "Custom Solutions",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Get tailored technology solutions designed specifically for your unique business needs and operational requirements.",
      solutions: ["Custom Development", "Specialized Integration", "Unique Requirements", "Consultative Approach"],
      benefits: ["Perfect Fit", "Unique Advantage", "Specialized Support", "Long-term Partnership"]
    }
  ];

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/industries-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ms-dark mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized technology solutions across key industry verticals, delivering measurable impact and driving innovation in every sector we serve.
          </p>
        </div>

        <Tabs defaultValue="healthcare" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 gap-2 h-auto p-1 bg-white/90 backdrop-blur-sm rounded-xl">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <TabsTrigger
                  key={index}
                  value={industry.name.toLowerCase().replace(/ /g, '-')}
                  className="flex flex-col items-center gap-2 p-4 text-center data-[state=active]:bg-ms-green data-[state=active]:text-black hover:bg-ms-green/20 transition-all duration-200 rounded-lg"
                >
                  <IconComponent className="h-6 w-6" />
                  <span className="text-xs lg:text-sm font-medium">{industry.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <TabsContent 
                key={index} 
                value={industry.name.toLowerCase().replace(/ /g, '-')}
                className="mt-8"
              >
                <Card className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-6 left-6 bg-ms-green rounded-full p-4">
                      <IconComponent className="text-black h-8 w-8" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-3xl font-bold text-ms-dark mb-6">{industry.name}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">{industry.description}</p>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-ms-dark mb-3 text-lg">Key Solutions:</h4>
                            <div className="flex flex-wrap gap-2">
                              {industry.solutions.map((solution, solutionIndex) => (
                                <Badge key={solutionIndex} className="bg-ms-green/20 text-black font-normal px-3 py-1">
                                  {solution}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-ms-dark mb-3 text-lg">Key Benefits:</h4>
                            <div className="flex flex-wrap gap-2">
                              {industry.benefits.map((benefit, benefitIndex) => (
                                <Badge key={benefitIndex} variant="secondary" className="px-3 py-1">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-center space-y-4">
                        <Button size="lg" className="bg-ms-green text-black hover:bg-green-400 w-full" asChild>
                          <Link href="/contact" className="flex items-center justify-center gap-2">
                            Get Started with {industry.name}
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-ms-green text-ms-green hover:bg-ms-green hover:text-black w-full" asChild>
                          <Link href="/solutions" className="flex items-center justify-center gap-2">
                            View All Solutions
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-20 bg-ms-light rounded-2xl relative overflow-hidden">
          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden text-center p-8 pb-4">
            <h2 className="text-2xl font-bold text-ms-green mb-4">Don't See Your Industry?</h2>
            <p className="text-base text-gray-600 mb-6">
              We work across many additional sectors and can adapt our solutions to meet the unique needs of your industry. 
              Contact us to discuss how we can help transform your business.
            </p>
            <div className="mb-8">
              <a
                href="/contact"
                className="bg-ms-green text-black px-8 py-3 rounded-md font-semibold hover:bg-green-400 transition-colors duration-200 inline-block"
              >
                Contact Our Experts
              </a>
            </div>
          </div>
          <div className="lg:hidden flex justify-center bg-ms-light">
            <img 
              src="/industries-sales-lady.png" 
              alt="Qondala Industry Expert" 
              className="w-64 h-auto object-contain"
            />
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex items-end min-h-[320px] p-12 overflow-visible">
            <div className="relative z-10 text-left max-w-2xl pb-8">
              <h2 className="text-3xl font-bold text-ms-dark mb-4">Don't See Your Industry?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We work across many additional sectors and can adapt our solutions to meet the unique needs of your industry. 
                Contact us to discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-ms-blue text-black px-8 py-3 rounded-md font-semibold hover:bg-ms-blue-dark transition-colors duration-200 inline-block"
                >
                  Contact Our Experts
                </a>
                <a
                  href="/solutions"
                  className="border-2 border-ms-blue text-ms-blue px-8 py-3 rounded-md font-semibold hover:bg-ms-blue hover:text-white transition-all duration-200 inline-block"
                >
                  View All Solutions
                </a>
              </div>
            </div>
            
            {/* Desktop Sales Lady Image */}
            <div className="absolute bottom-0 right-0">
              <img 
                src="/industries-sales-lady.png" 
                alt="Qondala Industry Expert" 
                className="w-[550px] h-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
