import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Code, Cpu, Brain, Factory, Truck, Shield, ArrowRight, Rocket, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  const solutions = [
    {
      icon: Brain,
      title: "Connected Systems & Data Integration",
      description: "Unified data platforms and intelligent tools that seamlessly connect operations, improve efficiency, security, and enable real-time decision-making across complex enterprise environments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Cpu,
      title: "Advanced Software Solutions",
      description: "Custom enterprise software platforms with AI-powered automation, real-time analytics, and seamless integration capabilities that transform business operations and accelerate digital transformation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      icon: Factory,
      title: "Drone Technology & High-Performance Computing",
      description: "Cutting-edge drone systems integrated with powerful computing infrastructure for autonomous operations, data collection, and mission-critical applications across industries.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Data-driven platforms that empower patients, providers, and public health organizations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Logistics",
      description: "Global networks, advanced supply chain applications, and trade intelligence solutions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Government Agencies",
      description: "High-quality office supplies, equipment, and integrated IT solutions for government operations.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=250"
    },
    {
      title: "Enterprise",
      description: "Connected systems and digital transformation solutions for large-scale operations.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=250"
    }
  ];

  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Leading-edge technology solutions"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Dedicated support and partnership"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security", 
      description: "Bank-level security and compliance"
    }
  ];

  return (
    <div>
      <Hero />

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-ms-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Our Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering advanced software, drone technology, high-performance computing, and AI solutions that connect operations, automate decisions, and accelerate progress across industries.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row border border-black">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div 
                  key={index} 
                  className={`group transition-all duration-300 cursor-pointer flex-1 p-8 border-r border-black last:border-r-0 flex flex-col justify-between ${
                    index === 0 
                      ? 'bg-ms-blue text-white hover:bg-ms-green' 
                      : 'bg-white hover:bg-ms-green'
                  }`}
                >
                  {/* Title at top */}
                  <h3 className={`text-lg font-medium mb-4 transition-all duration-300 ${
                    index === 0 
                      ? 'text-white' 
                      : 'text-ms-dark group-hover:text-white'
                  }`}>
                    {solution.title}
                  </h3>
                  
                  {/* Description (first card always shows, others on hover) */}
                  <div className={`flex-1 transition-all duration-300 ${
                    index === 0 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'
                  }`}>
                    <p className={`text-sm leading-relaxed ${
                      index === 0 ? 'text-white' : 'text-white'
                    }`}>
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Icon and arrow at bottom */}
                  <div className="flex items-center justify-between mt-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      index === 0 
                        ? 'bg-ms-green' 
                        : 'bg-ms-green'
                    }`}>
                      <IconComponent className="text-white h-6 w-6 transition-all duration-300 stroke-1" />
                    </div>
                    
                    <Link
                      href={index === 0 ? "/connected-systems" : index === 1 ? "/solutions" : "/solutions"}
                      className="transition-all duration-300"
                    >
                      <ArrowRight className={`h-5 w-5 transition-all duration-300 ${
                        index === 0 
                          ? 'text-white' 
                          : 'text-ms-blue group-hover:text-white'
                      }`} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions across key industry verticals, delivering measurable impact and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group bg-ms-gray card-hover">
                <CardContent className="p-6">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-lg w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Link
                    href={industry.title === "Healthcare" ? "/healthcare" : industry.title === "Logistics" ? "/logistics" : "/industries"}
                    className="inline-flex items-center text-ms-blue font-semibold hover:text-ms-blue-dark transition-colors"
                  >
                    <span>Explore {industry.title}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ms-dark mb-6">About Qondala</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Qondala is transforming healthcare and logistics through connected systems, unified data, and intelligent tools that enhance efficiency, security, and collaboration.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Beyond technology, Qondala provides high-quality office supplies and equipment to government agencies and enterprises, integrating IT solutions with essential business needs. Driven by innovation and customer feedback, we create smarter, more connected ecosystems that drive progress across industries.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-ms-blue rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ms-dark">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional business team in modern office"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
