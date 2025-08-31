import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-surface-subtle py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Sentinel Link
            </h3>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Sentinel Link. Business Registration: RC - 1856748. Professional Cybersecurity Services. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
