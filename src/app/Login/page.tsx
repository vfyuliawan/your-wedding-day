"use client";

import { useState } from "react";
import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import { useRouter } from "next/navigation";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
const LoginDashboard = () => {
    const [first, setFirst] = useState("Pink-Esssence");

  const router = useRouter();

  if (first === "Pink-Essence") {
    // return <RedEssence />;
  } else {
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="image/background/login.jpg" className="img-fluid" alt="Sample image" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <div className="social-login">
                    <a href="#"><i className="fa fa-google" /> Sign in with Google</a>
                    </div>
                    <form>
                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-3">
                        <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Checkbox */}
                        <div className="form-check mb-0">
                        <input className="form-check-input me-2" type="checkbox"   id="form2Example3" />
                        <label className="form-check-label" htmlFor="form2Example3">
                            Remember me
                        </label>
                        </div>
                        <a href="setting-content.html" className="text-body">Forgot password?</a>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                        <a type="button" className="btn btn-warning btn-lg login-btn" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}} href="setting-content.html">Login</a>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a> or wanna go <a href="../index.html" className="link-warning">HOME</a></p>
                    </div> 
                    </form>
                </div>
                </div>
            </div>
        </section>


    );
  }
  };
  
  export default LoginDashboard;