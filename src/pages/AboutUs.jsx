import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AboutHero from '../components/about/AboutHero/AboutHero';
import AboutWhoWeAre from '../components/about/AboutWhoWeAre/AboutWhoWeAre';
import AboutOffers from '../components/about/AboutOffers/AboutOffers';
import AboutCommitment from '../components/about/AboutCommitment/AboutCommitment';
import AboutWhyChoose from '../components/about/AboutWhyChoose/AboutWhyChoose';
import AboutVisionValues from '../components/about/AboutVisionValues/AboutVisionValues';
import AboutThankYou from '../components/about/AboutThankYou/AboutThankYou';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Poppins']">
      <Navbar />
      
      <main className="flex-grow">
          {/* Main Container with restricted width for premium feel */}
          <div className="bg-[#111111]">
            <AboutHero />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-24">
            <AboutWhoWeAre />
          </div>

          <div className="bg-[#fafafa] py-24 border-y border-gray-100">
            <AboutOffers />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-24">
            <AboutCommitment />
          </div>

          <div className="bg-[#111111] py-24">
             <AboutWhyChoose />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-24">
            <AboutVisionValues />
          </div>

          <div className="bg-white py-24 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <AboutThankYou />
            </div>
          </div>
      </main>

      <Footer />

      <style>{`
        /* Global premium overrides for About Us components */
        .who-we-are h2, .what-we-offer h2, .transparency-commitment h2, .why-choose h2, .vision-values h2 {
            font-family: 'Montserrat' !important;
            font-weight: 900 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.25em !important;
            color: #111111 !important;
        }

        .why-choose h2 {
            color: #ffffff !important;
        }

        .why-choose .choose-card {
            background: #1a1a1a !important;
            border-color: #333 !important;
            color: #fff !important;
        }
        
        .why-choose .choose-card p {
            color: #999 !important;
        }

        .what-we-offer {
            background: transparent !important;
            padding: 0 !important;
        }

        .transparency-commitment, .vision-values {
            padding: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
