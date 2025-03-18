
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { Book, Video, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const products = [
    {
      title: "Fundamental UAV Training",
      description: "Comprehensive course covering UAV basics, flight principles, safety protocols, and regulatory frameworks.",
      icon: Book,
      color: "text-blue-500",
      bgColor: "bg-blue-100/50"
    },
    {
      title: "Advanced Flight Techniques",
      description: "Master complex maneuvers, precision flying, obstacle navigation, and emergency procedures.",
      icon: Video,
      color: "text-purple-500",
      bgColor: "bg-purple-100/50"
    },
    {
      title: "Specialized Applications",
      description: "Industry-specific training for aerial photography, surveying, mapping, inspection, and precision agriculture.",
      icon: Award,
      color: "text-green-500",
      bgColor: "bg-green-100/50"
    },
    {
      title: "Certification Preparation",
      description: "Structured preparation for official UAV operator certification and licensing examinations.",
      icon: BookOpen,
      color: "text-orange-500",
      bgColor: "bg-orange-100/50"
    }
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
              Our Educational Programs
            </span>
            <h2 className="section-title">Comprehensive UAV Training</h2>
            <p className="section-subtitle">
              Develop essential skills and knowledge to excel in the rapidly evolving field of unmanned aerial vehicles.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <AnimatedElement
              key={product.title}
              animation="animate-fade-in"
              delay={index * 100}
              threshold={0.1}
            >
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 h-full flex flex-col">
                <div className={`${product.bgColor} p-3 rounded-lg w-fit mb-4`}>
                  <product.icon className={`h-6 w-6 ${product.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>
                <Link 
                  to="/training" 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/training"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
          >
            Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
