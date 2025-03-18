
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { Play, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingMaterials = () => {
  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-0 transform -skew-x-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement animation="animate-fade-in-left" threshold={0.1}>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Drone Training Video" 
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-64 h-32 bg-white rounded-lg shadow-lg p-4 flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Free Training Materials</h4>
                  <p className="text-sm text-muted-foreground">10+ hours of content</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in-right" threshold={0.1}>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
              Learning Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Video Lessons & Training Materials
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Access our extensive library of professional-grade training videos, covering everything from basic operations to advanced techniques and specialized applications.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Structured learning paths from beginner to expert</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Downloadable technical documentation and checklists</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Practical exercises and hands-on assignments</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Regular updates with the latest industry standards</span>
              </li>
            </ul>
            
            <Link 
              to="/training" 
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
            >
              Go to Lessons
              <Download className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default TrainingMaterials;
