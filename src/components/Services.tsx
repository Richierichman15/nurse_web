const services = [
  {
    title: 'Nursing Staff',
    description: 'Registered Nurses, Licensed Practical Nurses, and Certified Nursing Assistants for all healthcare settings.',
    icon: '👩‍⚕️',
  },
  {
    title: 'Specialized Care',
    description: 'Expert staff for specialized units including ICU, ER, and long-term care facilities.',
    icon: '🏥',
  },
  {
    title: 'Temporary Staffing',
    description: 'Flexible staffing solutions for short-term needs and emergency coverage.',
    icon: '⏱️',
  },
  {
    title: 'Permanent Placement',
    description: 'Long-term staffing solutions with thorough vetting and matching processes.',
    icon: '📋',
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg max-w-3xl mx-auto">
            Comprehensive healthcare staffing solutions tailored to your needs
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 