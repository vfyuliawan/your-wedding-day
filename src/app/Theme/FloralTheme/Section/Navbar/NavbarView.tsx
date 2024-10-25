const NavbarView = () => {
  return (
    <nav
      className="navbar-expand-md sticky-bottom-navbar our-navbbar"
      style={{
        // backgroundColor: "hsl(0, 74%, 18%)",
        // // opacity: 0.7,
        backgroundColor:'transparent',
        height: "5rem",
        visibility: 'hidden',
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        className="row our-nav"
        style={{
          position: "absolute",
          top: -15,
          width: "90%",
          borderRadius: "30px",
          opacity:0.8,
          justifyContent:'center',
          boxShadow: "0 -10px 10px rgba(0, 0, 0, 0.7)" // Add this line for shadow

        }}
      >
        <div className="col-10">
          <div className="row" style={{ borderRadius: "20px" }}>
            <div className="col-3 mt-4 mb-4">
              <i
                className="bi bi-house-door-fill"
                style={{ fontSize: "2rem" }}
              ></i>
            </div>
            <div className="col-3 mt-4 mb-4">
              <i className="bi bi-valentine2" style={{ fontSize: "2rem" }}></i>
            </div>
            <div className="col-3 mt-4 mb-4">
              <i
                className="bi bi-calendar2-week-fill"
                style={{ fontSize: "2rem" }}
              ></i>
            </div>
            <div className="col-3 mt-4 mb-4">
              <i className="bi bi-camera-fill" style={{ fontSize: "2rem" }}></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
