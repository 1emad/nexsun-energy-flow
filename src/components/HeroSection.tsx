const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            NexSun.ai Network
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Where Energy and Commodities Connect
          </p>
          
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              The Intelligent Network for Global Energy and Resources
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              NexSun.ai Network is the trusted digital backbone for industries that power the world. 
              Energy, commodities, and resources don't move in straight lines — they cross borders, 
              jurisdictions, and regulations. NexSun brings order to that complexity by delivering 
              real-time intelligence, secure collaboration, and accountable execution.
            </p>
          </div>
          
          <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-glow transition-all duration-300 animate-glow">
            → Join the network. Lead the future of energy and trade.
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;