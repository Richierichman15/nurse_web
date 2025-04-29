'use client';

import { useState } from 'react';

const careTypes = [
  'General Nursing Care',
  'Post-Surgical Care',
  'Elderly Care',
  'Pediatric Care',
  'Palliative Care',
  'Specialized Care'
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    careType: '',
    date: '',
    time: '',
    address: '',
    city: 'Oklahoma City',
    state: 'OK',
    zipCode: '',
    additionalNotes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking request submitted successfully! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          careType: '',
          date: '',
          time: '',
          address: '',
          city: 'Oklahoma City',
          state: 'OK',
          zipCode: '',
          additionalNotes: ''
        });
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      alert('There was an error submitting your booking. Please try again.');
      console.error('Booking submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6">Book a Nurse</h2>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#374151]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#374151]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#374151]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="careType" className="block text-sm font-medium text-[#374151]">
              Type of Care Needed
            </label>
            <select
              name="careType"
              id="careType"
              required
              value={formData.careType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            >
              <option value="">Select care type</option>
              {careTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-[#374151]">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-[#374151]">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-[#374151]">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-[#374151]">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-[#374151]">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-[#374151]">
              ZIP Code
            </label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              required
              value={formData.zipCode}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-[#374151]">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            id="additionalNotes"
            rows={4}
            value={formData.additionalNotes}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-[#1E3A8A] text-white py-2 px-4 rounded-md hover:bg-[#1E3A8A]/90 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2 sm:text-sm transition-colors"
          >
            Submit Booking Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm; 