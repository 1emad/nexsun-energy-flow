const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Join the Network
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            The future of energy and commodities will be defined by collaboration, compliance, and intelligence. 
            NexSun.ai Network brings it all together — helping organizations not only keep pace with change, 
            but set the pace.
          </p>
          
          <div className="bg-card rounded-lg p-8 energy-glow animate-scale-in">
            <button className="bg-gradient-primary text-primary-foreground px-12 py-6 rounded-lg text-xl font-bold hover:shadow-glow transition-all duration-300 animate-glow">
              → Sign up for early access and be part of what's next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;