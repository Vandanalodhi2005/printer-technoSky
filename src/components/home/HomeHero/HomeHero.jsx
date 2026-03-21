import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHero.css';
import printerImage from '../../../assets/premium_printer_hero_dark.png';

const HomeHero = () => {
    return (
        <section className="home-hero">
            <div className="home-hero-content">
                <div className="home-hero-grid">
                    <div className="home-hero-text reveal-left">
                        <span className="hero-badge">THE STANDARD IN PRINTING</span>
                        <h1>
                            Printing <br />
                            <span className="text-[#B19777]">Excellence.</span>
                        </h1>
                        <p className="hero-mission">
                            Ink Kart LLC delivers the most advanced professional printing 
                            hardware to the modern workplace. Experience high-end precision 
                            engineered for durability and output mastery.
                        </p>

                        <div className="home-hero-actions">
                            <Link to="/printers" className="home-btn primary">Explore Collections</Link>
                            <Link to="/about" className="home-btn outline">Our Legacy</Link>
                        </div>
                    </div>
                    
                    <div className="home-hero-image-container reveal-right">
                         <img 
                            src={printerImage} 
                            alt="Elite Professional Printer" 
                            className="hero-printer-image"
                         />
                         <div className="image-glow"></div>
                         <div className="accent-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
