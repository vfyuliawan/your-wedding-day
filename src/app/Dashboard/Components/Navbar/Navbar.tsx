import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../../../services/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'; 
 

const NavbarDashboard = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

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
                                    {loading ? null : !user ? (
                                        <ul className="flex">
                                            <Link href="/Login">
                                                <span className="btn custom-btn login-btn custom-btn-bg custom-btn-link">
                                                    <i className="bi bi-box-arrow-in-right " /> Login
                                                </span>
                                            </Link> 
                                        </ul>
                                    ) : (
                                        <div>
                                            <p>Welcome, {user.displayName}</p>
                                            <Link href="/">
                                                <span className="btn custom-btn login-btn custom-btn-bg custom-btn-link" onClick={handleSignOut}>
                                                    <i className="bi bi-box-arrow-left " /> Logout
                                                </span>
                                            </Link>  
                                        </div>
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



