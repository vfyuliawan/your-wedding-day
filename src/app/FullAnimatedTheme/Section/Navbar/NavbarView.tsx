import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const NavbarView = (props: {
  themeName: string;
  activeIndex?: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) => {
  const bgColor = new ThemeColorClass(props.themeName);

  const activeElementRef = useRef<any>(null);

  const imgPage = [
    {title: "Bride", icon:"bi bi-person-hearts"},
    {title: "Quotes", icon:"bi bi-blockquote-left"},
    {title: "Broom", icon:"bi bi-gender-male"},
    {title: "Ride", icon:"bi bi-gender-female"},
    {title: "Love", icon:"bi bi-valentine2"},
    {title: "Info", icon:"bi bi-calendar2-week-fill"},
    {title: "Lokasi", icon:"bi bi-geo-alt"},
    {title: "Story", icon:"bi bi-camera-fill"},
    {title: "Galery", icon:"bi bi-card-image"},
    {title: "Gifts", icon:"bi bi-gift-fill"},
    {title: "RSVP", icon:"bi bi-envelope-arrow-up"},
    {title: "Thanks", icon:"bi bi-bookmark-heart-fill"},
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
        height: "6rem",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        className="row our-nav"
        style={{
          backgroundColor: bgColor.color.secondary,
          position: "absolute",
          bottom: 0,
          height:'80%',
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
            overflowY: "hidden", 
            overflowX: "auto", 
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
                style={{ minWidth: 70, height:50, display:'flex', flexDirection:'column', }}
              >
                <i
                  className={item.icon}
                  style={{
                    fontSize: props.activeIndex === index ? "2.2rem" : "1.3rem",
                    marginTop: 4,
                    marginBottom: 4,
                    color: props.activeIndex === index ? 'black': 'white'
                  }}
                ></i>
                <p style={{fontSize:11}}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
