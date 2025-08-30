import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Secure</span> Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch for a consultation and detailed assessment of your cybersecurity needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-surface-elevated border-border shadow-elevated">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground"> - </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+234 813 947 3744</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Website</p>
                      <p className="text-muted-foreground">sentinellink.github.io</p>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Schedule a Consultation</h3>
                    <p className="text-muted-foreground mb-6">
                      Discuss your security requirements and get a customized assessment plan.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber font-semibold py-6"
                      size="lg"
                    >
                      Request Security Assessment
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/50 text-primary hover:bg-primary/10 font-semibold py-6"
                      size="lg"
                    >
                      Download Service Overview
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-surface-subtle rounded-lg">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Service Areas:</strong> We provide cybersecurity services globally with specialized expertise in enterprise infrastructure, cloud security, and regulatory compliance across all major industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
