import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-bold' : 'text-[#111418] hover:text-primary';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Meet the Doctors', path: '/doctors' },
    { name: 'Insurance & Financing', path: '/insurance' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-surface-light border-b border-[#f0f2f4] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="text-primary size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl filled-icon group-hover:scale-110 transition-transform">dentistry</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold leading-none tracking-tight">Sachar Dental NYC</h2>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Specialist Dentistry</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Header CTAs */}
            <div className="hidden lg:flex gap-3">
              <button className="bg-surface-light border border-gray-200 hover:bg-gray-50 text-sm font-bold h-10 px-4 rounded-lg transition-colors flex items-center gap-2 text-gray-700">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>(212) 752-1163</span>
              </button>
              <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold h-10 px-5 rounded-lg shadow-sm transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Schedule Online</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium py-2 ${isActive(link.path)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-gray-100">
               <button className="bg-white border border-gray-200 text-gray-800 w-full h-10 rounded-lg font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">call</span>
                (212) 752-1163
              </button>
              <button className="bg-primary text-white w-full h-10 rounded-lg font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Schedule Online
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#101922] text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-primary size-8 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl filled-icon">dentistry</span>
                </div>
                <h2 className="text-xl font-bold leading-none tracking-tight">Sachar Dental NYC</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Providing premier dental care in Midtown Manhattan since 2002. Our philosophy is minimal intervention for maximum health.
              </p>
              <div className="flex gap-4">
                <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
              </div>
            </div>
            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                  <span>20 East 46th St, Rm 1301<br />New York, NY 10017</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <a className="hover:text-white transition-colors" href="tel:2127521163">(212) 752-1163</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <a className="hover:text-white transition-colors" href="mailto:info@sachardental.com">info@sachardental.com</a>
                </li>
              </ul>
            </div>
            {/* Hours */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-6 text-white">Opening Hours</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Monday - Thursday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Friday</span>
                  <span className="text-white">8:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Saturday - Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </li>
              </ul>
            </div>
            {/* Map */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold mb-6 text-white">Location</h3>
              <div className="w-full h-40 bg-gray-700 rounded-lg overflow-hidden relative group cursor-pointer" 
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBMKwpeN74SqZjgiUtXfkvr7PrgWccxu6L8yQ9tyBZl_hfbysrSwmNXcA5visJuCbPCL_NJj69Cc7Xo0XV7779NDmlveypdM_yaW2I3A_94aeVOomOMvE37NZ4o8vCfsmXkr0wR8Alg6cErNVbMvTIPYTrmd6w9-gRgk5C5wbHIrhCV0ySp9_FuavEDdA7LiciIb2JJ1HK2bsw0oRmlhOtoCur42w10F7cu6AvBYyXZD0sc-8Z_d7QVGIYzYMSxtFt1HNYiVT2mjY')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-xs font-bold shadow-md transform group-hover:scale-105 transition-transform">View on Map</button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2024 Sachar Dental NYC. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-white transition-colors" href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;