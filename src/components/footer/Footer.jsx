import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiShield, FiTruck } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const [trackId, setTrackId] = useState('');
  const navigate = useNavigate();

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (trackId.trim()) {
      navigate(`/track-order?id=${trackId.trim()}`);
      setTrackId('');
    }
  };

  return (
    <footer className="footer-enhanced">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="inline-block mb-10 group">
              <div className="flex items-center gap-5">
                  <svg width="40" height="40" viewBox="0 0 100 100" className="transition-transform duration-700 group-hover:scale-105">
                    <circle cx="50" cy="50" r="48" stroke="#B19777" strokeWidth="2" fill="none" />
                    <path d="M50 25 L72 68 L28 68 Z" fill="#B19777" />
                    <rect x="47" y="75" width="6" height="6" fill="#B19777" />
                  </svg>
                  <span className="font-['Montserrat'] font-black text-2xl text-white uppercase tracking-[0.4em]">INK KART <span className="text-[#B19777]">LLC</span></span>
              </div>
            </Link>
            <p className="footer-description">
              Elite professional printing hardware, architectural-grade output, 
              and specialized toner systems for demanding enterprise environments. 
              Ink Kart LLC represents the absolute standard in printing technology.
            </p>
            
            <div className="flex gap-10 mb-10 text-gray-500">
               <div className="flex items-center gap-3 transition-colors hover:text-[#B19777]">
                  <FiShield size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">SECURE ACCESS</span>
               </div>
               <div className="flex items-center gap-3 transition-colors hover:text-[#B19777]">
                  <FiTruck size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">GLOBAL SUPPLY</span>
               </div>
            </div>

            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Ink Kart LLC. All rights reserved.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Directory</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/printers">Printers</Link></li>
              <li><Link to="/ink-toner">Ink & Toner</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Technical Support</h4>
            <ul className="footer-links">
              <li><Link to="/track-order">Logistical Tracking</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/refund-return-policy">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Status Check</h4>
            <form onSubmit={handleTrackSubmit} className="flex gap-0">
                <input 
                  type="text" 
                  placeholder="Verification ID" 
                  className="bg-[#181818] text-white text-[10px] px-6 py-4 rounded-0 border border-[#333] focus:outline-none focus:border-[#B19777] flex-1 uppercase tracking-widest"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                />
                <button type="submit" className="bg-[#B19777] hover:bg-white hover:text-[#111111] text-white px-6 py-4 rounded-0 transition-all">
                  <FiSearch />
                </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-black opacity-50 hover:opacity-100 transition-opacity">
             <p>Authorized Independent Printing Retailer Since 2026</p>
             <p className="text-[#B19777]">Ink Kart LLC • New York, NY</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
