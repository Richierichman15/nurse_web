import Services from '@/components/Services';
import BookingSection from '@/components/BookingSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Slideshow from '@/components/Slideshow';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F0F4FF] to-[#E6F1FA] py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
                Compassionate Care When You Need It Most
              </h1>
              <p className="text-lg sm:text-xl text-[#374151] mb-8">
                Connecting seniors and caregivers with trusted nursing professionals in Oklahoma City.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/booking" 
                  className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Request a Nurse
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white hover:bg-gray-50 text-[#1E3A8A] px-8 py-3 rounded-lg text-lg font-semibold border-2 border-[#1E3A8A] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Slideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#111827] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0F4FF] flex items-center justify-center">
                    <span className="text-[#1E3A8A] text-xl font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-[#111827]">{testimonial.name}</h3>
                    <p className="text-[#374151]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#374151]">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Services />
      <BookingSection />
      <Contact />
      <Footer />
    </main>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Daughter of Client",
    quote: "The nurses from True Care have been a blessing. They treat my mother with such kindness and respect. I can finally sleep at night knowing she's in good hands."
  },
  {
    name: "Robert Chen",
    role: "Caregiver",
    quote: "As a full-time caregiver, I needed reliable backup support. True Care Staffing provided exactly that - professional, compassionate nurses who understand our needs."
  },
  {
    name: "Margaret Williams",
    role: "Senior Client",
    quote: "I was nervous about having someone new help me, but my nurse from True Care made me feel comfortable right away. She's become like family."
  }
];
