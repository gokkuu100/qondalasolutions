import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, Database, Zap, Shield, Network, Cloud, CheckCircle, ArrowRight } from "lucide-react";

export default function ConnectedSystems() {
  const features = [
    {
      icon: Network,
      title: "System Integration",
      description: "Seamless integration of disparate systems and applications across your entire organization."
    },
    {
      icon: Database,
      title: "Unified Data Platform",
      description: "Centralized data management with real-time synchronization and intelligent data governance."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data processing and decision-making capabilities for time-critical operations."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with built-in compliance monitoring and threat detection."
    }
  ];

  const benefits = [
    "Improved Operational Efficiency",
    "Enhanced Data Visibility",
    "Reduced System Silos",
    "Better Decision Making",
    "Increased Automation",
    "Cost Optimization"
  ];

  const solutions = [
    {
      title: "Enterprise Integration Platform",
      description: "Comprehensive integration solutions connecting all your business systems and applications.",
      features: ["API Management", "Data Mapping", "Workflow Automation", "Legacy System Integration"]
    },
    {
      title: "IoT Device Management",
      description: "Complete IoT ecosystem management with device connectivity and data analytics.",
      features: ["Device Provisioning", "Remote Monitoring", "Predictive Maintenance", "Edge Computing"]
    },
    {
      title: "Intelligent Analytics",
      description: "AI-powered analytics platforms that turn your connected data into actionable insights.",
      features: ["Machine Learning Models", "Predictive Analytics", "Real-time Dashboards", "Automated Reports"]
    }
  ];

  const useCases = [
    {
      title: "Healthcare Systems Integration",
      description: "Connect EHRs, medical devices, and administrative systems for comprehensive patient care.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Supply Chain Connectivity",
      description: "Integrate logistics systems, inventory management, and supplier networks for optimal flow.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Enterprise Resource Planning",
      description: "Unify financial, HR, and operational systems for comprehensive business management.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ms-blue to-ms-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Connected Systems & Data Integration
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Implementation of unified data and intelligent tools to improve efficiency, security, 
              and real-time decision-making in logistics and healthcare.
            </p>
            <Button size="lg" className="bg-white text-ms-blue hover:bg-gray-100" asChild>
              <Link href="/contact">Connect Your Systems</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Integration Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our connected systems solutions provide comprehensive integration and data management capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-ms-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-ms-dark mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Integration Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive connected systems solutions designed for modern enterprise integration needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-ms-dark">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Integration Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of our connected systems solutions across different industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-ms-dark mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ms-dark mb-6">Integration Benefits</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our connected systems solutions deliver measurable improvements in efficiency, visibility, and decision-making capabilities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-ms-blue hover:bg-ms-blue-dark" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Connected systems and data integration"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600">
              Built on proven technologies for reliable, scalable integration solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Cloud, title: "Cloud Native", desc: "Scalable cloud infrastructure" },
              { icon: Database, title: "Big Data", desc: "Handle massive data volumes" },
              { icon: Network, title: "API-First", desc: "RESTful and GraphQL APIs" },
              { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption" }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-ms-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-ms-dark mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ms-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Systems?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how our connected systems solutions can transform your data integration and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ms-blue hover:bg-ms-blue-dark" asChild>
              <Link href="/contact">Schedule Integration Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ms-dark" asChild>
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}