const WhyNexSunSection = () => {
  const features = [
    {
      title: "Purpose-Built for Energy, Commodities, and Resources",
      description: "Every capability reflects the realities of trade, permitting, ESG, and collaboration."
    },
    {
      title: "Trust by Design",
      description: "Secure guardrails, immutable logs, and transparent workflows."
    },
    {
      title: "AI with Accountability",
      description: "Explainable, auditable, and defensible — never a black box."
    },
    {
      title: "Integration-Ready",
      description: "Connect seamlessly to CRMs, trading systems, permitting portals, and ESG platforms."
    },
    {
      title: "Scalable Impact",
      description: "From bilateral negotiations to multinational commodity flows, the network grows with your needs."
    }
  ];

  const industries = [
    "Energy & Resources – Oil, gas, power, renewables, and mining.",
    "Commodities & Trade – Metals, materials, and cross-border commodity markets.",
    "Utilities & Infrastructure – Grid operators, EPCs, and supply networks.",
    "Finance & Sovereign Entities – Development banks, sovereign funds, and commodity financiers."
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why NexSun.ai Network
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-secondary/50 rounded-lg p-6 energy-glow animate-scale-in">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Industries We Serve
          </h3>
          <div className="bg-secondary/50 rounded-lg p-8 energy-glow max-w-4xl mx-auto">
            <ul className="space-y-4 text-lg text-muted-foreground">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-accent font-bold">•</span>
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexSunSection;