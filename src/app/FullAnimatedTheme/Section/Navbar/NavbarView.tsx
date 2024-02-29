import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const NavbarView = (props: {
  themeName: string;
  activeIndex?: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) => {
  const bgColor = new ThemeColorClass(props.themeName);

  const activeElementRef = useRef<any>(null);

  const imgPage: string[] = [
    "bi bi-house-door-fill",
    "bi bi-blockquote-left",
    "bi bi-valentine2",
    "bi bi-calendar2-week-fill",
    "bi bi-geo-alt",
    "bi bi-camera-fill",
    "bi bi-card-image",
    "bi bi-gift-fill",
  ];

  useEffect(() => {
    if (activeElementRef.current) {
      activeElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [props.activeIndex]);

  return (
    <nav
      className="navbar-expand-md sticky-bottom-navbar our-navbbar"
      style={{
        backgroundColor: "transparent",
        height: "5rem",
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
          width: 400,
          borderRadius: "30px",
          paddingTop: 10,
          paddingBottom: 10,
          opacity: 0.8,
          justifyContent: "center",
          boxShadow: "0 -10px 10px rgba(0, 0, 0, 0.7)",
        }}
      >
        <div
          style={{
            borderRadius: "0px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "row",
            width: 350,
          }}
        >
          {imgPage.map((item, index) => {
            return (
              <div
                ref={props.activeIndex === index ? activeElementRef : null}
                onClick={() => {
                  props.setActiveIndex(index);
                }}
                style={{ minWidth: 70 }}
              >
                <i
                  className={item}
                  style={{
                    fontSize: props.activeIndex === index ? "2.2rem" : "1.3rem",
                    marginTop: 4,
                    marginBottom: 4,
                  }}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
