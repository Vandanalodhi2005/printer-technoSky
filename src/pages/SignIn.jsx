import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [successMessage, setSuccessMessage] = useState('');

  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get('redirect');
  const messageParam = queryParams.get('message');

  useEffect(() => {
      if (messageParam) setSuccessMessage(messageParam);
  }, [messageParam]);

  useEffect(() => {
    if (userInfo) {
        setSuccessMessage('AUTHENTICATION SUCCESSFUL');
        const timer = setTimeout(() => {
            if (redirect) navigate(`/${redirect}`);
            else if (userInfo.isAdmin) navigate('/admin/dashboard');
            else navigate('/');
        }, 1500);
        return () => clearTimeout(timer);
    }
  }, [userInfo, navigate, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    dispatch(login(email, password, isAdminLogin));
  };

  return (
    <>
      <Navbar />
      <div className="auth-luxury-page">
        <div className="auth-grid">
           <div className="auth-brand-side">
              <div className="brand-content">
                  <div className="auth-logo-wrap">
                      <svg width="60" height="60" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" stroke="#B19777" strokeWidth="2" fill="none" />
                        <path d="M50 20 L75 70 L25 70 Z" fill="#B19777" />
                        <rect x="47" y="75" width="6" height="6" fill="#B19777" />
                      </svg>
                  </div>
                  <h2>INK KART LLC</h2>
                  <p>THE GLOBAL STANDARD IN PRINTING TECHNOLOGY</p>
              </div>
           </div>

           <div className="auth-form-side">
              <div className="form-card">
                 <div className="form-header">
                    <h1>{isAdminLogin ? 'Administrative Sign In' : 'Sign In'}</h1>
                    <p>Secure authentication for the modern enterprise.</p>
                 </div>

                 {successMessage && (
                    <div className="auth-alert success">
                        <span>{successMessage}</span>
                    </div>
                 )}

                 {error && (
                    <div className="auth-alert error">
                        <span>{error}</span>
                    </div>
                 )}

                 <form onSubmit={handleSubmit} className="premium-form">
                    <div className="field-group">
                        <label>Corporate Email</label>
                        <input
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="name@company.com"
                           required
                        />
                    </div>

                    <div className="field-group">
                        <label>Security Password</label>
                        <input
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="••••••••"
                           required
                        />
                    </div>

                    <div className="auth-meta">
                        <label className="admin-toggle">
                           <input 
                              type="checkbox" 
                              onChange={(e) => setIsAdminLogin(e.target.checked)}
                              checked={isAdminLogin}
                           />
                           <span>Admin Interface</span>
                        </label>
                        <Link to="/forgot-password">Recovery</Link>
                    </div>

                    <button type="submit" className="auth-action-btn" disabled={loading}>
                        {loading ? 'Processing...' : 'Authenticate'}
                    </button>
                 </form>

                 <div className="auth-footer">
                    {!isAdminLogin ? (
                        <p>Initial deployment? <Link to="/signup">Provision Account</Link></p>
                    ) : (
                        <p>Client terminal? <span className="toggle-view" onClick={() => setIsAdminLogin(false)}>User Gateway</span></p>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </div>
      <Footer />

      <style>{`
        .auth-luxury-page {
            min-height: 100vh;
            background: #ffffff;
            display: flex;
            align-items: stretch;
        }

        .auth-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
        }

        .auth-brand-side {
            background: #111111;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
            overflow: hidden;
        }

        .auth-brand-side::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(177, 151, 119, 0.1) 0%, transparent 70%);
        }

        .brand-content {
            text-align: center;
            z-index: 2;
        }

        .auth-logo-wrap {
            margin-bottom: 30px;
        }

        .brand-content h2 {
            font-family: 'Montserrat';
            font-weight: 900;
            font-size: 32px;
            letter-spacing: 8px;
            margin-bottom: 10px;
        }

        .brand-content p {
            font-family: 'Montserrat';
            font-size: 10px;
            font-weight: 700;
            color: #B19777;
            text-transform: uppercase;
            letter-spacing: 4px;
            opacity: 0.8;
        }

        .auth-form-side {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            background: #ffffff;
        }

        .form-card {
            width: 100%;
            max-width: 440px;
        }

        .form-header {
            margin-bottom: 50px;
        }

        .form-header h1 {
            font-family: 'Montserrat';
            font-weight: 950;
            font-size: 36px;
            text-transform: uppercase;
            letter-spacing: -1px;
            margin-bottom: 15px;
            color: #111;
        }

        .form-header p {
            font-family: 'Poppins';
            font-size: 14px;
            color: #777;
        }

        .premium-form .field-group {
            margin-bottom: 30px;
        }

        .field-group label {
            display: block;
            font-family: 'Montserrat';
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #111;
            margin-bottom: 12px;
        }

        .field-group input {
            width: 100%;
            padding: 18px 0;
            background: transparent;
            border: none;
            border-bottom: 2px solid #eeeeee;
            font-size: 14px;
            font-family: 'Poppins';
            transition: all 0.3s;
            outline: none;
        }

        .field-group input:focus {
            border-color: #B19777;
        }

        .auth-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .auth-meta a {
            text-decoration: none;
            color: #B19777;
        }

        .admin-toggle {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }

        .auth-action-btn {
            width: 100%;
            padding: 22px;
            background: #111;
            color: #fff;
            border: none;
            font-family: 'Montserrat';
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.4s;
        }

        .auth-action-btn:hover {
            background: #B19777;
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(177, 151, 119, 0.3);
        }

        .auth-alert {
            padding: 15px;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 30px;
            border-left: 4px solid;
        }

        .auth-alert.success { background: #f0fdf4; color: #15803d; border-color: #15803d; }
        .auth-alert.error { background: #fef2f2; color: #b91c1c; border-color: #b91c1c; }

        .auth-footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
            color: #999;
        }

        .auth-footer a, .toggle-view {
            color: #111;
            font-weight: 900;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-left: 5px;
            cursor: pointer;
        }

        @media (max-width: 900px) {
            .auth-grid { grid-template-columns: 1fr; }
            .auth-brand-side { display: none; }
            .auth-form-side { padding: 80px 30px; }
        }
      `}</style>
    </>
  );
};

export default SignIn;
