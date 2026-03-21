import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import axios from 'axios';

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  const user = userInfo;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartCount = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);

  const navigate = useNavigate();
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/printers?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setShowUserMenu(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    dispatch(logout());
    setShowUserMenu(false);
    navigate('/');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${(!isHomePage || isScrolled) ? 'is-solid' : 'is-transparent'}`}>
        <div className="navbar-container">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <div className="logo-svg-container group">
              <svg width="32" height="32" viewBox="0 0 100 100" className="logo-icon transition-all duration-500 group-hover:scale-110">
                <circle cx="50" cy="50" r="48" stroke="#B19777" strokeWidth="3" fill="none" />
                <path d="M50 25 L72 68 L28 68 Z" fill="#B19777" />
                <rect x="47" y="75" width="6" height="6" fill="#B19777" />
              </svg>
              <span className="logo-brand text-white">INK KART <span className="text-[#B19777]">LLC</span></span>
            </div>
          </Link>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/printers">Printers</Link></li>
            <li><Link to="/ink-toner">Ink & Toner</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="nav-icons">
             <div className="search-container">
                <button className="icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </button>
                {isSearchOpen && (
                    <div className="search-dropdown">
                        <form onSubmit={handleSearchSubmit}>
                            <input type="text" placeholder="Search Inventory..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} autoFocus />
                        </form>
                    </div>
                )}
             </div>

            <Link to="/cart" className="icon-btn cart-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            
            <div className="user-menu-container" ref={menuRef}>
              <button className="icon-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>
              {showUserMenu && (
                <div className="user-menu">
                   {user ? (
                    <>
                      <div className="user-menu-info">
                        <span className="user-email">{user.email}</span>
                      </div>
                      <Link to="/profile" className="user-menu-item" onClick={() => setShowUserMenu(false)}>Account</Link>
                      <button className="user-menu-item sign-out" onClick={handleSignOut}>Logout</button>
                    </>
                   ) : (
                    <>
                      <Link to="/signin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>Sign In</Link>
                      <Link to="/signup" className="user-menu-item" onClick={() => setShowUserMenu(false)}>Sign Up</Link>
                    </>
                   )}
                </div>
              )}
            </div>

            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="18" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/printers" onClick={closeMobileMenu}>Printers</Link></li>
            <li><Link to="/blogs" onClick={closeMobileMenu}>Blog</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
            {!user ? (
               <>
                 <hr className="border-gray-800 my-6 mx-10" />
                 <li><Link to="/signin" className="mobile-auth-link" onClick={closeMobileMenu}>Sign In</Link></li>
                 <li><Link to="/signup" className="mobile-auth-link gold" onClick={closeMobileMenu}>Sign Up</Link></li>
               </>
            ) : (
                <>
                    <hr className="border-gray-800 my-6 mx-10" />
                    <li><Link to="/profile" onClick={closeMobileMenu}>Account</Link></li>
                    <li><button className="mobile-auth-link red" onClick={handleSignOut}>Log Out</button></li>
                </>
            )}
          </ul>
        </div>
      </nav>

      {!isHomePage && <div className="navbar-spacer"></div>}

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 30px 0;
        }
        .navbar.is-transparent { background: transparent; border-bottom: 1px solid rgba(255,255,255,0.03); }
        .navbar.is-solid { background: #111111; padding: 18px 0; border-bottom: 3px solid #B19777; box-shadow: 0 15px 40px rgba(0,0,0,0.4); }
        
        .navbar-container { max-width: 1400px; margin: 0 auto; padding: 0 40px; display: flex; align-items: center; justify-content: space-between; }
        
        .logo-svg-container { display: flex; align-items: center; gap: 14px; text-decoration: none; cursor: pointer; }
        .logo-brand { font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 20px; letter-spacing: 5px; text-transform: uppercase; }
        
        .nav-links { display: flex; list-style: none; gap: 40px; }
        .nav-links a { color: #fff; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; transition: all 0.3s; opacity: 0.6; text-decoration: none; }
        .nav-links a:hover { color: #B19777; opacity: 1; }
        
        .nav-icons { display: flex; gap: 20px; align-items: center; }
        .icon-btn { background: none; border: none; cursor: pointer; color: #fff; padding: 8px; transition: all 0.3s; position: relative; opacity: 0.8; }
        .icon-btn:hover { color: #B19777; transform: translateY(-2px); opacity: 1; }
        
        .cart-badge { position: absolute; top: 0px; right: 0px; background: #B19777; color: #fff; font-size: 9px; font-weight: 900; padding: 2px 5px; min-width: 18px; text-align: center; }
        
        .user-menu { position: absolute; top: calc(100% + 15px); right: 0; background: #111111; border: 1px solid #B19777; padding: 5px 0; min-width: 200px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .user-menu-item { display: block; width: 100%; padding: 12px 20px; font-family: 'Montserrat'; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; text-decoration: none; color: #fff; background: none; border: none; text-align: left; cursor: pointer; transition: all 0.2s; }
        .user-menu-item:hover { background: #B19777; }
        .user-menu-info { padding: 15px 20px; border-bottom: 1px solid #222; }
        .user-email { font-size: 9px; color: #555; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: block; }

        .search-dropdown { position: absolute; top: calc(100% + 15px); right: 0; width: 320px; background: #111111; border: 1px solid #B19777; padding: 20px; }
        .search-dropdown input { width: 100%; background: #181818; border: 1px solid #333; color: #fff; padding: 12px; font-size: 11px; font-family: 'Montserrat'; text-transform: uppercase; letter-spacing: 1.5px; outline: none; }
        .search-dropdown input:focus { border-color: #B19777; }
        
        .mobile-toggle { display: none; background: none; border: none; color: #fff; cursor: pointer; opacity: 0.8; transition: all 0.3s; }
        .mobile-toggle:hover { opacity: 1; color: #B19777; }
        
        .mobile-menu { position: absolute; top: 100%; left: 0; right: 0; background: #111111; max-height: 0; opacity: 0; overflow: hidden; transition: all 0.5s; border-bottom: 3px solid #B19777; }
        .mobile-menu.open { max-height: 90vh; opacity: 1; padding: 60px 0; overflow-y: auto; }
        .mobile-nav-links { list-style: none; text-align: center; }
        .mobile-nav-links li { margin-bottom: 40px; }
        .mobile-nav-links a { color: #fff; font-family: 'Montserrat'; font-weight: 900; font-size: 20px; text-transform: uppercase; letter-spacing: 6px; text-decoration: none; opacity: 0.6; transition: all 0.3s; }
        .mobile-nav-links a:hover { opacity: 1; color: #B19777; }
        
        .mobile-auth-link { display: inline-block; padding: 14px 40px; border: 1px solid #333; color: #fff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 4px; text-decoration: none; }
        .mobile-auth-link.gold { background: #B19777; border-color: #B19777; }
        .mobile-auth-link.red { color: #ef4444; border-color: rgba(239, 68, 68, 0.2); }
        
        .navbar-spacer { height: 100px; }

        @media (max-width: 1100px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
          .navbar-container { padding: 0 25px; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
