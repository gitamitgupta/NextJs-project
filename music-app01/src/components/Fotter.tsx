import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, helping students bring a vibrant future to life as musicians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div className="text-gray-300 text-sm">Home</div>
              <div className="text-gray-300 text-sm">About</div>
              <div className="text-gray-300 text-sm">Courses</div>
              <div className="text-gray-300 text-sm">Contact</div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <div className="text-gray-300 text-sm">Facebook</div>
              <div className="text-gray-300 text-sm">Twitter</div>
              <div className="text-gray-300 text-sm">Instagram</div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>New Delhi, India</div>
              <div>Delhi 10001</div>
              <div>Email: info@musicschool.com</div>
              <div>Phone: (123) 456-7890</div>
            </div>
          </div>

        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">© 2025 Music School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;