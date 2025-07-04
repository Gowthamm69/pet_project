import React, { createContext, useContext, useState, useEffect } from 'react';
import { Pet, AdoptionInquiry, User } from '../types';
import { mockPets, mockInquiries } from '../data/mockData';

interface AppContextType {
  pets: Pet[];
  inquiries: AdoptionInquiry[];
  currentUser: User | null;
  isAdmin: boolean;
  filteredPets: Pet[];
  searchTerm: string;
  speciesFilter: string;
  sizeFilter: string;
  ageFilter: string;
  statusFilter: string;
  setSearchTerm: (term: string) => void;
  setSpeciesFilter: (species: string) => void;
  setSizeFilter: (size: string) => void;
  setAgeFilter: (age: string) => void;
  setStatusFilter: (status: string) => void;
  addInquiry: (inquiry: Omit<AdoptionInquiry, 'id' | 'dateSubmitted'>) => void;
  updateInquiryStatus: (id: string, status: 'pending' | 'approved' | 'rejected') => void;
  updatePetStatus: (id: string, status: 'available' | 'pending' | 'adopted') => void;
  deletePet: (id: string) => void;
  loginAsAdmin: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pets, setPets] = useState<Pet[]>(mockPets);
  const [inquiries, setInquiries] = useState<AdoptionInquiry[]>(mockInquiries);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const isAdmin = currentUser?.role === 'admin';

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = !speciesFilter || pet.species === speciesFilter;
    const matchesSize = !sizeFilter || pet.size === sizeFilter;
    const matchesStatus = !statusFilter || pet.status === statusFilter;
    
    let matchesAge = true;
    if (ageFilter) {
      const ageInMonths = pet.ageUnit === 'years' ? pet.age * 12 : pet.age;
      switch (ageFilter) {
        case 'young':
          matchesAge = ageInMonths <= 12;
          break;
        case 'adult':
          matchesAge = ageInMonths > 12 && ageInMonths <= 84;
          break;
        case 'senior':
          matchesAge = ageInMonths > 84;
          break;
      }
    }

    return matchesSearch && matchesSpecies && matchesSize && matchesAge && matchesStatus;
  });

  const addInquiry = (inquiry: Omit<AdoptionInquiry, 'id' | 'dateSubmitted'>) => {
    const newInquiry: AdoptionInquiry = {
      ...inquiry,
      id: Date.now().toString(),
      dateSubmitted: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setInquiries(prev => [...prev, newInquiry]);
  };

  const updateInquiryStatus = (id: string, status: 'pending' | 'approved' | 'rejected') => {
    setInquiries(prev => prev.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status } : inquiry
    ));
  };

  const updatePetStatus = (id: string, status: 'available' | 'pending' | 'adopted') => {
    setPets(prev => prev.map(pet => 
      pet.id === id ? { ...pet, status } : pet
    ));
  };

  const deletePet = (id: string) => {
    setPets(prev => prev.filter(pet => pet.id !== id));
    setInquiries(prev => prev.filter(inquiry => inquiry.petId !== id));
  };

  const loginAsAdmin = () => {
    setCurrentUser({
      id: 'admin1',
      name: 'Admin User',
      email: 'admin@petadoption.com',
      role: 'admin'
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AppContext.Provider value={{
      pets,
      inquiries,
      currentUser,
      isAdmin,
      filteredPets,
      searchTerm,
      speciesFilter,
      sizeFilter,
      ageFilter,
      statusFilter,
      setSearchTerm,
      setSpeciesFilter,
      setSizeFilter,
      setAgeFilter,
      setStatusFilter,
      addInquiry,
      updateInquiryStatus,
      updatePetStatus,
      deletePet,
      loginAsAdmin,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};