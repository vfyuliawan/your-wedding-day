import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// const NavbarDashboard = () => {
//     return (
//         <nav className="navbar navbar-expand-md  navbar-light sticky-top mynavbar">
//             <div className="container">
//                 <a className="navbar-brand" href="index.html"><i className="bi bi-envelope-paper-heart" /> Nvite Me</a>
//                 <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon" />
//                 </button>
//                 <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//                 <div className="offcanvas-header">
//                     <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><i className="bi bi-envelope-paper-heart" /> Nvite Me</h5>
//                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
//                 </div>
//                 <div className="offcanvas-body">
//                     <div className="navbar-nav   mx-auto">
//                     <li className="nav-item">
//                         <a href="/#home" className="nav-link"><span data-hover="Home">Home</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="/#project" className="nav-link"><span data-hover="Projects">Projects</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="/#fiture" className="nav-link"><span data-hover="Fiture">Fiture</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="/#tutorial" className="nav-link"><span data-hover="Tutorial">Tutorial</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="/#design" className="nav-link"><span data-hover="Design">Design</span></a>
//                     </li>
//                     </div>
//                     <ul className="navbar-nav ml-lg-auto">
//                     <div className="ml-lg-4">
//                         <div className="custom-btn-group">
//                         <a href="/Dashboard/Section/Login" className="btn custom-btn login-btn custom-btn-bg custom-btn-link"><i className="bi bi-box-arrow-in-right" />  Login</a>
//                         </div> 
//                     </div>
//                     </ul>
//                 </div>
//                 </div>
//             </div>
//         </nav>


//     );
//   };
  
//   export default NavbarDashboard;

import Link from "next/link";

const NavbarDashboard = () => {
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
                                    <Link href="/Section/Login">
                                        <span className="btn custom-btn login-btn custom-btn-bg custom-btn-link">
                                            <i className="bi bi-box-arrow-in-right " /> Login
                                        </span>
                                    </Link>
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



