import React, { useRef, useEffect } from "react";

interface NavbarInterfaceView {
  activeSection: string;
}

const NavbarView = (props: NavbarInterfaceView) => {
  const sectionsRefs = {
    hero: useRef<HTMLDivElement>(null),
    home: useRef<HTMLDivElement>(null),
    maleFemale: useRef<HTMLDivElement>(null),
    // information: useRef<HTMLDivElement>(null),
    countdown: useRef<HTMLDivElement>(null),
    story: useRef<HTMLDivElement>(null),
    galery: useRef<HTMLDivElement>(null),
    rsvp: useRef<HTMLDivElement>(null),
    
  };

  useEffect(() => {
    // @ts-ignore
    const activeRef = sectionsRefs[props.activeSection];
    if (activeRef?.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", 
        block: "nearest",
      });
    }
  }, [props.activeSection]);

  return (
    <nav
      className="navbar-expand-md sticky-bottom-navbar our-navbar"
      style={{
        bottom: 10,
        backgroundColor: "transparent",
        height: "5rem",
        justifyContent: "center",
        display: "flex",
        overflowX: "auto", 
      }}
    >
      <div
        className="row our-nav"
        style={{
          position: "absolute",
          top: 0,
          width: "90%",
          borderRadius: "30px",
          opacity: 0.8,
          justifyContent: "center",
          display: "flex",
          overflowX: "auto", 
        }}
      >
        <div
          className="d-flex"
          style={{
            flexWrap: "nowrap",
            justifyContent: "center",
            padding:5
          }}
        >
          {/* Each section icon */}
          {[
            { section: "hero", icon: "bi bi-house-door-fill" },
            { section: "home", icon: "bi bi-valentine2" },
            { section: "maleFemale", icon: "bi bi-info-circle-fill" },
            // { section: "information", icon: "bi bi-info-circle-fill" },
            { section: "countdown", icon: "bi bi-alarm-fill" },
            { section: "story", icon: "bi bi-arrow-through-heart-fill" },
            { section: "galery", icon: "bi bi-camera-fill" },
            { section: "rsvp", icon: "bi bi-chat-left-dots-fill" },
          ].map(({ section, icon }) => (
            <div
              key={section}
              // @ts-ignore
              ref={sectionsRefs[section]} 
              style={{
                backgroundColor:
                  props.activeSection === section ? "var(--fiveth)" : "transparent",
                borderRadius: 5,

                padding: "0.5rem",
                margin: "0 0.5rem",
                cursor: "pointer",
              }}
              className="icon-container"
            >
              <i
                className={`${icon} ${
                  props.activeSection === section ? "var(--forth)" : "var(--forth)"
                }`}
                style={{ fontSize: "2rem", color:"var(--forth)" }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
