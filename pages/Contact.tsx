import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
      {/* PageHeading */}
      <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-[#111418]">
          Dentist NYC — Contact Us
        </h1>
        <p className="text-[#617589] text-lg">We look forward to welcoming you to our Midtown practice.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info & Map */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Emergency Card */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-white p-2 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">emergency</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-bold text-lg leading-tight">Emergency / Same Day Appointments</h3>
                <p className="text-[#617589] text-sm leading-normal">
                  Experiencing a dental emergency? Don't wait. We reserve time daily for urgent care.
                </p>
                <a className="mt-2 inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline" href="tel:2127521163">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  Call (212) 752-1163
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="mt-1 text-[#617589]">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-[#111418] mb-1">Our Location</h4>
                <p className="text-[#617589] text-sm leading-relaxed">
                  20 East 46th St, Rm 1301<br />
                  (Between 5th & Madison Ave)<br />
                  New York, NY 10017
                </p>
                <a className="text-primary text-sm font-medium mt-1 inline-block hover:underline" href="#">Get Directions</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 text-[#617589]">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h4 className="font-bold text-[#111418] mb-1">Email Us</h4>
                <p className="text-[#617589] text-sm leading-relaxed">
                  info@sachardental.com
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 text-[#617589]">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="w-full">
                <h4 className="font-bold text-[#111418] mb-2">Office Hours</h4>
                <div className="grid grid-cols-[1fr_auto] gap-y-2 text-sm text-[#617589] w-full max-w-xs">
                  <span>Mon - Thu</span>
                  <span className="text-right font-medium text-[#111418]">8:00 AM - 6:00 PM</span>
                  <span>Friday</span>
                  <span className="text-right font-medium text-[#111418]">8:00 AM - 3:00 PM</span>
                  <span>Sat - Sun</span>
                  <span className="text-right font-medium text-[#111418]">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md h-64 w-full relative group">
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-700 group-hover:scale-105" 
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpZpHYaXrsdSLFiNoU8KQk017niNQe7vw-XiuNz6U9AuRQ8TzFi2tlS7uIVE7B0ll14AsDkxgqi5FcP0FKDxqnwBVlSTgjyHU9oet6MzHg9ThBP6Bd1ogQWKrm976FodSJ_sSHur5P8eJUuZ428aHv7yTCNKw7cCJIEtiVz0NiQ_ajimLXg9LMX7FBRQ6_6KBSbYLlngbccA0zXAss5Kk3kWOPmcdjkjuGpyzpZcpt-E7ZRtetKBtRVCc7188Ica-nzZB3y8crYnI")',
                backgroundColor: '#e5e7eb'
              }}
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 opacity-0 group-hover:opacity-0">
                  {/* Invisible overlay if needed */}
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-white text-[#111418] text-xs font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">map</span>
                Open in Maps
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#f0f2f4] p-6 md:p-10">
            <h3 className="text-2xl font-bold text-[#111418] mb-6">Send us a Message</h3>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#111418]" htmlFor="name">Full Name</label>
                  <input className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-[#f8f9fa] px-4 text-[#111418] placeholder-[#9ca3af] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" id="name" placeholder="Jane Doe" type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#111418]" htmlFor="phone">Phone Number</label>
                  <input className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-[#f8f9fa] px-4 text-[#111418] placeholder-[#9ca3af] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" id="phone" placeholder="(555) 555-5555" type="tel" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#111418]" htmlFor="email">Email Address</label>
                <input className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-[#f8f9fa] px-4 text-[#111418] placeholder-[#9ca3af] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" id="email" placeholder="jane@example.com" type="email" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#111418]" htmlFor="message">How can we help?</label>
                <textarea className="w-full rounded-lg border border-[#dbe0e6] bg-[#f8f9fa] p-4 text-[#111418] placeholder-[#9ca3af] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none" id="message" placeholder="I would like to schedule a consultation for..." rows={5}></textarea>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input className="rounded border-gray-300 text-primary focus:ring-primary" id="consent" type="checkbox" />
                <label className="text-xs text-[#617589]" htmlFor="consent">
                  I consent to having this website store my submitted information so they can respond to my inquiry.
                </label>
              </div>
              <button className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg" type="button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;