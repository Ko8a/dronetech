
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';

const ProblemStatement = () => {
  return (
    <section id="problem" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="animate-fade-in" threshold={0.1}>
            <h2 className="section-title text-center mb-12">The UAV Operator Shortage</h2>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
            <div className="bg-secondary/50 rounded-2xl p-8 mb-10">
              <p className="text-lg leading-relaxed mb-6">
                The demand for qualified UAV operators is growing exponentially across industries, from agriculture and construction to emergency services and entertainment. However, there exists a significant gap between market demand and available skilled professionals.
              </p>
              <p className="text-lg leading-relaxed">
                At DroneTech, we're addressing this critical shortage through comprehensive educational programs that combine theoretical knowledge with extensive hands-on training, preparing the next generation of UAV operators for real-world applications.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={400} threshold={0.1}>
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Presidential Initiative</h3>
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                "The development of UAV technology and localization of production is a strategic priority for Kazakhstan's technological advancement and security infrastructure."
              </blockquote>
              <p className="text-right mt-4 text-muted-foreground">— President Kassym-Jomart Tokayev</p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
