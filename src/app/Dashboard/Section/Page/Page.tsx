const DashboardPage = () => {
    return (
        <> 
            <section className="cover full-screen d-lg-flex justify-content-center align-items-center mt-3" id="home">
                <div className="container">
                <div className="row dflex">
                    <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="cover-text">
                        <small className="small-text">Welcome to <span className="mobile-block">Wedding Invitation website!</span></small>
                        <h2 className="animated animated-text">
                        <span className="mr-2 first-animated-word">We are</span> 
                        <div className="animated-info">
                            <span className="animated-item">Nvite Me</span>
                            <span className="animated-item">Wedding Invitation</span>
                        </div>
                        </h2> 
                        <p>Create invitations for free in minutes, download or share your invitations with RSVP online. We are good in organize your wedding guest at your special day.</p>
                        <div className="custom-btn-group mt-4">
                        <a href="design/list-design.html" className="btn mr-lg-2 custom-btn"><i className="bi bi-card-list" /> Design</a>
                        {/* <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a> */}
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center col-lg-5 col-md-12 col-12">
                    <div className="cover-image">
                        <div className="mac-frame">
                        <img src="image/background/prewed-bg.jpg" className="mac-image" alt="Mac Frame" />
                        <div className="iphone-frame">
                            <img src="image/background/prewed2.jpeg" className="iphone-img-frame" id="iphone-img-frame" alt="iPhone Frame" />
                            <img className="iphone-image iphone-img-image" src="image/background/iphone.png" alt="iPhone Image" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="project" id="project">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-10 text-center">
                    {/* <span>Memori kisah kami</span> */}
                    <h2>Our Projects</h2>
                    <p>The Nvite Me Digital Invitation website has a lot of projects and invitation templates</p>
                    </div>
                </div>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="image/project/project-image01.png" className="d-block w-100" alt="..." />
                    </div> 
                    <div className="carousel-item active">
                        <img src="image/project/project-image02.png" className="d-block w-100" alt="..." />
                    </div> 
                    <div className="carousel-item active">
                        <img src="image/project/project-image03.png" className="d-block w-100" alt="..." />
                    </div> 
                    <div className="carousel-item active">
                        <img src="image/project/project-image04.png" className="d-block w-100" alt="..." />
                    </div> 
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
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
                    <p>The Nvite Me Digital Invitation website is accompanied by various features that can make it easier for you to invite the people closest to you to your special event.</p>
                    </div>
                </div>
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">       
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-brush" />&nbsp; 
                            Elegant &amp; Impressive Design  
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Invitations are designed elegantly &amp; impressively.</p>
                        </div>
                    </div>
                    </div> 
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-list-ol" />&nbsp; 
                            Unlimited Number of Guests  
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">The Number of Guests can be adjusted as request without additional cost </p>
                        </div>
                    </div>
                    </div> 
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-clipboard-check" />&nbsp; 
                            Custom Guests Name  
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">The Invitation Guest's Name can be customize</p>
                        </div>
                    </div>
                    </div> 
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-phone" />&nbsp; 
                            Flexible Access  
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">All can access the invitation through website</p>
                        </div>
                    </div>
                    </div> 
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-qr-code-scan" />&nbsp;
                            Simply Guest Presence  
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Barcode Scan for Confirm The Invitation presence</p>
                        </div>
                    </div>
                    </div> 
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-file-earmark-music" />&nbsp; 
                            Music Background  
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Strengthen the impression of your special event with your choice of music on your invitations.</p>
                        </div>
                    </div>
                    </div> 
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-images" />&nbsp; 
                            Photo Gallery  
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Share your special moment through Photo or Video with your guest.</p>
                        </div>
                    </div>
                    </div> 
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">             
                        <h6 className="card-title mt-3 mb-3">
                            <i className="bi bi-envelope-paper-heart" />&nbsp; 
                            Wedding Wishes   
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Leave an invitation to share impressions &amp; messages or prayers for your happy day.</p>
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
                    <p>The Nvite Me Digital Invitation website is easy to use with some video and step that we already prepared</p>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="container bg-dark video-tutorial">
                    VIDEO
                    </div>
                </div>
                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">       
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">   
                        <i className="bi bi-card-list" />          
                        <h6 className="card-title mt-3 mb-3">
                            1. Choose Package
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Choose a package that suits your needs.</p>
                        </div>
                    </div>
                    </div>  
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">   
                        <i className="bi bi-cash-coin" />          
                        <h6 className="card-title mt-3 mb-3">
                            2. Payment 
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Make orders &amp; payments.</p>
                        </div>
                    </div>
                    </div>  
                    <div className="col mt-3">
                    <div className="card">
                        <div className="card-body text-center">   
                        <i className="bi bi-pencil" />          
                        <h6 className="card-title mt-3 mb-3">
                            3. Fill Data Form
                        </h6>
                        <p className="mt-3 mb-0 pb-0 text-center">Fill in your data, your partner, events &amp; upload photos.</p>
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
                        <p className="mt-3 mb-0 pb-0 text-center">Review your invitation and once the design is complete, you can start distributing your website link to invited guests.</p>
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
                    <p>The Nvite Me Digital Invitation website has a lot of design that can use easily.</p>
                    </div>
                </div>
                <a className="view-all-btn" href="design/list-design.html">View all &gt;&gt;</a>
                <div className="scrolling-wrapper">
                    <div className="card card-block  ">
                    <img src="image/background/prewed1.jpeg" alt="Card Image" />
                    <div className="card-buttons">
                        <button className="view-btn"><i className="bi bi-eye" /> Preview</button>
                        <button className="add-btn"><i className="bi bi-pencil-square" /> Create Now</button>
                    </div>
                    </div>
                    <div className="card card-block  ">
                    <img src="image/background/prewed2.jpeg" alt="Card Image" />
                    <div className="card-buttons">
                        <button className="view-btn"><i className="bi bi-eye" /> Preview</button>
                        <button className="add-btn"><i className="bi bi-pencil-square" /> Create Now</button>
                    </div>
                    </div>
                    <div className="card card-block  ">
                    <img src="image/background/prewed3.jpeg" alt="Card Image" />
                    <div className="card-buttons">
                        <button className="view-btn"><i className="bi bi-eye" /> Preview</button>
                        <button className="add-btn"><i className="bi bi-pencil-square" /> Create Now</button>
                    </div>
                    </div>
                    <div className="card card-block  ">
                    <img src="image/background/prewed5.jpeg" alt="Card Image" />
                    <div className="card-buttons">
                        <button className="view-btn"><i className="bi bi-eye" /> Preview</button>
                        <button className="add-btn"><i className="bi bi-pencil-square" /> Create Now</button>
                    </div>
                    </div>
                    <div className="card card-block  ">
                    <img src="image/background/prewed6.jpeg" alt="Card Image" />
                    <div className="card-buttons">
                        <button className="view-btn"><i className="bi bi-eye" /> Preview</button>
                        <button className="add-btn"><i className="bi bi-pencil-square" /> Create Now</button>
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