const FooterSection = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            NexSun.ai Network
          </h2>
          <p className="text-xl text-muted-foreground">
            AI-powered collaboration for energy, commodities, and resources.
          </p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-8 animate-scale-in">
          <a 
            href="#" 
            className="text-primary hover:text-accent transition-colors duration-300 font-semibold"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="text-primary hover:text-accent transition-colors duration-300 font-semibold"
          >
            X/Twitter
          </a>
          <a 
            href="#" 
            className="text-primary hover:text-accent transition-colors duration-300 font-semibold"
          >
            Contact Us
          </a>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p>Follow the journey →</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;