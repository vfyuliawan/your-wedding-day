import { ThemeColorClass } from "@/app/Constant/ThemeColor";

const NavbarView = (props: {themeName: string}) => {
  const bgColor = new ThemeColorClass(props.themeName);

  return (
    <nav
      className="navbar-expand-md sticky-bottom-navbar our-navbbar"
      style={{
        backgroundColor: "transparent",
        height: "5rem",
        // visibility: 'hidden',
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        className="row our-nav"
        style={{
          backgroundColor: bgColor.color.secondary,
          position: "absolute",
          top: 20,
          width: "90%",
          borderRadius: "30px",
          paddingTop:10,
          paddingBottom:10,
          opacity: 0.8,
          justifyContent: "center",
          boxShadow: "0 -10px 10px rgba(0, 0, 0, 0.7)", // Add this line for shadow
        }}
      >
        <div className="col-10">
          <div className="row" style={{ borderRadius: "0px" }}>
            <div className="col-3 ">
              <i
                className="bi bi-house-door-fill"
                style={{ fontSize: "1.3rem", marginTop: 4, marginBottom:4 }}
              ></i>
            </div>
            <div className="col-3 ">
              <i
                className="bi bi-valentine2"
                style={{ fontSize: "1.3rem", marginTop: 4, marginBottom:4 }}
              ></i>
            </div>
            <div className="col-3 ">
              <i
                className="bi bi-calendar2-week-fill"
                style={{ fontSize: "1.3rem", marginTop: 4, marginBottom:4 }}
              ></i>
            </div>
            <div className="col-3 ">
              <i
                className="bi bi-camera-fill"
                style={{ fontSize: "1.3rem", marginTop: 4, marginBottom:4 }}
              ></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
