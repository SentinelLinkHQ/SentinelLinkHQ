import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-dark flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-cyber opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Sentinel Link
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Penetration Testing & Vulnerability Assessment
        </p>
        <p className="text-lg text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          Comprehensive cybersecurity services tailored to meet the security needs of businesses across various sectors. 
          Protect your infrastructure with cutting-edge tools and methodologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber font-semibold px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Security Assessment
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;