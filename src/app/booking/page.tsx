import BookingSection from '@/components/BookingSection';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F0F4FF] to-[#E6F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Book a Nurse
          </h1>
          <p className="text-lg text-[#374151] max-w-3xl mx-auto">
            Need professional nursing care? Fill out our booking form and we'll match you with the perfect nurse for your needs. 
            Our team will review your request and contact you within 24 hours to confirm your booking.
          </p>
        </div>
        <BookingSection />
      </div>
    </main>
  );
} 