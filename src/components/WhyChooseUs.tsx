import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">SentinelLinkHQ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge tools and methodologies to provide a thorough and actionable analysis of your security landscape.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Expertise Card */}
          <Card className="bg-card border-border shadow-elevated hover:shadow-cyber transition-all group">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-primary rounded-full w-fit group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Cutting-Edge Expertise</h3>
              <p className="text-muted-foreground">
                Our team utilizes the latest tools and methodologies in cybersecurity, ensuring comprehensive coverage of emerging threats and vulnerabilities.
              </p>
            </CardContent>
          </Card>
          
          {/* Timeline Card */}
          <Card className="bg-card border-border shadow-elevated hover:shadow-cyber transition-all group">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-primary rounded-full w-fit group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Efficient Timeline</h3>
              <p className="text-muted-foreground mb-4">
                Our typical engagement spans <strong className="text-primary">3-6 weeks</strong>, depending on scope and complexity.
              </p>
              <p className="text-sm text-muted-foreground">
                Includes planning, testing, analysis, and comprehensive final reporting.
              </p>
            </CardContent>
          </Card>
          
          {/* Investment Card */}
          <Card className="bg-card border-border shadow-elevated hover:shadow-cyber transition-all group">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 p-4 bg-gradient-primary rounded-full w-fit group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Tailored Investment</h3>
              <p className="text-muted-foreground">
                Services priced based on assessment scope and environment size. Detailed pricing breakdown provided upon finalizing project scope.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Experience Section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Our founding engineers have served notable companies like:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <span className="text-primary">Flutterwave</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary">PiggyVest</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary">Paga</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary">Bet9ja</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-primary">and many others</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;