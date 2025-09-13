const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About NexSun.ai Network
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
            Built for Complexity. Driven by Clarity.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 animate-scale-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From commodity super-cycles to ESG enforcement, from permitting bottlenecks to sovereign trade policies, 
              energy and resource markets are defined by constant change. Organizations need more than data — they need 
              a network that unites intelligence, collaboration, and compliance into one flow.
            </p>
          </div>
          
          <div className="bg-secondary/50 rounded-lg p-8 energy-glow">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              With NexSun.ai Network, you can:
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span>Analyze markets dynamically, across commodities, jurisdictions, and roles.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span>Collaborate securely with governments, enterprises, and financiers under clear guardrails.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span>Navigate compliance with guided insights into ESG, IBA, and permitting regimes.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent font-bold">•</span>
                <span>Make decisions you can defend, supported by rubrics and transparent documentation.</span>
              </li>
              <li className="flex items-start space-x-3 md:col-span-2">
                <span className="text-accent font-bold">•</span>
                <span>Turn noise into foresight, distilling activity into actionable signals.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;