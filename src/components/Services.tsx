import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search, Target, FileText } from "lucide-react";

const Services = () => {
  const objectives = [
    {
      icon: Shield,
      title: "Security Posture Assessment",
      description: "Comprehensive evaluation of your IT infrastructure, applications, and networks to determine current security standing."
    },
    {
      icon: Search,
      title: "Vulnerability Identification",
      description: "Systematic discovery of security weaknesses that could be exploited by malicious actors before they become threats."
    },
    {
      icon: Target,
      title: "Real-World Attack Simulation",
      description: "Controlled penetration testing that mimics actual attack scenarios to evaluate your security measures effectiveness."
    },
    {
      icon: FileText,
      title: "Detailed Risk Mitigation",
      description: "Comprehensive roadmap with actionable recommendations to address identified risks and enhance overall security."
    }
  ];

  const benefits = [
    "Proactive vulnerability management before exploitation",
    "Regulatory compliance assistance and documentation",
    "Enhanced stakeholder trust and confidence",
    "Reduced risk of costly security breaches"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Objectives Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Objectives</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach ensures every aspect of your security infrastructure is thoroughly evaluated and protected.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {objectives.map((objective, index) => (
            <Card key={index} className="bg-card border-border hover:bg-surface-elevated transition-colors group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit group-hover:shadow-cyber transition-all">
                  <objective.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-card-foreground">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-surface-elevated rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Key <span className="text-primary">Benefits</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;