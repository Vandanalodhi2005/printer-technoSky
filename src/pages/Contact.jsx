import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ContactHero from '../components/contact/ContactHero/ContactHero';
import ContactForm from '../components/contact/ContactForm/ContactForm';
import ContactInfo from '../components/contact/ContactInfo/ContactInfo';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
          {/* Contact Hero (Black & Gold) */}
          <div className="bg-[#111111] py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
            <div className="container mx-auto px-4 z-10 relative">
                <ContactHero />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="relative z-10">
                <ContactForm />
              </div>
              
              <div className="relative z-10">
                <ContactInfo />
              </div>
            </div>
          </div>

          {/* Map / Bottom Visual Section */}
          <div className="bg-[#fafafa] py-24 border-t border-gray-100">
             <div className="container mx-auto px-4 text-center">
                <h2 className="font-['Montserrat'] font-black text-2xl uppercase tracking-[0.3em] mb-12 text-[#111111]">Our Presence</h2>
                <div className="w-full h-[500px] bg-[#1a1a1a] flex items-center justify-center grayscale opacity-80 border-y border-[#B19777]">
                    <div className="text-center">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#B19777] mx-auto mb-6">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-white uppercase tracking-[0.4em] text-xs font-black">Ink Kart LLC Headquarters</p>
                    </div>
                </div>
             </div>
          </div>
      </main>

      <Footer />

      <style>{`
        .contact-hero {
            padding: 0 !important;
            margin-bottom: 0 !important;
            background: transparent !important;
        }
        .contact-hero h1 {
            font-family: 'Montserrat' !important;
            font-weight: 950 !important;
            font-size: 48px !important;
            letter-spacing: 0.25em !important;
            text-transform: uppercase !important;
            color: #ffffff !important;
        }
        .contact-hero p {
            color: #B19777 !important;
            max-width: 700px !important;
            margin: 0 auto !important;
            font-size: 13px !important;
            letter-spacing: 0.3em !important;
        }
        .contact-form-card {
            border: 1px solid #111111 !important;
            background: #ffffff !important;
            padding: 60px !important;
        }
        .contact-form-card h2 {
            font-family: 'Montserrat' !important;
            font-weight: 900 !important;
            color: #111111 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.2em !important;
            font-size: 14px !important;
            border-bottom: 2px solid #B19777 !important;
            display: inline-block !important;
            margin-bottom: 48px !important;
            text-align: left !important;
        }
        .form-group label {
            font-family: 'Montserrat' !important;
            font-weight: 800 !important;
            color: #111111 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.15em !important;
            font-size: 10px !important;
        }
        .form-group input, .form-group textarea, .form-group select {
            border: 1px solid #eee !important;
            background: #fafafa !important;
            border-radius: 0 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            color: #111111 !important;
        }
        .info-card {
            border-color: #eee !important;
            background: #fafafa !important;
        }
        .info-card h2 {
            font-family: 'Montserrat' !important;
            font-weight: 900 !important;
            color: #111111 !important;
            border-bottom-color: #B19777 !important;
        }
        .info-content h3 {
            font-family: 'Montserrat' !important;
            font-weight: 900 !important;
            font-size: 10px !important;
            letter-spacing: 0.2em !important;
            color: #111111 !important;
        }
        .info-content p {
            font-size: 12px !important;
            text-transform: uppercase !important;
            letter-spacing: 0.1em !important;
            color: #666 !important;
            font-weight: 700 !important;
        }
        .submit-button {
            background: #111111 !important;
            color: #fff !important;
            font-family: 'Montserrat' !important;
            font-weight: 900 !important;
            letter-spacing: 0.3em !important;
            text-transform: uppercase !important;
            border-radius: 0 !important;
            padding: 24px !important;
        }
        .submit-button:hover {
            background: #B19777 !important;
            color: #ffffff !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
