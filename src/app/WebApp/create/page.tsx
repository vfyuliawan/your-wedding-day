"use client";
import { useRouter } from 'next/navigation'; 
import { useEffect, useState, FormEvent } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';import CekUserLoginService from '../Dashboard/Domain/Service/CekUserLoginService/CekUserLoginService';
import ProjectServices from "../Dashboard/Domain/Service/ProjectService/ProjectService";
import ReactLoading from 'react-loading';
import { ResultModelGetProjectDetailResponseInterface } from '../Dashboard/Domain/Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse';
import { GiftElementModelProjectRequestInterface, ModelProjectRequestInterface, ModelRequestCreateProjectPatch, StoryElementModelProjectRequestInterface, ThemeModelProjectRequestInterface } from '../Dashboard/Domain/Models/ModelRequest/ProjectRequest/ModelProjectRequestInterface';
import Swal from 'sweetalert2'; 
import ToggleSwitch from '@/app/Components/ToggleSwitch';
import { ModelLoginRequestInterface } from '../Dashboard/Domain/Models/ModelRequest/LoginRequest/ModelLoginRequestInterface';

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
  const [formDataTheme, setformDataTheme] = useState<ThemeModelProjectRequestInterface>({
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
  });
  const [error, setError] = useState<string | null>(null); 
  const [token, setToken] = useState<string | null>(null); 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoadingMain, setisLoadingMain] = useState(false);
  const [loading, setloading] = useState(false); 
  const [activeId, setActiveId] = useState<string | null>('1');
  const [isLoginLogout, setisLoginLogout] = useState(false);
  const [data, setData] = useState<ResultModelGetProjectDetailResponseInterface | undefined>(undefined);
  const [formDataLogin, setFormDataLogin] = useState<ModelLoginRequestInterface>({username: '',password: '',});
  const router = useRouter(); 

  useEffect(() => {
    setisLoadingMain(true);
    const storedToken = localStorage.getItem("token"); 
    if (storedToken) {
      setToken(storedToken); // Set token state if found in localStorage
      checkUserLogin(); 
    } 
    setisLoadingMain(false);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        
      }else{
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

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    
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
      <div className="tw-min-h-screen tw-bg-gradient-to-tr tw-from-pink-200 tw-to-sky-200">
        {header()}
        <div className='tw-pt-20 tw-pb-4 tw-px-4 tw-min-h-screen '>
          <div className="tw-bg-white tw-p-4 tw-rounded-xl tw-shadow-2xl">
            <h2 className="tw-text-2xl tw-mb-2 tw-font-semibold tw-text-gray-900 tw-text-center">Create</h2>
            <form onSubmit={handleSubmit} className="tw-space-y-3">
              {error && <p className="tw-text-red-500 tw-text-center">{error}</p>} {/* Display error message if there is any */}

              <div className=" tw-overflow-y-auto  tw-p-2"
                // style={{ height: '66.5vh' }}
                >
                <AccordionItem title={'Theme'} content={<ThemeView/>} isExpanded={activeId === '1'} checkedSwitch={null}  onChangeSwitch={() => {}} onClick={() => handleAccordionClick('1')}/>
                {/* <AccordionItem title={'Cover'} content={<CoverDepan />} isExpanded={activeId === '2'} onClick={() => handleAccordionClick('2')}/>
                <AccordionItem title={'Home'} content={<HomeView />} isExpanded={activeId === '3'} onClick={() => handleAccordionClick('3')}/>
                <AccordionItem title={'Hero'} content={<HeroView />} isExpanded={activeId === '4'} onClick={() => handleAccordionClick('4')}/>
                <AccordionItem title={'Event'} content={<EventInfo />} isExpanded={activeId === '5'} onClick={() => handleAccordionClick('5')}/> */}
                <AccordionItem title={'Gift'} content={<GiftsView />} isExpanded={activeId === '6'} checkedSwitch={formData.gift.isShow} 
                  onChangeSwitch={(newState) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      gift: { ...prevState.gift, isShow: newState },
                    }));
                  }}
                  onClick={() => handleAccordionClick('6')}
                />
                {/* <AccordionItem title={'Story'} content={<StoryView />} isExpanded={activeId === '7'} onClick={() => handleAccordionClick('7')}/>
                <AccordionItem title={'Couple'} content={<CouplesView />} isExpanded={activeId === '8'} onClick={() => handleAccordionClick('8')}/>
                <AccordionItem title={'Galery'} content={<GaleryView />} isExpanded={activeId === '9'} onClick={() => handleAccordionClick('9')}/> */}
              </div>

              <div className="tw-flex tw-items-center tw-justify-center tw-mt-3">
                {isLoginLogout ? 
                  <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-center"  >
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
                    className="disabled:tw-opacity-25 tw-mt-3 tw-w-1/4 tw-bg-indigo-500 tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-shadow-sm hover:tw-bg-indigo-500 focus:tw-outline-2 focus:tw-outline-indigo-600"
                  >
                    Create
                  </button>
                } 
              </div>
            </form>
          </div>
        </div>
        {footer()}
      </div>

  );

  function ThemeView() {
    const handleThemeChange = (field: keyof ThemeModelProjectRequestInterface, value: string) => {
      setFormData((prevState) => {
        console.log('theme', prevState.theme);
        return {
          ...prevState,
          theme: { ...prevState.theme, [field]: value },
          
        };
        
      });
    };
    const [isSlugFromTitle, setisSlugFromTitle] = useState('');
    const theme = [
      { id:1, value: "Theme1", label: "Theme 1" },
      { id:2, value: "Theme2", label: "Theme 2" },
      { id:3, value: "Theme3", label: "Theme 3" },
      { id:4, value: "Theme4", label: "Theme 4" },
      { id:5, value: "Theme5", label: "Theme 5" }, 
    ];
    const musicTheme = [
      { id:1, value: "Thousand-Years", label: "Thousand Years" },
      { id:2, value: "Pamungkas-To-The-Bone", label: "Pamungkas To The Bone" },
      { id:3, value: "Payung-Teduh-Akad", label: "Payung Teduh Akad" }, 
    ];
    return (  
          <div className="tw-bg-white  tw-rounded-xl "> 
            <div className="tw-p-3 tw-flex tw-items-center tw-justify-center ">
              <div className="tw-mx-3 tw-w-full"> 
                <input
                type="text"
                id="username"
                name="username"
                value={formDataLogin.username}
                onChange={handleChange2}
                required
                placeholder="Enter your username"
                className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
              />
              </div>
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor="titleHome" className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Project Title</label>
                <input
                  type="text"
                  className="form-control tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  id="titleTheme"
                  name="title"
                  placeholder="John-Rebecca"
                  value={formData.theme.slug}                              
                  onChange={(val) => {
                    const title = val.target.value;
                    const timestamp = new Date().getTime();
                    const random8Digit = Math.floor(10000000 + Math.random() * 90000000);
                    const slug = `${title.toLowerCase().replace(/\s+/g, '-')}-${random8Digit}`;
                    setisSlugFromTitle(slug);
                    setFormData((prevState) => ({
                      ...prevState,
                      slug,
                    }));
                  }}
                />
              </div>
              <div className="tw-mx-3 tw-w-full tw-hidden">
                <label htmlFor="slugTheme" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Slug</label>
                <input
                  type="text"
                  className="form-control tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  disabled
                  id="alamatTheme"
                  name="slug"
                  placeholder="slug"
                  value={formData.theme.slug}  
                  onChange={(e) => handleThemeChange('slug', e.target.value)}
                />
                <div style={{display:'flex', flexDirection:'row'}}>
                <i style={{color:'red'}} className="bi bi-info-circle-fill"></i>
                <p style={{color:"red", fontSize:12, marginTop:4, marginLeft:8}}>Tidak dapat merubah slug</p>
    
                </div>
              </div>
            </div>
            <div className="tw-p-3 tw-flex tw-items-center tw-justify-center ">
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor="alamatTheme" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Alamat</label>
                <input
                  type="text"
                  className="form-control  tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  id="alamatTheme"
                  name="alamatTheme"
                  placeholder="Alamat"
                  value={formData.theme.alamat}   
                  onChange={(e) => handleThemeChange('alamat', e.target.value)}
                />
              </div>
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor="embededTheme" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Embeded</label>
                <input
                  type="text"
                  className="form-control  tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  id="embededTheme"
                  name="embededTheme"
                  placeholder="https://maps.google.com/maps"
                  value={formData.theme.embeded} 
                  onChange={(e) => handleThemeChange('embeded', e.target.value)}
                />
              </div>
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor="MusicTheme" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Music</label>
                <select
                  className="form-select tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  aria-label="Default select example"              
                  value={formData.theme.music}  
                  onChange={(e) => handleThemeChange('music', e.target.value)}
                >
                  <option>--- Select Music ---</option> 
                  {musicTheme.map((item) => (
                    <option key={item.id} value={item.value}>{item.label}</option>
                  ))}
                </select>
              </div> 
            </div> 
            <div className="tw-p-3 tw-flex tw-items-center tw-justify-center ">
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor="primaryColorTheme" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Primary Color</label>
                <input
                  type="text"
                  className="form-control  tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  id="primaryColor"
                  name="primaryColor"
                  placeholder="Primary Color"
                  value={formDataTheme.primaryColor} 
                  onChange={handleChange2}
                  // onChange={(e) => handleThemeChange('primaryColor', e.target.value)}
                />
              </div> 
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor="secondaryColorTheme" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Secondary Color</label>
                <input
                  type="text"
                  className="form-control  tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  id="secondaryColorTheme"
                  name="secondaryColorTheme"
                  placeholder="secondary Color"
                  value={formData.theme.secondaryColor}
                  onChange={(e) => handleThemeChange('secondaryColor', e.target.value)}
                />
              </div> 
            </div> 
          </div> 
    );
  }

  function CoverDepan() {  
    const [isImageCover, setisImageCover] = useState(false);
    const [imageData, setImageData] = useState('');
    return (
      <div className="tw-bg-white  tw-rounded-xl ">
        <div className="tw-p-3">
          <label htmlFor="titleCover" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Title Cover</label>
          <input
            type="text"
            className="form-control  tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
            id="titleCover"
            name="title"
            placeholder="Title Cover"
            value={formData.infoAcara.akad.mapAkad}              
                onChange={handleChange}
          />
        </div>
        <div className="tw-p-3">
          <label htmlFor="imageCover" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Image Cover</label>
          <div>
          {isImageCover ? (
            <img
              id="imageCoverPreview"
              src={imageData} // Use the state variable to display the image
              alt={"imageCover"}
              style={{ maxWidth: "180px", margin: "5px", borderRadius: "5%" }}
            />
          ) : (
            <></>
          )}
            <input
                type="file"
                className="form-control  tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                id="imageCover"
                name="imageCover"
                onChange={(val) => {
                const fileImageCover = val?.target?.files?.[0];
                if (fileImageCover) {
                  const reader = new FileReader();
                  reader.readAsDataURL(fileImageCover);
                  reader.onloadend = () => {
                    const imageDataUrl = reader.result as string;
                    setImageData(imageDataUrl); // Store the image data in the state variable
                    const base64Data = imageDataUrl.replace(
                      /^data:image\/(jpg|jpeg|png|gif);base64,/,
                      ""
                    );             
                    handleChange
                    setisImageCover(true);
                  };
                }
              }}
            />
          </div>
        </div>
        <div className="tw-p-3">
          <label htmlFor="eventDate" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Event Date</label>
          <input
            type="date"
            className="form-control  tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
            id="eventDate"
            name="eventDate"
            placeholder="Event Date" 
            value={formData.infoAcara.akad.mapAkad}              
                onChange={handleChange}
          />
        </div>
        <div className="tw-p-3 form-check form-switch">
          <input
            className="form-check-input "
            type="checkbox"
            role="switch"
            id="showCoverDepanSwitch"
            name="showCover" 
            value={formData.infoAcara.akad.mapAkad}              
                onChange={handleChange}
          />
          <label className="form-check-label tw-text-sm tw-font-medium tw-text-gray-700" htmlFor="showCoverDepanSwitch">Show Cover</label>
        </div> 
      </div> 
    );
  }

  function HomeView() {
    const [isImageHomeView, setisImageHomeView] = useState('');
    return (
      <div className="tw-bg-white  tw-rounded-xl ">
        <div className="tw-p-3">
          <label htmlFor="titleHome" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Home Title</label>
          <input
            type="text"
            className="form-control"
            id="titleHome"
            name="title"
            placeholder="Title Home" 
            value={formData.infoAcara.akad.mapAkad}             
                onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleCover" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Home Quote</label>
          <input
            type="text"
            className="form-control"
            id="quoteHome"
            name="quote"
            placeholder="Quote Home" 
            value={formData.infoAcara.akad.mapAkad}             
                onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleHome" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Home Image</label>
          <div>
            {isImageHomeView ? 
            <img
              id="imageHomePreview"
              src={isImageHomeView}
              alt={"imageHome"}
              style={{ maxWidth: "180px", margin: "5px", borderRadius: "5%" }}
            />:<></>}
            <input
              type="file"
              className="form-control"
              id="imageHome"
              name="imageHome"
              onChange={(val) => {
                const fileImageHome = val?.target?.files?.[0];
                
                if (fileImageHome) {
                  const reader = new FileReader();
                  reader.readAsDataURL(fileImageHome);
                  reader.onloadend = () => {
                    const imageHomeDataUrl = reader.result as string;
                    
                setisImageHomeView(imageHomeDataUrl);
                    const base64HomeData = imageHomeDataUrl.replace(
                      /^data:image\/(jpg|jpeg|png|gif);base64,/,
                      ""
                    );
                    handleChange;
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
            value={formData.infoAcara.akad.mapAkad}             
                onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="showHomeDepanSwitch">
            Show Home</label>
        </div> 
      </div> 
    );
  }

  function HeroView() {
    const [isImageHeroView, setisImageHeroView] = useState('');
    return (
    
      <div className="accordion-body" style={{backgroundColor:'white'}}>
        <div className="mb-3">
          <label htmlFor="titleCover" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Hero Title
      </label>
          <input
            type="text"
            className="form-control"
            id="titleHero"
            name="title"
            placeholder="Title Hero" 
            
            value={formData.infoAcara.akad.mapAkad}             
                onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleHero" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Image Hero
      </label>
          <div>
            {isImageHeroView ? 
              <img
                id="imageHeroPreview"
                src={isImageHeroView}
                alt={"imageHero"}
                style={{ maxWidth: "180px", margin: "5px", borderRadius: "5%" }}
              /> 
            : <></>}
            <input
              type="file"
              className="form-control"
              id="imageHero"
              name="imageHero"
              onChange={(val) => {
                const fileImageHero = val?.target?.files?.[0];
                if (fileImageHero) {
                  const reader = new FileReader();
                  reader.readAsDataURL(fileImageHero);
                  reader.onloadend = () => {
                    const imageHeroDataUrl = reader.result as string;
                    const base64HeroData = imageHeroDataUrl.replace(
                      /^data:image\/(jpg|jpeg|png|gif);base64,/,
                      ""
                    );
                    handleChange;
                    setisImageHeroView(imageHeroDataUrl);
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
            id="showHeroSwitch"
            name="showHero" 
            
            value={formData.infoAcara.akad.mapAkad}             
                onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          >
            Show Hero
      </label>
        </div> 
      </div> 
    );
  }
  
  function EventInfo() {
    const [isImageEvent1View, setisImageEvent1View] = useState('');
    const [isImageEvent2View, setisImageEvent2View] = useState(''); 
    
    return (
      <div className="accordion-body" style={{backgroundColor:'white'}}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour-One"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseFour-One"
              >
                Title Event 1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour-One"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <div className="mb-3">
                  <label htmlFor="titleEvent2" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Title Event 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleEvent2"
                    name="title"
                    placeholder="Title Event 2: e.g. Akad, Resepsi, Pemberkatan"               
                    value={formData.infoAcara.akad.mapAkad}             
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="placeEvent2" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Place Event 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="placeEvent2"
                    name="place"
                    placeholder="place Event 1: e.g. Hotel..., Taman..."            
                    value={formData.infoAcara.akad.mapAkad}             
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="locationEvent1" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Link Google Maps Event 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="locationEvent1"
                    name="location"
                    placeholder={"https://maps.app.goo.gl/LeMeridien"}  
            value={formData.infoAcara.akad.mapAkad}             
            onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageEvent1" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Image Event 1
                  </label>
                  <div>
                    {isImageEvent1View ? 
                      <img
                        id="imageEvent1Preview"
                        src={isImageEvent1View}
                        alt={"imageEvent1"}
                        style={{
                          maxWidth: "180px",
                          margin: "5px",
                          borderRadius: "5%",
                        }}
                      />
                    : <></>}
                    <input
                      type="file"
                      className="form-control"
                      id="imageEvent1"
                      name="imageEvent1"
                      onChange={(val) => {
                        const fileImageEvent1 = val?.target?.files?.[0];
                        if (fileImageEvent1) {
                          const reader = new FileReader();
                          reader.readAsDataURL(fileImageEvent1);
                          reader.onloadend = () => {
                            const imageEvent1DataUrl =
                              reader.result as string;
                              
                            setisImageEvent1View(imageEvent1DataUrl);
                            const base64Event1Data =
                              imageEvent1DataUrl.replace(
                                /^data:image\/(jpg|jpeg|png|gif);base64,/,
                                ""
                              );
                            handleChange;
                          };
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="eventDate1" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Event Date 1</label>
                    <input
                      type="date"
                      className="form-control"
                      id="eventDate1"
                      name="eventDate1"
                      placeholder="Event Date 1" 
                      onChange={(val) => {
                        const newDate = new Date(val.target.value);
                        const timePart = formData.infoAcara.resepsi.dateResepsi
                          ? new Date(
                              formData.infoAcara.resepsi.dateResepsi
                            )
                              .toISOString()
                              .split("T")[1]
                          : "00:00:00";
                        handleChange;
                      }}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="eventTime1" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Event Time 1</label>
                    <input
                      type="time"
                      className="form-control"
                      id="eventTime1"
                      name="eventTime1"
                      placeholder="Event Time 1" 
                      onChange={(val) => {
                        const newTime = val.target.value;
                        const datePart = formData.infoAcara.resepsi.dateResepsi
                          ? new Date(
                              formData.infoAcara.resepsi.dateResepsi
                            )
                              .toISOString()
                              .split("T")[0]
                          : new Date().toISOString().split("T")[0];
                        handleChange;
                      }}
                    />
                  </div>
                </div>             
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour-Two"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseFour-Two"
              >
                Title Event 2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour-Two"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <div className="mb-3">
                  <label htmlFor="titleEvent2" className="form-label">
                    Title Event 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleEvent2"
                    name="title"
                    placeholder="Title Event 2: e.g. Akad, Resepsi, Pemberkatan" 
                    value={formData.infoAcara.resepsi.titleResepsi}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="placeEvent2" className="form-label">
                    Place Event 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="placeEvent2"
                    name="place"
                    placeholder="place Event 1: e.g. Hotel..., Taman..." 
                    value={formData.infoAcara.resepsi.lokasiResepsi}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="locationEvent2" className="form-label">
                    Link Google Maps Event 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="locationEvent2"
                    name="location"
                    placeholder={"https://maps.app.goo.gl/LeMeridien"} 
                    value={formData.infoAcara.resepsi.mapResepsi}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageEvent2" className="form-label">
                    Image Event 2
                  </label>
                  <div>
                    {isImageEvent2View ? 
                      <img
                        id="imageEvent2Preview"
                        src={isImageEvent2View}
                        alt={"imageEvent2"}
                        style={{
                          maxWidth: "180px",
                          margin: "5px",
                          borderRadius: "5%",
                        }}
                      />
                    : <></>}
                    <input
                      type="file"
                      className="form-control"
                      id="imageEvent2"
                      name="imageEvent2"
                      onChange={(val) => {
                        const fileImageEvent1 = val?.target?.files?.[0];
                        if (fileImageEvent1) {
                          const reader = new FileReader();
                          reader.readAsDataURL(fileImageEvent1);
                          reader.onloadend = () => {
                            const imageEvent2DataUrl =
                              reader.result as string;
                            const base64Event1Data =
                              imageEvent2DataUrl.replace(
                                /^data:image\/(jpg|jpeg|png|gif);base64,/,
                                ""
                              );
                            handleChange;
                            setisImageEvent2View(imageEvent2DataUrl);
                          };
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="eventDate2" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Event Date 2</label>
                    <input
                      type="date"
                      className="form-control"
                      id="eventDate2"
                      name="eventDate2"
                      placeholder="Event Date 2" 
                      onChange={(val) => {
                        const newDate = new Date(val.target.value);
                        const timePart = formData.infoAcara.resepsi.dateResepsi
                          ? new Date(
                              formData.infoAcara.resepsi.dateResepsi
                            )
                              .toISOString()
                              .split("T")[1]
                          : "00:00:00";
                        handleChange;
                      }}
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="eventTime2" className="form-label tw-block tw-text-sm tw-font-medium tw-text-gray-700">Event Time 2</label>
                    <input
                      type="time"
                      className="form-control"
                      id="eventTime2"
                      name="eventTime2"
                      placeholder="Event Time 2" 
                      onChange={(val) => {
                        const newTime = val.target.value;
                        const datePart = formData.infoAcara.resepsi.dateResepsi
                          ? new Date(
                              formData.infoAcara.resepsi.dateResepsi
                            )
                              .toISOString()
                              .split("T")[0]
                          : new Date().toISOString().split("T")[0];
                        handleChange;
                      }}
                    />
                  </div>
                </div>             
              </div>
            </div>
          </div>
        </div> 
      </div> 
    );
  }
  
  function GiftsView() { 
    const handleGiftChange = (index: number, field: keyof GiftElementModelProjectRequestInterface, value: string) => {
      setFormData((prevState) => {
        const updatedGifts = [...prevState.gift.gifts];
        updatedGifts[index] = { ...updatedGifts[index], [field]: value };
        return {
          ...prevState,
          gift: { ...prevState.gift, gifts: updatedGifts },
        };
      });
    };
    const handleToggleChange = (state: boolean) => {
      console.log("Toggle state:", state); // Handle state change
    };
    // Add a new gift to the formData
    const addGift = () => {
      setFormData((prevState) => ({
        ...prevState,
        gift: {
          ...prevState.gift,
          gifts: [...prevState.gift.gifts, { image: "", name: "", noRek: "" }],
        },
      }));
    };

    const banks = [
      { value: "BCA", label: "Bank BCA" },
      { value: "MANDIRI", label: "Bank Mandiri" },
      { value: "BNI", label: "Bank BNI" },
      { value: "BRI", label: "Bank BRI" },
      { value: "BSI", label: "Bank BSI" },
      { value: "UOB", label: "Bank UOB" },
      { value: "BTPN", label: "Bank BTPN" },
      { value: "CIMB", label: "Bank CIMB" },
      { value: "OCBC", label: "Bank OCBC" },
      { value: "BJB", label: "Bank BJB" },
      { value: "MEGA", label: "Bank MEGA" },
      { value: "BTN", label: "Bank BTN" },
    ];
  
    return (
      <div className="tw-bg-white  tw-rounded-xl">
        {formData.gift.gifts.map((gift, index) => (
          <div key={index} className="tw-p-3">
            <h2 className="tw-mx-2 tw-text-bold tw-block tw-text-lg tw-font-medium tw-text-gray-700">Gift {index + 1}</h2>
            <div className="tw-p-3 tw-flex tw-items-center tw-justify-center ">
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor={`bank${index + 1}`} className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Bank</label>
                <select
                  id={`bank${index + 1}`}
                  className="form-select tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  aria-label="Default select example"
                  value={gift.image}
                  onChange={(e) => handleGiftChange(index, "image", e.target.value)}
                >
                  <option value="">--- Select Bank ---</option>
                  {banks.map((bank) => (
                    <option key={bank.value} value={bank.value}>
                      {bank.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor={`bankAccountNumber${index + 1}`} className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                  Bank Account Number
                </label>
                <input
                  type="number"
                  className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  id={`bankAccountNumber${index + 1}`}
                  name={`bankAccountNumber${index + 1}`}
                  placeholder="68123456789"
                  value={gift.noRek}
                onChange={(e) => handleGiftChange(index, "noRek", e.target.value)}
                />
              </div>
              <div className="tw-mx-3 tw-w-full">
                <label htmlFor={`bankAccountName${index + 1}`} className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
                  Bank Account Name
                </label>
                <input
                  type="text"
                  className="tw-mt-1 tw-block tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-text-gray-900 focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-outline-none"
                  id={`bankAccountName${index + 1}`}
                  name={`bankAccountName${index + 1}`}
                  placeholder="John Doe"
                  value={gift.name}
                onChange={(e) => handleGiftChange(index, "name", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))} 
        <div className="tw-p-3 tw-flex tw-items-center tw-justify-center  ">   
          <button className="tw-mx-3 tw-w-1/4 tw-bg-indigo-500 tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-shadow-sm hover:tw-bg-indigo-500 focus:tw-outline-2 focus:tw-outline-indigo-600"  onClick={addGift}>
            Add Gift
          </button>
        </div>  

      </div>
    );
  }
   
  
  function AccordionItem(params: { 
    title: string; 
    content: React.ReactNode; 
    isExpanded?: boolean; 
    checkedSwitch?: boolean | null; 
    onChangeSwitch?: (state: boolean) => void | null; // Make onChangeSwitch optional
    onClick: () => void;
  }) { 
    
    return (
      <div className={`tw-bg-gradient-to-r tw-from-indigo-100 tw-to-sky-200 tw-shadow-lg tw-rounded-3xl tw-mb-1 tw-overflow-hidden tw-transition-all tw-duration-300 ${params.isExpanded ? "" : "tw-max-h-14"}`}>
        <div className="tw-flex tw-justify-between tw-items-start tw-p-4 tw-cursor-pointer">
          <i className={`bi bi-caret-right-fill tw-text-1xl tw-transition-all tw-duration-300 ${params.isExpanded ? "tw-rotate-45" : ""}`} onClick={params.onClick} />
          <div className="tw-text-1xl tw-font-bold" onClick={params.onClick}>{params.title}</div>
          {params.checkedSwitch ? <ToggleSwitch initialState={params.checkedSwitch} onChange={params.onChangeSwitch} /> : <i className="bi bi-grid-3x2-gap-fill tw-rotate-90" />}
        </div>
        <div className={`tw-px-5 tw-pb-6 tw-overflow-hidden tw-transition-all tw-duration-300 ${params.isExpanded ? "tw-opacity-100" : "tw-opacity-0"}`}>
          <div className="tw-text-gray-700 tw-text-base">{params.content}</div>
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

  function footer() {
    return (
      <div className="tw-text-white tw-text-center tw-py-3 tw-bg-indigo-500">
      <small className="tw-block">© 2024 Nvite Wedding. All Rights Reserved.</small>
      <small className="tw-block">Design by <a className='tw-text-white tw-no-underline hover:tw-underline' href="https://honeydew-marten-892884.hostingersite.com/">NexDev</a>. </small>
    </div>
    );
  }
};

export default createProjectPage;
