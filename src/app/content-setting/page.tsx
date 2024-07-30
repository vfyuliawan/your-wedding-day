"use client";
import {signIn} from "next-auth/react";
// import { useState } from "react";
import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Service from "../services/Service";
import {
    CollectionReference,
    DocumentData,
    query,
    Query,
    where
} from "firebase/firestore";
import LogoutService from "../Dashboard/Domain/Service/LogoutService/LogoutService";
import FooterDashboard from "../Dashboard/Components/Footer/Footer";
import Cryptr from 'cryptr'; 
import { ModelGetProjectDetailRequestInterface } from "../Dashboard/Domain/Models/ModelRequest/GetProjectDetailRequest/GetProjectDetailRequest";
import { ResultModelGetProjectDetailResponseInterface } from "../Dashboard/Domain/Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse";
import GetProjectDetailService from "../Dashboard/Domain/Service/GetProjectDetailService/GetProjectDetailService";
import CekUserLoginService from "../Dashboard/Domain/Service/CekUserLoginService/CekUserLoginService";
 

const ContentSettingPage = () => {
    const [first, setFirst] = useState("Pink-Esssence");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState < string | null > (null);
    const [error, setError] = useState < string | null > (null);
    const [projectId, setProjectId] = useState<string | null>(null);
    const [data, setData] = useState<ResultModelGetProjectDetailResponseInterface | undefined>(undefined);

    const [isProjectIdReady, setIsProjectIdReady] = useState(false); // add a state variable to track when the project ID is ready
    const router = useRouter();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        checkUserLogin();
        if (storedToken) {
            const keyEncrypt = new Cryptr('nViteMeKey');
            let queryString = window.location.search; 
            if (queryString.startsWith('?')) {
            queryString = queryString.substring(1);
            } 
            queryString = keyEncrypt.decrypt(queryString);
            let urlParam = new URLSearchParams(queryString);   
            
            if (urlParam) {
            let decryptedProjectParam = urlParam.get('projectId');
            // update the state variable
            try {  // extract the project ID from the decrypted string
                setProjectId(decryptedProjectParam); 
                setIsProjectIdReady(true); // set the flag to true
            } catch (error) {
                console.error("Error decrypting project ID:", error);
            }
            }; 
        }else{
            router.replace("/"); 
        }
      }, []);
    
      useEffect(() => {
        if (isProjectIdReady && projectId !== null) {
          handleGetProjectDetails(projectId);
         
          
        }
      }, [isProjectIdReady, projectId]);
    
      const handleGetProjectDetails = async(id: string | null) => {
        if (id === null) {
          // handle the case where id is null
          return;
        } 
        const requestParams: ModelGetProjectDetailRequestInterface = {
          id: id,
        };
        try {
          // GetProjectDetailService; 
          const GetProjectDetailServices = await GetProjectDetailService.getProjectDetailService(requestParams); 
          if (GetProjectDetailServices && GetProjectDetailServices?.result) {  
            setData(GetProjectDetailServices.result); 
          }else{
            setError("Invalid credentials. Please try again.");
          }
        } catch (error) {
          console.error("Login error:", error);
          setError("An error occurred. Please try again later.");
        } 
      };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(data);
        
        if (data) {
            setData({
                ...data,
                title: event.target.value,
                hero: {
                    ...data.hero,
                    date: new Date(event.target.value)
                  }

            });
        }
    };
    
    const checkUserLogin = async () => {
        try {
          const serviceCheckUserLogin = await CekUserLoginService.cekUserLoginService();
          if (serviceCheckUserLogin?.result) { // check if result is truthy
            setIsUserLoggedIn(false); // or leave it unchanged
          } else {
            setIsUserLoggedIn(true);
          }
        } catch (error: any) {
            if (error.response  ) {
                setIsUserLoggedIn(true);
            }
          console.error("check User Login error:", error);
          setError("An error occurred. Please try again later.");
        }
      };
    
    const getMessage = async () => {
        console.log("run");
        const res = await Service.GET({
            collectionName: "UserId",
            queryGet: function (queryGet : CollectionReference < DocumentData, DocumentData >): Query < DocumentData,
            DocumentData > {
                const nameQuery = query(queryGet, where("Slug", "==", "getParams"));
                return nameQuery;
            }
        });
        if (res ?. length ?? 0 > 0) {}
    };

    
    const handleLogout = async () => { // Clear token from localStorage
        try {
            const logoutService = await LogoutService.logoutService();
            if (logoutService ?. result == true) {
                await localStorage.removeItem("token");
                router.replace("/");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again later.");
        }
        // Redirect to login page or any other desired page
        // router.push("/");
    };
    
    // const handleSubmit = async () => {
    //     if (data.hero.img instanceof File) {
    //         const formData = new FormData();
    //         formData.append('imageCover', data.hero.img);
    //         // Handle file upload
    //     }
    
    //     try {
    //         const response = await fetch('/api/submit', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 title: data?.title,
    //                 eventDate: data?.hero.date,
    //                 showCover: data?.hero.isShow
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         const result = await response.json();
    //         console.log(result);
    //     } catch (error) {
    //         console.error('Form submission error:', error);
    //     }
    //

    useEffect(() => {  
        if (isUserLoggedIn) {           
            router.replace("/"); 
        }
    }, [isUserLoggedIn]); 
    if (first === "Pink-Essence") { // return <RedEssence />;
    } else {
        // console.log("Rendering data:", data);
        return (
        <>
            <nav className="navbar navbar-expand-md navbar-light sticky-top mynavbar">
                <div className="container">
                    <a href="/" className="navbar-brand"><i className="bi bi-envelope-paper-heart"/>
                        Nvite Me</a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><i className="bi bi-envelope-paper-heart"/>
                                Nvite Me
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item ">
                                    <Link href="/#home" className="nav-link">
                                        <span data-hover="Home">Home</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-lg-auto">
                                <li className="nav-item ml-lg-4">
                                    <div className="custom-btn-group">
                                        <button onClick={handleLogout}
                                            className="btn custom-btn login-btn custom-btn-bg custom-btn-link"
                                            style={
                                                {
                                                    marginLeft: "10px"
                                                }
                                        }>
                                            <i className="bi bi-box-arrow-in-right "/> Logout
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="setting-content">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="card ">
                                <img src="image/background/prewed-bg.jpg"/>
                                <div className="card-buttons">
                                    <button className="view-btn"><i className="bi bi-eye"/>
                                        Preview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-2 mb-5 ">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Cover Depan
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Title Cover</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titleCover"
                                        name="title"
                                        placeholder="Title Cover"
                                        value={data?.title || ''}
                                        onChange={handleChange}
                                    /> 
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imageCover" className="form-label">Image Cover</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="imageCover"
                                        name="imageCover"
                                        // value={data?.hero.img || ''}
                                        // onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eventDate" className="form-label">Event Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="eventDate"
                                        name="eventDate"
                                        placeholder="Event Date"
                                        value={data?.hero.date ? new Date(data.hero.date).toISOString().split('T')[0] : ''}
                                        onChange={(event) => {
                                            // You might want to add a separate handleChange function for this field
                                            handleChange(event);
                                        }}
                                    /> 
                                </div>
                                <div className="mb-3 form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="showCoverDepanSwitch"
                                        name="showCover"
                                        // checked={data?.hero.isShow || false}
                                        // onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="showCoverDepanSwitch">Show Cover</label>
                                </div>
                                <div className="mb-3">
                                    <button 
                                        className="btn btn-warning" 
                                        // onClick={handleSubmit}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>

                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Home
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Home Quote Title</label>
                                        <input type="text" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Home Quote</label>
                                        <input type="text" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Image Cover</label>
                                        <input type="file" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Cover</label>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-warning">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Hero
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Hero Title</label>
                                        <input type="text" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Image Hero</label>
                                        <input type="file" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Event Date</label>
                                        <input type="date" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Cover</label>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-warning">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Event Info
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour-One" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour-One">
                                                    Akad
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour-One" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Title</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Akad Nikah"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Place</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Le Meridien Hotel"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Location</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="https://maps.app.goo.gl/asdfgh"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Image Event</label>
                                                        <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Event Date</label>
                                                        <input type="date" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <button className="btn btn-warning">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour-Two" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour-Two">
                                                    Resepsi
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour-Two" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Title</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Akad Nikah"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Place</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Le Meridien Hotel"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Location</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="https://maps.app.goo.gl/asdfgh"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Image Event</label>
                                                        <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Event Date</label>
                                                        <input type="date" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <button className="btn btn-warning">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Cover</label>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-warning">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    Couple's
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive-One" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive-One">
                                                    Male
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFive-One" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Father's Name</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Mr. Ken"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Mother's Name</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Mrs. Barbie"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Name Mempelai Pria</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Mr. John Doe"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Image</label>
                                                        <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive-Two" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive-Two">
                                                    Female
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFive-Two" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Father's Name</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Mr. Ken"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Mother's Name</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Mrs. Barbie"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Name Mempelai Wanita</label>
                                                        <input type="text" className="form-control" id="titleCover" placeholder="Mr. John Doe"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="titleCover" className="form-label">Image Female</label>
                                                        <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Cover</label>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-warning">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </>
        );
    }
};
export default ContentSettingPage;

 