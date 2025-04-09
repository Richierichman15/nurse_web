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
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Quality Healthcare Staffing Solutions in Oklahoma City
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl">
          True Care Staffing provides exceptional healthcare professionals to meet your facility's needs. 
          We connect skilled nurses and healthcare workers with top medical facilities in Oklahoma City.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 