import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Zap, TrendingUp, Shield, Cpu, Cloud, Users, BarChart, Globe, Settings, CheckCircle, Award, ArrowRight } from "lucide-react";

// Enterprise business meeting image
const enterpriseBusinessImage = "/enterprise-business-optimized.jpg";

export default function Enterprise() {
  const capabilities = [
    {
      icon: Cloud,
      title: "Enterprise Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for large-scale enterprise operations."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced cybersecurity solutions with threat detection, prevention, and compliance management."
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Data analytics and reporting platforms that provide actionable insights for strategic decision-making."
    },
    {
      icon: Users,
      title: "Workforce Management",
      description: "Comprehensive HR and workforce optimization tools for large organizations and global teams."
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "AI-powered automation solutions that streamline operations and reduce manual workloads."
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "End-to-end modernization of legacy systems and digital workflow optimization."
    }
  ];

  const solutions = [
    {
      title: "ERP Integration & Optimization",
      description: "Seamless integration with existing ERP systems and optimization for maximum efficiency",
      benefits: ["Unified data management", "Process standardization", "Real-time reporting"]
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility with predictive analytics and risk management",
      benefits: ["Cost optimization", "Risk mitigation", "Supplier management"]
    },
    {
      title: "Customer Experience Platforms",
      description: "Omnichannel customer engagement solutions with AI-powered personalization",
      benefits: ["Enhanced customer satisfaction", "Improved retention", "Revenue growth"]
    },
    {
      title: "Financial Management Systems",
      description: "Advanced financial planning, analysis, and reporting tools for enterprise operations",
      benefits: ["Financial transparency", "Compliance automation", "Strategic planning"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Enterprise Expertise",
      description: "Proven experience serving Fortune 500 companies and global enterprises"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Technology solutions that grow with your business and adapt to changing needs"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Accelerated deployment with minimal disruption to existing operations"
    }
  ];

  const industries = [
    "Manufacturing & Industrial",
    "Financial Services",
    "Retail & E-commerce",
    "Technology & Software",
    "Energy & Utilities",
    "Telecommunications"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ms-blue to-ms-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Enterprise Technology Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Comprehensive technology solutions designed for large organizations. 
              Scalable, secure, and built to drive digital transformation at enterprise scale.
            </p>
            <Button size="lg" className="bg-white text-ms-blue hover:bg-gray-100" asChild>
              <Link href="/contact">Start Your Digital Transformation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Enterprise Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technology solutions that address the complex challenges of large-scale enterprise operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="group card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-ms-blue rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-black h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ms-dark mb-3">{capability.title}</h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Enterprise Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized platforms that drive efficiency, innovation, and growth for large organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-ms-dark">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our enterprise solutions span across multiple industries and business sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-ms-dark">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Qondala */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Why Enterprises Choose Qondala</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with the reliability and scale your organization demands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-ms-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-black h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Business Intelligence */}
      <section className="py-20 bg-ms-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ms-dark mb-6">Enterprise Business Intelligence</h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your enterprise data into actionable insights with advanced analytics, reporting, and decision-making tools designed for large-scale operations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Real-time Data Analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Executive Dashboards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Predictive Analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Strategic Decision Support</span>
                </div>
              </div>

              <Button className="mt-8 bg-ms-blue hover:bg-ms-blue-dark" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div>
              <div className="rounded-xl shadow-lg overflow-hidden">
                <img
                  src={enterpriseBusinessImage}
                  alt="Modern enterprise business meeting with data analytics and strategic planning"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ms-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Let's explore how our enterprise solutions can drive innovation and growth for your organization.
          </p>
          <Button 
            className="bg-white text-ms-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            asChild
          >
            <Link href="/contact">Start Your Digital Transformation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}