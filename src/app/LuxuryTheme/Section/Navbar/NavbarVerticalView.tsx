import React, { useRef, useEffect } from "react";

interface NavbarInterfaceView {
  activeSection: string;
}

const NavbarVerticalView = (props: NavbarInterfaceView) => {
  // Create refs for each icon container
  const sectionsRefs = {
    hero: useRef<HTMLDivElement>(null),
    home: useRef<HTMLDivElement>(null),
    maleFemale: useRef<HTMLDivElement>(null),
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
        block: "center", // Adjust for vertical scrolling
      });
    }
  }, [props.activeSection]);

  return (
    <nav
      className="navbar-expand-md sticky-bottom-navbar our-navbar"
      style={{
        position: "fixed", // Stick it to one side
        top: 10,
        right: '30%',
        height: "100%", // Adjust the height to take up full viewport height
        width: "80px", // Set a fixed width for the vertical navbar
        backgroundColor: "transparent",
        display: "flex",
        opacity: 0.7,

        justifyContent: "center",
        overflowY: "auto", // Enable scrolling within the navbar
        flexDirection: "column", // Vertical layout
        zIndex: 1000, // Ensure it stays on top
      }}>
      <div
        className="our-nav"
        style={{
          position: "absolute",
          left: 0,
          height: "60%",
          borderRadius: "30px",
          opacity: 0.8,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column", // Align items vertically
        }}
      >
        <div
          className="d-flex"
          style={{
            flexWrap: "nowrap",
            justifyContent: "center",
            padding: 12,
            flexDirection: "column", // Stack the icons vertically
          }}
        >
          {/* Each section icon */}
          {[
            { section: "hero", icon: "bi bi-house-door-fill" },
            { section: "home", icon: "bi bi-valentine2" },
            { section: "maleFemale", icon: "bi bi-info-circle-fill" },
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
                margin: "0.5rem 0", // Add vertical space between icons
                cursor: "pointer",
              }}
              className="icon-container"
            >
              <i
                className={`${icon} ${
                  props.activeSection === section ? "var(--third)" : "var(--third)"
                }`}
                style={{ fontSize: "1rem", color: "var(--third)" }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarVerticalView;
