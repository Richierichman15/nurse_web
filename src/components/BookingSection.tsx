import BookingForm from './BookingForm';

const BookingSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book a Nurse
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Need professional nursing care? Fill out our booking form and we'll match you with the perfect nurse for your needs. 
            Our team will review your request and contact you within 24 hours to confirm your booking.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookingSection; 