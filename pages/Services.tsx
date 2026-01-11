import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Top Emergency Banner */}
      <div className="bg-primary/10 w-full">
        <div className="px-4 py-3 flex justify-center">
          <p className="text-primary text-sm font-bold leading-normal text-center">
            <span className="material-symbols-outlined align-middle text-sm mr-1">emergency</span>
            Emergency? Call Now: <span className="underline hover:no-underline cursor-pointer">(212) 555-0199</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-white">
        <div className="layout-container flex flex-col items-center">
          <div className="w-full max-w-[1280px] px-4 md:px-10 py-5">
            <div className="w-full">
              <div className="p-4 md:p-0">
                <div 
                  className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center shadow-lg" 
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7DkyjcyWP9b9oKtAQUX-9KCWMo8oSXbpHlGdBFzLWW-Jeoxn0HUuBAhrwKdxQvqsXdfIvybITksr3TUqeZgBXhtsbM2CWP9pY9d0KlA3zeptkIjScpp9amSWoQ5ZU2W4lP80ll9u3WrenjfE4bmkbgWu8eyKghm2YN-UNPyQjbHwERhWGQix1JYOkM225eGcEZzI7rRZKrjcbhbuJfs6rU9dfyPAwU42dX27lTNOOf68wxqFcKK9kPGuqlXEovaemhDjM7ZMNQj0")'
                  }}
                >
                  <div className="flex flex-col gap-4 max-w-[700px]">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                      Dentist NYC — Services
                    </h1>
                    <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-lg">
                      Providing world-class cosmetic, restorative, and general dentistry in the heart of Midtown Manhattan. Experience precision care in a comfortable setting.
                    </h2>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all shadow-md">
                      Schedule Consultation
                    </button>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-base font-bold transition-all">
                      Virtual Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section (Service Grid) */}
      <div className="w-full bg-white py-16">
        <div className="layout-container flex justify-center">
          <div className="w-full max-w-[1280px] px-4 md:px-10">
            <div className="flex flex-col gap-10">
              {/* Section Header */}
              <div className="flex flex-col gap-4 items-start md:items-center md:text-center">
                <h2 className="text-[#111418] text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-[720px]">
                  Comprehensive Dental Care
                </h2>
                <p className="text-[#617589] text-lg font-normal leading-relaxed max-w-[720px]">
                  We offer a full range of customized dental treatments to keep your smile healthy, functional, and beautiful.
                </p>
              </div>
              
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: 'medical_services', title: 'Dental Exams', desc: 'Comprehensive checkups, oral cancer screenings, and low-radiation digital X-rays to maintain optimal oral health.' },
                  { icon: 'auto_awesome', title: 'Teeth Whitening', desc: 'Professional in-office whitening (Zoom!) and take-home kits for a dramatically brighter, more confident smile.' },
                  { icon: 'dentistry', title: 'Porcelain Veneers', desc: 'Custom-crafted, thin shells of medical-grade ceramic to instantly transform the shape, size, and color of your teeth.' },
                  { icon: 'sentiment_satisfied', title: 'Invisalign', desc: 'The clear alternative to metal braces. Discreet aligners effectively straighten teeth without disrupting your lifestyle.' },
                  { icon: 'hardware', title: 'Dental Implants', desc: 'Permanent, natural-looking solutions for replacing missing teeth. Restore function and aesthetics with confidence.' },
                ].map((item, idx) => (
                  <div key={idx} className="group flex flex-col gap-4 rounded-xl border border-[#dbe0e6] bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                    </div>
                    <div className="flex flex-col gap-2 flex-grow">
                      <h3 className="text-[#111418] text-xl font-bold leading-tight">{item.title}</h3>
                      <p className="text-[#617589] text-base font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <a href="#" className="inline-flex items-center text-primary font-bold text-sm mt-2 hover:underline gap-1 group-hover:gap-2 transition-all">
                      Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                ))}
                
                {/* Emergency Card Special Style */}
                <div className="group flex flex-col gap-4 rounded-xl border border-red-100 bg-red-50 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <span className="material-symbols-outlined text-[28px]">e911_emergency</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-grow">
                    <h3 className="text-[#111418] text-xl font-bold leading-tight">Emergency Dentistry</h3>
                    <p className="text-[#617589] text-base font-normal leading-relaxed">
                      Immediate care for severe toothaches, broken teeth, and accidents. Same-day appointments often available.
                    </p>
                  </div>
                  <a href="#" className="inline-flex items-center text-red-600 font-bold text-sm mt-2 hover:underline gap-1 group-hover:gap-2 transition-all">
                    Call Emergency Line <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#f6f7f8] py-20 border-t border-[#dbe0e6]">
        <div className="layout-container flex justify-center">
          <div className="w-full max-w-[960px] px-4">
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-[#111418] text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  Ready to improve your smile?
                </h2>
                <p className="text-[#617589] text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                  Schedule your visit with our premier Midtown Manhattan team today and experience dentistry done differently.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-md">
                  Book Appointment
                </button>
                <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white border border-[#dbe0e6] hover:bg-gray-50 text-[#111418] text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;