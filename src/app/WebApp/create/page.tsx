"use client";
import { useRouter } from 'next/navigation'; 
import { useEffect, useState, FormEvent } from 'react';
import { ModelLoginRequestInterface } from '../Dashboard/Domain/Models/ModelRequest/LoginRequest/ModelLoginRequestInterface';
import LoginService from '../Dashboard/Domain/Service/LoginService/LoginService';
import { ResultModelLoginResponseInterface } from '../Dashboard/Domain/Models/ModelResponse/LoginResponse/ModelLoginResponseInterface';
import CekUserLoginService from '../Dashboard/Domain/Service/CekUserLoginService/CekUserLoginService';
import ProjectServices from "../Dashboard/Domain/Service/ProjectService/ProjectService";
import ReactLoading from 'react-loading';
import { ResultModelGetProjectDetailResponseInterface } from '../Dashboard/Domain/Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse';
import { ModelProjectRequestInterface, ModelRequestCreateProjectPatch } from '../Dashboard/Domain/Models/ModelRequest/ProjectRequest/ModelProjectRequestInterface';
import Swal from 'sweetalert2'; 

const createProjectPage = () => {
    
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [formData, setFormData] = useState<ModelProjectRequestInterface>({
    infoAcara: {
      akad: {
        titleAkad: "",
        mapAkad: "",
        imgAkad: "",
        lokasiAkad: "",
        dateAkad: null,
      },
      resepsi: {
        titleResepsi: "",
        mapResepsi: "",
        imgResepsi: "",
        lokasiResepsi: "",
        dateResepsi: null,
      },
    },
    healtProtocol: true,
    livelink: "",
    theme: {
      primaryColor: "",
      music: "",
      theme: "",
      alamat: "",
      slug: "",
      secondaryColor: "",
      embeded: "",
      textColor1: "",
      textColor2: "",
      thirdColor: "",
    },
    gift: {
      gifts: [
        {
          image: "",
          name: "",
          noRek: "",
        },
      ],
      isShow: true,
    },
    countdown: null,
    story: {
      stories: [
        {
          title: "",
          text: "",
          image: "",
          date: null,
        },
      ],
      isShow: true,
    },
    videoLink: "",
    igFilter: "",
    cover: {
      img: "",
      isShow: true,
    },
    title: "",
    isShowLinkFilter: true,
    galery: {
      galeries: [""],
      isShow: true,
    },
    braidInfo: {
      male: {
        name: "",
        mom: "",
        dad: "",
        photo: "",
      },
      female: {
        name: "",
        mom: "",
        dad: "",
        photo: "",
      },
      isShow: true,
    },
    hero: {
      img: "",
      isShow: true,
    },
    home: {
      quotes: "",
      img: "",
      isShow: true,
    },
  });

  const [error, setError] = useState<string | null>(null); 
  const [token, setToken] = useState<string | null>(null); 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoadingMain, setisLoadingMain] = useState(false);
  const [loading, setloading] = useState(false);
  const [activeId, setActiveId] = useState<string | null>('1');
  const [isLoginLogout, setisLoginLogout] = useState(false);
  const [data, setData] = useState<ResultModelGetProjectDetailResponseInterface | undefined>(undefined);
  
  const router = useRouter(); 

  useEffect(() => {
    setisLoadingMain(true);
    const storedToken = localStorage.getItem("token"); 
    if (storedToken) {
      setToken(storedToken); // Set token state if found in localStorage
      checkUserLogin(); 
    } 
    setisLoadingMain(false);
  }, []);

  const handleAccordionClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const checkUserLogin = async () => {
    
    setisLoginLogout(true);
    try {
      const serviceCheckUserLogin = await CekUserLoginService.cekUserLoginService();
      if (serviceCheckUserLogin?.result == true) {
        setIsUserLoggedIn(true);       
        router.push("/");
      }
    } catch (error) {
      console.error("check User Login error:", error);
      setError("An error occurred. Please try again later.");
      
    } finally {
      setisLoginLogout(false);
    } 
  };

  const submitApply = async ( ) => {
      setloading(true);
      const requestBody: ModelRequestCreateProjectPatch = {
        body: formData
      } as ModelRequestCreateProjectPatch; 

      const resultCreateRequestService = await ProjectServices.createProjectService(requestBody);
      try {
        if (resultCreateRequestService && resultCreateRequestService.result) {
          Swal.fire({title: "Good job!", text: "New Project Created Successfully", icon: "success", });
          setloading(false);
          router.push("/"); // Redirect to dashboard after successful login
        } else {
          setloading(false);
          Swal.fire({title: "Failed!", text: "Failed Create New Project", icon: "info", });
        }
      } catch (error) {
        console.error("Login error:", error);
        Swal.fire({title: "Failed!", text: "Failed Create New Project", icon: "info", });
        setError("An error occurred. Please try again later.");
      }
    };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setisLoadingMain(true);
    e.preventDefault();
    submitApply();
    setisLoadingMain(false);
  };

  return (
    isLoadingMain ? 
      <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end"  >
        <ReactLoading type={"spinningBubbles"} color={"#116A7B"} height={30}/>
      </div>  
    : 
      <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gradient-to-tr tw-from-pink-200 tw-to-sky-200">
        {header()}
        <div className="tw-w-full sm:tw-max-w-md tw-bg-white tw-p-8  tw-m-20 tw-rounded-xl tw-shadow-2xl">
          <h2 className="tw-text-2xl tw-font-semibold tw-text-gray-900 tw-text-center">Login</h2>
          <form onSubmit={handleSubmit} className="tw-space-y-3">
            {error && <p className="tw-text-red-500 tw-text-center">{error}</p>} {/* Display error message if there is any */}

            <div className=" tw-overflow-y-auto  tw-p-2"
              // style={{ height: '66.5vh' }}
              >
              <AccordionItem title={'Theme'} content={<ThemeView/>} isExpanded={activeId === '1'} onClick={() => handleAccordionClick('1')}/>
              {/* <AccordionItem title={'Cover'} content={<CoverDepan data={data} setData={setData} />} isExpanded={activeId === '2'} onClick={() => handleAccordionClick('2')}/>
              <AccordionItem title={'Home'} content={<HomeView data={data} setData={setData} />} isExpanded={activeId === '3'} onClick={() => handleAccordionClick('3')}/>
              <AccordionItem title={'Hero'} content={<HeroView data={data} setData={setData} />} isExpanded={activeId === '4'} onClick={() => handleAccordionClick('4')}/>
              <AccordionItem title={'Event'} content={<EventInfo data={data} setData={setData} />} isExpanded={activeId === '5'} onClick={() => handleAccordionClick('5')}/>
              <AccordionItem title={'Gift'} content={<GiftsView data={data} setData={setData} />} isExpanded={activeId === '6'} onClick={() => handleAccordionClick('6')}/>
              <AccordionItem title={'Story'} content={<StoryView data={data} setData={setData} />} isExpanded={activeId === '7'} onClick={() => handleAccordionClick('7')}/>
              <AccordionItem title={'Couple'} content={<CouplesView data={data} setData={setData} />} isExpanded={activeId === '8'} onClick={() => handleAccordionClick('8')}/>
              <AccordionItem title={'Galery'} content={<GaleryView data={data} setData={setData} />} isExpanded={activeId === '9'} onClick={() => handleAccordionClick('9')}/> */}
            </div>

            <div className=" tw-items-center tw-mt-3">
              {isLoginLogout ? 
                <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end"  >
                  <ReactLoading
                    type={"spinningBubbles"}
                    color={"#116A7B"}
                    height={30} // Specify a fixed size
                    width={30} // Specify a fixed size
                  />
                </div>  
              : 
                <button
                  type="submit"
                  disabled={!formData.braidInfo || !formData.countdown}
                  className="disabled:tw-opacity-25 tw-mt-3 tw-w-full tw-bg-indigo-500 tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-shadow-sm hover:tw-bg-indigo-500 focus:tw-outline-2 focus:tw-outline-indigo-600"
                >
                  Login
                </button>
              }
              <div className="tw-flex tw-items-center tw-justify-center"> 
              <p className="tw-text-xs tw-font-bold tw-mt-1 tw-px-3 tw-mb-0">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => router.push("/daftar")}
                  className="tw-font-bold tw-text-indigo-500 btn"
                >
                  Sign Up
                </button>
              </p>
              </div>
            </div>
          </form>
        </div>
      </div>

  );

  function ThemeView() {
    const [isSlugFromTitle, setisSlugFromTitle] = useState('');
    return (  
          <div className="accordion-body" style={{backgroundColor:'white'}}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={`image/themelist/JavaStyle1.png`}
                style={{
                  width: "50%",
                  alignItems: "center",
                  height: "50%",
                  borderTopLeftRadius: "10%",
                  borderBottomRightRadius: "10%",
                }}
                alt=""
                srcSet=""
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor={`themeName`} className="form-label">
                Theme
              </label>
              <select
                value={formData.infoAcara.akad.mapAkad} 
                className="form-select"
                aria-label="Default select example"              
                onChange={handleChange}
              >
                <option>--- Select Theme ---</option> 
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="titleHome" className="form-label">
                Project Title
              </label>
              <input
                type="text"
                className="form-control"
                id="titleTheme"
                name="title"
                placeholder="John-Rebecca"
                value={formData.infoAcara.akad.mapAkad}                              
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="slugTheme" className="form-label">
                Slug
              </label>
              <input
                type="text"
                className="form-control"
                disabled
                id="alamatTheme"
                name="slug"
                placeholder="slug"
                value={formData.infoAcara.akad.mapAkad}              
                onChange={handleChange}
              />
              <div style={{display:'flex', flexDirection:'row'}}>
              <i style={{color:'red'}} className="bi bi-info-circle-fill"></i>
              <p style={{color:"red", fontSize:12, marginTop:4, marginLeft:8}}>Tidak dapat merubah slug</p>
  
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="titleHome" className="form-label">
                Alamat
              </label>
              <input
                type="text"
                className="form-control"
                id="alamatTheme"
                name="title"
                placeholder="Alamat"
                value={formData.infoAcara.akad.mapAkad}             
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="titleHome" className="form-label">
                Embeded Map
              </label>
              <textarea
                className="form-control"
                id="embeded"
                style={{
                  height: 200,
                }}
                name="embeded"
                placeholder="Embeded" 
                value={formData.infoAcara.akad.mapAkad}          
                onChange={handleChange}
              />
            </div>
          </div> 
    );
  }

  function AccordionItem(params: { 
      title: string; 
      content: React.ReactNode; 
      isExpanded?: boolean; // Use optional chaining
      onClick: () => void 
    }) { 
    return (
      <div className={`tw-bg-gradient-to-r tw-from-indigo-100 tw-to-sky-200 tw-shadow-lg tw-rounded-3xl tw-mb-1 tw-overflow-hidden tw-transition-all tw-duration-300 ${params.isExpanded ? "" : "tw-max-h-14"}`}>
        <div className="tw-flex tw-justify-between tw-items-start tw-p-4 tw-cursor-pointer tw-items-center" onClick={params.onClick}>
          <i className={`bi bi-caret-right-fill tw-text-1xl tw-transition-all tw-duration-300 ${params.isExpanded ? "tw-rotate-45" : ""}`} />
          <div className="tw-text-1xl tw-font-bold">{params.title}</div>
          <i className="bi bi-grid-3x2-gap-fill tw-rotate-90" />
        </div>
        <div className={`tw-px-5 tw-pb-6 tw-overflow-hidden tw-transition-all tw-duration-300 ${params.isExpanded ? "tw-opacity-100" : "tw-opacity-0"}`}>
          <p className="tw-text-gray-700 tw-text-base">{params.content}</p>
        </div>
      </div>
    );
  }

  function header() {
    return (
      <header className={`tw-fixed tw-inset-x-0 tw-top-0 tw-z-50 ${isScrolled ? 'tw-bg-gradient-to-tr tw-from-pink-100 tw-to-sky-200' : ''}`}>
        <nav className="tw-flex tw-items-center tw-justify-between tw-p-6 lg:tw-px-8" aria-label="Global">
          <div className="tw-flex lg:tw-flex-1">
            <a href="/" className="tw--m-1.5 tw-p-1.5">
              <span className="tw-text-indigo-500 font-mono tw-text-2xl tw-font-bold tw-border-indigo-500 hover:tw-text-amber-400 tw-rounded-md">Nvite-Me</span>
            </a>
          </div>
          <div className="tw-flex md:tw-hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2.5 tw-text-gray-700"
            >
              <span className="tw-sr-only">Open main menu</span>
              <svg className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="tw-hidden lg:tw-flex lg:tw-gap-x-12">
            {['Home','Product', 'About'].map(item => (
              <a key={item} href="/" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">{item}</a>
            ))}
          </div>

          <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end">
            {/* <a href="#" className="tw-rounded-full tw-mx-3 tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-indigo-500 tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Login <span aria-hidden="true">→</span></a>
            <a href="#" className="tw-rounded-full tw-bg-indigo-500 tw-border-2 tw-border-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-border-solid tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 hover:tw-text-indigo-500">Sign Up</a> */}
          </div>

          {isMobileMenuOpen && (
            <div className="tw-absolute tw-top-0 tw-inset-x-0 tw-p-2 tw-z-50 tw-bg-white tw-shadow-md">
              <div className="tw-flex tw-items-center tw-justify-between tw-p-4">
                <h5 className="tw-text-lg tw-font-bold tw-text-gray-900">Menu</h5>
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw -rounded-md tw-p-2.5 tw-text-gray-700"
                >
                  <span className="tw-sr-only">Close main menu</span>
                  <svg className="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="tw-space-y-2">
                {['Product', 'Features', 'Marketplace', 'Company'].map(item => (
                  <li key={item}>
                    <a href="#" className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 tw-hover:shadow-md tw-transition-shadow">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    );
  }
};

export default createProjectPage;
