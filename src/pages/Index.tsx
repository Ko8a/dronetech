
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
// import ProductsSection from '../components/ProductsSection'; // Commented out as requested
// import TrainingMaterials from '../components/TrainingMaterials'; // Commented out as requested
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemStatement />
        {/* <ProductsSection /> */}
        {/* <TrainingMaterials /> */}
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
