import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Truck, Shield, Building, Cog, Wrench, Heart } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Transform healthcare delivery with data-driven platforms that enhance patient outcomes, streamline operations, and foster collaboration across healthcare ecosystems.",
      solutions: ["Electronic Health Records", "Patient Management Systems", "Medical Device Integration", "Healthcare Analytics"],
      benefits: ["Improved Patient Care", "Operational Efficiency", "Data-Driven Decisions", "Enhanced Collaboration"]
    },
    {
      name: "Manufacturing",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Transform your manufacturing operations with smart factory solutions, predictive maintenance, and production optimization technologies.",
      solutions: ["Smart Factory Automation", "Predictive Maintenance", "Quality Control Systems", "Supply Chain Optimization"],
      benefits: ["Increased Efficiency", "Reduced Downtime", "Cost Savings", "Quality Improvement"]
    },
    {
      name: "Transportation",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Optimize your logistics and transportation networks with intelligent fleet management, route optimization, and real-time tracking systems.",
      solutions: ["Fleet Management", "Route Optimization", "Real-time Tracking", "Fuel Management"],
      benefits: ["Reduced Costs", "Improved Delivery Times", "Enhanced Safety", "Environmental Impact"]
    },
    {
      name: "Security",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Protect your assets and data with comprehensive cybersecurity solutions, surveillance systems, and advanced threat detection.",
      solutions: ["Cybersecurity Solutions", "Surveillance Systems", "Access Control", "Threat Detection"],
      benefits: ["Enhanced Security", "Risk Mitigation", "Compliance", "Peace of Mind"]
    },
    {
      name: "Enterprise",
      icon: Building,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      description: "Scale your enterprise operations with large-scale solutions, system integration, and comprehensive digital platforms.",
      solutions: ["Enterprise Resource Planning", "System Integration", "Digital Platforms", "Data Analytics"],
      benefits: ["Scalability", "Integration", "Efficiency", "Data-Driven Decisions"]
    },
    {
      name: "Business Automation",
      icon: Cog,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
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

        <div className="grid lg:grid-cols-2 gap-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="relative">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-ms-blue rounded-full p-3">
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-ms-dark">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-ms-dark mb-3">Key Solutions:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <Badge key={solutionIndex} className="bg-ms-blue text-black">
                          {solution}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-ms-dark mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="secondary">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-ms-light rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-ms-dark mb-4">Don't See Your Industry?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We work across many additional sectors and can adapt our solutions to meet the unique needs of your industry. 
            Contact us to discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </div>
  );
}
