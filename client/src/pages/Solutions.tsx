import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Cpu, Brain, Cloud, Database, Shield, Zap, Settings } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      category: "Software Solutions",
      icon: Code,
      color: "bg-blue-500",
      services: [
        {
          name: "Custom Enterprise Software",
          description: "Tailored software solutions designed specifically for your business processes and requirements.",
          features: ["Custom Development", "Legacy System Integration", "Scalable Architecture", "24/7 Support"]
        },
        {
          name: "Cloud Platforms",
          description: "Modern cloud-native applications with high availability and global scalability.",
          features: ["Multi-Cloud Deployment", "Auto-Scaling", "Disaster Recovery", "Cost Optimization"]
        },
        {
          name: "Digital Transformation",
          description: "Comprehensive digital transformation services to modernize your business operations.",
          features: ["Process Automation", "Digital Workflows", "Data Migration", "Training & Support"]
        }
      ]
    },
    {
      category: "Hardware Solutions",
      icon: Cpu,
      color: "bg-green-500",
      services: [
        {
          name: "IoT Device Integration",
          description: "Smart device deployment and integration for real-time monitoring and control.",
          features: ["Sensor Networks", "Edge Computing", "Real-time Analytics", "Remote Management"]
        },
        {
          name: "Infrastructure Solutions",
          description: "Robust hardware infrastructure for enterprise-grade performance and reliability.",
          features: ["Server Architecture", "Network Design", "Security Hardware", "Maintenance Support"]
        },
        {
          name: "Custom Hardware Development",
          description: "Specialized hardware solutions designed for your unique operational requirements.",
          features: ["Prototype Development", "Testing & Validation", "Manufacturing Support", "Quality Assurance"]
        }
      ]
    },
    {
      category: "AI-Driven Solutions",
      icon: Brain,
      color: "bg-purple-500",
      services: [
        {
          name: "Machine Learning Platforms",
          description: "Advanced ML solutions for predictive analytics and intelligent decision-making.",
          features: ["Predictive Modeling", "Pattern Recognition", "Automated Insights", "Model Deployment"]
        },
        {
          name: "Process Automation",
          description: "Intelligent automation systems that optimize workflows and reduce manual effort.",
          features: ["Workflow Automation", "Document Processing", "Quality Control", "Performance Monitoring"]
        },
        {
          name: "Data Analytics",
          description: "Comprehensive data analysis tools for business intelligence and strategic planning.",
          features: ["Real-time Dashboards", "Trend Analysis", "Performance Metrics", "Reporting Tools"]
        }
      ]
    }
  ];

  return (
    <div 
      className="py-20 min-h-screen"
      style={{
        backgroundImage: 'url(/green-geometric-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ms-dark mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations and drive sustainable growth across all sectors.
          </p>
        </div>

        {/* Solutions Section with Tabs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-ms-dark mb-8 text-center">Our Solutions</h2>
          
          <Tabs defaultValue="software" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="software" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Software Solutions
              </TabsTrigger>
              <TabsTrigger value="hardware" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                Hardware Solutions
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                AI & Analytics
              </TabsTrigger>
            </TabsList>

            {solutions.map((solution, categoryIndex) => (
              <TabsContent 
                key={categoryIndex} 
                value={categoryIndex === 0 ? "software" : categoryIndex === 1 ? "hardware" : "ai"}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {solution.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="bg-white/90 backdrop-blur-sm hover:bg-white/95 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-ms-dark">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-ms-dark mb-3">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-sm">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Additional Services Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-ms-dark mb-8 text-center">Additional Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-ms-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ms-dark mb-2">Cybersecurity</h3>
                <p className="text-gray-600">Comprehensive security audits and protection services</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Settings className="h-12 w-12 text-ms-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ms-dark mb-2">Maintenance</h3>
                <p className="text-gray-600">24/7 system monitoring and maintenance support</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Database className="h-12 w-12 text-ms-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ms-dark mb-2">Data Migration</h3>
                <p className="text-gray-600">Seamless data transfer and system migration services</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-ms-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ms-dark mb-2">Performance Optimization</h3>
                <p className="text-gray-600">System performance analysis and optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-20 bg-ms-light rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ms-dark mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive support services to ensure your technology investments deliver maximum value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Cloud, title: "Cloud Migration", description: "Seamless transition to cloud infrastructure" },
              { icon: Database, title: "Data Management", description: "Secure and efficient data handling solutions" },
              { icon: Shield, title: "Cybersecurity", description: "Advanced security measures and monitoring" },
              { icon: Settings, title: "System Integration", description: "Connecting disparate systems and platforms" }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-ms-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-ms-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
