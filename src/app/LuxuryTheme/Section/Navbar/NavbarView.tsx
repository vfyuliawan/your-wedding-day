import React, { useRef, useEffect } from "react";

interface NavbarInterfaceView {
  activeSection: string;
}

const NavbarView = (props: NavbarInterfaceView) => {
  // Create refs for each icon container
  const sectionsRefs = {
    hero: useRef<HTMLDivElement>(null),
    home: useRef<HTMLDivElement>(null),
    maleFemale: useRef<HTMLDivElement>(null),
    info: useRef<HTMLDivElement>(null),
    countdown: useRef<HTMLDivElement>(null),
    story: useRef<HTMLDivElement>(null),
    galery: useRef<HTMLDivElement>(null),
    rsvp: useRef<HTMLDivElement>(null),
  };

  // Scroll the navbar when the active section changes
  useEffect(() => {
    // @ts-ignore
    const activeRef = sectionsRefs[props.activeSection];
    if (activeRef?.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // Scroll to the center of the container
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
        overflowX: "auto", // Enable horizontal scrolling
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
          // boxShadow: "0 -10px 10px rgba(0, 0, 0, 0.7)", // Add shadow
          display: "flex",
          overflowX: "auto", // Allow horizontal scrolling
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
            { section: "maleFemale", icon: "bi bi-calendar2-week-fill" },
            { section: "info", icon: "bi bi-info-circle-fill" },
            { section: "countdown", icon: "bi bi-alarm-fill" },
            { section: "story", icon: "bi bi-arrow-through-heart-fill" },
            { section: "galery", icon: "bi bi-camera-fill" },
            { section: "rsvp", icon: "bi bi-chat-left-dots-fill" },
          ].map(({ section, icon }) => (
            <div
              key={section}
              // @ts-ignore
              ref={sectionsRefs[section]} // Attach ref to each section
              style={{
                backgroundColor:
                  props.activeSection === section ? "black" : "transparent",
                borderRadius: 5,

                padding: "0.5rem",
                margin: "0 0.5rem", // Add some space between icons
                cursor: "pointer",
              }}
              className="icon-container"
            >
              <i
                className={`${icon} ${
                  props.activeSection === section ? "text-white" : "text-white"
                }`}
                style={{ fontSize: "2rem" }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
