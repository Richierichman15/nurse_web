import BookingForm from './BookingForm';

const BookingSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#F0F4FF] to-[#E6F1FA] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#111827] sm:text-4xl">
            Book a Nurse
          </h2>
          <p className="mt-4 text-lg text-[#374151] max-w-3xl mx-auto">
            Need professional nursing care? Fill out our booking form and we&apos;ll match you with the perfect nurse for your needs. 
            Our team will review your request and contact you within 24 hours to confirm your booking.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <BookingForm />
          </div>
          
          {/* Service Limitations Section */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#111827] mb-4">
              Important Service Limitations
            </h3>
            <p className="text-[#374151] mb-4">
              One common misconception is that Companion Sitters provide the same services as traditional medical caregivers like Certified Nursing Aides or Certified Home Health Aides. While their roles are very similar, TruCare Companion Sitters do not provide assistance with activities of daily living (ADLs) such as:
            </p>
            <ul className="list-disc list-inside text-[#374151] space-y-2 mb-4">
              <li>Bathing</li>
              <li>Brushing teeth</li>
              <li>Dressing</li>
              <li>Toileting</li>
              <li>Changing disposable garments</li>
              <li>Administering medications</li>
            </ul>
            <p className="text-[#374151]">
              If the client is wheelchair bound, senior sitter services and providers require that the individual be able to get into a vehicle by themselves if transportation is to be provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection; 