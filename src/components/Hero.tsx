import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToPets: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToPets }) => {
  return (
    <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full">
              <Heart className="h-16 w-16 text-white" fill="currentColor" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your
            <span className="block text-yellow-200">Perfect Companion</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Every pet deserves a loving home, and every home deserves the joy of a furry friend. 
            Discover amazing animals waiting to become part of your family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onScrollToPets}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse Available Pets
            </button>
            <a 
              href="#about" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Learn About Us
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <button 
              onClick={onScrollToPets}
              className="text-white hover:text-yellow-200 transition-colors"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
              <p className="text-sm mt-2">Scroll to see our pets</p>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;