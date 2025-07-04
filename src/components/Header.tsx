import React from 'react';
import { Heart, User, Shield, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const { currentUser, isAdmin, loginAsAdmin, logout } = useApp();

  return (
    <header className="bg-white shadow-lg border-b-4 border-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            <div className="bg-orange-500 p-2 rounded-full">
              <Heart className="h-8 w-8 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">PawsHome</h1>
              <p className="text-sm text-gray-600">Find Your Perfect Companion</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentView('home')}
              className={`text-lg font-medium transition-colors ${
                currentView === 'home' 
                  ? 'text-orange-600 border-b-2 border-orange-600' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Browse Pets
            </button>
            <button
              onClick={() => setCurrentView('about')}
              className={`text-lg font-medium transition-colors ${
                currentView === 'about' 
                  ? 'text-orange-600 border-b-2 border-orange-600' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className={`text-lg font-medium transition-colors ${
                currentView === 'contact' 
                  ? 'text-orange-600 border-b-2 border-orange-600' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <button
                    onClick={() => setCurrentView('admin')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      currentView === 'admin'
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    <Shield className="h-5 w-5" />
                    <span>Admin Panel</span>
                  </button>
                )}
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{currentUser.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={loginAsAdmin}
                className="flex items-center space-x-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Admin Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;