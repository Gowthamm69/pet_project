import React, { useState } from 'react';
import { Users, Heart, CheckCircle, X, Trash2, Eye, Calendar, Mail, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';

const AdminPanel: React.FC = () => {
  const { pets, inquiries, updateInquiryStatus, updatePetStatus, deletePet } = useApp();
  const [activeTab, setActiveTab] = useState<'inquiries' | 'pets'>('inquiries');
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);

  const pendingInquiries = inquiries.filter(inquiry => inquiry.status === 'pending');
  const approvedInquiries = inquiries.filter(inquiry => inquiry.status === 'approved');
  const rejectedInquiries = inquiries.filter(inquiry => inquiry.status === 'rejected');

  const availablePets = pets.filter(pet => pet.status === 'available');
  const pendingPets = pets.filter(pet => pet.status === 'pending');
  const adoptedPets = pets.filter(pet => pet.status === 'adopted');

  const handleApproveInquiry = (inquiryId: string, petId: string) => {
    updateInquiryStatus(inquiryId, 'approved');
    updatePetStatus(petId, 'pending');
  };

  const handleRejectInquiry = (inquiryId: string) => {
    updateInquiryStatus(inquiryId, 'rejected');
  };

  const getInquiryDetails = (inquiryId: string) => {
    return inquiries.find(inquiry => inquiry.id === inquiryId);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage adoption inquiries and pet listings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-3 rounded-full">
              <Heart className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{availablePets.length}</p>
              <p className="text-sm text-gray-600">Available Pets</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{pendingInquiries.length}</p>
              <p className="text-sm text-gray-600">Pending Inquiries</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{pendingPets.length}</p>
              <p className="text-sm text-gray-600">Adoption Pending</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-3 rounded-full">
              <Heart className="h-6 w-6 text-green-600" fill="currentColor" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{adoptedPets.length}</p>
              <p className="text-sm text-gray-600">Successfully Adopted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'inquiries'
                  ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Adoption Inquiries ({inquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('pets')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'pets'
                  ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Manage Pets ({pets.length})
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'inquiries' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Adoption Inquiries</h2>
              
              {inquiries.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No adoption inquiries yet</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {pendingInquiries.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span>Pending Review ({pendingInquiries.length})</span>
                      </h3>
                      <div className="space-y-4">
                        {pendingInquiries.map((inquiry) => (
                          <div key={inquiry.id} className="border border-yellow-200 rounded-lg p-6 bg-yellow-50">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-lg font-semibold text-gray-800">{inquiry.inquirerName}</h4>
                                <p className="text-gray-600">Interested in <span className="font-medium">{inquiry.petName}</span></p>
                              </div>
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => setSelectedInquiry(selectedInquiry === inquiry.id ? null : inquiry.id)}
                                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                                >
                                  <Eye className="h-4 w-4 inline mr-1" />
                                  {selectedInquiry === inquiry.id ? 'Hide' : 'View'}
                                </button>
                                <button
                                  onClick={() => handleApproveInquiry(inquiry.id, inquiry.petId)}
                                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                                >
                                  <CheckCircle className="h-4 w-4 inline mr-1" />
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleRejectInquiry(inquiry.id)}
                                  className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                                >
                                  <X className="h-4 w-4 inline mr-1" />
                                  Reject
                                </button>
                              </div>
                            </div>
                            
                            {selectedInquiry === inquiry.id && (
                              <div className="border-t border-yellow-200 pt-4 mt-4">
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                  <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">{inquiry.email}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">{inquiry.phone}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">Submitted {new Date(inquiry.dateSubmitted).toLocaleDateString()}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Users className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm text-gray-700">{inquiry.experience}</span>
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <p className="text-sm text-gray-600 mb-1">Living Situation:</p>
                                  <p className="text-sm text-gray-800">{inquiry.livingSituation}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600 mb-1">Message:</p>
                                  <p className="text-sm text-gray-800 bg-white p-3 rounded border">{inquiry.message}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {approvedInquiries.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span>Approved ({approvedInquiries.length})</span>
                      </h3>
                      <div className="space-y-4">
                        {approvedInquiries.map((inquiry) => (
                          <div key={inquiry.id} className="border border-green-200 rounded-lg p-4 bg-green-50">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-semibold text-gray-800">{inquiry.inquirerName}</h4>
                                <p className="text-sm text-gray-600">Approved for <span className="font-medium">{inquiry.petName}</span></p>
                              </div>
                              <span className="text-sm text-green-700 bg-green-200 px-2 py-1 rounded">
                                Approved
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'pets' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Pets</h2>
              
              <div className="space-y-6">
                {availablePets.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span>Available for Adoption ({availablePets.length})</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {availablePets.map((pet) => (
                        <div key={pet.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                          <div className="flex items-center space-x-3 mb-3">
                            <img src={pet.imageUrl} alt={pet.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                              <h4 className="font-semibold text-gray-800">{pet.name}</h4>
                              <p className="text-sm text-gray-600">{pet.breed}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-green-700 bg-green-200 px-2 py-1 rounded">
                              Available
                            </span>
                            <button
                              onClick={() => deletePet(pet.id)}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pendingPets.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span>Adoption Pending ({pendingPets.length})</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {pendingPets.map((pet) => (
                        <div key={pet.id} className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                          <div className="flex items-center space-x-3 mb-3">
                            <img src={pet.imageUrl} alt={pet.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                              <h4 className="font-semibold text-gray-800">{pet.name}</h4>
                              <p className="text-sm text-gray-600">{pet.breed}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-yellow-700 bg-yellow-200 px-2 py-1 rounded">
                              Pending
                            </span>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => updatePetStatus(pet.id, 'adopted')}
                                className="text-green-600 hover:text-green-800 transition-colors"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => updatePetStatus(pet.id, 'available')}
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {adoptedPets.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span>Successfully Adopted ({adoptedPets.length})</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {adoptedPets.map((pet) => (
                        <div key={pet.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                          <div className="flex items-center space-x-3 mb-3">
                            <img src={pet.imageUrl} alt={pet.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                              <h4 className="font-semibold text-gray-800">{pet.name}</h4>
                              <p className="text-sm text-gray-600">{pet.breed}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded">
                              Adopted ❤️
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;