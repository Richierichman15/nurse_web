import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with us for all your healthcare staffing needs
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-lg text-gray-900">405-268-7331</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Fax</dt>
                  <dd className="mt-1 text-lg text-gray-900">405-849-4862</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-lg text-gray-900">info@trucaresenior.services</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-lg text-gray-900">
                    10802 Quail Plaza Dr<br />
                    Suite 210<br />
                    Oklahoma City, OK 73120
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Monday - Friday</dt>
                  <dd className="mt-1 text-lg text-gray-900">8:00 AM - 5:00 PM</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Saturday - Sunday</dt>
                  <dd className="mt-1 text-lg text-gray-900">Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 