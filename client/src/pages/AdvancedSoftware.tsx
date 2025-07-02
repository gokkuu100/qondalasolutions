import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Code, Database, Shield, Zap, Users, BarChart3, Settings, Cloud } from "lucide-react";

export default function AdvancedSoftware() {
  const features = [
    {
      icon: Code,
      title: "Custom Enterprise Platforms",
      description: "Tailored software solutions designed specifically for your business needs, built with modern frameworks and scalable architecture."
    },
    {
      icon: Database,
      title: "AI-Powered Automation",
      description: "Intelligent automation systems that learn from your data to optimize workflows and reduce manual processes."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Advanced analytics dashboards providing instant insights into your operations with predictive capabilities."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols with end-to-end encryption, compliance management, and threat detection."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with cloud platforms for scalability, reliability, and global accessibility."
    },
    {
      icon: Settings,
      title: "API & System Integration",
      description: "Connect your existing systems with robust APIs and middleware solutions for unified operations."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40% through intelligent automation",
    "Increase productivity with streamlined workflows and real-time insights",
    "Scale seamlessly as your business grows with cloud-native architecture",
    "Ensure compliance with industry standards and regulations",
    "Accelerate digital transformation with modern, flexible platforms"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white hover:text-ms-green">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center mb-6">
            <Code className="h-16 w-16 text-ms-green mr-6" />
            <div>
              <h1 className="text-5xl font-bold mb-4">Advanced Software Solutions</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Custom enterprise software platforms with AI-powered automation, real-time analytics, and seamless integration capabilities that transform business operations and accelerate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-ms-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Comprehensive Software Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced software solutions deliver enterprise-grade functionality with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-ms-green mb-4" />
                  <h3 className="text-xl font-bold text-ms-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-ms-dark mb-6">Transform Your Business Operations</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our advanced software solutions are designed to modernize your enterprise infrastructure and drive measurable business outcomes.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-ms-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button className="mt-8 bg-ms-green hover:bg-ms-green/90 text-white px-8 py-3">
                  Start Your Digital Transformation
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
                alt="Advanced Software Solutions"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-ms-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ms-dark mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with industry-leading technologies for maximum performance, security, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Cloud Platforms", tech: "AWS, Azure, GCP" },
              { name: "AI & Machine Learning", tech: "TensorFlow, PyTorch, OpenAI" },
              { name: "Backend Technologies", tech: "Node.js, Python, .NET" },
              { name: "Database Systems", tech: "PostgreSQL, MongoDB, Redis" }
            ].map((item, index) => (
              <Card key={index} className="text-center border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-ms-dark mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our advanced software solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-ms-green hover:bg-ms-green/90 text-white px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}