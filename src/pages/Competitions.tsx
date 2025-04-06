
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
    '/lovable-uploads/0e9f2148-8069-4c29-b49f-20154d419815.png',
    '/lovable-uploads/bfaecf32-ea44-46e5-b509-a196e1165f9c.png',
    '/lovable-uploads/c3103704-85c6-44ad-91f3-54693289992e.png',
    '/lovable-uploads/7f93c6f3-fee1-4645-a1e9-9ddad246aeba.png',
    '/lovable-uploads/5e052a3d-45a5-4a6c-8805-92d1cb7c21be.png',
    '/lovable-uploads/d9a93024-6e61-4390-bfdb-ad69799728fe.png',
    '/lovable-uploads/6aaef658-1925-468e-89d1-8a530e3b0a34.png',
    '/lovable-uploads/768b028b-82c2-43c2-b392-a7f7ddbb4252.png',
    '/lovable-uploads/9ddfd0fa-8f08-4080-b110-1b2bf1830a87.png',
    '/lovable-uploads/c4255f93-f9bb-4d8a-a573-3397e75c144a.png',
    '/lovable-uploads/1c7f5e74-d277-40df-80fc-79957b30c170.png',
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
