import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredBadges = [
    <div className="text-xl font-bold font-serif text-gray-600 flex items-center gap-1 whitespace-nowrap"><span className="material-symbols-outlined">award_star</span> NYC Top Doctors</div>,
    <div className="text-xl font-bold font-sans text-gray-600 italic whitespace-nowrap">Healthline</div>,
    <div className="text-xl font-bold font-serif text-gray-600 whitespace-nowrap">New York Magazine</div>,
    <div className="text-xl font-bold font-sans text-gray-600 tracking-tighter whitespace-nowrap">Zocdoc</div>,
  ];

  const testimonials = [
    { text: "\"Dr. Sachar is simply the best. I've been terrified of dentists my whole life, but his calming demeanor changed my perspective.\"", author: "Jennifer D.", source: "Google Review", initials: "JD" },
    { text: "\"The office is pristine and the staff is incredibly professional. I went in for veneers and the results are natural and stunning.\"", author: "Michael K.", source: "Yelp Review", initials: "MK" },
    { text: "\"Honest and ethical as advertised. I went to another dentist who said I needed 3 fillings. Dr. Sachar said I just needed to watch one spot.\"", author: "Sarah L.", source: "Zocdoc Review", initials: "SL" },
    { text: "\"I've never felt more comfortable in a dental chair. The entire team makes you feel like family. Highly recommended!\"", author: "David R.", source: "Google Review", initials: "DR" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{
              backgroundImage: "linear-gradient(to right, rgba(16, 25, 34, 0.85) 0%, rgba(16, 25, 34, 0.4) 50%, rgba(16, 25, 34, 0.1) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBC6fG3UtPz9iJdAOrdVPTVzUL9DMV2gCYRFRDMkplNR8X3u0LHtGdzTmqU15mRAaU4KIftaebdV_NzO4m4zcmE3SV5KhEocl1aYJE-NTg-5ilJ490j9Yh0uRwzymaD77sbveyVsYSkQrxPD8YO-oK5-EaDfwovaa_D4d-oPCyaD-_FiE2028MqTtBjAMkrD3uuH7yhsFGe8iUHcHpzu0Q7LW4Zv8zoO2cvSgoWYcZKpaq6XR8qZhAbArrjAnCKkbjfKsKcaABEEwk')"
            }}
          >
          </div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col justify-center min-h-[600px]">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-blue-200 text-sm font-semibold mb-6">
              <span className="material-symbols-outlined text-[18px] filled-icon text-blue-300">verified</span>
              <span>Accepting New Patients</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
              <span className="block text-blue-400 text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide">Dentist NYC</span>
              New York City's <br /> Top Dentist
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Honest, Ethical, Caring NYC Dentist... Since 2002. Providing premier dental care in Midtown Manhattan for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white text-base font-bold h-12 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                <span className="material-symbols-outlined">calendar_month</span>
                Schedule Online
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 text-base font-bold h-12 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                <span className="material-symbols-outlined">call</span>
                Call (212) 752-1163
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-300 font-medium">
              <div className="flex -space-x-2">
                {[
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDxGJ55RSq76iEs37A3PxVCOC2-BycaHJICset_agX91A8ttCgnZ3b4qD7MA2Jo-P-guKXen0XcO-_trxfhUjKolqpQAX37sWWsVOXdprqPfO44xDI_o95F0iJk-yVxSetzrA9KuR8uX2MqFtJhMLvgDKkQ5wSB0O4PNzX7ejFdK_sG6MCsde1o6Tjp4BV7dlooj1RtDvOT9CDp4E-EH3VA8HZaf52oFBHGdYp6RcuOKyLYaMwEpSIhvgWXR0W_gW9Alm69kZIPk6Q',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Kqecv9gxU8jrwoa_XjqM9EqOJR_hg490RCuIE-rQLzdpnM5-Ych7VtpcEQUYm5RziEDrw-qlLzXsiOVeyitNFeYyp1-Y6_0lsWRyjHsNzCCjxfPyumKXRyrV7yZwVq27LESaB-KIpvNtJs3DKKapIj9PE7hz9NPXdM0Hs3C-2Q2Y_hQsTg8-K2fKFsZSVNyJwbDDy14iozzvcVBMz69NSvEkTME7DXNGLLhJUmlppsj9AtChJn9AszPczLZ-BwWn8AgF8CB_OTM',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDKryWA4d2VVXVw6dLsyUqGtkGmSAYu5NGPwWyYu9C4AKFxCI7Bwreg7is_RFn6MgTmhZMoemTJEIME29PNP12Qv1YeVTnKqNluGDVDF3BbyVYms57dwx4eRDbCgQDdySNagZtf-ODioJ-fEa89Ab1WkeMfyMVa-RnJwtxApsWNhKL1DdhmAfS_jkV1eQWcqoZX9wQPOhqBNmT-yW0ebzeke_dh8guuNVffkLfgsaK3gqSriov0qmxe0223N6VrjZiWMBEIWPqxVE4'
                ].map((url, i) => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-400 border-2 border-gray-800 bg-cover bg-center" style={{ backgroundImage: `url('${url}')` }}></div>
                ))}
              </div>
              <p>Trusted by 5,000+ New Yorkers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Marquee */}
      <div className="bg-white border-b border-gray-100 overflow-hidden group">
        <div className="max-w-[1280px] mx-auto px-4 pt-8 pb-4">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">As Featured In & Recognized By</p>
        </div>
        <div className="flex pb-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 w-full">
          <div className="flex shrink-0 animate-scroll gap-16 px-8 items-center min-w-full justify-around">
            {[...featuredBadges, ...featuredBadges].map((badge, i) => (
              <div key={i}>{badge}</div>
            ))}
          </div>
          <div className="flex shrink-0 animate-scroll gap-16 px-8 items-center min-w-full justify-around">
            {[...featuredBadges, ...featuredBadges].map((badge, i) => (
              <div key={`dup-${i}`}>{badge}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-light">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111418] mb-4">Why Choose Sachar Dental?</h2>
            <p className="text-lg text-gray-600">Experience You Can Trust. We prioritize your health with a minimally invasive approach and compassionate care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'medical_services', title: '20+ Years Experience', desc: 'Serving NYC with top-rated dental care since 2002. Our longevity is a testament to the trust our patients place in us.' },
              { icon: 'shield_moon', title: 'Least Invasive Philosophy', desc: 'We believe in preserving your natural tooth structure. We only intervene when necessary, using the most conservative methods.' },
              { icon: 'favorite', title: 'Compassionate Care', desc: 'Anxiety-free dentistry with a gentle touch. We take the time to listen to your concerns and ensure your comfort at every step.', filled: true },
            ].map((item, i) => (
              <div key={i} className="bg-surface-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className={`material-symbols-outlined text-3xl ${item.filled ? 'filled-icon' : ''}`}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Comprehensive Care</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111418]">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600">From routine checkups to complex cosmetic makeovers, we offer a full range of dental treatments.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center hover:underline group">
              View all services 
              <span className="material-symbols-outlined ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
                { icon: 'auto_awesome', title: 'Cosmetic Dentistry', desc: 'Enhance your smile with veneers, bonding, and aesthetic contouring.' },
                { icon: 'grid_on', title: 'Invisalign', desc: 'Clear aligners to straighten your teeth discreetly and comfortably.' },
                { icon: 'precision_manufacturing', title: 'Dental Implants', desc: 'Permanent solutions for missing teeth that look and feel natural.' },
                { icon: 'clean_hands', title: 'General Dentistry', desc: 'Routine cleanings, fillings, and preventative care for oral health.' },
                { icon: 'light_mode', title: 'Teeth Whitening', desc: 'Professional whitening treatments for a brighter, more confident smile.' },
                { icon: 'emergency', title: 'Emergency Care', desc: 'Immediate attention for dental pain, accidents, and urgent needs.' },
             ].map((service, i) => (
                <Link key={i} to="/services" className="group relative overflow-hidden rounded-2xl bg-gray-50 min-h-[240px] p-8 flex flex-col justify-between hover:shadow-lg transition-all border border-gray-100">
                   <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="material-symbols-outlined text-9xl">{service.icon}</span>
                   </div>
                   <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm text-primary mb-4 z-10">
                      <span className="material-symbols-outlined">{service.icon}</span>
                   </div>
                   <div className="z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-gray-500 text-sm">{service.desc}</p>
                   </div>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-primary/5" id="doctors">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[400px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe5t3Dsoav4TySv3QVhG-JpyH1V3OwOEZXXySwFS6OY0hJuK8xI2jUVc3ZvDpySl8jKODYD6chTNrMe-zz3I_y65wvBv6wFYQeoP9vu5lYikjb5-LkdY-tmxZblKr9PfjtTskE7PSDseLzYCs42yCN0lJ_2egn5pgMchrL42RCoo4Y0akWD2o60ncnLMSR5yPSaE21TbjOZE3_5debs3JcYPY2mBHEtZQRyiggO_OzHhTfJrqGgBI4BPIT_zxpa3P7PkmjOZlQFKk')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white lg:hidden">
                <h3 className="text-3xl font-bold">Dr. Sandip Sachar</h3>
                <p className="text-blue-200">Lead Dentist & Founder</p>
              </div>
            </div>
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <div className="hidden lg:block mb-6">
                <h3 className="text-3xl font-bold text-gray-900">Dr. Sandip Sachar</h3>
                <p className="text-primary font-medium text-lg">Lead Dentist & Founder</p>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">"Treating people, not just teeth."</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dr. Sachar established Sachar Dental NYC in 2002 with a vision to create a practice that combines top-tier clinical excellence with a warm, empathetic approach.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Known for his "least invasive" philosophy, Dr. Sachar prioritizes preserving your natural smile while utilizing the latest technology for diagnostics and treatment. He is consistently rated as one of NYC's top dentists.
              </p>
              <div className="flex gap-4">
                <Link to="/doctors" className="text-primary font-bold border border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Read Full Bio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Marquee */}
      <section className="py-24 bg-background-light overflow-hidden group" id="reviews">
         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Social Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111418]">What Our Patients Say</h2>
         </div>
         
         <div className="flex w-full">
            <div className="flex shrink-0 animate-scroll-slow gap-8 px-4 min-w-full">
              {[...testimonials, ...testimonials].map((review, i) => (
                <div key={i} className="bg-surface-light p-8 rounded-2xl shadow-sm border border-gray-100 w-[400px] shrink-0">
                    <div className="flex text-yellow-400 mb-4">
                      {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined filled-icon">star</span>)}
                    </div>
                    <p className="text-gray-700 mb-6 italic h-24 overflow-hidden">{review.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">{review.initials}</div>
                      <div>
                          <h4 className="font-bold text-gray-900 text-sm">{review.author}</h4>
                          <p className="text-xs text-gray-500">{review.source}</p>
                      </div>
                    </div>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 animate-scroll-slow gap-8 px-4 min-w-full">
              {[...testimonials, ...testimonials].map((review, i) => (
                <div key={`dup-${i}`} className="bg-surface-light p-8 rounded-2xl shadow-sm border border-gray-100 w-[400px] shrink-0">
                    <div className="flex text-yellow-400 mb-4">
                      {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined filled-icon">star</span>)}
                    </div>
                    <p className="text-gray-700 mb-6 italic h-24 overflow-hidden">{review.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">{review.initials}</div>
                      <div>
                          <h4 className="font-bold text-gray-900 text-sm">{review.author}</h4>
                          <p className="text-xs text-gray-500">{review.source}</p>
                      </div>
                    </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-[960px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Healthier Smile?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Schedule your appointment today and experience the difference of premier dental care in Midtown Manhattan.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary hover:bg-gray-100 text-base font-bold h-12 px-8 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">calendar_month</span>
              Book Appointment
            </button>
            <button className="bg-blue-600 border border-blue-400 hover:bg-blue-700 text-white text-base font-bold h-12 px-8 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">call</span>
              (212) 752-1163
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;