import React from 'react';

const Doctors: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Sandip Sachar",
      role: "DDS, Chief Doctor",
      tags: ["Cosmetic", "General"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEdjS2VLVr8-aFRum6Hdq01uwWjA-oN8Pq92kVAPVpKEaKNoNveGFLtakfQvTIVtKnEwxCK517pzdlHA9XjdUU51kwSQpfFB-oJIhOS59sK1u4K7yQUr-oSKKCRhADrhzbFIbojW6iR_Dz-f4hcrFf8SHwJbDlyZA_VSmBmHLAj9mIOLJD3COs9taFhlMlfjwwBIKtH9sI6gIYxTS4D8FchQJzI68HP1ynOuKf_RtBwaZQqKcqYjCYbSYQIwGWa52lkVo6MpovCOo"
    },
    {
      name: "Dr. John Osterman",
      role: "DDS, Periodontist",
      tags: ["Prosthodontics", "Implants"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbAm9BzXsi6bNrplwkRBfdZ3FSqlwD9pFd3e_tafQmLX3psvO2M_JATVWwH7ba86LkHolFjxMcR_HZ7TxceNw0xe9QczuQLcmCPG-VrYo3skbCDa-c4eiKWcbkPFmw9i2lILmevDEhIVeNRxBEph57PaqXnX7MSVKG7Lnxtm0DapP8VuXPoJDcIk7ISlUNHC4tw9mw1jq2vMF1ipsOt19c1NCgAWPpyk10VULDLTdSkMjw9YZKROMGgM13cYBu2tlfSQMe154K1Hc"
    },
    {
      name: "Dr. Marisa Drach",
      role: "DMD, Cosmetic Dentist",
      tags: ["Aesthetics", "Whitening"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpEosyBo_Ntc35NwkbW2axRMrclzbMOOZSU6aNBKelsKV7OVaLt8hptvcqyPNl7LfqX5YAH-0Hsh21wjB_OTGf5TPp1zO4qVn1UnCxs4DBYh67x1948_HifzBD6Of0FyNlx1NVrtS0bp1y6GAow-m1Crixn46xWllNIz4cRvh6Iaw_LE-g8IkWy6ekIYBl_zEI8DsRC9qnssbteMfHjAUMW2M8YTGpVNBUteDUbRE8PqUOzygjVOX5OqB3Cul7MyDupu8EYgcNq34"
    },
    {
      name: "Dr. Erez Cohen",
      role: "DDS, Orthodontist",
      tags: ["Invisalign", "LANAP"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuSULav8aokQkKw-OZ57HQVLdsLWty0-0TzFyFkNpWkuSPpXYeXOmQNCQaz_nBNz1uXxiddasP2nRlt6gyeDwnErZXbb3sedXdA1ozZDycVAYcbqukb3yVeJ9ompHBWtMSsQnN3cWBQzQdcRB7qKJCuSfG02rRUgZUzJGqDUZO0Ii2KuE-5DMfhVZtYqye3eI913lh1bScMoSST8stPxpYbR6A86_kPtuN1c9fNG1PbUnfrZG1CYE3HQPwQJeKEYeyslUjhW7xS48"
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-10 pb-20">
      {/* Page Heading */}
      <div className="w-full max-w-[1200px] py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-[#111418] text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            Dentist NYC — Meet the Doctors
          </h1>
          <p className="text-[#617589] text-lg font-normal leading-normal max-w-2xl">
            Expert care from Midtown Manhattan's top dental specialists, dedicated to your perfect smile.
          </p>
        </div>
      </div>

      {/* Doctor Profile Grid */}
      <div className="w-full max-w-[1200px] mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/10 border border-[#f0f2f4] transition-all duration-300">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                <div 
                  className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500" 
                  style={{ backgroundImage: `url('${doc.image}')` }}
                ></div>
                <div className="absolute bottom-3 right-3 bg-white p-1.5 rounded-full shadow-md text-primary">
                  <span className="material-symbols-outlined text-[20px] filled-icon">verified</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-[#111418] text-lg font-bold leading-tight group-hover:text-primary transition-colors">{doc.name}</h3>
                  <p className="text-[#617589] text-xs font-semibold tracking-wider uppercase mt-1">{doc.role}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {doc.tags.map(tag => (
                    <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <a href="#" className="flex items-center text-sm font-semibold text-primary hover:text-blue-700 transition-colors">
                    View Full Profile 
                    <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collective Expertise Section */}
      <div className="w-full max-w-[1200px] mb-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#f0f2f4]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#111418] text-2xl md:text-3xl font-bold leading-tight">
              Our Collective Expertise
            </h2>
            <p className="text-[#617589] text-base font-normal max-w-2xl">
              Comprehensive dental care covering all your needs under one roof. We combine decades of experience across multiple disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'dentistry', title: 'General Dentistry', desc: 'Routine cleanings, prevention, and oral health maintenance.' },
              { icon: 'auto_awesome', title: 'Cosmetic Makeovers', desc: 'Veneers, teeth whitening, and full smile design.' },
              { icon: 'medical_services', title: 'Prosthodontics', desc: 'Implants, crowns, and restorative procedures.' },
              { icon: 'water_drop', title: 'LANAP Treatment', desc: 'Advanced laser gum surgery and periodontal therapy.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-background-light transition-colors border border-transparent hover:border-[#f0f2f4]">
                <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-[#111418] font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-[#617589] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-[1200px] mb-10">
        <div className="rounded-2xl bg-[#111418] text-white overflow-hidden relative">
          {/* Abstract Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-primary to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 md:px-12 md:py-16">
            <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Ready to smile with confidence?</h2>
              <p className="text-gray-300 text-lg">Experience premier dental care in Midtown Manhattan. Schedule your consultation with our specialists today.</p>
            </div>
            <div className="flex-shrink-0">
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal shadow-lg hover:shadow-primary/50">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;