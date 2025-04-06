
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/competitions/HeroSection';
import EventDetails from '../components/competitions/EventDetails';
import PhotoGallery from '../components/competitions/PhotoGallery';
import CompetitionRegulations from '../components/competitions/CompetitionRegulations';
import TestimonialsSection from '../components/competitions/TestimonialsSection';

const Competitions = () => {
  // Set target date for countdown (April 14, 2025)
  const targetDate = new Date(2025, 3, 14); // Month is 0-indexed, so 3 = April

  // Updated gallery images with the new uploaded images
  const galleryImages = [
    '/lovable-uploads/a36bc68d-54a2-48d3-a2d8-3197434dd166.png',
    '/lovable-uploads/2fcea53e-c71c-4512-aad4-0598bc1e5a1c.png',
    '/lovable-uploads/e8ed3d34-78fa-43b9-9ede-d1cb86ca5b36.png',
    '/lovable-uploads/f342149b-cb52-48a5-87bb-765a4ce6e1df.png',
    '/lovable-uploads/0e3b376c-3a1c-4165-bc66-d7b1e3add275.png',
    '/lovable-uploads/a1c6fe10-bb9a-4137-b36d-14566a79c1ad.png',
    '/lovable-uploads/7c485cb1-5242-4fc9-a466-4f968f80e71c.png',
    '/lovable-uploads/6e42b777-57ac-4876-8356-98918e0334eb.png',
    '/lovable-uploads/9febdc63-593d-4a5b-941b-fec7e51402f1.png',
    '/lovable-uploads/2b6c60fb-0938-4f71-b3d1-25d6b5073a42.png',
    '/lovable-uploads/6e1e3d4a-81a4-49f5-99ce-5fb16f59d43b.png',
    '/lovable-uploads/d30145a2-bd82-4f68-a108-9bdd2ee3415c.png'
  ];

  const testimonials = [
    {
      name: "Askar Muratov",
      role: "MDC 2023 Champion",
      comment: "DroneTech's MDC competition challenged me to push my piloting skills to new heights. The organization was professional, and the course design was incredibly innovative.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Laura Chen",
      role: "Technical University Team Lead",
      comment: "Participating in MDC was an incredible learning experience for our entire team. The technical challenges and competitive atmosphere prepared us for real-world UAV operations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Marat Bakirov",
      role: "Industry Judge",
      comment: "The level of talent at MDC was impressive. DroneTech has created an event that truly showcases the future of UAV technology and operations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection targetDate={targetDate} />
        <EventDetails />
        <PhotoGallery galleryImages={galleryImages} />
        <CompetitionRegulations />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Competitions;
