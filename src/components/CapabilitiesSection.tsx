const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Rooms",
      subtitle: "Collaborate with Confidence",
      description: "Rooms are intelligence-powered environments where market analysis and collaboration converge. Using advanced AI models connected to the open web, directly shared datasets, and system integrations, Rooms deliver rapid, real-time insights across energy and commodity markets.",
      features: [
        "Instant market visibility — from competitor moves to supply-demand dynamics and policy shifts.",
        "Confidence in position-taking, backed by live intelligence instead of static reports.",
        "Visualization of opportunities and collaborations, revealing where alignment or market advantage exists."
      ],
      conclusion: "Every Room is more than a workspace — it is a strategic command center that accelerates clarity, alignment, and action."
    },
    {
      title: "Comply",
      subtitle: "Navigate Compliance with Confidence",
      description: "Comply is a guidance layer that helps organizations keep pace with shifting regulatory and ESG landscapes. It is not a system of record — instead, it provides rapid access to insights that illuminate risks and requirements across jurisdictions.",
      features: [
        "Quickly interpret how new mandates, permitting rules, or ESG frameworks impact operations.",
        "Anticipate risks tied to trade policies, Indigenous consultation obligations, or environmental enforcement.",
        "Stay aligned with evolving standards such as IBA, UNDRIP, TCFD, or CBAM through contextual intelligence."
      ],
      conclusion: "Comply turns compliance from a bottleneck into a source of foresight and resilience."
    },
    {
      title: "Match",
      subtitle: "Segment, Decide, and Execute",
      description: "Match transforms market intelligence into structured action. It combines persona insights, decision rubrics, and campaign execution to ensure opportunities are pursued with discipline and accountability.",
      features: [
        "Segment and map personas across governments, Indigenous entities, utilities, EPCs, traders, and financiers — filtered by commodity, jurisdiction, or ESG posture.",
        "Surface readiness and risk signals, including investment appetite, permitting complexity, and partner quality.",
        "Apply structured rubrics that capture thresholds, rationale, and outcomes, ensuring every decision is transparent and defensible.",
        "Run Plays — structured engagement pipelines where partners are nurtured, promoted, or demoted, with telemetry tracking feedback, response, and conversion.",
        "Close the loop between intelligence and execution, with every action traceable back to market insight."
      ],
      conclusion: "Match ensures that energy and commodity organizations don't just interpret the market — they move strategically within it."
    },
    {
      title: "Assist",
      subtitle: "AI You Can Explain",
      description: "Assist is an explainable AI co-pilot designed for high-stakes industries. It accelerates drafting, analysis, and strategy development — while ensuring every AI output is auditable and transparent.",
      features: [
        "Generate policy briefs, trade memos, or investor notes backed by traceable logic.",
        "Summarize and analyze complex datasets, regulations, or negotiations with clarity.",
        "Ensure traceability, with every output tied to a prompt registry and evaluation harness."
      ],
      conclusion: "Assist gives leaders speed without sacrificing accountability — a trusted partner in markets where every word matters."
    },
    {
      title: "Signals Digest",
      subtitle: "Insight on Demand",
      description: "In the resource economy, signals are everywhere — but not all of them matter. Signals Digest distills activity into actionable weekly intelligence tailored for decision-makers.",
      features: [
        "Track engagement metrics across partners, regulators, and stakeholders.",
        "Surface emerging opportunities in specific commodities or jurisdictions.",
        "Monitor market shifts and policy signals before they become disruptions.",
        "Access unified dashboards and predictive analytics that cut through noise."
      ],
      conclusion: "Signals Digest ensures leaders act with foresight, not hindsight — transforming raw activity into strategic advantage."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Core Capabilities
          </h2>
        </div>
        
        <div className="space-y-16">
          {capabilities.map((capability, index) => (
            <div key={capability.title} className={`animate-scale-in ${index % 2 === 1 ? 'md:text-right' : ''}`}>
              <div className="bg-card rounded-lg p-8 energy-glow">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {capability.title}
                </h3>
                <h4 className="text-xl font-semibold text-accent mb-6">
                  {capability.subtitle}
                </h4>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {capability.description}
                </p>
                
                <div className="mb-6">
                  <p className="font-semibold text-foreground mb-4">
                    With {capability.title}, organizations can:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <span className="text-accent font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-lg font-medium text-primary italic">
                  {capability.conclusion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;