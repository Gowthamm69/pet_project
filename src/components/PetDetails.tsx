import React, { useState } from 'react';
import { ArrowLeft, Heart, CheckCircle, X, Users, Home, Calendar, Stethoscope } from 'lucide-react';
import { Pet } from '../types';
import ContactForm from './ContactForm';

interface PetDetailsProps {
  pet: Pet;
  onBack: () => void;
}

const PetDetails: React.FC<PetDetailsProps> = ({ pet, onBack }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'adopted':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="h-5 w-5" />;
      case 'pending':
        return <Heart className="h-5 w-5" />;
      case 'adopted':
        return <Heart className="h-5 w-5" fill="currentColor" />;
      default:
        return <CheckCircle className="h-5 w-5" />;
    }
  };

  if (showContactForm) {
    return (
      <ContactForm 
        pet={pet} 
        onBack={() => setShowContactForm(false)} 
        onSubmit={() => {
          setShowContactForm(false);
          // Show success message
        }}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to All Pets</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={pet.imageUrl}
              alt={pet.name}
              className="w-full h-96 md:h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-800">{pet.name}</h1>
              <span className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(pet.status)}`}>
                {getStatusIcon(pet.status)}
                <span className="capitalize">{pet.status}</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">Breed</p>
                <p className="font-semibold text-gray-800">{pet.breed}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Age</p>
                <p className="font-semibold text-gray-800">{pet.age} {pet.ageUnit}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Gender</p>
                <p className="font-semibold text-gray-800 capitalize">{pet.gender}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Size</p>
                <p className="font-semibold text-gray-800 capitalize">{pet.size}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">About {pet.name}</h3>
              <p className="text-gray-700 leading-relaxed">{pet.description}</p>
            </div>

            {pet.status === 'available' && (
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>I'm Interested in {pet.name}</span>
              </button>
            )}

            {pet.status === 'pending' && (
              <div className="w-full bg-yellow-100 text-yellow-800 py-3 px-6 rounded-lg text-center font-semibold">
                Adoption Application Pending
              </div>
            )}

            {pet.status === 'adopted' && (
              <div className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg text-center font-semibold">
                {pet.name} Has Found a Forever Home!
              </div>
            )}
          </div>
        </div>

        <div className="px-8 pb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-600" />
                <span>Personality & Compatibility</span>
              </h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Personality Traits</p>
                <div className="flex flex-wrap gap-2">
                  {pet.personality.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Good With</p>
                <div className="flex flex-wrap gap-2">
                  {pet.goodWith.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <Stethoscope className="h-5 w-5 text-orange-600" />
                <span>Health & Care</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  {pet.vaccinated ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <X className="h-5 w-5 text-red-600" />
                  )}
                  <span className="text-gray-700">Vaccinated</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  {pet.spayedNeutered ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <X className="h-5 w-5 text-red-600" />
                  )}
                  <span className="text-gray-700">Spayed/Neutered</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  {pet.houseTrained ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <X className="h-5 w-5 text-red-600" />
                  )}
                  <span className="text-gray-700">House Trained</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-gray-800">Added to our shelter</span>
                </div>
                <p className="text-gray-700">{new Date(pet.dateAdded).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;