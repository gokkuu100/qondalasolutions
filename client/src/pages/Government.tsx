import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Shield, Database, FileText, Users, Clock, CheckCircle, Building, Lock, Globe } from "lucide-react";

export default function Government() {
  const capabilities = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions with FISMA, FedRAMP, and SOC 2 compliance for government operations."
    },
    {
      icon: Database,
      title: "Data Management Systems",
      description: "Secure data storage, analytics, and reporting systems designed for government data requirements."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Digital transformation of paper-based processes with secure document workflows and e-signatures."
    },
    {
      icon: Users,
      title: "Citizen Services Platforms",
      description: "User-friendly portals and applications that improve citizen engagement and service delivery."
    },
    {
      icon: Building,
      title: "Infrastructure Modernization",
      description: "Legacy system upgrades and cloud migration services tailored for government environments."
    },
    {
      icon: Globe,
      title: "Interagency Integration",
      description: "Seamless data sharing and communication systems between government departments and agencies."
    }
  ];

  const solutions = [
    {
      title: "Procurement & Supply Chain",
      description: "Streamlined procurement processes with vendor management and supply chain transparency",
      benefits: ["Cost reduction", "Process automation", "Vendor compliance tracking"]
    },
    {
      title: "Public Safety Systems",
      description: "Emergency response coordination and public safety communication platforms",
      benefits: ["Faster response times", "Real-time coordination", "Incident management"]
    },
    {
      title: "Financial Management",
      description: "Budget tracking, expense management, and financial reporting for government operations",
      benefits: ["Budget transparency", "Automated reporting", "Audit compliance"]
    },
    {
      title: "HR & Workforce Management",
      description: "Employee management systems with security clearance tracking and performance monitoring",
      benefits: ["Streamlined HR processes", "Compliance tracking", "Performance analytics"]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successfully implemented solutions for federal, state, and local government agencies"
    },
    {
      icon: Lock,
      title: "Security First",
      description: "All solutions built with government-grade security and compliance standards"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistent project delivery within budget and timeline constraints"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-ms-blue hover:text-ms-blue-dark mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-ms-dark mb-4">Government Agencies</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Trusted technology solutions for federal, state, and local government agencies. 
            Secure, compliant, and designed to improve citizen services and operational efficiency.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Core Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for government operations and compliance requirements.
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

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Government Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized applications that address the unique challenges facing government agencies today.
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

      {/* Why Choose Qondala */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Why Government Agencies Choose Qondala</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique requirements and challenges of government operations.
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

      {/* CTA Section */}
      <section className="py-16 bg-ms-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Modernize Your Agency?</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Let's discuss how our government-focused solutions can improve your operations and citizen services.
          </p>
          <Button 
            className="bg-white text-ms-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            asChild
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}