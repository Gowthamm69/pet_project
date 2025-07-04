import React, { useState, useRef } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import PetFilters from './components/PetFilters';
import PetCard from './components/PetCard';
import PetDetails from './components/PetDetails';
import AdminPanel from './components/AdminPanel';
import About from './components/About';
import Contact from './components/Contact';
import { Pet } from './types';
import { useApp } from './context/AppContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'admin' | 'about' | 'contact'>('home');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const petsRef = useRef<HTMLDivElement>(null);

  const { filteredPets } = useApp();

  const handleViewDetails = (pet: Pet) => {
    setSelectedPet(pet);
  };

  const handleBackToPets = () => {
    setSelectedPet(null);
  };

  const scrollToPets = () => {
    petsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentView === 'admin') {
      return <AdminPanel />;
    }
    
    if (currentView === 'about') {
      return <About />;
    }
    
    if (currentView === 'contact') {
      return <Contact />;
    }

    // Home view
    if (selectedPet) {
      return <PetDetails pet={selectedPet} onBack={handleBackToPets} />;
    }

    return (
      <>
        <Hero onScrollToPets={scrollToPets} />
        
        <div ref={petsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Available Pets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each of these wonderful animals is looking for their forever home. Browse through our available pets 
              and find the perfect companion for your family.
            </p>
          </div>

          <PetFilters />

          {filteredPets.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No pets match your criteria</h3>
              <p className="text-gray-600 mb-8">Try adjusting your filters to see more available pets.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPets.map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={pet}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;