import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">About PawsHome</h1>
          <p className="text-xl opacity-90">
            Connecting loving families with their perfect furry companions since 2015
          </p>
        </div>

        <div className="p-8">
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At PawsHome, we believe every pet deserves a loving forever home, and every family deserves 
              the unconditional love that comes with pet companionship. Our mission is to rescue, rehabilitate, 
              and rehome animals in need while providing comprehensive support to adopting families.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Founded by a group of passionate animal lovers, we've grown from a small local rescue operation 
              to a comprehensive adoption center serving the entire region. Our team of dedicated volunteers 
              and staff work tirelessly to ensure each animal receives the care, attention, and love they 
              deserve while waiting for their perfect match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2,500+</h3>
              <p className="text-gray-600">Animals Rescued</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1,800+</h3>
              <p className="text-gray-600">Successful Adoptions</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">9</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Care</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Rescue & Rehabilitation</h4>
                    <p className="text-gray-600">We rescue animals from various situations and provide medical care, socialization, and love.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Health & Wellness</h4>
                    <p className="text-gray-600">All pets receive complete veterinary care, vaccinations, and spay/neuter services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Perfect Matching</h4>
                    <p className="text-gray-600">We carefully match pets with families based on lifestyle, experience, and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 rounded-full p-2 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ongoing Support</h4>
                    <p className="text-gray-600">We provide continued support and resources to ensure successful, lifelong adoptions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Compassion First</h4>
                  <p className="text-gray-600">Every decision we make is guided by what's best for the animals in our care.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Transparency</h4>
                  <p className="text-gray-600">We provide complete information about each pet's history, health, and needs.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Community Focus</h4>
                  <p className="text-gray-600">We're committed to building stronger communities through pet adoption and education.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Lifelong Commitment</h4>
                  <p className="text-gray-600">Our support doesn't end at adoption - we're here for the lifetime of your pet.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get Involved</h3>
            <p className="text-gray-700 mb-4">
              Want to help make a difference? There are many ways to support our mission beyond adoption:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Volunteer</h4>
                <p className="text-sm text-gray-600">Help with daily care, events, and administrative tasks</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Foster</h4>
                <p className="text-sm text-gray-600">Provide temporary homes for pets in need</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Donate</h4>
                <p className="text-sm text-gray-600">Support our rescue efforts and medical care programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;