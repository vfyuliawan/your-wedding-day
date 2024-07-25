import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../../../services/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'; 
import LogoutService from "../../Domain/Service/LogoutService/LogoutService";
// import { useRouter } from "next/router";
 

const NavbarDashboard = () => {
    // const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    // const router = useRouter();
      useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          setToken(storedToken);
        } else {
          // Token not found in localStorage, handle accordingly (e.g., redirect to login)
        }
      }, []);
     
      const handleLogout = async() => {
        // Clear token from localStorage
        
        const logoutService = await LogoutService.logoutService();

        try {
            if (logoutService?.result == true) {
                await localStorage.removeItem("token");
            }else{
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again later.");
        }
        // Redirect to login page or any other desired page
        // router.push("/");
      };

    return (
        <nav className="navbar navbar-expand-md navbar-light sticky-top mynavbar">
            <div className="container">
                {/* <Link href="/"> */}
                    <a href="/" className="navbar-brand"><i className="bi bi-envelope-paper-heart" /> Nvite Me</a>
                {/* </Link> */}
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><i className="bi bi-envelope-paper-heart" /> Nvite Me</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link href="/#home" className="nav-link"><span data-hover="Home">Home</span> 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#project" className="nav-link"><span data-hover="Project">Project</span> 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#fiture" className="nav-link"><span data-hover="Fiture">Fiture</span> 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#tutorial" className="nav-link"><span data-hover="Tutorial">Tutorial</span> 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#design" className="nav-link"><span data-hover="Design">Design</span> 
                                </Link>
                            </li>
                            {/* Add other list items */}
                        </ul>
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item ml-lg-4">
                                <div className="custom-btn-group"> 
                                    {token ? (<ul className="flex">
                                            {/* <Link href="/">
                                                <span className="btn custom-btn login-btn custom-btn-bg custom-btn-link">
                                                    <i className="bi bi-box-arrow-in-right " /> Logout
                                                </span>
                                            </Link>  */}
                                            <Link href="/content-setting" 
                                                className="btn custom-btn login-btn custom-btn-bg custom-btn-link"
                                                style={{ marginLeft: "10px" }}
                                            >
                                               <i className="bi bi-pencil " /> Create
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="btn custom-btn login-btn custom-btn-bg custom-btn-link"
                                                style={{ marginLeft: "10px" }}
                                            >
                                               <i className="bi bi-box-arrow-in-right " /> Logout
                                            </button>
                                        </ul> 
                                    ) : (
                                        <ul className="flex">
                                            <Link href="/login">
                                                <span className="btn custom-btn login-btn custom-btn-bg custom-btn-link">
                                                    <i className="bi bi-box-arrow-in-right " /> Login
                                                </span>
                                            </Link> 
                                        </ul> 
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDashboard;



