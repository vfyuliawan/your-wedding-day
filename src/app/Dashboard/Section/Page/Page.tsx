import React, { useState, useEffect } from "react";
import MyprojectService from "../../Domain/Service/MyprojectService/MyprojectService";
import { ModelMyprojectRequestInterface } from "../../Domain/Models/ModelRequest/MyprojectRequest/ModelMyprojectRequestInterface";
import { ProjectModelMyprojectResponseInterface } from "../../Domain/Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import Cryptr from "cryptr";
import CekUserLoginService from "../../Domain/Service/CekUserLoginService/CekUserLoginService";
import Link from "next/link";
import LogoutService from "../../Domain/Service/LogoutService/LogoutService";
import ReactLoading from "react-loading";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchQueary, setSearchQueary] = useState("");
  const [data, setData] = useState<ProjectModelMyprojectResponseInterface[]>(
    []
  );
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingMain, setisLoadingMain] = useState(false);

  useEffect(() => {
    if (searchQueary.length > 0) {
      handleGetMyProjects(page, 5, searchQueary);
    }else{
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setisLoadingMain(true);
        setToken(storedToken);
        checkUserLogin();
        handleGetMyProjects(page, 5, "");
      }
    }
  }, [searchQueary]);

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
    router.push(`/content-setting?projectId=${projectId}`);
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
          <a href="/" className="navbar-brand">
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
                          <ul className="flex">
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
                                <i className="bi bi-box-arrow-in-right " />{" "}
                                Login
                              </span>
                            </Link>
                          </ul>
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
            <div className="col mb-3 d-flex justify-content-between">
              {/* <div className="col-md-7 col-10 text-left">  */}
              {/* <h2>My Invitation</h2> */}
              <Link
                href="/content-setting"
                className="btn custom-btn login-btn custom-btn-bg custom-btn-link text-left"
                style={{
                  marginLeft: "15px",
                  width: "135px",
                  marginBottom: "8px",
                }}
              >
                <i className="bi bi-pencil " /> Create
              </Link>
              <input
              style={{borderColor:'#116A7B', borderRadius:15, paddingLeft:5}}
                placeholder="  Search Your Project"
                onChange={(val) => {
                  setSearchQueary(val.target.value);
                  setPage(0);
                }}
              />
              {/* </div> */}
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
              {" "}
              <h2 style={{ textAlign: "center" }}>My Invitations List</h2>
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
                        {data ? (
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
                        ) : (
                          <tr>
                            <td colSpan={6} style={{ textAlign: "center" }}>
                              Not Found
                            </td>
                          </tr>
                        )}
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
                                <>.</>
                              )}
                              {page + 1 < totalPages ? (
                                <button
                                  className="color-main btn btn-sm"
                                  onClick={handleNextPage}
                                >
                                  {"Next Page >>"}
                                </button>
                              ) : (
                                <>.</>
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
        <section
          className="cover full-screen d-lg-flex justify-content-center align-items-center mt-3"
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
              <div className="row dflex ">
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                  <div className="cover-text">
                    <small className="small-text">
                      Welcome to{" "}
                      <span className="mobile-block">
                        Wedding Invitation website!
                      </span>
                    </small>
                    <h2 className="animated animated-text">
                      <span className="mr-2 first-animated-word">We are</span>
                      <div className="animated-info">
                        <span className="animated-item">Nvite Me</span>
                        <span className="animated-item">
                          Wedding Invitation
                        </span>
                      </div>
                    </h2>
                    <p>
                      Create invitations for free in minutes, download or share
                      your invitations with RSVP online. We are good in organize
                      your wedding guest at your special day.
                    </p>
                    <div className="custom-btn-group mt-4">
                      <a
                        href="design/list-design.html"
                        className="btn mr-lg-2 custom-btn"
                      >
                        <i className="bi bi-card-list" /> Design
                      </a>
                      {/* <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a> */}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center col-lg-5 col-md-12 col-12">
                  <div className="cover-image">
                    <div className="mac-frame">
                      <img
                        src="image/background/prewed-bg.jpg"
                        className="mac-image"
                        alt="Mac Frame"
                      />
                      <div className="iphone-frame">
                        <img
                          src="image/background/prewed2.jpeg"
                          className="iphone-img-frame"
                          id="iphone-img-frame"
                          alt="iPhone Frame"
                        />
                        <img
                          className="iphone-image iphone-img-image"
                          src="image/background/iphone.png"
                          alt="iPhone Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="project" id="project">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-10 text-center">
              {/* <span>Memori kisah kami</span> */}
              <h2>Our Projects</h2>
              <p>
                The Nvite Me Digital Invitation website has a lot of projects
                and invitation templates
              </p>
            </div>
          </div>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="image/project/project-image01.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active">
                <img
                  src="image/project/project-image02.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active">
                <img
                  src="image/project/project-image03.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active">
                <img
                  src="image/project/project-image04.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section id="fiture" className="fiture">
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
      <section className="tutorial" id="tutorial">
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
    </>
  );
};

export default DashboardPage;
