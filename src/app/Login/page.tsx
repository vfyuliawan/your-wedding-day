"use client";

import { signIn } from "next-auth/react";
// import { useState } from "react";
import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { ModelLoginRequestInterface } from "../Dashboard/Domain/Models/ModelRequest/LoginRequest/ModelLoginRequestInterface";
import { ResultModelLoginResponseInterface } from "../Dashboard/Domain/Models/ModelResponse/LoginResponse/ModelLoginResponseInterface";
import LoginService from "../Dashboard/Domain/Service/LoginService/LoginService";
import Service from "../services/Service";
import { CollectionReference, DocumentData, query, Query, where } from "firebase/firestore";
import LoginRepository from "../Dashboard/Domain/Repository/LoginRepository/LoginRepository";

const LoginDashboard = () => {
  const [first, setFirst] = useState("Pink-Esssence");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); 
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken); // Set token state if found in localStorage
      router.replace("/"); // Redirect to dashboard if token exists
    }
  }, []);
  const [loginDetail, setloginDetail] = useState<ResultModelLoginResponseInterface>();
  const getMessage = async () => {
    console.log("run");
    const res = await Service.GET({
      collectionName: "UserId",
      queryGet: function (
        queryGet: CollectionReference<DocumentData, DocumentData>
      ): Query<DocumentData, DocumentData> {
        const nameQuery = query(queryGet, where("Slug", "==", "getParams"));
        return nameQuery;
      },
    });
    if (res?.length ?? 0 > 0) {
    }
  };

    const doLogin = async (username: string, password: string) => {
        const requestBody: ModelLoginRequestInterface = {
            username: username,
            password: password,
          };
          try {
            const serviceLogin = await LoginService.loginService(requestBody);
        
            if (serviceLogin && serviceLogin.result?.token) {
              // Login successful
              localStorage.setItem("token", serviceLogin.result.token);
              setToken(serviceLogin.result.token);
              // Navigate to dashboard or any other route
              router.push("/"); // Example route to dashboard
            } else {
              // Login failed, handle error state
              // console.error("Login failed");
              setError("Invalid credentials. Please try again.");
              // Optionally, set an error state or show an error message
              // For example:
              // setError("Invalid credentials. Please try again.");
            }
          } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again later.");
            // Handle error state if necessary
          }
      };

     

  const router = useRouter();

  if (first === "Pink-Essence") {
    // return <RedEssence />;
  } else {
    return (
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="image/background/login.jpg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-2">
              <h2 className=" text-center text-bold">Sign In</h2>
              {/* <h2 className=" text-center text-bold">Sign In {token}</h2> */}
              <div className="social-login mt-4">
                <a href="#">
                  <i className="fa fa-google" /> Sign in with Google
                </a>
              </div>
              <form>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
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
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => router.push("/forgot-password")}
                    className="text-body text-bold text-yellow btn font-weight-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                  type="button"
                    onClick={() => doLogin(email, password)}
                    disabled={!email || !password}
                    className="disabled:opacity-40 btn btn-warning btn-lg login-btn"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Sign In
                  </button>
                  {error && <p className="text-danger mt-2">{error}</p>}
                  {/* <a type="button" className="btn btn-warning btn-lg login-btn" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}} href="setting-content.html">Login</a> */}
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => router.push("/signup")}
                      className="text-body text-bold text-yellow btn font-weight-bold"
                      style={{ textDecoration: "none" }}
                    >
                      Sign Up
                    </button>
                  </p>
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
