import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegistrationOTP, verifyRegistrationOTP } from '../redux/actions/userActions';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const SignUp = () => {
  const [step, setStep] = useState(1); // 1: Details, 2: Verification
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSendOTP = useSelector((state) => state.userSendOTP);
  const { loading: loadingSendOTP, error: errorSendOTP, success: successSendOTP } = userSendOTP;

  const userVerifyOTP = useSelector((state) => state.userVerifyOTP);
  const { loading: loadingVerifyOTP, error: errorVerifyOTP, success: successVerifyOTP } = userVerifyOTP;
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: userLoginInfo } = userLogin;

  useEffect(() => {
    if (userLoginInfo) navigate('/');
  }, [navigate, userLoginInfo]);

  useEffect(() => {
    if (successSendOTP) setStep(2);
  }, [successSendOTP]);

  useEffect(() => {
    if (successVerifyOTP) navigate('/signin?message=Successfully Verified. System Provisioned.');
  }, [successVerifyOTP, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (password !== confirmPassword) {
        alert('SECURITY PROTOCOL: Passwords do not match');
        return;
      }
      const nameParts = name.trim().split(' ');
      dispatch(sendRegistrationOTP(nameParts[0], nameParts.length > 1 ? nameParts.slice(1).join(' ') : '', email, password));
    } else {
      dispatch(verifyRegistrationOTP(email, otp));
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-luxury-page">
        <div className="auth-grid">
           <div className="auth-brand-side signup">
              <div className="brand-content">
                  <div className="auth-logo-wrap pulse">
                      <svg width="60" height="60" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" stroke="#B19777" strokeWidth="2" fill="none" />
                        <path d="M50 20 L75 70 L25 70 Z" fill="#B19777" />
                        <rect x="47" y="75" width="6" height="6" fill="#B19777" />
                      </svg>
                  </div>
                  <h2>PROVISIONING</h2>
                  <p>ESTABLISHING ELITE CLIENT ACCESS</p>
              </div>
           </div>

           <div className="auth-form-side">
              <div className="form-card">
                 <div className="form-header">
                    <h1>{step === 1 ? 'Client Registration' : 'Verification Sequence'}</h1>
                    <p>{step === 1 ? 'Complete your technical profile to access elite printing solutions.' : `Enter the 6-digit cryptographic sequence sent to ${email}`}</p>
                 </div>

                 {(errorSendOTP || errorVerifyOTP) && (
                    <div className="auth-alert error">
                        <span>{step === 1 ? errorSendOTP : errorVerifyOTP}</span>
                    </div>
                 )}

                 <form onSubmit={handleSubmit} className="premium-form">
                    {step === 1 ? (
                        <>
                            <div className="field-group">
                                <label>Representative Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
                            </div>

                            <div className="field-group">
                                <label>Corporate Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" required />
                            </div>

                            <div className="field-group-grid">
                                <div className="field-group">
                                    <label>Access Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                                </div>
                                <div className="field-group">
                                    <label>Confirm Access</label>
                                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" required />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="field-group">
                            <label>Verification Token</label>
                            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="000000" required />
                            <button type="button" className="meta-action" onClick={() => setStep(1)}>Modify Credentials</button>
                        </div>
                    )}

                    <button type="submit" className="auth-action-btn" disabled={loadingSendOTP || loadingVerifyOTP}>
                        {loadingSendOTP || loadingVerifyOTP ? 'Processing...' : (step === 1 ? 'Initiate Provisioning' : 'Finalize Access')}
                    </button>
                 </form>

                 <div className="auth-footer">
                    <p>Already provisioned? <Link to="/signin" className="toggle-view">Sign In</Link></p>
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

        .auth-brand-side.signup {
            background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=1920') center/cover;
        }

        .brand-content { text-align: center; z-index: 2; }
        .auth-logo-wrap { margin-bottom: 30px; }
        .brand-content h2 { font-family: 'Montserrat'; font-weight: 900; font-size: 32px; letter-spacing: 8px; margin-bottom: 10px; }
        .brand-content p { font-family: 'Montserrat'; font-size: 10px; font-weight: 700; color: #B19777; text-transform: uppercase; letter-spacing: 4px; opacity: 0.8; }

        .auth-form-side { display: flex; align-items: center; justify-content: center; padding: 40px; background: #ffffff; }
        .form-card { width: 100%; max-width: 480px; }
        .form-header { margin-bottom: 50px; }
        .form-header h1 { font-family: 'Montserrat'; font-weight: 950; font-size: 34px; text-transform: uppercase; letter-spacing: -1px; margin-bottom: 15px; color: #111; }
        .form-header p { font-family: 'Poppins'; font-size: 14px; color: #777; line-height: 1.6; }

        .premium-form .field-group { margin-bottom: 25px; }
        .field-group-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .field-group label { display: block; font-family: 'Montserrat'; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #111; margin-bottom: 12px; }
        
        .field-group input { 
            width: 100%; padding: 18px 0; background: transparent; border: none; border-bottom: 2px solid #eeeeee; 
            font-size: 14px; font-family: 'Poppins'; transition: all 0.3s; outline: none; 
        }
        .field-group input:focus { border-color: #B19777; }

        .meta-action { background: none; border: none; font-size: 11px; font-weight: 800; color: #B19777; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px; cursor: pointer; text-decoration: underline; padding: 0; }

        .auth-action-btn { 
            width: 100%; padding: 22px; background: #111; color: #fff; border: none; 
            font-family: 'Montserrat'; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; font-size: 12px; cursor: pointer; transition: all 0.4s; margin-top: 20px;
        }
        .auth-action-btn:hover { background: #B19777; transform: translateY(-5px); box-shadow: 0 15px 30px rgba(177, 151, 119, 0.3); }

        .auth-alert.error { padding: 15px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; border-left: 4px solid #b91c1c; background: #fef2f2; color: #b91c1c; }

        .auth-footer { margin-top: 40px; text-align: center; font-size: 12px; color: #999; }
        .toggle-view { color: #111; font-weight: 900; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; margin-left: 5px; cursor: pointer; }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }
        .pulse { animation: pulse 4s ease-in-out infinite; }

        @media (max-width: 900px) {
            .auth-grid { grid-template-columns: 1fr; }
            .auth-brand-side { display: none; }
            .auth-form-side { padding: 80px 30px; }
        }
      `}</style>
    </>
  );
};

export default SignUp;
