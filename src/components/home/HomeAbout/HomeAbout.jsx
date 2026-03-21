import React from 'react';
import { Link } from 'react-router-dom';
import './HomeAbout.css';
import aboutImage from '../../../assets/homeAboutImage_new.png';

const HomeAbout = () => {
    return (
        <section className="home-about-elite">
            <div className="home-about-grid">
                <div className="about-visual-side">
                    <div className="visual-wrapper reveal-left">
                        <img src={aboutImage} alt="Luxury Printing Environment" className="main-visual" />
                        <div className="gold-accent-frame"></div>
                        <div className="badge-overlay">
                            <span className="since">Est. 2026</span>
                            <span className="type">Elite Logistics</span>
                        </div>
                    </div>
                </div>

                <div className="about-content-side">
                    <div className="content-inner reveal-right">
                        <span className="top-tag">About Ink Kart LLC</span>
                        <h2 className="title-primary">
                            Your Trusted Online Destination <br />
                            <span className="text-[#B19777]">For Printing Essentials.</span>
                        </h2>
                        
                        <div className="text-blocks">
                            <p>
                                Ink Kart LLC is an independent online retail platform offering a broad range of printers, 
                                genuine-quality ink and toner cartridges, and essential printing supplies. We focus on 
                                accuracy, transparency, and customer satisfaction—helping you choose the right products with confidence.
                            </p>
                            <p>
                                Our goal is to make everyday printing easier for homes, small offices, students, and businesses. 
                                Whether you’re upgrading your printer or restocking supplies, we provide a straightforward 
                                shopping experience designed around clarity, trust, and convenience.
                            </p>
                        </div>

                        <Link to="/about" className="boutique-btn">
                            Learn More About Us
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
