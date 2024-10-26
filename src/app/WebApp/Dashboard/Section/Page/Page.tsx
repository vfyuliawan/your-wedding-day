import React, { useState, useEffect } from "react";
import MyprojectService from "../../Domain/Service/MyprojectService/MyprojectService";
import { ModelMyprojectRequestInterface } from "../../Domain/Models/ModelRequest/MyprojectRequest/ModelMyprojectRequestInterface";
import { ProjectModelMyprojectResponseInterface } from "../../Domain/Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import CekUserLoginService from "../../Domain/Service/CekUserLoginService/CekUserLoginService";
import Link from "next/link";
import LogoutService from "../../Domain/Service/LogoutService/LogoutService";
import ReactLoading from "react-loading";
import { useMediaQuery } from "react-responsive";

import { useRouter } from "next/navigation";
import useLayout from "@/app/WebApp/utils/useLayout";
import { IConstantFont } from "@/app/Utils/ConstantFont";
import { Slide } from "react-slideshow-image";

const DashboardPage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchQueary, setSearchQueary] = useState("");
  const [data, setData] = useState<ProjectModelMyprojectResponseInterface[]>(
    []
  );
  const [totalPages, setTotalPages] = useState<number>(0);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingMain, setisLoadingMain] = useState(false);

  const layout = useLayout();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setisLoadingMain(true);
      setToken(storedToken);
      checkUserLogin();
      handleGetMyProjects(page, 5, "");
    }
  }, []);

  const checkUserLogin = async () => {
    try {
      const serviceCheckUserLogin =
        await CekUserLoginService.cekUserLoginService();
      if (serviceCheckUserLogin?.result == true) {
        setIsUserLoggedIn(true);
        setisLoadingMain(false);
      } else {
        await localStorage.removeItem("token");
        router.push("/");
      }
    } catch (error) {
      console.error("check User Login error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const dataCard = [
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed2.jpeg",
    },
    {
      title: "Download on Playstore",
      img: "/image/background/prewed3.jpeg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed2.jpeg",
    },
    {
      title: "Download on Playstore",
      img: "/image/background/prewed3.jpeg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed2.jpeg",
    },
    {
      title: "Download on Playstore",
      img: "/image/background/prewed3.jpeg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed2.jpeg",
    },
    {
      title: "Download on Playstore",
      img: "/image/background/prewed3.jpeg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
    },
  ];

  const handleNextPage = async () => {
    // setPage(page + 1);
    let nextPage = page + 1;
    setPage(nextPage);
    handleGetMyProjects(nextPage, 5, "");
  };
  const handlePreviousPage = async () => {
    let previousPage = page - 1;
    setPage(previousPage);
    handleGetMyProjects(previousPage, 5, "");
  };

  // const getIdForEdit = async (projectId: string) => {
  //   let projectParam = `projectId=${projectId}`;
  //   let keyEncrypt = new Cryptr("nViteMeKey");
  //   let encryptedProjectParam = keyEncrypt.encrypt(projectParam);
  //   window.location.href = `/content-setting?` + encryptedProjectParam;
  // };

  const getIdForEdit = async (projectId: string) => {
    router.push(`/content-setting?pi=${projectId}`);
  };
  const handleGetMyProjects = async (
    currentPage: number,
    size: number,
    title: string
  ) => {
    setisLoading(true);
    const requestParams: ModelMyprojectRequestInterface = {
      currentPage: currentPage,
      size: size,
      title: title,
    };
    try {
      const myprojectServices = await MyprojectService.myprojectService(
        requestParams
      );
      if (myprojectServices && myprojectServices.result?.projects) {
        console.log(myprojectServices.result.projects);

        setData(myprojectServices.result.projects);
        setTotalPages(myprojectServices.result.paging?.totalPage);
        setisLoading(false);
        // console.log("cekData", myprojectServices);
      } else {
        setError("Invalid credentials. Please try again.");
        setisLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setisLoading(false);
    }
  };

  const [userContentFirst, setuserContentFirst] = useState(0);
  const [userContentSecond, setuserContentSecond] = useState(6);

  const toggleNext = () => {
    setuserContentFirst((prev) => prev + 6);
    setuserContentSecond((prev) => prev + 6);
  };

  const togglePrev = () => {
    if (userContentFirst != 0) {
      setuserContentFirst((prev) => prev - 6);
      setuserContentSecond((prev) => prev - 6);
    }
  };

  const handleLogout = async () => {
    // Clear token from localStorage

    const logoutService = await LogoutService.logoutService();

    try {
      if (logoutService?.result == true) {
        await localStorage.removeItem("token");
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

  return (
    <>
    
      <nav className="navbar navbar-expand-md navbar-light sticky-top mynavbar">
        <div className="container">
          {/* <Link href="/"> */}
          <a
            style={{
              color: "var(--main)",
              fontSize: "1.4rem",
            }}
            href="/"
            className="navbar-brand"
          >
            <i className="bi bi-envelope-paper-heart" /> Nvite Me
          </a>
          {/* </Link> */}
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
                <i className="bi bi-envelope-paper-heart" /> Nvite Me
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
                <li className="nav-item">
                  <Link href="/#home" className="nav-link">
                    <span data-hover="Home">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#project" className="nav-link">
                    <span data-hover="Project">Project</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#fiture" className="nav-link">
                    <span data-hover="Fiture">Fiture</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#tutorial" className="nav-link">
                    <span data-hover="Tutorial">Tutorial</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#design" className="nav-link">
                    <span data-hover="Design">Design</span>
                  </Link>
                </li>
                {/* Add other list items */}
              </ul>
              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item ml-lg-4">
                  <div className="custom-btn-group">
                    {isLoadingMain ? (
                      <div
                        style={{
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <ReactLoading
                          type={"spinningBubbles"}
                          color={"#116A7B"}
                          height={30} // Specify a fixed size
                          width={30} // Specify a fixed size
                        />
                      </div>
                    ) : (
                      <>
                        {token && isUserLoggedIn ? (
                          <div className="flex">
                            <button
                              onClick={handleLogout}
                              className="btn custom-btn login-btn custom-btn-bg custom-btn-link"
                            >
                              <i className="bi bi-box-arrow-in-right " /> Logout
                            </button>
                          </div>
                        ) : (
                          <div className="flex">
                            <Link href="/login">
                              <span className="btn custom-btn login-btn custom-btn-bg custom-btn-link">
                                <i className="bi bi-box-arrow-in-right " />{" "}
                                Login
                              </span>
                            </Link>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {token && isUserLoggedIn ? (
        <section className="home" id="home">
          <div className="container">
            <div className="col mb-3 d-flex justify-content-center">
              <h2>My Invitation</h2>
            </div>

            <div
              className="card justify-content-center"
              style={{
                // height: "80vh",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                border: "none",
                borderRadius: "12px",
                padding: "10px",
              }}
            >
              {/* {" "} */}
              {/* <h2 style={{ textAlign: "center" }}>My Invitations List</h2> */}
              <div className="col d-flex justify-content-between">
                <Link
                  href="/create"
                  className="btn custom-btn login-btn custom-btn-bg custom-btn-link text-left"
                  style={{
                    marginLeft: "15px",
                    width: "135px",
                    //   marginBottom: "0px",
                  }}
                >
                  <i className="bi bi-pencil " /> Create
                </Link>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "15px",
                  }}
                >
                  <input
                    style={{
                      borderColor: "black",
                      borderRadius: 15,
                      paddingLeft: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="   Search Your Project"
                    onChange={(val) => {
                      setSearchQueary(val.target.value);
                      setPage(0);
                    }}
                  />
                  <div style={{ width: 5 }}></div>
                  <button
                    onClick={() => {
                      handleGetMyProjects(page, 4, searchQueary);
                      console.log(totalPages);
                    }}
                    className="btn custom-btn login-btn custom-btn-bg custom-btn-link text-left"
                  >
                    {" "}
                    <i className="bi bi-search " />
                  </button>
                </div>
              </div>
              <div
                style={{
                  // height: '90vh',
                  paddingBottom: "30px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  padding: "10px",
                }}
              >
                <table className="align-items-center ">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Title</th>
                      <th>Theme</th>
                      <th>Music</th>
                      <th>Create Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  {isLoading ? (
                    <tbody>
                      <tr>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "50px", // Height can be adjusted as needed
                            }}
                          >
                            <ReactLoading
                              type={"spinningBubbles"}
                              color={"#116A7B"}
                              height={50}
                              width={50}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <>
                      <tbody>
                        {data.length > 0 ? (
                          data.map((item, index) => (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              {/* <td>{item.nameProject}</td> */}
                              <td>{item.title}</td>
                              <td>{item.theme.theme}</td>
                              <td>{item.theme.music}</td>
                              <td>
                                {new Date(item.date).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}{" "}
                                {new Date(item.date).toLocaleTimeString(
                                  "en-GB",
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </td>
                              <td>
                                <button
                                  name="Preview"
                                  className="btn btn btn-outline-info btn-sm"
                                  style={{ margin: "3px" }}
                                >
                                  <i className="bi bi-eye " />
                                </button>
                                <button
                                  className="btn btn btn-outline-success btn-sm"
                                  style={{ margin: "3px" }}
                                  onClick={() => getIdForEdit(item.id)}
                                >
                                  <i className="bi bi-pencil-square " />
                                </button>
                                {/* <button className="btn btn btn-outline-danger btn-sm"
                                                        style={{ margin: "3px" }}><i className="bi bi-trash " /></button> */}
                              </td>
                            </tr>
                          ))
                        ) : data.length == 0 ? (
                          <tr>
                            <td colSpan={6} style={{ textAlign: "center" }}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "50px", // Height can be adjusted as needed
                                }}
                              >
                                <h4 style={{ color: "#116A7B" }}>
                                  Project Not Found
                                </h4>
                              </div>
                            </td>
                          </tr>
                        ) : null}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={7}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              {page + 1 > 1 ? (
                                <button
                                  className="color-main btn btn-sm"
                                  onClick={handlePreviousPage}
                                >
                                  {"<< Previous Page"}
                                </button>
                              ) : (
                                // <>.</>
                                <div style={{ color: "white" }}></div>
                              )}
                              {page + 1 < totalPages ? (
                                <button
                                  className="color-main btn btn-sm"
                                  onClick={handleNextPage}
                                >
                                  {"Next Page >>"}
                                </button>
                              ) : (
                                <div style={{ color: "white" }}></div>
                              )}
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </>
                  )}
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : (
        SectionHero()
      )}
      {SectionCarousell()}

      {SectionUserReview()}
      {SectionFeature()}
      {SectionTutorial()}

      <section className="design" id="design">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              {/* <span>Memori kisah kami</span> */}
              <h2>Our Design</h2>
              <p>
                The Nvite Me Digital Invitation website has a lot of design that
                can use easily.
              </p>
            </div>
          </div>
          <a className="view-all-btn" href="design/list-design.html">
            View all &gt;&gt;
          </a>
          <div className="scrolling-wrapper">
            <div className="card card-block  ">
              <img src="image/background/prewed1.jpeg" alt="Card Image" />
              <div className="card-buttons">
                <button className="view-btn">
                  <i className="bi bi-eye" /> Preview
                </button>
                <button className="add-btn">
                  <i className="bi bi-pencil-square" /> Create Now
                </button>
              </div>
            </div>
            <div className="card card-block  ">
              <img src="image/background/prewed2.jpeg" alt="Card Image" />
              <div className="card-buttons">
                <button className="view-btn">
                  <i className="bi bi-eye" /> Preview
                </button>
                <button className="add-btn">
                  <i className="bi bi-pencil-square" /> Create Now
                </button>
              </div>
            </div>
            <div className="card card-block  ">
              <img src="image/background/prewed3.jpeg" alt="Card Image" />
              <div className="card-buttons">
                <button className="view-btn">
                  <i className="bi bi-eye" /> Preview
                </button>
                <button className="add-btn">
                  <i className="bi bi-pencil-square" /> Create Now
                </button>
              </div>
            </div>
            <div className="card card-block  ">
              <img src="image/background/prewed5.jpeg" alt="Card Image" />
              <div className="card-buttons">
                <button className="view-btn">
                  <i className="bi bi-eye" /> Preview
                </button>
                <button className="add-btn">
                  <i className="bi bi-pencil-square" /> Create Now
                </button>
              </div>
            </div>
            <div className="card card-block  ">
              <img src="image/background/prewed6.jpeg" alt="Card Image" />
              <div className="card-buttons">
                <button className="view-btn">
                  <i className="bi bi-eye" /> Preview
                </button>
                <button className="add-btn">
                  <i className="bi bi-pencil-square" /> Create Now
                </button>
              </div>
            </div>
            {/* <div className="card card-block card-2">
                    <img src="image/background/prewed4.jpeg" alt="Card Image" />
                    <div className="card-buttons">
                        <button href="design/list-design.html" className="view-btn"><i className="bi bi-eye" /> Preview</button>
                        <button href="login/login.html" className="add-btn"><i className="bi bi-pencil-square" /> Create Now</button>
                    </div>
                    </div>  */}
          </div>
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>

    </>
  );

  function navbarBootstrap() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  function SectionUserReview() {
    return (
      <section
        style={{
          position: "relative",
          height: "80vh",
        }}
        // className="project"
        id="project"
      >
        <div
          style={{
            background: `url("/image/background/prewed5.jpeg") no-repeat center center`,
            backgroundSize: "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            opacity: 0.4,
            transition: "transform 0.5s ease", // Smooth rotation transition
          }}
          className="responsive-rotate"
        />
        <div
          style={{
            backgroundColor: "var(--main3)",
            backgroundSize: "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            opacity: 0.6,
            transition: "transform 0.5s ease", // Smooth rotation transition
          }}
          className="responsive-rotate"
        />
        <div
          style={{
            backgroundColor: "transparent",
            backgroundSize: "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            transition: "transform 0.5s ease", // Smooth rotation transition
          }}
          className="responsive-rotate"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div
                style={{ width: 700, marginTop: "2rem" }}
                className="text-center"
              >
                {/* <span>Memori kisah kami</span> */}
                <h2
                  style={{
                    fontSize: 36,
                    color: "var(--main)",
                    fontWeight: "bold",
                    fontFamily: "Maven Pro",
                    letterSpacing: 0.5,
                  }}
                >
                  #25.453{" "}
                  <span style={{ fontSize: 36, color: "pink" }}>
                    {" "}
                    Pasangan Berbahagia
                  </span>
                </h2>
                <p style={{ fontSize: 12, fontFamily: IConstantFont.poppins }}>
                  {`Dari luar dan dalam negeri sudah membuat undangannya. giliran kamu untuk mencoba ;)`}
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              {dataCard
                .slice(userContentFirst, userContentSecond)
                .map((item) => {
                  return (
                    <div
                      style={{
                        height: 170,
                        marginTop: 15,
                      }}
                      className="col-4"
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: 15,
                          position: "relative",
                        }}
                      >
                        <img
                          src={item.img}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          alt=""
                        />

                        {/* Overlay div */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            opacity: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="row mt-2 justify-content-center">
              <div
                style={{}}
                className="col-6 p-3 align-items-center justify-content-center d-flex"
              >
                {userContentFirst !== 0 ? (
                  <button
                    style={{
                      backgroundColor: "var(--main)",
                    }}
                    onClick={() => {
                      togglePrev();
                    }}
                    className="btn btn-success me-2"
                  >
                    {`<< Prev `}
                  </button>
                ) : null}

                <button
                  style={{
                    backgroundColor: "var(--main)",
                  }}
                  onClick={() => {
                    toggleNext();
                  }}
                  className="btn btn-success"
                >
                  {"Next >>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function SectionFeature() {
    return (
      <section style={{ display: "flex" }} id="fiture" className="fiture">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              {/* <span>Memori kisah kami</span> */}
              <h2>Our Features</h2>
              <p>
                The Nvite Me Digital Invitation website is accompanied by
                various features that can make it easier for you to invite the
                people closest to you to your special event.
              </p>
            </div>
          </div>
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-brush" />
                    &nbsp; Elegant &amp; Impressive Design
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Invitations are designed elegantly &amp; impressively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-list-ol" />
                    &nbsp; Unlimited Number of Guests
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    The Number of Guests can be adjusted as request without
                    additional cost{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-clipboard-check" />
                    &nbsp; Custom Guests Name
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    The Invitation Guest's Name can be customize
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-phone" />
                    &nbsp; Flexible Access
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    All can access the invitation through website
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-qr-code-scan" />
                    &nbsp; Simply Guest Presence
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Barcode Scan for Confirm The Invitation presence
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-file-earmark-music" />
                    &nbsp; Music Background
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Strengthen the impression of your special event with your
                    choice of music on your invitations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-images" />
                    &nbsp; Photo Gallery
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Share your special moment through Photo or Video with your
                    guest.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title mt-3 mb-3">
                    <i className="bi bi-envelope-paper-heart" />
                    &nbsp; Wedding Wishes
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Leave an invitation to share impressions &amp; messages or
                    prayers for your happy day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function SectionTutorial() {
    return (
      <section className="" id="tutorial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center mt-5">
              {/* <span>Memori kisah kami</span> */}
              <h2>Reserve Tutorial</h2>
              <p>
                The Nvite Me Digital Invitation website is easy to use with some
                video and step that we already prepared
              </p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="container bg-dark video-tutorial">VIDEO</div>
          </div>
          <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-card-list" />
                  <h6 className="card-title mt-3 mb-3">1. Choose Package</h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Choose a package that suits your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-cash-coin" />
                  <h6 className="card-title mt-3 mb-3">2. Payment</h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Make orders &amp; payments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-pencil" />
                  <h6 className="card-title mt-3 mb-3">3. Fill Data Form</h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Fill in your data, your partner, events &amp; upload photos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-send" />
                  <h6 className="card-title mt-3 mb-3">
                    4. Share Your Invitation
                  </h6>
                  <p className="mt-3 mb-0 pb-0 text-center">
                    Review your invitation and once the design is complete, you
                    can start distributing your website link to invited guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function SectionCarousell() {
    return (
      <section
        style={{
          backgroundColor: "white",
          display: "flex",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          overflowX: "auto", // Enables horizontal scrolling
          overflowY: "hidden", // Hides vertical overflow
          // whiteSpace: "nowrap", // Prevents line break for horizontal scroll
          scrollPaddingLeft: 20, // Ensures the first item isn’t cut off
        }}
      >
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
          }}
          className=""
        >
          <div
            style={{
              display: "inline-flex",
              animation: "scroll 120s linear infinite",
            }}
            className=""
          >
            {dataCard.map((item, index) => (
              <div
                key={index}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  margin: "0 10px",
                  width: 390,
                  height: 190,
                  position: "relative",
                  flex: "0 0 auto",
                }}
                className=""
              >
                <img
                  src={item.img}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="" />
                <div
                  style={{
                    justifyContent: "start",
                    alignItems: "center",
                    textAlign: "start",
                    width: 400,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    // width: "100%",
                    backgroundColor: "black",
                    opacity: 0.7,
                  }}
                  className="content"
                >
                  <small>{item.title}</small>
                  <img
                    src={`https://picsum.photos/seed/wedding${index}/200/300`}
                    alt=""
                    style={{
                      height: 100,
                      marginLeft: 20,
                      width: 100,
                      borderRadius: 20,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function SectionHero() {
    return (
      <section
        style={{
          backgroundColor: "var(--main3)",
          width: "100%",
          paddingRight: layout.isPhoneScreen || layout.isTabletScreen ? 0 : 180,
        }}
        className="full-screen cover d-lg-flex justify-content-center align-items-center mt-3"
        id="home"
      >
        <div className="container">
          {isLoadingMain ? (
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <ReactLoading
                type={"spinningBubbles"}
                color={"#116A7B"}
                height={100} // Specify a fixed size
                width={100} // Specify a fixed size
              />
            </div>
          ) : (
            <div className="row dflex " style={{}}>
              {heroDesc()}
              {imgHero()}
            </div>
          )}
        </div>
        <div
          className="col-12 text-center"
          style={{
            position: "absolute",
            background:
              layout.isPhoneScreen || layout.isTabletScreen
                ? "linear-gradient(to top, var(--main3) 70%, transparent)"
                : "none",
            height: 80,
            bottom: -100,
            left: 0,
          }}
        />
        <div
          className="col-12 text-center"
          style={{
            position: "absolute",

            height: 80,
            width: "100%",
            bottom: -120,
            left: 0,
          }}
        ></div>
      </section>
    );
  }

  function heroDesc() {
    return (
      <div className="col-lg-8 col-md-8 col-12 col-sm-12 d-flex align-items-center">
        <div className="cover-text">
          <h2 className="animated animated-text">
            <span
              style={{ color: "var(--main)", letterSpacing: 0.4 }}
              className="mt-5 first-animated-word"
            >
              No #1 Platform
            </span>
          </h2>
          <h2 className="animated animated-text">
            <span
              style={{
                fontFamily: IConstantFont.Forum,
              }}
              className="mt-5 first-animated-word"
            >
              Undangan Digital
            </span>
          </h2>

          <p
            style={{
              fontFamily: IConstantFont.poppins,
              fontSize: 14,

              letterSpacing: 0.3,
            }}
          >
            Buat undangan dalam hitungan menit, unduh atau bagikan undangan Anda
            dengan RSVP online. Kami pandai mengatur tamu pernikahan Anda di
            hari istimewa Anda
          </p>

          <small
            style={{
              fontSize: "1.5rem",
              // color:"var(--main)",
              fontWeight: "normal",
            }}
            className="medium-text"
          >
            <span
              style={{
                // fontWeight: "bold",
                letterSpacing: 0.5,
                // fontFamily: IConstantFont.poppins,
              }}
              className="mobile-block"
            >
              Undangan menjadi lebih modern, keren dan efisien
            </span>
          </small>
          <div style={{}} className="custom-btn-group mt-4">
            <a
              href="design/list-design.html"
              className="btn mr-lg-2 custom-btn"
              style={{
                backgroundColor: "var(--main)",
                color: "#ffff",
              }}
            >
              <i style={{}} className="bi bi-whatsapp me-3" /> Pesan Sekarang
            </a>
            {/* <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a> */}
          </div>
        </div>
      </div>
    );
  }

  function imgHero() {
    return (
      <div
        style={{
          marginTop: -40,
          marginBottom: 40,
        }}
        className="row justify-content-center col-lg-4 col-md-12 col-12"
      >
        <div className="cover-image">
          <div className="">
            <img
              style={{
                width:
                  useLayout().isTabletScreen || useLayout().isPhoneScreen
                    ? "105%"
                    : "160%",
              }}
              src="/image/background/landingPage/main-banner.gif"
              className=""
              alt="Mac Frame"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardPage;
