'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../api/firebase';  

import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

export default function Signup() {
  const [first, setFirst] = useState("Pink-Esssence");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const router = useRouter();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password);
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
                      <img src="image/background/login.jpg" className="img-fluid" alt="Sample image" />
                  </div>
                  <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-3">  
                      <h2 className=" text-center text-bold ">
                        Sign Up
                      </h2> 
                      <div className="form-outline mb-3 mt-5">
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
                      <div className="form-outline mb-3 mt-3">
                          <label className="form-label" htmlFor="form3Example3">Password</label>
                          <input 
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              className="form-control form-control-lg" 
                              placeholder="Enter a valid email address" 
                          />
                      </div>
                      <div className="form-outline mb-3 mt-3">
                          <label className="form-label" htmlFor="form3Example3">Re-type Password</label>
                          <input 
                              id="passwordAgain"
                              name="passwordAgain"
                              type="password"
                              autoComplete="current-password"
                              onChange={(e) => setPasswordAgain(e.target.value)}
                              required
                              className="form-control form-control-lg" 
                              placeholder="Enter a valid email address" 
                          />
                      </div>
                      <div className="text-center item-center text-md-start mt-5">
                            <button
                                disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                                onClick={() => signup()}
                                className="disabled:opacity-40 btn btn-primary btn-lg login-btn text-center"
                                style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}
                            >
                                Sign Up
                            </button> 
                            <p className="small fw-bold mt-2 pt-1 mb-0">Wanna back to{' '}
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
