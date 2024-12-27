"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent } from 'react';
import { ModelSignupRequestInterface } from '../Dashboard/Domain/Models/ModelRequest/SignupRequest/ModelSignupRequestInterface';
import SignupService from '../Dashboard/Domain/Service/SignupService/SignupService';
import { ResultModelSignupResponseInterface } from '../Dashboard/Domain/Models/ModelResponse/SignupResponse/ModelSignupResponseInterface';
import CekUserLoginService from '../Dashboard/Domain/Service/CekUserLoginService/CekUserLoginService';

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [passwordAgain, setPasswordAgain] = useState('');
  
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const storedToken = localStorage.getItem("token"); 
    if (storedToken) {
      setToken(storedToken); // Set token state if found in localStorage
      checkUserLogin(); 
    }
  }, []);

  

  const checkUserLogin = async () => {
    try {
      const serviceCheckUserLogin = await CekUserLoginService.cekUserLoginService();
      if (serviceCheckUserLogin?.result == true) {
        setIsUserLoggedIn(true);       
        router.push("/");
      }
    } catch (error) {
      console.error("check User Login error:", error);
      setError("An error occurred. Please try again later.");
      
    }
  };
  
  const doSignup = async (username: string, email: string, password: string, name: string) => {
    const requestBody: ModelSignupRequestInterface = {
      username,
      email,
      password,
      name,
    }; 
    
    try {
      const serviceSignup = await SignupService.signupService(requestBody); 
      if (serviceSignup && serviceSignup.result?.token) { 
        console.log(serviceSignup, "serviceSignup");
        setToken(serviceSignup.result.token); 
        router.push("/WebApp/Login");  
      } else { 
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== passwordAgain) {
      setError('Passwords do not match!');
      return;
    }

    doSignup(formData.username, formData.email, formData.password, formData.name);
  };

  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gradient-to-tr tw-from-pink-200 tw-to-sky-200">
      {header()}
      <div className="tw-w-full sm:tw-max-w-md tw-bg-white tw-m-8 tw-p-6  tw-rounded-xl tw-shadow-2xl">
        <h2 className="tw-text-2xl tw-font-semibold tw-text-gray-900 tw-text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="tw-space-y-3">
          {error && <p className="tw-text-red-500 tw-text-center">{error}</p>} {/* Display error message if there is any */}
          
          <div>
            <label htmlFor="name" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter a valid name"
              className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
            />
          </div>

          <div>
            <label htmlFor="username" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter a valid username"
              className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@doe.com"
              required
              className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
            />
          </div>

          <div>
            <label htmlFor="retypePassword" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="retypePassword"
              name="retypePassword"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
              placeholder="Confirm Password"
              required
              className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
            />
          </div>

          <div className="tw-items-center">
            <button
              type="submit"
              disabled={
                !formData.username || !formData.email || !formData.password || !passwordAgain || !formData.name || (formData.password !== passwordAgain)
              }
              className="disabled:tw-opacity-25 tw-w-full tw-bg-indigo-500 tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-shadow-sm hover:tw-bg-indigo-500 focus:tw-outline-2 focus:tw-outline-indigo-600"
            >
              Create Account
            </button>
              <div className='tw-flex tw-items-center tw-justify-center'> 
                <p className="tw-text-xs tw-font-bold tw-mt-1 tw-px-3 tw-mb-0">
                    Already have an account?{' '}
                    <button
                        type="button"
                        onClick={() => router.push("/WebApp/masuk")}
                        className="tw-font-bold tw-text-indigo-500 btn"
                    >
                        Sign in
                    </button>
                </p>
              </div>
          </div>
        </form>
      </div>
    </div>
  );

  function header() {
    return (
      <header className={`tw-fixed tw-inset-x-0 tw-top-0 tw-z-50 ${isScrolled ? 'tw-bg-gradient-to-tr tw-from-pink-100 tw-to-sky-200' : ''}`}>
        <nav className="tw-flex tw-items-center tw-justify-between tw-p-6 lg:tw-px-8" aria-label="Global">
          <div className="tw-flex lg:tw-flex-1">
            <a href="/" className="tw--m-1.5 tw-p-1.5">
              <span className="tw-text-indigo-500 font-mono tw-text-2xl tw-font-bold tw-border-indigo-500 hover:tw-text-amber-400 tw-rounded-md">Nvite-Me</span>
            </a>
          </div>
          <div className="tw-flex md:tw-hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2.5 tw-text-gray-700"
            >
              <span className="tw-sr-only">Open main menu</span>
              <svg className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="tw-hidden lg:tw-flex lg:tw-gap-x-12">
            {/* {['Home','Product', 'Company'].map(item => (
              <a key={item} href="#" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">{item}</a>
            ))} */}
            <a  href="/" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">Home</a>
            <a  href="/" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">Product</a>
            <a  href="/" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">Company</a>
          </div>

          <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end">
            {/* <a href="#" className="tw-rounded-full tw-mx-3 tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-indigo-500 tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Login <span aria-hidden="true">→</span></a>
            <a href="#" className="tw-rounded-full tw-bg-indigo-500 tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Sign Up</a> */}
          </div>

          {isMobileMenuOpen && (
            <div className="tw-absolute tw-top-0 tw-inset-x-0 tw-p-2 tw-z-50 tw-bg-white tw-shadow-md">
              <div className="tw-flex tw-items-center tw-justify-between tw-p-4">
                <h5 className="tw-text-lg tw-font-bold tw-text-gray-900">Menu</h5>
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw -rounded-md tw-p-2.5 tw-text-gray-700"
                >
                  <span className="tw-sr-only">Close main menu</span>
                  <svg className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="tw-space-y-2">
                {['Product', 'Features', 'Marketplace', 'Company'].map(item => (
                  <li key={item}>
                    <a href="#" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    );
  }
};

export default Signup;
