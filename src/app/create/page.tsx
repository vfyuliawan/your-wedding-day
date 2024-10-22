"use client";
import { signIn } from "next-auth/react";
// import { useState } from "react";
import PinkEssence from "../LuxuryTheme/LuxuryTheme";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Service from "../services/Service";
import {
  CollectionReference,
  DocumentData,
  query,
  Query,
  where,
} from "firebase/firestore";
import LogoutService from "../Dashboard/Domain/Service/LogoutService/LogoutService";
import FooterDashboard from "../Dashboard/Components/Footer/Footer";
import Cryptr from "cryptr";
import { ModelGetProjectDetailRequestInterface } from "../Dashboard/Domain/Models/ModelRequest/GetProjectDetailRequest/GetProjectDetailRequest";
import {
  GaleryModelGetProjectDetailResponseInterface,
  GiftElementModelGetProjectDetailResponseInterface,
  ModelGetProjectDetailResponseInterface,
  ResultModelGetProjectDetailResponseInterface,
  StoryElementModelGetProjectDetailResponseInterface,
} from "../Dashboard/Domain/Models/ModelResponse/GetProjectDetailResponse/GetProjectDetailResponse";
import GetProjectDetailService from "../Dashboard/Domain/Service/GetProjectDetailService/GetProjectDetailService";
import CekUserLoginService from "../Dashboard/Domain/Service/CekUserLoginService/CekUserLoginService";
import Galery from "react-image-gallery";
// import MyprojectService from "../Dashboard/Domain/Service/MyprojectService/MyprojectService";
import {
  ModelRequestUpdateProjectInterface,
  ModelRequestUpdateProjectPatch,
} from "../Dashboard/Domain/Models/ModelRequest/MyprojectRequest/ModelRequestUpdateProjectInterface";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";
import Constant from "../Constant/Constant"; 

const CreatePage = () => {
  const [first, setFirst] = useState("Pink-Esssence"); 
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null | undefined>(null);
  const [data, setData] = useState<ResultModelGetProjectDetailResponseInterface | undefined>(undefined);
  const [giftForm, setgiftForm] = useState<GiftElementModelGetProjectDetailResponseInterface>({
    image: '',
    name: '',
    noRek: ''
  });
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    checkUserLogin();
    if (storedToken) { 
    } else {
      router.replace("/");
    }
  }, []);
 

  const checkUserLogin = async () => {
    try {
      const serviceCheckUserLogin =
        await CekUserLoginService.cekUserLoginService();
      if (serviceCheckUserLogin?.result) {
        // check if result is truthy
        setIsUserLoggedIn(false); // or leave it unchanged
      } else {
        setIsUserLoggedIn(true);
      }
    } catch (error: any) {
      if (error.response) {
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

  const handleLogout = async () => {
    // Clear token from localStorage
    try {
      const logoutService = await LogoutService.logoutService();
      if (logoutService?.result == true) {
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

  const submitApply = async (
    dataSubmit?: ResultModelGetProjectDetailResponseInterface
  ) => {
    setloading(true);
    const body: ModelRequestUpdateProjectInterface = {
      title: dataSubmit?.title,
      theme: dataSubmit?.theme,
      story: dataSubmit?.story,
      countdown: dataSubmit?.countdown,
      cover: {
        img: dataSubmit?.cover.img,
        isShow: dataSubmit?.cover.isShow,
      },
      braidInfo: {
        female: {
          dad: dataSubmit?.braidInfo.female.dad,
          mom: dataSubmit?.braidInfo.female.mom,
          name: dataSubmit?.braidInfo.female.name,
          photo: dataSubmit?.braidInfo.female.image,
        },
        male: {
          dad: dataSubmit?.braidInfo.male.dad,
          mom: dataSubmit?.braidInfo.male.mom,
          name: dataSubmit?.braidInfo.male.name,
          photo: dataSubmit?.braidInfo.male.image,
        },
        isShow: dataSubmit?.braidInfo.isShow,
      },
      home: {
        img: dataSubmit?.home.img,
        isShow: dataSubmit?.home.isShow,
        quotes: dataSubmit?.home.quotes,
      },
      hero: {
        img: dataSubmit?.hero.img,
        isShow: dataSubmit?.hero.isShow,
      },
      gift: dataSubmit?.gift,
      galery: dataSubmit?.galery,
      infoAcara: {
        akad: {
          dateAkad: dataSubmit?.infoAcara.akad.dateAkad,
          imgAkad: dataSubmit?.infoAcara.akad.imageAkad,
          lokasiAkad: dataSubmit?.infoAcara.akad.lokasiAkad,
          mapAkad: dataSubmit?.infoAcara.akad.mapAkad,
          titleAkad: dataSubmit?.infoAcara.akad.titleAkad,
        },
        resepsi: {
          dateResepsi: dataSubmit?.infoAcara.resepsi.dateResepsi,
          imgResepsi: dataSubmit?.infoAcara.resepsi.imageResepsi,
          lokasiResepsi: dataSubmit?.infoAcara.resepsi.lokasiResepsi,
          mapResepsi: dataSubmit?.infoAcara.resepsi.mapResepsi,
          titleResepsi: dataSubmit?.infoAcara.resepsi.titleResepsi,
        },
      },
    } as ModelRequestUpdateProjectInterface;

    const props: ModelRequestUpdateProjectPatch = {
      body: body,
      param: '',
    } as ModelRequestUpdateProjectPatch;

    const result = await GetProjectDetailService.createProjectService(props);
    if (result !== null) {
      Swal.fire({
        title: "Good job!",
        text: "New Project Created Successfully",
        icon: "success",
      });
      setloading(false);
    } else {
      setloading(false);
    }
  };
  const [activeId, setActiveId] = useState<string | null>('1');
  // const [items, setItems] = useState(accordionData);
  const handleAccordionClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };
  useEffect(() => {
    if (isUserLoggedIn) {
      router.replace("/");
    }
  }, [isUserLoggedIn]);
  if (first === "Pink-Essence") {
    // return <RedEssence />;
  } else {
    // console.log("Rendering data:", data);
    return (
      <div className="tw-max-h-screen">
        <nav className="navbar navbar-expand-md navbar-light sticky-top mynavbar">
          <div className="container">
            <a href="/" className="navbar-brand">
              <i className="bi bi-envelope-paper-heart" />
              Nvite Me
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <i className="bi bi-envelope-paper-heart" />
                  Nvite Me
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item ">
                    <Link href="/#home" className="nav-link">
                      <span data-hover="Home">Create</span>
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-lg-auto">
                  <li className="nav-item ml-lg-4">
                    <div className="custom-btn-group">
                      <button
                        onClick={handleLogout}
                        className="btn custom-btn login-btn custom-btn-bg custom-btn-link"
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        <i className="bi bi-box-arrow-in-right" /> Logout
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="setting-content">
          
          
          <div className="container mt-2 mb-1 ">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              {loading ? (
                <div className="accordion-item">
                  <div
                    style={{
                      width: "100%",
                      height: 200,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      display: "flex",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <ReactLoading
                      type={"spinningBubbles"}
                      color={"#116A7B"}
                      height={"7%"}
                      width={"7%"}
                    />
                  </div>
                </div>
              ) : (
                <div className="row"> 
                <div  className="mb-1 col-md-4 tw-p-2 ">
                  <div className=" tw-overflow-y-auto  tw-p-2"
                    style={{ height: '66.5vh' }}>
                    <AccordionItem title={'Theme'} content={<ThemeView data={data} setData={setData} />} isExpanded={activeId === '1'} onClick={() => handleAccordionClick('1')}/>
                    <AccordionItem title={'Cover'} content={<CoverDepan data={data} setData={setData} />} isExpanded={activeId === '2'} onClick={() => handleAccordionClick('2')}/>
                    <AccordionItem title={'Home'} content={<HomeView data={data} setData={setData} />} isExpanded={activeId === '3'} onClick={() => handleAccordionClick('3')}/>
                    <AccordionItem title={'Hero'} content={<HeroView data={data} setData={setData} />} isExpanded={activeId === '4'} onClick={() => handleAccordionClick('4')}/>
                    <AccordionItem title={'Event'} content={<EventInfo data={data} setData={setData} />} isExpanded={activeId === '5'} onClick={() => handleAccordionClick('5')}/>
                    <AccordionItem title={'Gift'} content={<GiftsView data={data} setData={setData} />} isExpanded={activeId === '6'} onClick={() => handleAccordionClick('6')}/>
                    <AccordionItem title={'Story'} content={<StoryView data={data} setData={setData} />} isExpanded={activeId === '7'} onClick={() => handleAccordionClick('7')}/>
                    <AccordionItem title={'Couple'} content={<CouplesView data={data} setData={setData} />} isExpanded={activeId === '8'} onClick={() => handleAccordionClick('8')}/>
                    <AccordionItem title={'Galery'} content={<GaleryView data={data} setData={setData} />} isExpanded={activeId === '9'} onClick={() => handleAccordionClick('9')}/>
                  </div>
                  <div className="mb-1  tw-p-2">
                      <button
                        className="btn btn-warning mt-3"
                        onClick={() => {
                          submitApply(data);
                        }}
                      >
                        Apply
                      </button>
                    </div>
                    </div>
                  <div className="mb-3 col-md-8">
                  <div className="tw-max-h-screen tw-flex tw-items-center tw-justify-center tw-w-full">
                    <div className="tw-flex tw-flex-col "> 
                        <div className="card " style={{ 
                        }}>
                          <img src="image/background/prewed-bg.jpg" /> 
                          <div className="card-buttons">
                            <button className="view-btn">
                              <i className="bi bi-eye" />
                              Preview
                            </button>
                          </div> 
                      </div>
                    </div>
                  </div> 
                  </div>
                </div> 
              )}
            </div>
          </div>
        </div>
        <FooterDashboard />
      </div>
    );
  }
};

function AccordionItem(params: { 
  title: string; 
  content: React.ReactNode; 
  isExpanded?: boolean; // Use optional chaining
  onClick: () => void 
}) { 
  return (
    <div className={`tw-bg-gradient-to-r tw-from-indigo-100 tw-to-sky-200 tw-shadow-lg tw-rounded-3xl tw-mb-1 tw-overflow-hidden tw-transition-all tw-duration-300 ${params.isExpanded ? "" : "tw-max-h-14"}`}>
      <div className="tw-flex tw-justify-between tw-items-start tw-p-4 tw-cursor-pointer tw-items-center" onClick={params.onClick}>
        <i className={`bi bi-caret-right-fill tw-text-1xl tw-transition-all tw-duration-300 ${params.isExpanded ? "tw-rotate-90" : ""}`} />
        <div className="tw-text-1xl tw-font-bold">{params.title}</div>
        <i className="bi bi-grid-3x2-gap-fill tw-rotate-90" />
      </div>
      <div className={`tw-px-5 tw-pb-6 tw-overflow-hidden tw-transition-all tw-duration-300 ${params.isExpanded ? "tw-opacity-100" : "tw-opacity-0"}`}>
        <p className="tw-text-gray-700 tw-text-base">{params.content}</p>
      </div>
    </div>
  );
}

function ThemeView(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {
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
              defaultValue=''
            //   value={params.data?.theme.theme}
              className="form-select"
              aria-label="Default select example"
              onChange={(val) => {
                const newValue = val.target.value;
                console.log(newValue);

                params.setData((prevState) => {
                  return {
                    ...prevState,
                    theme: {
                      ...prevState?.theme,
                      theme: newValue,
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
            >
              <option>--- Select Theme ---</option>
              {/* <option selected>-- {params.data?.theme.theme} --</option> */}
              {Constant.listTheme.map((item) => {
                return <option key={item.key} value={item.key}>{item.val}</option>;
              })}
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
              defaultValue=''
              onChange={(val) => {
                const title = val.target.value;
                const timestamp = new Date().getTime();
                const random8Digit = Math.floor(10000000 + Math.random() * 90000000);
                const slug = `${title.toLowerCase().replace(/\s+/g, '-')}-${random8Digit}`;
                setisSlugFromTitle(slug);
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    title,
                    theme: {
                      ...prevState?.theme,
                      slug,
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
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
              value={isSlugFromTitle}
              onChange={(val) => {
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    theme: {
                      ...prevState?.theme,
                      slug: val.target.value,
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
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
              defaultValue=''
              onChange={(val) => {
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    theme: {
                      ...prevState?.theme,
                      alamat: val.target.value,
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
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
              defaultValue=''
              onChange={(val) => {
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    theme: {
                      ...prevState?.theme,
                      embeded: val.target.value,
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
            />
          </div>
        </div> 
  );
}

function CoverDepan(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {  
  const [isImageCover, setisImageCover] = useState(false);
  const [imageData, setImageData] = useState('');
  return (
    <div className="accordion-body" style={{backgroundColor:'white'}}>
      <div className="mb-3">
        <label htmlFor="titleCover" className="form-label">
          Title Cover
        </label>
        <input
          type="text"
          className="form-control"
          id="titleCover"
          name="title"
          placeholder="Title Cover"
          onChange={(val) => {
            params.setData((prevState: any) => {
              return {
                ...prevState,
                title: val.target.value,
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageCover" className="form-label">
          Image Cover
        </label>
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
              className="form-control"
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
                  params.setData((prevState: any) => {
                    return {
                      ...prevState,
                      cover: {
                        ...prevState?.cover,
                        img: base64Data,
                      },
                    } as ResultModelGetProjectDetailResponseInterface;
                  });
                  setisImageCover(true);
                };
              }
            }}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="eventDate" className="form-label">
          Event Date
        </label>
        <input
          type="date"
          className="form-control"
          id="eventDate"
          name="eventDate"
          placeholder="Event Date" 
          onChange={(val) => {
            params.setData((prevState: any) => {
              return {
                ...prevState,
                countDown: new Date(val.target.value),
              } as ResultModelGetProjectDetailResponseInterface;
            });
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
          onChange={(val) => {
            params.setData((prevState: any) => {
              return {
                ...prevState,
                cover: {
                  ...prevState?.cover,
                  isShow: val.target.checked,
                },
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
        />
        <label className="form-check-label" htmlFor="showCoverDepanSwitch">
          Show Cover
        </label>
      </div> 
    </div> 
  );
}

function HomeView(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {
  const [isImageHomeView, setisImageHomeView] = useState('');
  return (
    <div className="accordion-body" style={{backgroundColor:'white'}}>
      <div className="mb-3">
        <label htmlFor="titleHome" className="form-label">
          Home Title
        </label>
        <input
          type="text"
          className="form-control"
          id="titleHome"
          name="title"
          placeholder="Title Home" 
          onChange={(val) => {
            params.setData((prevState) => {
              return {
                ...prevState,
                title: val.target.value,
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="titleCover" className="form-label">
          Home Quote
        </label>
        <input
          type="text"
          className="form-control"
          id="quoteHome"
          name="quote"
          placeholder="Quote Home" 
          onChange={(val) => {
            params.setData((prevState) => {
              return {
                ...prevState,
                home: {
                  ...prevState?.home,
                  quotes: val.target.value,
                },
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="titleHome" className="form-label">
          Home Image
        </label>
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
                  params.setData((prevState) => {
                    return {
                      ...prevState,
                      home: {
                        ...prevState?.home,
                        img: base64HomeData,
                      },
                    } as ResultModelGetProjectDetailResponseInterface;
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
          onChange={(val) => {
            params.setData((prevState) => {
              return {
                ...prevState,
                home: {
                  ...prevState?.home,
                  isShow: val.target.checked,
                },
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
        />
        <label className="form-check-label" htmlFor="showHomeDepanSwitch">
          Show Home
        </label>
      </div> 
    </div> 
  );
}

function HeroView(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {
  const [isImageHeroView, setisImageHeroView] = useState('');
  return (
  
    <div className="accordion-body" style={{backgroundColor:'white'}}>
      <div className="mb-3">
        <label htmlFor="titleCover" className="form-label">
          Hero Title
        </label>
        <input
          type="text"
          className="form-control"
          id="titleHero"
          name="title"
          placeholder="Title Hero" 
          onChange={(val) => {
            console.log(params.data);

            params.setData((prevState) => {
              return {
                ...prevState,
                title: val.target.value,
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="titleHero" className="form-label">
          Image Hero
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
                  params.setData((prevState) => {
                    return {
                      ...prevState,
                      hero: {
                        ...prevState?.hero,
                        img: base64HeroData,
                      },
                    } as ResultModelGetProjectDetailResponseInterface;
                  });
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
          onChange={(val) => {
            params.setData((prevState) => {
              return {
                ...prevState,
                hero: {
                  ...prevState?.hero,
                  isShow: val.target.checked,
                },
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
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

function EventInfo(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {
  const [isImageEvent1View, setisImageEvent1View] = useState('');
  const [isImageEvent2View, setisImageEvent2View] = useState(''); 
  
  return (
    <div className="accordion-body" style={{backgroundColor:'white'}}>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {/* <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour-One"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseFour-One"
            >
              Event Info 1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour-One"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <div className="mb-3">
                <label htmlFor="titleEvent1" className="form-label">
                  Title Event 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titleEvent1"
                  name="title"
                  placeholder="Title Event 1: e.g. Akad, Resepsi, Pemberkatan" 
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          akad: {
                            ...prevState?.infoAcara.akad,
                            titleAkad: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="placeEvent1" className="form-label">
                  Place Event 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="placeEvent1"
                  name="place"
                  placeholder="place Event 1: e.g. Hotel..., Taman..." 
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          akad: {
                            ...prevState?.infoAcara.akad,
                            lokasiAkad: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="locationEvent1" className="form-label">
                  Link Google Maps Event 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="locationEvent1"
                  name="location"
                  placeholder={"https://maps.app.goo.gl/LeMeridien"} 
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          akad: {
                            ...prevState?.infoAcara.akad,
                            mapAkad: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageEvent1" className="form-label">
                  Image Event 1
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
                          params.setData((prevState) => {
                            return {
                              ...prevState,
                              infoAcara: {
                                ...prevState?.infoAcara,
                                akad: {
                                  ...prevState?.infoAcara.akad,
                                  imageAkad: base64Event1Data,
                                },
                              },
                            } as ResultModelGetProjectDetailResponseInterface;
                          });
                        };
                      }
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="eventDate1" className="form-label">
                    Event Date 1
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="eventDate"
                    name="eventDate"
                    placeholder="Event Date" 
                    onChange={(val) => {
                      const newDate = new Date(val.target.value);
                      const timePart = params.data?.infoAcara.akad.dateAkad
                        ? new Date(params.data.infoAcara.akad.dateAkad)
                            .toISOString()
                            .split("T")[1]
                        : "00:00:00";
                      params.setData(
                        (prevState) =>
                          ({
                            ...prevState,
                            infoAcara: {
                              ...prevState?.infoAcara,
                              akad: {
                                ...prevState?.infoAcara.akad,
                                dateAkad: new Date(
                                  `${
                                    newDate.toISOString().split("T")[0]
                                  }T${timePart}`
                                ),
                              },
                            },
                          } as ResultModelGetProjectDetailResponseInterface)
                      );
                    }}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="eventTime1" className="form-label">
                    Event Time 1
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="eventTime1"
                    name="eventTime1"
                    placeholder="Event Time 1" 
                    onChange={(val) => {
                      const newTime = val.target.value;
                      const datePart = params.data?.infoAcara.akad.dateAkad
                        ? new Date(params.data.infoAcara.akad.dateAkad)
                            .toISOString()
                            .split("T")[0]
                        : new Date().toISOString().split("T")[0];
                      params.setData(
                        (prevState) =>
                          ({
                            ...prevState,
                            infoAcara: {
                              ...prevState?.infoAcara,
                              akad: {
                                ...prevState?.infoAcara.akad,
                                dateAkad: new Date(
                                  `${datePart}T${newTime}:00`
                                ),
                              },
                            },
                          } as ResultModelGetProjectDetailResponseInterface)
                      );
                    }}
                  />
                </div>
              </div> 
            </div>
          </div>
        </div> */}
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
                <label htmlFor="titleEvent2" className="form-label">
                  Title Event 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titleEvent2"
                  name="title"
                  placeholder="Title Event 2: e.g. Akad, Resepsi, Pemberkatan" 
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          Resepsi: {
                            ...prevState?.infoAcara.resepsi,
                            titleResepsi: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
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
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          resepsi: {
                            ...prevState?.infoAcara.resepsi,
                            lokasiResepsi: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="locationEvent1" className="form-label">
                  Link Google Maps Event 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="locationEvent1"
                  name="location"
                  placeholder={"https://maps.app.goo.gl/LeMeridien"} 
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          resepsi: {
                            ...prevState?.infoAcara.resepsi,
                            mapResepsi: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageEvent1" className="form-label">
                  Image Event 1
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
                          params.setData((prevState) => {
                            return {
                              ...prevState,
                              infoAcara: {
                                ...prevState?.infoAcara,
                                resepsi: {
                                  ...prevState?.infoAcara.resepsi,
                                  imageResepsi: base64Event1Data,
                                },
                              },
                            } as ResultModelGetProjectDetailResponseInterface;
                          });
                        };
                      }
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="eventDate1" className="form-label">
                    Event Date 1
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="eventDate1"
                    name="eventDate1"
                    placeholder="Event Date 1" 
                    onChange={(val) => {
                      const newDate = new Date(val.target.value);
                      const timePart = params.data?.infoAcara.resepsi
                        .dateResepsi
                        ? new Date(
                            params.data.infoAcara.resepsi.dateResepsi
                          )
                            .toISOString()
                            .split("T")[1]
                        : "00:00:00";
                      params.setData(
                        (prevState) =>
                          ({
                            ...prevState,
                            infoAcara: {
                              ...prevState?.infoAcara,
                              resepsi: {
                                ...prevState?.infoAcara.resepsi,
                                dateResepsi: new Date(
                                  `${
                                    newDate.toISOString().split("T")[0]
                                  }T${timePart}`
                                ),
                              },
                            },
                          } as ResultModelGetProjectDetailResponseInterface)
                      );
                    }}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="eventTime1" className="form-label">
                    Event Time 1
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="eventTime1"
                    name="eventTime1"
                    placeholder="Event Time 1" 
                    onChange={(val) => {
                      const newTime = val.target.value;
                      const datePart = params.data?.infoAcara.resepsi
                        .dateResepsi
                        ? new Date(
                            params.data.infoAcara.resepsi.dateResepsi
                          )
                            .toISOString()
                            .split("T")[0]
                        : new Date().toISOString().split("T")[0];
                      params.setData(
                        (prevState) =>
                          ({
                            ...prevState,
                            infoAcara: {
                              ...prevState?.infoAcara,
                              resepsi: {
                                ...prevState?.infoAcara.resepsi,
                                dateResepsi: new Date(
                                  `${datePart}T${newTime}:00`
                                ),
                              },
                            },
                          } as ResultModelGetProjectDetailResponseInterface)
                      );
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
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          Resepsi: {
                            ...prevState?.infoAcara.resepsi,
                            titleResepsi: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
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
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          resepsi: {
                            ...prevState?.infoAcara.resepsi,
                            lokasiResepsi: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
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
                  onChange={(val) => {
                    params.setData((prevState) => {
                      return {
                        ...prevState,
                        infoAcara: {
                          ...prevState?.infoAcara,
                          resepsi: {
                            ...prevState?.infoAcara.resepsi,
                            mapResepsi: val.target.value,
                          },
                        },
                      } as ResultModelGetProjectDetailResponseInterface;
                    });
                  }}
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
                          params.setData((prevState) => {
                            return {
                              ...prevState,
                              infoAcara: {
                                ...prevState?.infoAcara,
                                resepsi: {
                                  ...prevState?.infoAcara.resepsi,
                                  imageResepsi: base64Event1Data,
                                },
                              },
                            } as ResultModelGetProjectDetailResponseInterface;
                          });
                          setisImageEvent2View(imageEvent2DataUrl);
                        };
                      }
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="eventDate2" className="form-label">
                    Event Date 2
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="eventDate2"
                    name="eventDate2"
                    placeholder="Event Date 2" 
                    onChange={(val) => {
                      const newDate = new Date(val.target.value);
                      const timePart = params.data?.infoAcara.resepsi
                        .dateResepsi
                        ? new Date(
                            params.data.infoAcara.resepsi.dateResepsi
                          )
                            .toISOString()
                            .split("T")[1]
                        : "00:00:00";
                      params.setData(
                        (prevState) =>
                          ({
                            ...prevState,
                            infoAcara: {
                              ...prevState?.infoAcara,
                              resepsi: {
                                ...prevState?.infoAcara.resepsi,
                                dateResepsi: new Date(
                                  `${
                                    newDate.toISOString().split("T")[0]
                                  }T${timePart}`
                                ),
                              },
                            },
                          } as ResultModelGetProjectDetailResponseInterface)
                      );
                    }}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="eventTime2" className="form-label">
                    Event Time 2
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="eventTime2"
                    name="eventTime2"
                    placeholder="Event Time 2" 
                    onChange={(val) => {
                      const newTime = val.target.value;
                      const datePart = params.data?.infoAcara.resepsi
                        .dateResepsi
                        ? new Date(
                            params.data.infoAcara.resepsi.dateResepsi
                          )
                            .toISOString()
                            .split("T")[0]
                        : new Date().toISOString().split("T")[0];
                      params.setData(
                        (prevState) =>
                          ({
                            ...prevState,
                            infoAcara: {
                              ...prevState?.infoAcara,
                              resepsi: {
                                ...prevState?.infoAcara.resepsi,
                                dateResepsi: new Date(
                                  `${datePart}T${newTime}:00`
                                ),
                              },
                            },
                          } as ResultModelGetProjectDetailResponseInterface)
                      );
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

function GiftsView(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {

  const [giftForm, setGiftForm] = useState<GiftElementModelGetProjectDetailResponseInterface[]>([
    {
      image: '',
      name: '',
      noRek: '',
    },
  ]);

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
    <div className="accordion-body" style={{backgroundColor:'white'}}>
      {giftForm.map((gift, index) => (
        <div
          key={index}
          className="accordion mb-3"
          id="accordionPanelsStayOpenExample"
        >
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
            <div
              id={`panelsStayOpen-collapseSix-${index + 1}`}
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <div className="mb-3">
                    <label
                        htmlFor={`bank${index + 1}`}
                        className="form-label"
                    >
                        Bank
                    </label>
                    <select 
                        id={`bank${index + 1}`}
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(val) => {
                          const newValue = val.target.value;
                          setGiftForm((prevGiftForm) =>
                            prevGiftForm.map((giftItem, i) => {
                              if (i === index) {
                                return { ...giftItem, image: newValue };
                              }
                              return giftItem;
                            })
                          );
                        }}
                    >   
                      <option value="">--- Select Bank ---</option>
                        {banks.map((bank) => (
                            <option key={bank.value} value={bank.value}>
                            {bank.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor={`bankAccountNumber${index + 1}`}
                    className="form-label"
                  >
                    Bank Account Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id={`bankAccountNumber${index + 1}`}
                    name={`bankAccountNumber${index + 1}`}
                    placeholder="68123456789" 
                    onChange={(val) => {
                      const newValue = val.target.value;
                      setGiftForm((prevGiftForm) =>
                        prevGiftForm.map((giftItem, i) => {
                          if (i === index) {
                            return { ...giftItem, noRek: newValue };
                          }
                          return giftItem;
                        })
                      );
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor={`bankAccountName${index + 1}`}
                    className="form-label"
                  >
                    Bank Account Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`bankAccountName${index + 1}`}
                    name={`bankAccountName${index + 1}`}
                    placeholder="John Doe" 
                    onChange={(val) => {
                      const newValue = val.target.value;
                      setGiftForm((prevGiftForm) =>
                        prevGiftForm.map((giftItem, i) => {
                          if (i === index) {
                            return { ...giftItem, name: newValue };
                          }
                          return giftItem;
                        })
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          const newForm = {
            image: "",
            name: "",
            noRek: "",
          } as GiftElementModelGetProjectDetailResponseInterface;
          params.setData((prev) => {
            return {
              ...prev,
              gift: {
                ...prev?.gift,
                gifts: [...(prev?.gift?.gifts ?? []), newForm],
              },
            } as ResultModelGetProjectDetailResponseInterface;
          });
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
          checked={false} 
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
        >
          Show Gift
        </label>
      </div>
    </div> 
  );
}

function StoryView(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) { 
  const [storyForm, setstoryForm] = useState<StoryElementModelGetProjectDetailResponseInterface[]>([
    {
      title: "",
      text: "",
      image: "",
      date: new Date(),
    },
  ]);
    const [isGambarStory, setisGambarStory] = useState('');
  return ( 
    <div className="accordion-body" style={{backgroundColor:'white'}}>
      {storyForm.map((item, index) => (
        <div
          key={index}
          className="accordion mb-2"
          id="accordionPanelsStayOpenExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapseSeven-${
                  index + 1
                }`}
                aria-expanded="true"
                aria-controls={`panelsStayOpen-collapseSeven-${index + 1}`}
              >
                Story {index + 1}
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapseSeven-${index + 1}`}
              className="accordion-collapse collapse show"
            >
                <div className="accordion-body"> 
                    <div className="mb-3">
                        <label htmlFor={`titleStoryPreview${index+1}`} className="form-label">
                            Story Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id={`titleStoryPreview${index+1}`}
                            name={`titleStoryPreview${index+1}`}
                            placeholder="Event Date" 
                            onChange={(val) => {
                                
                                params.setData((prevState) => {
                                    // console.log(prevState);
                                return {
                                    ...prevState,
                                    story: {
                                    ...prevState?.story,
                                    stories: prevState?.story.stories.map((item, i) => {
                                        if (i === index) {
                                        return {
                                            ...item,
                                            title: val.target.value,
                                        };
                                        }
                                        return item;
                                    }),
                                    },
                                } as ResultModelGetProjectDetailResponseInterface;
                                });
                            }}
                        />
                    </div>  
                    <div className="mb-3">
                        <label htmlFor="imageStory" className="form-label">
                            Image Story
                        </label>
                        <div>
                            {(isGambarStory) ? (
                                <img
                                id={`imageStoryPreview${index+1}`}
                                src={isGambarStory}
                                alt={`imageStoryPreview${index+1}`}
                                style={{
                                    maxWidth: "180px",
                                    margin: "5px",
                                    borderRadius: "5%",
                                }}
                            />) : (<></>) }
                            <input
                                type="file"
                                className="form-control"
                                id="imageSotry"
                                name="imageSotry"
                                onChange={(val) => {
                                    
                                    const fileImageStory = val?.target?.files?.[0];
                                    if (fileImageStory) {
                                        
                                      const reader = new FileReader();
                                      reader.readAsDataURL(fileImageStory);
                                      reader.onloadend = () => {
                                          const imageStoryDataUrl =
                                          reader.result as string;
                                          const base64StoryData = imageStoryDataUrl.replace(
                                          /^data:image\/(jpg|jpeg|png|gif);base64,/,
                                          ""
                                          );
                                          
                                          params.setData((prevState) => {
                                          return {
                                              ...prevState,
                                              story: {
                                              ...prevState?.story,
                                                  stories: prevState?.story.stories.map(
                                                      (item, i) => {
                                                      if (i === index) {
                                                          
                                                          return {
                                                          ...item,
                                                          image: base64StoryData,
                                                          
                                                          };
                                                      }
                                                      return item;
                                                      }
                                                  ),
                                              },
                                          } as ResultModelGetProjectDetailResponseInterface;
                                          });
                                          setisGambarStory(imageStoryDataUrl);
                                      };
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor={`dateStoryPreview${index+1}`} className="form-label">
                        Story Date Meet
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id={`dateStoryPreview${index+1}`}
                            name={`dateStoryPreview${index+1}`}
                            placeholder="Event Date" 
                            onChange={(val) => {
                                params.setData((prevState) => {
                                return {
                                    ...prevState,
                                    story: {
                                    ...prevState?.story,
                                    stories: prevState?.story.stories.map((item, i) => {
                                        if (i === index) {
                                        return {
                                            ...item,
                                            date: new Date(val.target.value),
                                        };
                                        }
                                        return item;
                                    }),
                                    },
                                } as ResultModelGetProjectDetailResponseInterface;
                                });
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={`textStoryPreview${index+1}`} className="form-label">
                            Story Description
                        </label>
                        <textarea
                            className="form-control"
                            id={`textStoryPreview${index+1}`}
                            style={{
                                height: 80,
                            }}
                            name={`textStoryPreview${index+1}`}
                            placeholder="My story begin when ..." 
                            onChange={(val) => {
                                params.setData((prevState) => {
                                return {
                                    ...prevState,
                                    story: {
                                    ...prevState?.story,
                                    stories: prevState?.story.stories.map((item, i) => {
                                        if (i === index) {
                                        return {
                                            ...item,
                                            text: val.target.value,
                                        };
                                        }
                                        return item;
                                    }),
                                    },
                                } as ResultModelGetProjectDetailResponseInterface;
                                });
                            }}
                        /> 
                    </div>              
                </div>
            </div>
          </div>
        </div>
      ))}
      <button
        className="btn btn-primary mt-3"
        onClick={() => { 
          const newForm = {
            title: "",
            text: "",
            image: "",
            date: new Date(),
          } as StoryElementModelGetProjectDetailResponseInterface;
          params.setData((prev) => {
            return {
              ...prev,
              story: {
                ...prev?.story,
                stories: [...(prev?.story?.stories ?? []), newForm],
              },
            } as ResultModelGetProjectDetailResponseInterface;
          });
        }}
      >
        Add Story
      </button>
      <div className="mb-3 mt-3 form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="showstorySwitch"
          name="showstory"
          checked={false}
          onChange={(val) => {
            params.setData((prevState) => {
              return {
                ...prevState,
                story: {
                  ...prevState?.story,
                  isShow: val.target.checked,
                },
              } as ResultModelGetProjectDetailResponseInterface;
            });
          }}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
        >
          Show Story
        </label>
      </div>
    </div> 
  );
}

function CouplesView(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {

  const [isImageCoupleMaleView, setisImageCoupleMaleView] = useState('');
  const [isImageCoupleFemaleView, setisImageCoupleFemaleView] = useState('');
  return (
    
    <div >
    {/* <div className="tw-max-w-sm tw-rounded-lg tw-overflow-hidden tw-shadow-lg tw-bg-white " > */}
      
      <div className="tw-max-w-sm tw-rounded-lg tw-overflow-hidden tw-shadow-lg tw-bg-white tw-mx-auto tw-my-2">
        <div className="tw-bg-gray-200 tw-p-4">
          <h2 className="tw-text-xl tw-font-bold tw-text-gray-800">Male</h2>
        </div>
  
        <div className="tw-p-4">
          <div className="mb-3">
            <label htmlFor="maleFatherName" className="form-label">
              Name of the Groom's Father
            </label>
            <input
              type="text"
              className="form-control"
              id="maleFatherName"
              name="maleFatherName"
              placeholder="Mr. John Doe" 
              onChange={(val) => {
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    braidInfo: {
                      ...prevState?.braidInfo,
                      male: {
                        ...prevState?.braidInfo.male,
                        dad: val.target.value,
                      },
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
            />
          </div>
            <div className="mb-3">
              <label htmlFor="maleMotherName" className="form-label">
                Name of the Groom's Mother
              </label>
              <input
                type="text"
                className="form-control"
                id="maleMotherName"
                name="maleMotherName"
                placeholder="Mrs. Annie" 
                onChange={(val) => {
                  params.setData((prevState) => {
                    return {
                      ...prevState,
                      braidInfo: {
                        ...prevState?.braidInfo,
                        male: {
                          ...prevState?.braidInfo.male,
                          mom: val.target.value,
                        },
                      },
                    } as ResultModelGetProjectDetailResponseInterface;
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="maleName" className="form-label">
                Groom's Name
              </label>
              <input
                type="text"
                className="form-control"
                id="maleName"
                name="maleName"
                placeholder="Mr. John Doe" 
                onChange={(val) => {
                  params.setData((prevState) => {
                    return {
                      ...prevState,
                      braidInfo: {
                        ...prevState?.braidInfo,
                        male: {
                          ...prevState?.braidInfo.male,
                          name: val.target.value,
                        },
                      },
                    } as ResultModelGetProjectDetailResponseInterface;
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="maleName" className="form-label">
                Groom's Image
              </label>
              <div>
                {
                  isImageCoupleMaleView ?
                  <img
                    id="imageMalePreview"
                    src={isImageCoupleMaleView}
                    alt={"imageMale"}
                    style={{
                      maxWidth: "180px",
                      margin: "5px",
                      borderRadius: "5%",
                    }}
                  />
                    :
                    <></>
                }
                <input
                  type="file"
                  className="form-control"
                  id="imageMale"
                  name="imageMale"
                  onChange={(val) => {
                    const fileImageMale = val?.target?.files?.[0];
                    if (fileImageMale) {
                      const reader = new FileReader();
                      reader.readAsDataURL(fileImageMale);
                      reader.onloadend = () => {
                        const imageMaleDataUrl = reader.result as string;
                        const base64MaleData = imageMaleDataUrl.replace(
                          /^data:image\/(jpg|jpeg|png|gif);base64,/,
                          ""
                        );
                        params.setData((prevState) => {
                          return {
                            ...prevState,
                            braidInfo: {
                              ...prevState?.braidInfo,
                              resepsi: {
                                ...prevState?.braidInfo.male,
                                image: base64MaleData,
                              },
                            },
                          } as ResultModelGetProjectDetailResponseInterface;
                        });
                        setisImageCoupleMaleView(imageMaleDataUrl);
                      };
                    }
                  }}
                />
              </div>
            </div>
        </div>
  
        {/* <div className="tw-bg-gray-100 tw-p-4 tw-flex tw-justify-between tw-items-center">
          <button className="tw-bg-blue-500 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-blue-600">Action</button>
          <span className="tw-text-gray-500">Footer Text</span>
        </div>     */}
      </div>

      <div className="tw-max-w-sm tw-rounded-lg tw-overflow-hidden tw-shadow-lg tw-bg-white tw-mx-auto tw-my-2">
        <div className="tw-bg-gray-200 tw-p-4">
          <h2 className="tw-text-xl tw-font-bold tw-text-gray-800">Female</h2>
        </div>
  
        <div className="tw-p-4">
          <div className="mb-3">
            <label htmlFor="femaleFatherName" className="form-label">
              Name of the Bride's Father
            </label>
            <input
              type="text"
              className="form-control"
              id="femaleFatherName"
              name="femaleFatherName"
              placeholder="Mr. John Doe" 
              onChange={(val) => {
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    braidInfo: {
                      ...prevState?.braidInfo,
                      female: {
                        ...prevState?.braidInfo.female,
                        dad: val.target.value,
                      },
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="femaleMotherName" className="form-label">
              Name of the Bride's Mother
            </label>
            <input
              type="text"
              className="form-control"
              id="femaleMotherName"
              name="femaleMotherName"
              placeholder="Mrs. Annie" 
              onChange={(val) => {
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    braidInfo: {
                      ...prevState?.braidInfo,
                      female: {
                        ...prevState?.braidInfo.female,
                        mom: val.target.value,
                      },
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="femaleName" className="form-label">
              Bride's Name
            </label>
            <input
              type="text"
              className="form-control"
              id="femaleName"
              name="femaleName"
              placeholder="Mrs. Anne Marrie" 
              onChange={(val) => {
                params.setData((prevState) => {
                  return {
                    ...prevState,
                    braidInfo: {
                      ...prevState?.braidInfo,
                      female: {
                        ...prevState?.braidInfo.female,
                        name: val.target.value,
                      },
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="femaleName" className="form-label">
              Bride's Image
            </label>
            <div>
              {
                isImageCoupleFemaleView ? 
                <img
                  id="imagefemalePreview"
                  src={isImageCoupleFemaleView}
                  alt={"imagefemale"}
                  style={{
                    maxWidth: "180px",
                    margin: "5px",
                    borderRadius: "5%",
                  }}
                />
                :
                <></>
              }
              <input
                type="file"
                className="form-control"
                id="imagefemale"
                name="imagefemale"
                onChange={(val) => {
                  const fileImagefemale = val?.target?.files?.[0];
                  if (fileImagefemale) {
                    const reader = new FileReader();
                    reader.readAsDataURL(fileImagefemale);
                    reader.onloadend = () => {
                      const imagefemaleDataUrl =
                        reader.result as string;
                      const base64femaleData =
                        imagefemaleDataUrl.replace(
                          /^data:image\/(jpg|jpeg|png|gif);base64,/,
                          ""
                        );
                      params.setData((prevState) => {
                        return {
                          ...prevState,
                          braidInfo: {
                            ...prevState?.braidInfo,
                            resepsi: {
                              ...prevState?.braidInfo.female,
                              image: base64femaleData,
                            },
                          },
                        } as ResultModelGetProjectDetailResponseInterface;
                      });
                      setisImageCoupleFemaleView(imagefemaleDataUrl)
                    };
                  }
                }}
              />
            </div>
          </div>
        </div>
  
        {/* <div className="tw-bg-gray-100 tw-p-4 tw-flex tw-justify-between tw-items-center">
          <button className="tw-bg-blue-500 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-blue-600">Action</button>
          <span className="tw-text-gray-500">Footer Text</span>
        </div>     */}
      </div>
          
        {/* <div className="tw-bg-gray-100 tw-p-4 tw-flex tw-justify-between tw-items-center"> */}
          <div className=" mt-3 form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="showBraidInfoSwitch"
            name="showBraidInfo" 
            onChange={(val) => {
              params.setData((prevState) => {
                return {
                  ...prevState,
                  braidInfo: {
                    ...prevState?.braidInfo,
                    isShow: val.target.checked,
                  },
                } as ResultModelGetProjectDetailResponseInterface;
              });
            }}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          >
            Show Hero
          </label>
          </div>
        {/* </div>     */}
      
    </div> 
  );
}

function GaleryView(params: {
  data?: ResultModelGetProjectDetailResponseInterface;
  setData: Dispatch<
    SetStateAction<ResultModelGetProjectDetailResponseInterface | undefined>
  >;
}) {
  const [galleryImageForm, setgalleryImageForm] = useState<GaleryModelGetProjectDetailResponseInterface>({ galeries: [], isShow: false });
 
  return (
    <div className="accordion-body" style={{backgroundColor:'white'}}>
      <section
        style={{ padding: 20, paddingBottom: 2 }}
        className={`${ 
            galleryImageForm.galeries.length > 0 ? (
              "design"
            ) : (
              ""
            ) 
        }`}
        id="design"
      >
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            {/* <span>Memori kisah kami</span> */}
            <h5>Add Your Gallery</h5>
          </div>
        </div>
        {
          galleryImageForm.galeries.length > 0 ? (
            <div className="scrolling-wrapper tw-flex tw-items-center tw-justify-center">
              {galleryImageForm.galeries.map((image, index) => (
                <div key={index} className="card card-block  " style={{ borderRadius: "12px" }}>
                  <img
                    key={index}
                    alt={"imageCover"}
                    style={{ borderRadius: "12px" }}
                    src={image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>No images available</p>
          )
        }
        <input
          type="file"
          className="form-control mt-3"
          id="imageCover"
          name="imageCover"
          onChange={(val) => {
            const fileImageCover = val?.target?.files?.[0];
            if (fileImageCover) {
              const reader = new FileReader();
              reader.readAsDataURL(fileImageCover);
              reader.onloadend = () => {
                const imageDataUrl = reader.result as string;
                const base64Data = imageDataUrl.replace(
                  /^data:image\/(jpg|jpeg|png|gif);base64,/,
                  ""
                );
                params.setData((prev) => {
                  return {
                    ...prev,
                    galery: {
                      ...prev?.galery,
                      galeries: [
                        ...(prev?.galery?.galeries ?? []),
                        base64Data,
                      ],
                    },
                  } as ResultModelGetProjectDetailResponseInterface;
                });
                setgalleryImageForm((prev) => ({
                  ...prev,
                  galeries: [...prev.galeries, imageDataUrl],
                }));
              };
            }
          }}
        />
        <div
          style={{ marginTop: 25 }}
          className="mb-3 mt-3 form-check form-switch"
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="showgalerySwitch"
            name="showgalery" 
            onChange={(val) => { 
              params.setData((prevState) => { 
                const updatedState = {
                  ...prevState,
                  galery: {
                    ...prevState?.galery,
                    isShow: val.target.checked,
                  },
                } as ResultModelGetProjectDetailResponseInterface; 
                return updatedState;
              });
            }}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          >
            Show Galery
          </label>
        </div>
      </section>
    </div>  
  );
}





export default CreatePage;


// [
//   {
//       "galeries": [   
//           "data:image/png;base64,iVBORw0KGgoAAAAN3",
//         ],
//       "isShow": false
//   },
//   {
//       "galeries": [
//           "data:image/png;base64,iVBORw0KGgoAAAAN2",
//           "data:image/png;base64,iVBORw0KGgoAAAAN2",
//         ],
//       "isShow": false
//   },
//   {
//       "galeries": [
//           "data:image/png;base64,iVBORw0KGgoAAAAN1",
//           "data:image/png;base64,iVBORw0KGgoAAAAN1",
//           "data:image/png;base64,iVBORw0KGgoAAAAN1"
//        ],
//       "isShow": false
//   }
// ]