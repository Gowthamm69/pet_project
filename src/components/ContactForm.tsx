import React, { useState } from 'react';
import { ArrowLeft, Send, Heart } from 'lucide-react';
import { Pet } from '../types';
import { useApp } from '../context/AppContext';

interface ContactFormProps {
  pet: Pet;
  onBack: () => void;
  onSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ pet, onBack, onSubmit }) => {
  const { addInquiry } = useApp();
  const [formData, setFormData] = useState({
    inquirerName: '',
    email: '',
    phone: '',
    message: '',
    experience: '',
    livingSituation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    addInquiry({
      petId: pet.id,
      petName: pet.name,
      ...formData,
      status: 'pending'
    });

    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      onSubmit();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-green-600" fill="currentColor" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in {pet.name}. Our team will review your application and get back to you within 2-3 business days.
          </p>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="text-orange-800 font-medium">What happens next?</p>
            <ul className="text-orange-700 text-sm mt-2 space-y-1">
              <li>• We'll review your application carefully</li>
              <li>• A team member will contact you for a phone interview</li>
              <li>• If approved, we'll schedule a meet-and-greet with {pet.name}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to {pet.name}'s Details</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Adoption Application</h2>
          <p className="text-gray-600">
            Interested in adopting <span className="font-semibold text-orange-600">{pet.name}</span>? 
            Please fill out this form and we'll get back to you soon!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="inquirerName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="inquirerName"
                name="inquirerName"
                required
                value={formData.inquirerName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
              Pet Experience *
            </label>
            <select
              id="experience"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select your experience level</option>
              <option value="first-time">First-time pet owner</option>
              <option value="some-experience">Some experience with pets</option>
              <option value="very-experienced">Very experienced with pets</option>
              <option value="breed-specific">Experience with this breed specifically</option>
            </select>
          </div>

          <div>
            <label htmlFor="livingSituation" className="block text-sm font-medium text-gray-700 mb-2">
              Living Situation *
            </label>
            <select
              id="livingSituation"
              name="livingSituation"
              required
              value={formData.livingSituation}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select your living situation</option>
              <option value="house-with-yard">House with fenced yard</option>
              <option value="house-no-yard">House without yard</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo/Townhouse</option>
              <option value="farm">Farm/Rural property</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tell us why you'd like to adopt {pet.name} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder={`Tell us about your interest in ${pet.name} and what kind of home you can provide...`}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Please note:</strong> All pets are spayed/neutered, vaccinated, and microchipped before adoption. 
              Our adoption fee includes these services and helps us continue rescuing more animals in need.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Submit Adoption Application</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;