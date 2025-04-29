import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">
            Who We Are
          </h1>
          <p className="mt-6 text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Hearts with Hands that give TruCare where compassion is at the heart of our care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-600">
            More than 3 in 4 Americans want to stay in their home as they age. That is why our Caregivers are trained and skilled in a broad range of care services that support Home Companion Care as well as Senior Mental Health. We provide flexible support to assist older adults and families in overcoming social barriers to health and well-being.
          </p>
          <p className="text-gray-600">
            We will work with you to make sure your loved ones live and feel better when we are caring for them. TruCare is family care that feels like family—when, where, and how you want it. We have compassionate Caregivers who are dedicated to help and support your loved ones with Activities of Daily Living.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Services We Provide</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Companion Care</li>
                <li>• Meal Preparation</li>
                <li>• Respite Care</li>
                <li>• Errands</li>
                <li>• Hospice Sitters</li>
                <li>• Pet Care</li>
                <li>• Plants Care</li>
                <li>• Light Housekeeping</li>
                <li>• Medication Reminders</li>
                <li>• Personal Care</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Where We Provide Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hospitals</li>
                <li>• Nursing Homes</li>
                <li>• Skilled Nursing Facilities</li>
                <li>• Residential Care facilities</li>
                <li>• Group Homes</li>
                <li>• In-Homebound Patients</li>
                <li>• Patients with Disabilities</li>
                <li>• Adult Daycare</li>
                <li>• Your own Home</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Companion Sitter Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Companion Sitter Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Providing company, companionship and friendly conversations with smiles</li>
                <li>• Playing games or engaging in mind stimulating activities</li>
                <li>• Taking short outings to the yard or for short walks when possible</li>
                <li>• Assistance with self-administration of medication</li>
                <li>• Light exercise guidance within the patient&apos;s limitations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Limitations</h3>
              <p className="text-gray-600 mb-4">
                One common misconception is that Companion Sitters provide the same services as traditional medical caregivers like Certified Nursing Aides or Certified Home Health Aides. While their roles are very similar, TruCare Companion Sitters do not provide assistance with activities of daily living (ADLs) such as:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Bathing</li>
                <li>• Brushing teeth</li>
                <li>• Dressing</li>
                <li>• Toileting</li>
                <li>• Changing disposable garments</li>
                <li>• Administering medications</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We can guide them to do these activities. If the client is wheelchair bound, senior sitter services and providers require that the individual be able to get into a vehicle by themselves if transportation is to be provided.
              </p>
            </div>
          </div>
        </div>

        {/* Service Duration */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Duration</h3>
          <p className="text-gray-600">
            We can provide our services for both long term situations and short term needs from a minimum of 4hrs to 24hrs round the clock.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 