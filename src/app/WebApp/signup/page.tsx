'use client';
// import { createUserWithUsernameAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../api/firebase';  

import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { ResultModelSignupResponseInterface } from '../Dashboard/Domain/Models/ModelResponse/SignupResponse/ModelSignupResponseInterface';
import Service from '../services/Service';
// import { CollectionReference, DocumentData, query, Query, where } from 'firebase/firestore';
import { ModelSignupRequestInterface } from '../Dashboard/Domain/Models/ModelRequest/SignupRequest/ModelSignupRequestInterface';
import SignupService from '../Dashboard/Domain/Service/SignupService/SignupService';

export default function Signup() {
  const [first, setFirst] = useState("Pink-Esssence");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); 
  const router = useRouter();

    const [signupDetail, setsignupDetail] = useState<ResultModelSignupResponseInterface>();

    const doSignup = async (username: string, email: string,password: string, name: string) => {
        const requestBody: ModelSignupRequestInterface = {
            username: username,
            email: email,
            password: password,
            name: name,
          };
          try {
            const serviceSignup = await SignupService.signupService(requestBody);
        
            if (serviceSignup && serviceSignup.result?.token) {
              // Signup successful
              console.log(serviceSignup, "serviceSignup");
              console.log(token, "token");
              
            //   localStorage.setItem("token", serviceSignup.result.token);
              setToken(serviceSignup.result.token);

              // Navigate to dashboard or any other route
              router.push("/login"); // Example route to dashboard
            } else {
              // Signup failed, handle error state
              // console.error("Signup failed");
              setError("Invalid credentials. Please try again.");
              // Optionally, set an error state or show an error message
              // For example:
              // setError("Invalid credentials. Please try again.");
            }
          } catch (error) {
            console.error("Signup error:", error);
            setError("An error occurred. Please try again later.");
            // Handle error state if necessary
          }
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
                      <img src="image/background/signup.jpg" className="img-fluid" alt="Sample image" />
                  </div>
                  <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-3">  
                      <h2 className=" text-center text-bold ">
                        Sign Up
                      </h2> 
                      <div className="form-outline mb-3 mt-5">
                          <label className="form-label" htmlFor="form3Example3">Name</label>
                          <input 
                              id="name"
                              name="name"
                              type="name"
                              autoComplete="name"
                              onChange={(e) => setName(e.target.value)}
                              required
                              className="form-control form-control-lg" 
                              placeholder="Enter a valid name" 
                          />
                      </div>
                      <div className="form-outline mb-3 mt-3">
                          <label className="form-label" htmlFor="form3Example3">Username</label>
                          <input 
                              id="username"
                              name="username"
                              type="username"
                              autoComplete="username"
                              onChange={(e) => setUsername(e.target.value)}
                              required
                              className="form-control form-control-lg" 
                              placeholder="Enter a valid username" 
                          />
                      </div>
                      <div className="form-outline mb-3 mt-3">
                          <label className="form-label" htmlFor="form3Example3">Email</label>
                          <input 
                              id="Email"
                              name="Email"
                              type="Email"
                              autoComplete="Email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="form-control form-control-lg" 
                              placeholder="Enter a valid Email address" 
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
                              placeholder="Enter password" 
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
                              placeholder="Re-type password" 
                          />
                      </div>
                      <div className="text-center item-center text-md-start mt-3">
                            <button
                                disabled={(!username || !email || !password || !passwordAgain || !name) || (password !== passwordAgain)}
                                onClick={() => doSignup(username, email, password, name)}
                                className="disabled:opacity-40 btn btn-primary btn-lg login-btn text-center"
                                style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}
                            >
                                Sign Up
                            </button> 
                            <p className="small fw-bold mt-2 pt-1 mb-0">Wanna back to{' '}
                                <button
                                    type="button"
                                    onClick={() => router.push("/login")}
                                    className="text-body text-bold text-yellow btn font-weight-bold"
                                    // style={{ textDecoration: "none" }}
                                    >
                                    Login
                                </button>?
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
