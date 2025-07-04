export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'rabbit' | 'bird';
  breed: string;
  age: number;
  ageUnit: 'months' | 'years';
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  personality: string[];
  goodWith: string[];
  imageUrl: string;
  status: 'available' | 'pending' | 'adopted';
  dateAdded: string;
  vaccinated: boolean;
  spayedNeutered: boolean;
  houseTrained: boolean;
}

export interface AdoptionInquiry {
  id: string;
  petId: string;
  petName: string;
  inquirerName: string;
  email: string;
  phone: string;
  message: string;
  experience: string;
  livingSituation: string;
  dateSubmitted: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}