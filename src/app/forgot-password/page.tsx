'use client';
import { useState } from 'react'; 
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";

import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { auth } from '../api/firebase';

export default function ForgotPassword() {
  const [first, setFirst] = useState("Pink-Esssence");
  const [email, setEmail] = useState('');
  
  const router = useRouter();

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };
  if (first === "Pink-Essence") {
    // return <RedEssence />;
  } else {
    return (
      <>
      <section className="vh-100">
          <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-md-9 col-lg-6 col-xl-5">
                      <img src="image/background/forgot-password.jpg" className="img-fluid" alt="Sample image" />
                  </div>
                  <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-3">  
                      <h2 className=" text-center text-bold ">
                        Forgot Password
                      </h2> 
                      <div className="form-outline mb-4 mt-5">
                          <label className="form-label" htmlFor="form3Example3">Email address</label>
                          <input 
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="form-control form-control-lg" 
                              placeholder="Enter a valid email address" 
                          />
                      </div>
                      <div className="text-center item-center text-md-start mt-5">
                            <button
                                onClick={() => resetEmail()}
                                disabled={!email}
                                className="disabled:opacity-40 btn btn-danger btn-lg login-btn text-center"
                                style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}
                            >
                                Send Forgot Password Email
                            </button> 
                            <p className="small fw-bold mt-2 pt-1 mb-0">Wanna comeback to{' '}
                                <a  onClick={() => router.push('/Login')}   className="text-body text-bold text-yellow">
                                Login
                                </a>?
                            </p>
                        </div>  
                  </div>
              </div>
          </div>
      </section>
      
      </>
    )
  }
}
