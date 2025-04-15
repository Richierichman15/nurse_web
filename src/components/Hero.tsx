import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Healthcare professionals"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Quality Healthcare Staffing Solutions in Oklahoma City
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">
            True Care Staffing provides exceptional healthcare professionals to meet your facility&apos;s needs. 
            We connect skilled nurses and healthcare workers with top medical facilities in Oklahoma City. We also do at home care.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 