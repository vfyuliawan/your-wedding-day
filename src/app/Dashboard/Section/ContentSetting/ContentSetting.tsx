import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import FooterDashboard from "../../Components/Footer/Footer";
import NavbarDashboard from "../../Components/Navbar/Navbar";

const CMSDashboard = () => {
    return (
        <>
            <NavbarDashboard />
            <div  className="setting-content"> 
                <div className="container">
                    <div className="row justify-content-center ">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="card ">
                        <img src="image/background/prewed-bg.jpg" />
                        <div className="card-buttons">
                            <button className="view-btn"><i className="bi bi-eye" /> Preview</button>
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
                            <input type="text" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="titleCover" className="form-label">Image Cover</label>
                            <input type="file" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="titleCover" className="form-label">Event Date</label>
                            <input type="date" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3 form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Home
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="mb-3">
                            <label htmlFor="titleCover" className="form-label">Home Quote Title</label>
                            <input type="text" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="titleCover" className="form-label">Home Quote</label>
                            <input type="text" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="titleCover" className="form-label">Image Cover</label>
                            <input type="file" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div> 
                            <div className="mb-3 form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
                            <input type="text" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div> 
                            <div className="mb-3">
                            <label htmlFor="titleCover" className="form-label">Image Hero</label>
                            <input type="file" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div> 
                            <div className="mb-3">
                            <label htmlFor="titleCover" className="form-label">Event Date</label>
                            <input type="date" className="form-control" id="titleCover" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3 form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
                                    <input type="text" className="form-control" id="titleCover" placeholder="Akad Nikah" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Place</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="Le Meridien Hotel" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Location</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="https://maps.app.goo.gl/asdfgh" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Image Event</label>
                                    <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Event Date</label>
                                    <input type="date" className="form-control" id="titleCover" placeholder="name@example.com" />
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
                                    <input type="text" className="form-control" id="titleCover" placeholder="Akad Nikah" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Place</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="Le Meridien Hotel" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Location</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="https://maps.app.goo.gl/asdfgh" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Image Event</label>
                                    <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Event Date</label>
                                    <input type="date" className="form-control" id="titleCover" placeholder="name@example.com" />
                                    </div> 
                                    <div className="mb-3">
                                    <button className="btn btn-warning">Apply</button>
                                    </div>
                                </div>
                                </div>
                            </div> 
                            </div>
                            <div className="mb-3 form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
                                    <input type="text" className="form-control" id="titleCover" placeholder="Mr. Ken" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Mother's Name</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="Mrs. Barbie" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Name Mempelai Pria</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="Mr. John Doe" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Image</label>
                                    <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel" />
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
                                    <input type="text" className="form-control" id="titleCover" placeholder="Mr. Ken" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Mother's Name</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="Mrs. Barbie" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Name Mempelai Wanita</label>
                                    <input type="text" className="form-control" id="titleCover" placeholder="Mr. John Doe" />
                                    </div> 
                                    <div className="mb-3">
                                    <label htmlFor="titleCover" className="form-label">Image Female</label>
                                    <input type="file" className="form-control" id="titleCover" placeholder="Le Meridien Hotel" />
                                    </div>   
                                </div>
                                </div>
                            </div> 
                            </div>
                            <div className="mb-3 form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
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
            <FooterDashboard />
        </>
    );
  };
  
  export default CMSDashboard;