
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Add fade-in animation to elements when the page loads
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.15}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-agrineux-background relative overflow-x-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-farm-pattern opacity-30" aria-hidden="true"></div>
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-3xl w-full mx-auto text-center space-y-8 sm:space-y-12">
          {/* Header */}
          <header className="animate-fade-in">
            <h2 className="text-base sm:text-lg text-agrineux-text/80 font-medium tracking-wide">
              Transforming African Farmers, Trade, and Lives
            </h2>
          </header>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-agrineux-text tracking-tight animate-fade-in">
            We're Building the Future of Agriculture — With You!
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-agrineux-text/90 font-medium animate-fade-in">
            Take our quick survey and shape AgriNeux's platform. It takes less than 5 minutes!
          </p>

          {/* Description */}
          <div className="text-base sm:text-lg text-agrineux-text/80 animate-fade-in">
            <p className="max-w-2xl mx-auto">
              We're creating AgriNeux, an AI-powered platform for farmers, entrepreneurs, buyers, and investors. 
              Your feedback will help us build tools that matter — from AI advisory to direct farm partnerships!
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSctaLQKBKgWoVOxVxMO3J7fQGxZB5_gvIdxWXLhJtmbOh4UzA/viewform?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg sm:text-xl font-semibold text-white bg-agrineux-primary rounded-full hover:bg-agrineux-primaryHover transition-colors duration-300 shadow-lg"
            >
              Take the Quick Survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full mt-auto pt-8 animate-fade-in">
          <div className="text-center text-agrineux-text/70 text-sm">
            <p>Thank you for helping us transform agriculture!</p>
            <div className="mt-4 flex justify-center space-x-6">
              {/* Optional: Social media links would go here */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
