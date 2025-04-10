import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BookingSection from '@/components/BookingSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/care-home-bg.jpg')] bg-cover bg-center opacity-10 blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Compassionate Care When You Need It Most
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Connecting seniors and caregivers with trusted nursing professionals in Oklahoma City.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Request a Nurse
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/nurse-senior-illustration.png"
                alt="Friendly nurse assisting a senior citizen"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xl font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
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
