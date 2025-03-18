
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedElement from '../components/ui/AnimatedElement';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-white py-12">
          <div className="container mx-auto px-6">
            <AnimatedElement animation="animate-fade-in" threshold={0.1}>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have questions about our products, training programs, or upcoming competitions? Reach out to us directly.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
