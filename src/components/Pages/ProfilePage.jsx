import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaEdit, FaCamera, FaShieldAlt, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendar } from 'react-icons/fa';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    bio: 'Passionate shopper and tech enthusiast. Love discovering new products and sharing reviews with the community.'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="bg-gray-50 min-h-screen py-4 md:py-8">
      <div className="px-0 md:px-16 lg:px-24">
        {/* Header */}
        <div className="bg-white md:rounded-2xl shadow-lg overflow-hidden mb-6 md:mb-8 mx-4 md:mx-0">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
              <FaCamera />
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-4 md:px-8 pb-6 md:pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                {/* Profile Picture */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-white p-2 shadow-lg">
                    <img
                      src={user?.avatar}
                      alt="Profile"
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                    <FaCamera size={14} />
                  </button>
                  {user?.isVerified && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <FaShieldAlt className="text-white text-sm" />
                    </div>
                  )}
                </div>

                {/* Basic Info */}
                <div className="md:mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{user?.displayName}</h1>
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <FaEnvelope size={14} />
                      <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      <FaStar size={12} />
                      <span className="text-sm font-medium">Premium Member</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <FaCalendar size={14} />
                    <span>Member since January 2022</span>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium shadow-lg mt-4 md:mt-0"
              >
                <FaEdit size={16} />
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Quick Info */}
          <div className="space-y-6 px-4 lg:px-0">
            {/* Stats Cards */}
            <div className="bg-white md:rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">47</span>
                    </div>
                    <span className="font-medium text-gray-900">Total Orders</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold">23</span>
                    </div>
                    <span className="font-medium text-gray-900">Wishlist Items</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-600 font-bold">4.9</span>
                    </div>
                    <span className="font-medium text-gray-900">Average Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white md:rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaUser className="text-blue-600 text-sm" />
                  </div>
                  <span className="font-medium">Update Profile</span>
                </button>
                <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaShieldAlt className="text-green-600 text-sm" />
                  </div>
                  <span className="font-medium">Security Settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-2 px-4 lg:px-0">
            <div className="bg-white md:rounded-2xl shadow-lg p-4 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h3>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.displayName}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center gap-2">
                      <FaEnvelope className="text-gray-400" />
                      {formData.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center gap-2">
                      <FaPhone className="text-gray-400" />
                      {formData.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-400" />
                      {formData.address}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-900">{formData.bio}</div>
                  )}
                </div>

                {isEditing && (
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={handleSave}
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;