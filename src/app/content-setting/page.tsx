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
import { ModelGetProjectDetailResponseInterface, ResultModelGetProjectDetailResponseInterface } from "../Dashboard/Domain/Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse";
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
    const [giftCount, setGiftCount] = useState(1);


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
                    date: new Date(event.target.value),
                    isShow: event.target.checked
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
                                        onChange={(val) => { 
                                            setData(prevState => {
                                                return { 
                                                    ...prevState,
                                                    title: val.target.value 
                                                } as ResultModelGetProjectDetailResponseInterface
                                            })
                                        }}
                                    /> 
                                </div> 
                                <div className="mb-3">
                                    <label htmlFor="imageCover" className="form-label">Image Cover</label>
                                    <div>
                                        <img
                                            id="imageCoverPreview"
                                            src={data ? 'data:image/jpeg;base64,'+data.cover.img : ''}
                                            alt={'imageCover'}
                                            style={{ maxWidth: '50px', margin: '5px' }}
                                        />
                                        <input 
                                            type="file"
                                            className="form-control"
                                            id="imageCover"
                                            name="imageCover"
                                            onChange={(val) => {
                                                const fileImageCover = val?.target?.files?.[0]
                                                if (fileImageCover) {
                                                    const reader = new FileReader();
                                                    reader.readAsDataURL(fileImageCover);
                                                    reader.onloadend = () => {
                                                        const imageDataUrl = reader.result as string;
                                                        const base64Data = imageDataUrl.replace(/^data:image\/(jpg|jpeg|png|gif);base64,/, '');
                                                        setData((prevState) => {
                                                          return {
                                                            ...prevState,
                                                            cover: {
                                                              ...prevState?.cover,
                                                              img: base64Data
                                                            }
                                                          } as ResultModelGetProjectDetailResponseInterface
                                                        });  
                                                    };
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eventDate" className="form-label">Event Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="eventDate"
                                        name="eventDate"
                                        placeholder="Event Date"
                                        value={data?.cover.date ? new Date(data.cover.date).toISOString().split('T')[0] : ''}
                                        onChange={(val) => {
                                            setData(prevState => {
                                                return { 
                                                    ...prevState,
                                                    countDown: new Date(val.target.value)
                                                } as ResultModelGetProjectDetailResponseInterface
                                            })
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
                                        checked={data?.cover.isShow || false}
                                        onChange={(val) => {
                                            setData(prevState => {
                                                return { 
                                                    ...prevState,
                                                    cover: {
                                                        ...prevState?.cover,
                                                        isShow: val.target.checked
                                                      }
                                                } as ResultModelGetProjectDetailResponseInterface
                                            })
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="showCoverDepanSwitch">Show Cover</label>
                                </div>
                                {/* <div className="mb-3">
                                    <button 
                                        className="btn btn-warning" 
                                        // onClick={handleSubmit}
                                    >
                                        Apply
                                    </button>
                                </div> */}
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
                                        <label htmlFor="titleHome" className="form-label">Home Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="titleHome"
                                            name="title"
                                            placeholder="Title Home"
                                            value={data?.title || ''}
                                            onChange={(val) => { 
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        title: val.target.value 
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        /> 
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Home Quote</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="quoteHome"
                                            name="quote"
                                            placeholder="Quote Home"
                                            value={data?.home.quotes || ''}
                                            onChange={(val) => { 
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        home: {
                                                            ...prevState?.home,
                                                            quotes: val.target.value
                                                        }
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        /> 
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titleHome" className="form-label">Home Image</label>
                                        <div>
                                            <img
                                                id="imageHomePreview"
                                                src={data ? 'data:image/jpeg;base64,'+data.home.img : ''}
                                                alt={'imageHome'}
                                                style={{ maxWidth: '50px', margin: '5px' }}
                                            />
                                            <input 
                                                type="file"
                                                className="form-control"
                                                id="imageHome"
                                                name="imageHome"
                                                onChange={(val) => {
                                                    const fileImageHome = val?.target?.files?.[0]
                                                    if (fileImageHome) {
                                                        const reader = new FileReader();
                                                        reader.readAsDataURL(fileImageHome);
                                                        reader.onloadend = () => {
                                                            const imageHomeDataUrl = reader.result as string;
                                                            const base64HomeData = imageHomeDataUrl.replace(/^data:image\/(jpg|jpeg|png|gif);base64,/, '');
                                                            setData((prevState) => {
                                                            return {
                                                                ...prevState,
                                                                home: {
                                                                ...prevState?.home,
                                                                img: base64HomeData
                                                                }
                                                            } as ResultModelGetProjectDetailResponseInterface
                                                            });  
                                                        };
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="showHomeDepanSwitch"
                                            name="showHome"
                                            checked={data?.home.isShow || false}
                                            onChange={(val) => {
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        home: {
                                                            ...prevState?.home,
                                                            isShow: val.target.checked
                                                        }
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="showHomeDepanSwitch">Show Home</label>
                                    </div>
                                    {/* <div className="mb-3">
                                        <button className="btn btn-warning">Apply</button>
                                    </div> */}
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="titleHero"
                                            name="title"
                                            placeholder="Title Hero"
                                            value={data?.title || ''}
                                            onChange={(val) => { 
                                                console.log(data);
                                                
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        title: val.target.value 
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        /> 
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titleHero" className="form-label">Image Hero</label>
                                        <div>
                                            <img
                                                id="imageHeroPreview"
                                                src={data ? 'data:image/jpeg;base64,'+data.hero.img : ''}
                                                alt={'imageHero'}
                                                style={{ maxWidth: '50px', margin: '5px' }}
                                            />
                                            <input 
                                                type="file"
                                                className="form-control"
                                                id="imageHero"
                                                name="imageHero"
                                                onChange={(val) => {
                                                    const fileImageHero = val?.target?.files?.[0]
                                                    if (fileImageHero) {
                                                        const reader = new FileReader();
                                                        reader.readAsDataURL(fileImageHero);
                                                        reader.onloadend = () => {
                                                            const imageHeroDataUrl = reader.result as string;
                                                            const base64HeroData = imageHeroDataUrl.replace(/^data:image\/(jpg|jpeg|png|gif);base64,/, '');
                                                            setData((prevState) => {
                                                            return {
                                                                ...prevState,
                                                                hero: {
                                                                ...prevState?.hero,
                                                                img: base64HeroData
                                                                }
                                                            } as ResultModelGetProjectDetailResponseInterface
                                                            });  
                                                        };
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="mb-3">
                                        <label htmlFor="titleCover" className="form-label">Event Date</label>
                                        <input type="date" className="form-control" id="titleCover" placeholder="name@example.com"/>
                                    </div> */}
                                    <div className="mb-3 form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="showHeroSwitch"
                                            name="showHero"
                                            checked={data?.hero.isShow || false}
                                            onChange={(val) => {
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        hero: {
                                                            ...prevState?.hero,
                                                            isShow: val.target.checked
                                                        }
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Hero</label>
                                    </div>
                                    {/* <div className="mb-3">
                                        <button className="btn btn-warning">Apply</button>
                                    </div> */}
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
                                                    Event Info 1
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour-One" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="titleEvent1" className="form-label">Title Event 1</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="titleEvent1"
                                                            name="title"
                                                            placeholder="Title Event 1: e.g. Akad, Resepsi, Pemberkatan"
                                                            value={data?.infoAcara.akad.titleAkad || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            akad: {
                                                                                ...prevState?.infoAcara.akad,
                                                                                titleAkad: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="placeEvent1" className="form-label">Place Event 1</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="placeEvent1"
                                                            name="place"
                                                            placeholder="place Event 1: e.g. Hotel..., Taman..."
                                                            value={data?.infoAcara.akad.lokasiAkad || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            akad: {
                                                                                ...prevState?.infoAcara.akad,
                                                                                lokasiAkad: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="locationEvent1" className="form-label">Link Google Maps Event 1</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="locationEvent1"
                                                            name="location"
                                                            placeholder={"https://maps.app.goo.gl/LeMeridien"}
                                                            value={data?.infoAcara.akad.mapAkad || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            akad: {
                                                                                ...prevState?.infoAcara.akad,
                                                                                mapAkad: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="imageEvent1" className="form-label">Image Event 1</label>
                                                        <div>
                                                            <img
                                                                id="imageEvent1Preview"
                                                                src={`data:image/jpeg;base64,${data?.infoAcara.akad.imageAkad}`}
                                                                alt={'imageEvent1'}
                                                                style={{ maxWidth: '50px', margin: '5px' }}
                                                            />
                                                            <input 
                                                                type="file"
                                                                className="form-control"
                                                                id="imageEvent1"
                                                                name="imageEvent1"
                                                                onChange={(val) => {
                                                                    const fileImageEvent1 = val?.target?.files?.[0]
                                                                    if (fileImageEvent1) {
                                                                        const reader = new FileReader();
                                                                        reader.readAsDataURL(fileImageEvent1);
                                                                        reader.onloadend = () => {
                                                                            const imageEvent1DataUrl = reader.result as string;
                                                                            const base64Event1Data = imageEvent1DataUrl.replace(/^data:image\/(jpg|jpeg|png|gif);base64,/, '');
                                                                            setData((prevState) => {
                                                                            return {
                                                                                ...prevState,
                                                                                infoAcara: {
                                                                                    ...prevState?.infoAcara,
                                                                                    akad: {
                                                                                        ...prevState?.infoAcara.akad,
                                                                                        imageAkad: base64Event1Data
                                                                                    }
                                                                                }
                                                                            } as ResultModelGetProjectDetailResponseInterface
                                                                            });  
                                                                        };
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="mb-3 col-md-6">
                                                            <label htmlFor="eventDate1" className="form-label">Event Date 1</label>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                id="eventDate"
                                                                name="eventDate"
                                                                placeholder="Event Date"
                                                                value={data?.infoAcara.akad.dateAkad 
                                                                    ? new Date(data.infoAcara.akad.dateAkad).toISOString().split('T')[0] 
                                                                    : ''
                                                                }
                                                                onChange={(val) => {
                                                                    const newDate = new Date(val.target.value);
                                                                    const timePart = data?.infoAcara.akad.dateAkad
                                                                        ? new Date(data.infoAcara.akad.dateAkad).toISOString().split('T')[1]
                                                                        : '00:00:00';
                                                                    setData(prevState => ({
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            akad: {
                                                                                ...prevState?.infoAcara.akad,
                                                                                dateAkad: new Date(`${newDate.toISOString().split('T')[0]}T${timePart}`)
                                                                            }
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface));
                                                                }}
                                                            /> 
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label htmlFor="eventTime1" className="form-label">Event Time 1</label>
                                                            <input
                                                                type="time"
                                                                className="form-control"
                                                                id="eventTime1"
                                                                name="eventTime1"
                                                                placeholder="Event Time 1"
                                                                value={data?.infoAcara.akad.dateAkad 
                                                                    ? new Date(data.infoAcara.akad.dateAkad).toISOString().split('T')[1].slice(0, 5) 
                                                                    : ''
                                                                }
                                                                onChange={(val) => {
                                                                    const newTime = val.target.value;
                                                                    const datePart = data?.infoAcara.akad.dateAkad
                                                                        ? new Date(data.infoAcara.akad.dateAkad).toISOString().split('T')[0]
                                                                        : new Date().toISOString().split('T')[0];
                                                                    setData(prevState => ({
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            akad: {
                                                                                ...prevState?.infoAcara.akad,
                                                                                dateAkad: new Date(`${datePart}T${newTime}:00`)
                                                                            }
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface));
                                                                }}
                                                            />
                                                        </div>
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
                                                    Title Event 2
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour-Two" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                    <div className="mb-3">
                                                    <label htmlFor="titleEvent2" className="form-label">Title Event 2</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="titleEvent2"
                                                            name="title"
                                                            placeholder="Title Event 2: e.g. Akad, Resepsi, Pemberkatan"
                                                            value={data?.infoAcara.resepsi.titleResepsi || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            Resepsi: {
                                                                                ...prevState?.infoAcara.resepsi,
                                                                                titleResepsi: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="placeEvent2" className="form-label">Place Event 2</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="placeEvent2"
                                                            name="place"
                                                            placeholder="place Event 1: e.g. Hotel..., Taman..."
                                                            value={data?.infoAcara.resepsi.lokasiResepsi || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            resepsi: {
                                                                                ...prevState?.infoAcara.resepsi,
                                                                                lokasiResepsi: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="locationEvent2" className="form-label">Link Google Maps Event 2</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="locationEvent2"
                                                            name="location"
                                                            placeholder={"https://maps.app.goo.gl/LeMeridien"}
                                                            value={data?.infoAcara.resepsi.mapResepsi || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            resepsi: {
                                                                                ...prevState?.infoAcara.resepsi,
                                                                                mapResepsi: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="imageEvent2" className="form-label">Image Event 2</label>
                                                        <div>
                                                            <img
                                                                id="imageEvent2Preview"
                                                                src={`data:image/jpeg;base64,${data?.infoAcara.resepsi.imageResepsi}`}
                                                                alt={'imageEvent2'}
                                                                style={{ maxWidth: '50px', margin: '5px' }}
                                                            />
                                                            <input 
                                                                type="file"
                                                                className="form-control"
                                                                id="imageEvent2"
                                                                name="imageEvent2"
                                                                onChange={(val) => {
                                                                    const fileImageEvent1 = val?.target?.files?.[0]
                                                                    if (fileImageEvent1) {
                                                                        const reader = new FileReader();
                                                                        reader.readAsDataURL(fileImageEvent1);
                                                                        reader.onloadend = () => {
                                                                            const imageEvent1DataUrl = reader.result as string;
                                                                            const base64Event1Data = imageEvent1DataUrl.replace(/^data:image\/(jpg|jpeg|png|gif);base64,/, '');
                                                                            setData((prevState) => {
                                                                            return {
                                                                                ...prevState,
                                                                                infoAcara: {
                                                                                    ...prevState?.infoAcara,
                                                                                    resepsi: {
                                                                                        ...prevState?.infoAcara.resepsi,
                                                                                        imageResepsi: base64Event1Data
                                                                                    }
                                                                                }
                                                                            } as ResultModelGetProjectDetailResponseInterface
                                                                            });  
                                                                        };
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="mb-3 col-md-6">
                                                            <label htmlFor="eventDate2" className="form-label">Event Date 2</label>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                id="eventDate2"
                                                                name="eventDate2"
                                                                placeholder="Event Date 2"
                                                                value={data?.infoAcara.resepsi.dateResepsi 
                                                                    ? new Date(data.infoAcara.resepsi.dateResepsi).toISOString().split('T')[0] 
                                                                    : ''
                                                                }
                                                                onChange={(val) => {
                                                                    const newDate = new Date(val.target.value);
                                                                    const timePart = data?.infoAcara.resepsi.dateResepsi
                                                                        ? new Date(data.infoAcara.resepsi.dateResepsi).toISOString().split('T')[1]
                                                                        : '00:00:00';
                                                                    setData(prevState => ({
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            resepsi: {
                                                                                ...prevState?.infoAcara.resepsi,
                                                                                dateResepsi: new Date(`${newDate.toISOString().split('T')[0]}T${timePart}`)
                                                                            }
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface));
                                                                }}
                                                            /> 
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <label htmlFor="eventTime2" className="form-label">Event Time 2</label>
                                                            <input
                                                                type="time"
                                                                className="form-control"
                                                                id="eventTime2"
                                                                name="eventTime2"
                                                                placeholder="Event Time 2"
                                                                value={data?.infoAcara.resepsi.dateResepsi 
                                                                    ? new Date(data.infoAcara.resepsi.dateResepsi).toISOString().split('T')[1].slice(0, 5) 
                                                                    : ''
                                                                }
                                                                onChange={(val) => {
                                                                    const newTime = val.target.value;
                                                                    const datePart = data?.infoAcara.resepsi.dateResepsi
                                                                        ? new Date(data.infoAcara.resepsi.dateResepsi).toISOString().split('T')[0]
                                                                        : new Date().toISOString().split('T')[0];
                                                                    setData(prevState => ({
                                                                        ...prevState,
                                                                        infoAcara: {
                                                                            ...prevState?.infoAcara,
                                                                            resepsi: {
                                                                                ...prevState?.infoAcara.resepsi,
                                                                                dateResepsi: new Date(`${datePart}T${newTime}:00`)
                                                                            }
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface));
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <button className="btn btn-warning">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="mb-3 form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="showBraidInfoSwitch"
                                            name="showBraidInfo"
                                            checked={data?.braidInfo.isShow || false}
                                            onChange={(val) => {
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        braidInfo: {
                                                            ...prevState?.braidInfo,
                                                            isShow: val.target.checked
                                                        }
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Hero</label>
                                    </div> */}
                                    {/* <div className="mb-3">
                                        <button className="btn btn-warning">Apply</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                    Gift
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    {data?.gift.gifts.map((gift, index) => (
                                        <div key={index} className="accordion" id="accordionPanelsStayOpenExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#panelsStayOpen-collapseSix-${index + 1}`}
                                                    aria-expanded="true"
                                                    aria-controls={`panelsStayOpen-collapseSix-${index + 1}`}
                                                >
                                                    Gift {index + 1}
                                                </button>
                                                </h2>
                                                <div id={`panelsStayOpen-collapseSix-${index + 1}`} className="accordion-collapse collapse show">
                                                    <div className="accordion-body">
                                                        <div className="mb-3">
                                                        <label htmlFor={`bank${index + 1}`} className="form-label">
                                                            Bank
                                                        </label> 
                                                            <select 
                                                                value={gift.name}
                                                                id={`bank${index + 1}`}
                                                                className="form-select" 
                                                                aria-label="Default select example"
                                                                onChange={(val) => {
                                                                    setData(prevState => {
                                                                        return {
                                                                            ...prevState,
                                                                            gift: {
                                                                              ...prevState?.gift,
                                                                              gifts: prevState?.gift.gifts.map((gift, i) => {
                                                                                if (i === index) {
                                                                                  return { ...gift, bank: val.target.value };
                                                                                }
                                                                                return gift;
                                                                              }),
                                                                            },
                                                                          } as ResultModelGetProjectDetailResponseInterface
                                                                    });
                                                                }}
                                                            >
                                                                <option selected>--- Select Bank ---</option>
                                                                <option value="BCA">Bank BCA</option>
                                                                <option value="Mandiri">Bank Mandiri</option>
                                                                <option value="BNI">Bank BNI</option>
                                                                <option value="BRI">Bank BRI</option>
                                                                <option value="BSI">Bank BSI</option>
                                                                <option value="UOB">Bank UOB</option>
                                                                <option value="BTPN">Bank BTPN</option>
                                                                <option value="CIMB">Bank CIMB</option>
                                                                <option value="OCBC">Bank OCBC</option>
                                                                <option value="BJB">Bank BJB</option>
                                                                <option value="MEGA">Bank MEGA</option>
                                                                <option value="BTN">Bank BTN</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3">
                                                        <label
                                                            htmlFor={`bankAccountNumber${index + 1}`}
                                                            className="form-label"
                                                        >Bank Account Number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id={`bankAccountNumber${index + 1}`}
                                                                name={`bankAccountNumber${index + 1}`}
                                                                placeholder="0123456789"
                                                                value={gift.noRek}
                                                                onChange={(val) => {
                                                                    console.log(index);
                                                                    setData(prevState => {
                                                                        return {
                                                                            ...prevState,
                                                                            gift: {
                                                                              ...prevState?.gift,
                                                                              gifts: prevState?.gift.gifts.map((gift, i) => {
                                                                                if (i === index) {
                                                                                  return { ...gift, accountNumber: val.target.value };
                                                                                }
                                                                                return gift;
                                                                              }),
                                                                            },
                                                                        } as ResultModelGetProjectDetailResponseInterface
                                                                    });
                                                                }}
                                                            /> 
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    ))}
                                    <button className="btn btn-primary mt-3" onClick={(val) => {
                                        setData(prevState => {
                                            
                                             
                                          return {
                                            ...prevState,
                                            gift: {
                                              ...prevState?.gift,
                                              gifts: [
                                                    // ...prevState?.gift?.gifts, 
                                                    { name: '', noRek: '' }
                                                ],
                                            },
                                          } as ResultModelGetProjectDetailResponseInterface;
                                        });
                                        setGiftCount(giftCount + 1);
                                    }}
                                    >
                                        Add Gift 
                                    </button>
                                    <div className="mb-3 mt-3 form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="showgiftSwitch"
                                            name="showgift"
                                            checked={data?.gift.isShow || false}
                                            onChange={(val) => {
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        gift: {
                                                            ...prevState?.gift,
                                                            isShow: val.target.checked
                                                        }
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Gift</label>
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
                                                        <label htmlFor="maleFatherName" className="form-label">Name of the Groom's Father</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="maleFatherName"
                                                            name="maleFatherName"
                                                            placeholder="Pak John Doe"
                                                            value={data?.braidInfo.male.dad || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        braidInfo: {
                                                                            ...prevState?.braidInfo,
                                                                            male: {
                                                                                ...prevState?.braidInfo.male,
                                                                                dad: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="maleMotherName" className="form-label">Name of the Groom's Mother</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="maleMotherName"
                                                            name="maleMotherName"
                                                            placeholder="Mrs. Barbie"
                                                            value={data?.braidInfo.male.mom || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        braidInfo: {
                                                                            ...prevState?.braidInfo,
                                                                            male: {
                                                                                ...prevState?.braidInfo.male,
                                                                                mom: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="maleName" className="form-label">Groom's Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="maleName"
                                                            name="maleName"
                                                            placeholder="Mr. John Doe"
                                                            value={data?.braidInfo.male.name || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        braidInfo: {
                                                                            ...prevState?.braidInfo,
                                                                            male: {
                                                                                ...prevState?.braidInfo.male,
                                                                                name: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="maleName" className="form-label">Groom's Image</label>
                                                        <div>
                                                            <img
                                                                id="imageMalePreview"
                                                                src={`data:image/jpeg;base64,${data?.braidInfo.male.image}`}
                                                                alt={'imageMale'}
                                                                style={{ maxWidth: '50px', margin: '5px' }}
                                                            />
                                                            <input 
                                                                type="file"
                                                                className="form-control"
                                                                id="imageMale"
                                                                name="imageMale"
                                                                onChange={(val) => {
                                                                    const fileImageMale = val?.target?.files?.[0]
                                                                    if (fileImageMale) {
                                                                        const reader = new FileReader();
                                                                        reader.readAsDataURL(fileImageMale);
                                                                        reader.onloadend = () => {
                                                                            const imageMaleDataUrl = reader.result as string;
                                                                            const base64MaleData = imageMaleDataUrl.replace(/^data:image\/(jpg|jpeg|png|gif);base64,/, '');
                                                                            setData((prevState) => {
                                                                            return {
                                                                                ...prevState,
                                                                                braidInfo: {
                                                                                    ...prevState?.braidInfo,
                                                                                    resepsi: {
                                                                                        ...prevState?.braidInfo.male,
                                                                                        image: base64MaleData
                                                                                    }
                                                                                }
                                                                            } as ResultModelGetProjectDetailResponseInterface
                                                                            });  
                                                                        };
                                                                    }
                                                                }}
                                                            />
                                                        </div>
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
                                                        <label htmlFor="femaleFatherName" className="form-label">Name of the Bride's Father</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="femaleFatherName"
                                                            name="femaleFatherName"
                                                            placeholder="Pak John Doe"
                                                            value={data?.braidInfo.female.dad || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        braidInfo: {
                                                                            ...prevState?.braidInfo,
                                                                            female: {
                                                                                ...prevState?.braidInfo.female,
                                                                                dad: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="femaleMotherName" className="form-label">Name of the Bride's Mother</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="femaleMotherName"
                                                            name="femaleMotherName"
                                                            placeholder="Mrs. Barbie"
                                                            value={data?.braidInfo.female.mom || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        braidInfo: {
                                                                            ...prevState?.braidInfo,
                                                                            female: {
                                                                                ...prevState?.braidInfo.female,
                                                                                mom: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="femaleName" className="form-label">Bride's Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="femaleName"
                                                            name="femaleName"
                                                            placeholder="Mr. John Doe"
                                                            value={data?.braidInfo.female.name || ''}
                                                            onChange={(val) => {  
                                                                setData(prevState => {
                                                                    return { 
                                                                        ...prevState,
                                                                        braidInfo: {
                                                                            ...prevState?.braidInfo,
                                                                            female: {
                                                                                ...prevState?.braidInfo.female,
                                                                                name: val.target.value
                                                                            } 
                                                                        }
                                                                    } as ResultModelGetProjectDetailResponseInterface
                                                                })
                                                            }}
                                                        /> 
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="femaleName" className="form-label">Bride's Image</label>
                                                        <div>
                                                            <img
                                                                id="imagefemalePreview"
                                                                src={`data:image/jpeg;base64,${data?.braidInfo.female.image}`}
                                                                alt={'imagefemale'}
                                                                style={{ maxWidth: '50px', margin: '5px' }}
                                                            />
                                                            <input 
                                                                type="file"
                                                                className="form-control"
                                                                id="imagefemale"
                                                                name="imagefemale"
                                                                onChange={(val) => {
                                                                    const fileImagefemale = val?.target?.files?.[0]
                                                                    if (fileImagefemale) {
                                                                        const reader = new FileReader();
                                                                        reader.readAsDataURL(fileImagefemale);
                                                                        reader.onloadend = () => {
                                                                            const imagefemaleDataUrl = reader.result as string;
                                                                            const base64femaleData = imagefemaleDataUrl.replace(/^data:image\/(jpg|jpeg|png|gif);base64,/, '');
                                                                            setData((prevState) => {
                                                                            return {
                                                                                ...prevState,
                                                                                braidInfo: {
                                                                                    ...prevState?.braidInfo,
                                                                                    resepsi: {
                                                                                        ...prevState?.braidInfo.female,
                                                                                        image: base64femaleData
                                                                                    }
                                                                                }
                                                                            } as ResultModelGetProjectDetailResponseInterface
                                                                            });  
                                                                        };
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 mt-3 form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="showBraidInfoSwitch"
                                            name="showBraidInfo"
                                            checked={data?.braidInfo.isShow || false}
                                            onChange={(val) => {
                                                setData(prevState => {
                                                    return { 
                                                        ...prevState,
                                                        braidInfo: {
                                                            ...prevState?.braidInfo,
                                                            isShow: val.target.checked
                                                        }
                                                    } as ResultModelGetProjectDetailResponseInterface
                                                })
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Hero</label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <button className="btn btn-warning mt-3">Apply</button>
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

 