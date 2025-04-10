import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">True Care Staffing</h3>
            <p className="text-sm sm:text-base text-gray-300">
              Providing quality healthcare staffing solutions in Oklahoma City and surrounding areas.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm sm:text-base text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm sm:text-base text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm sm:text-base text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-gray-300">
                123 Healthcare Way<br />
                Oklahoma City, OK 73101
              </li>
              <li className="text-sm sm:text-base text-gray-300">
                Phone: (405) 555-0123
              </li>
              <li className="text-sm sm:text-base text-gray-300">
                Email: info@truecarestaffing.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-gray-300">
                Monday - Friday: 8:00 AM - 5:00 PM
              </li>
              <li className="text-sm sm:text-base text-gray-300">
                Saturday - Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm sm:text-base text-gray-300">
            © {new Date().getFullYear()} True Care Staffing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 