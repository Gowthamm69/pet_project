import React from 'react';
import { Heart, MapPin, Calendar, CheckCircle, Clock, Users } from 'lucide-react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
  onViewDetails: (pet: Pet) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onViewDetails }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'adopted':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'adopted':
        return <Heart className="h-4 w-4" fill="currentColor" />;
      default:
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pet.status)}`}>
            {getStatusIcon(pet.status)}
            <span className="capitalize">{pet.status}</span>
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-gray-800 capitalize">{pet.species}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-gray-800">{pet.name}</h3>
          <div className="text-right">
            <p className="text-lg font-semibold text-orange-600">
              {pet.age} {pet.ageUnit}
            </p>
            <p className="text-sm text-gray-600 capitalize">{pet.size}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-3 font-medium">{pet.breed}</p>
        
        <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
          {pet.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {pet.personality.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
            >
              {trait}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>Good with: {pet.goodWith.slice(0, 2).join(', ')}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Added {new Date(pet.dateAdded).toLocaleDateString()}</span>
          </div>
          
          <button
            onClick={() => onViewDetails(pet)}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;