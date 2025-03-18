
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedElement from '../components/ui/AnimatedElement';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Download, Lock, BookOpen, Video, Shield, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const Training = () => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const freeLessons = [
    {
      id: "lesson1",
      title: "Introduction to UAV Operations",
      duration: "15:30",
      hasInstructions: true,
      thumbnail: "https://images.unsplash.com/photo-1524143986875-3b098d911b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "lesson2",
      title: "Basic Flight Controls",
      duration: "22:45",
      hasInstructions: true,
      thumbnail: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
    {
      id: "lesson3",
      title: "Safety Protocols",
      duration: "18:20",
      hasInstructions: true,
      thumbnail: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];
  
  const paidCourses = [
    {
      id: "rtk",
      title: "RTK Installation and Configuration",
      lessons: 8,
      duration: "3 hours 45 minutes",
      price: 79.99,
      thumbnail: "https://images.unsplash.com/photo-1502127442226-43e2d48c0811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "opticalflow",
      title: "OpticalFlow Installation and Configuration",
      lessons: 6,
      duration: "2 hours 30 minutes",
      price: 69.99,
      thumbnail: "https://images.unsplash.com/photo-1461780939060-989eb82d7ec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "payload",
      title: "Payload Drop System: Design and 3D Printing",
      lessons: 10,
      duration: "4 hours 15 minutes",
      price: 89.99,
      thumbnail: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  
  const handleLessonClick = (lesson: string) => {
    setSelectedLesson(lesson);
  };
  
  const handleDownloadInstructions = () => {
    toast.success('Instructions downloaded successfully!');
  };
  
  const handlePurchaseCourse = (courseId: string) => {
    if (!isLoggedIn) {
      toast.error('Please log in to purchase this course.');
      return;
    }
    
    toast.success(`Course "${courseId}" has been added to your account!`);
  };
  
  const handleLogin = () => {
    setIsLoggedIn(true);
    toast.success('You have successfully logged in!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="container mx-auto px-6 py-12 md:py-24 relative z-10 text-white">
            <AnimatedElement animation="animate-fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 max-w-4xl mx-auto text-center">
                "We don't want our drone kits to sit on shelves. We want them to <span className="text-primary">fly, to work, and to create new opportunities.</span>"
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={400}>
              <div className="flex justify-center">
                <Link
                  to="#lessons"
                  className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
                >
                  Start Learning
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>
        
        {/* Lesson Selection */}
        <section id="lessons" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedElement animation="animate-fade-in" threshold={0.1}>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
                  Training Materials
                </span>
                <h2 className="text-3xl font-bold mb-4">Choose Your Learning Path</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Access free lessons or unlock premium content with specialized training modules.
                </p>
              </div>
            </AnimatedElement>
            
            <Tabs defaultValue="free" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="free">Free Lessons</TabsTrigger>
                <TabsTrigger value="premium">Premium Courses</TabsTrigger>
              </TabsList>
              
              <TabsContent value="free">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {freeLessons.map((lesson, index) => (
                    <AnimatedElement
                      key={lesson.id}
                      animation="animate-fade-in"
                      delay={index * 100}
                      threshold={0.1}
                    >
                      <div 
                        className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-200 cursor-pointer ${selectedLesson === lesson.id ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}
                        onClick={() => handleLessonClick(lesson.id)}
                      >
                        <div className="aspect-video relative">
                          <img 
                            src={lesson.thumbnail} 
                            alt={lesson.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                            {lesson.duration}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold mb-2">{lesson.title}</h3>
                          <div className="flex justify-between">
                            <span className="text-sm text-green-600 font-medium flex items-center">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Free
                            </span>
                            {lesson.hasInstructions && (
                              <button 
                                className="text-sm text-primary font-medium flex items-center"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDownloadInstructions();
                                }}
                              >
                                <Download className="w-4 h-4 mr-1" />
                                Instructions
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
                
                {selectedLesson && (
                  <AnimatedElement animation="animate-fade-in" threshold={0.1}>
                    <div className="bg-secondary/30 rounded-xl overflow-hidden mb-8">
                      <div className="aspect-video">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/q1PGF0CXYOU" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {freeLessons.find(l => l.id === selectedLesson)?.title}
                        </h3>
                        <div className="flex space-x-4">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Video className="w-4 h-4 mr-1" />
                            {freeLessons.find(l => l.id === selectedLesson)?.duration}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            Beginner Level
                          </span>
                        </div>
                        <div className="mt-4">
                          <button
                            onClick={handleDownloadInstructions}
                            className="inline-flex items-center rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:ring-offset-2"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download Instructions
                          </button>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                )}
              </TabsContent>
              
              <TabsContent value="premium">
                {!isLoggedIn ? (
                  <AnimatedElement animation="animate-fade-in" threshold={0.1}>
                    <div className="bg-white border border-border rounded-xl p-8 text-center mb-10">
                      <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Login Required</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Please log in or create an account to access our premium courses and specialized training modules.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                          onClick={handleLogin}
                          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
                        >
                          Log In
                        </button>
                        <button
                          onClick={handleLogin}
                          className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-secondary/70 focus:ring-offset-2"
                        >
                          Create Account
                        </button>
                      </div>
                    </div>
                  </AnimatedElement>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                      {paidCourses.map((course, index) => (
                        <AnimatedElement
                          key={course.id}
                          animation="animate-fade-in"
                          delay={index * 100}
                          threshold={0.1}
                        >
                          <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="aspect-video relative">
                              <img 
                                src={course.thumbnail} 
                                alt={course.title} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                                ${course.price}
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold mb-2">{course.title}</h3>
                              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                                <span className="flex items-center">
                                  <BookOpen className="w-4 h-4 mr-1" />
                                  {course.lessons} lessons
                                </span>
                                <span className="flex items-center">
                                  <Video className="w-4 h-4 mr-1" />
                                  {course.duration}
                                </span>
                              </div>
                              <button
                                onClick={() => handlePurchaseCourse(course.id)}
                                className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
                              >
                                Purchase Course
                              </button>
                            </div>
                          </div>
                        </AnimatedElement>
                      ))}
                    </div>
                    
                    <AnimatedElement animation="animate-fade-in" threshold={0.1}>
                      <div className="bg-secondary/30 rounded-xl p-6">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-full mr-4">
                            <Shield className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Premium Benefits</h3>
                            <ul className="space-y-2 text-muted-foreground">
                              <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Lifetime access to purchased courses
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Downloadable resources and project files
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Direct support from instructors
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                Certificate of completion
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            <AnimatedElement animation="animate-fade-in" threshold={0.1}>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
                  FAQ
                </span>
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find answers to common questions about our training programs.
                </p>
              </div>
            </AnimatedElement>
            
            <div className="max-w-3xl mx-auto">
              <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-2">How do I access the free lessons?</h3>
                    <p className="text-muted-foreground">
                      Free lessons are available to everyone without registration. Simply navigate to the "Free Lessons" tab, select a lesson, and start learning immediately.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                    <p className="text-muted-foreground">
                      We accept all major credit cards, PayPal, and bank transfers. After creating an account, you can add your preferred payment method in your profile settings.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-2">Are the courses self-paced?</h3>
                    <p className="text-muted-foreground">
                      Yes, all our courses are completely self-paced. You can start, pause, and continue your learning journey at your own convenience, with lifetime access to purchased courses.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-2">Do I need special equipment for the courses?</h3>
                    <p className="text-muted-foreground">
                      Equipment requirements vary by course. Basic courses can be completed with standard consumer drones, while specialized courses may require specific hardware. Each course page lists the necessary equipment.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-2">Can I get a certificate after completing a course?</h3>
                    <p className="text-muted-foreground">
                      Yes, all premium courses include a certificate of completion that you can download and share with employers or clients to demonstrate your skills.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Training;
