import React from 'react';

const Insurance: React.FC = () => {
  return (
    <div className="flex grow flex-col">
      {/* Hero Section */}
      <div 
        className="relative flex flex-col items-center justify-center min-h-[400px] bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA6t_pnF4JAVhSDwLl5mMm4ITximG-jNmVb8kfP8S9NpBknF_-f_6zonSHZgFe_HtcKdq411tShUftbz2Oviaa92snxr5JMsyjYu1P3ZEKSsowz6_iZI_1D9lsf-ZMwvflJf967r9S_ZkbB0ouazZR_rwQXpUmimtqYZso7evMzeO7izYaibKL9gNwbb5JgKLwANwcfCbOa45mW1H7r7ZTz3iWww_pdDBm443sp88ILvlzuqeeunX0WX6Ea-AtLKOb_P8v5x5p8JQ")'
        }}
      >
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4 drop-shadow-lg">
            Insurance & Financial Information
          </h1>
          <h2 className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            We believe in full transparency and clarity for all your dental care costs. Our team is here to help you maximize your benefits and understand your coverage.
          </h2>
        </div>
      </div>

      <main className="layout-container flex grow flex-col">
        {/* Policy Cards Section */}
        <div className="w-full flex justify-center py-12 bg-white">
          <div className="w-full max-w-[1080px] px-6">
            <div className="mb-10 text-center">
              <h2 className="text-[#111418] text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Our Financial Policies</h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                We strive to provide the highest quality care while making the financial process simple and transparent.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'payments', title: 'Payment Due at Service', desc: 'Full payment is due at the time service is rendered unless prior arrangements have been made. We accept all major credit cards and cash.', tags: ['Visa', 'Mastercard', 'Amex'] },
                { icon: 'health_and_safety', title: 'PPO Insurance Accepted', desc: 'We accept most major PPO dental insurance plans. As a courtesy, we will file claims on your behalf to ensure you get reimbursed quickly and efficiently.' },
                { icon: 'credit_score', title: 'Flexible Financing', desc: 'For treatments not covered by insurance, we offer flexible financing options through third-party partners to help you manage costs over time.' }
              ].map((card, i) => (
                <div key={i} className="flex flex-col p-6 rounded-xl border border-gray-200 bg-background-light hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111418] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.desc}</p>
                  {card.tags && (
                    <div className="flex gap-2 mt-auto">
                      {card.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold bg-white border px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accepted Insurance Plans */}
        <div className="w-full flex justify-center py-16 bg-background-light">
          <div className="w-full max-w-[960px] px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h2 className="text-[#111418] text-2xl font-bold leading-tight">Accepted PPO Plans</h2>
                <p className="text-gray-500 text-sm mt-1">We work with the following insurance providers</p>
              </div>
              <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group">
                <span>Verify your insurance</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Aetna', 'Cigna', 'MetLife', 'Delta Dental', 'Guardian', 'United Healthcare', 'Blue Cross', 'Ameritas'].map(plan => (
                <div key={plan} className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 h-24 hover:border-primary/50 transition-colors cursor-default">
                  <span className="text-lg font-bold text-gray-700">{plan}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-primary/10 rounded-lg flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">info</span>
              <div>
                <p className="text-sm font-medium text-[#111418]">Note on Out-of-Network Status</p>
                <p className="text-sm text-gray-600 mt-1">
                  While we accept these plans, we may be considered an out-of-network provider. We will handle all the paperwork and filing to maximize your reimbursement. Please contact us for a complimentary benefits check.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* No Insurance & Financing */}
        <div className="w-full flex justify-center py-16 bg-white">
          <div className="w-full max-w-[960px] px-6">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* No Insurance Column */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#111418] mb-6">No Insurance? No Problem.</h2>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-black text-primary">$200</span>
                    <span className="text-lg font-medium text-gray-500">/ visit</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111418] mb-4">Initial Consultation Fee</h3>
                  <p className="text-gray-600 mb-6">
                    We believe in clear, upfront pricing. Your initial comprehensive consultation includes:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Comprehensive oral examination',
                      'Full series of digital X-rays',
                      'Personalized treatment plan',
                      'One-on-one consultation with Dr. Sachar'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-500 text-xl filled-icon">check_circle</span>
                        <span className="text-[#111418]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full rounded-lg bg-[#111418] text-white font-bold h-12 hover:opacity-90 transition-opacity">
                    Book Consultation
                  </button>
                </div>
              </div>
              {/* Financing Options Column */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#111418] mb-6">Financing Partners</h2>
                <p className="text-gray-600 mb-6">
                  We partner with leading healthcare financing companies to offer low and no-interest payment plans.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { name: 'CareCredit', desc: 'Pay for out-of-pocket expenses not covered by medical insurance. Special financing options available.' },
                    { name: 'LendingClub', desc: 'Simple, low monthly payments. See your rate instantly without checking your credit score.' }
                  ].map((partner, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold italic tracking-tight text-[#111418]">{partner.name}</h3>
                        <span className="material-symbols-outlined text-gray-400">open_in_new</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{partner.desc}</p>
                      <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                        Apply for {partner.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full flex justify-center py-16 bg-background-light">
          <div className="w-full max-w-[800px] px-6">
            <h2 className="text-[#111418] text-2xl font-bold leading-tight mb-8 text-center">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
              {[
                { q: "Do you accept Medicaid?", a: "Currently, we do not participate in Medicaid or HMO plans. We exclusively accept PPO insurance plans to maintain our standard of care." },
                { q: "Can I get an estimate before my treatment?", a: "Absolutely. We provide a detailed treatment plan with estimated costs for every patient after the initial examination, so there are no surprises." },
                { q: "How do reimbursement checks work?", a: "For most PPO plans, the insurance company will send the reimbursement check directly to you since payment is collected at the time of service." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white p-4 rounded-lg border border-gray-200 cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-[#111418] list-none">
                    <span>{faq.q}</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insurance;