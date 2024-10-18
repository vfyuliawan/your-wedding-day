import React, { useRef, useEffect, SetStateAction } from "react";
import { isMobile } from "react-device-detect";

interface NavbarInterfaceView {
  activeSection: string;
  isPlaying: boolean;
  setIsopen: React.Dispatch<SetStateAction<boolean>>;
  togglePlay: () => void;
  setModalEdit: React.Dispatch<SetStateAction<boolean>>
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
        right: "31%",
        height: "100%", // Adjust the height to take up full viewport height
        width: 70, // Set a fixed width for the vertical navbar
        backgroundColor: "transparent",
        display: "flex",
        opacity: 0.8,
        overflow: "hidden",

        justifyContent: "center",
        flexDirection: "column", // Vertical layout
        zIndex: -0, // Ensure it stays on top
      }}
    >
      <button
        className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          top: 20,
          backgroundColor: "var(--prim)",
          opacity: 0.7,
          height: 58,
          width: 58,
          borderRadius: "50%",
        }}
        onClick={props.togglePlay}
      >
        {props.isPlaying ? (
          <i
            className="bi bi-music-player-fill"
            style={{
              fontSize: isMobile ? "2rem" : "1rem",
              color: "var(--third)",
            }}
          ></i>
        ) : (
          <i
            className="bi bi-pause-fill"
            style={{
              fontSize: isMobile ? "2rem" : "1rem",
              color: "var(--third)",
            }}
          ></i>
        )}
      </button>
      <button
        className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          top: 90,
          backgroundColor: "var(--prim)",
          opacity: 0.7,
          height: 58,
          width: 58,
          borderRadius: "50%",
        }}
        onClick={() => {
          props.setIsopen(true);
        }}
      >
        {props.isPlaying ? (
          <i
            className="bi bi-lg bi-qr-code"
            style={{
              fontSize: isMobile ? "2rem" : "1rem",
              color: "var(--third)",
            }}
          ></i>
        ) : (
          <i
            className="bi bi-lg bi-qr-code"
            style={{
              fontSize: isMobile ? "2rem" : "1rem",
              color: "var(--third)",
            }}
          ></i>
        )}
      </button>
      <div
        className="our-nav"
        style={{
          position: "absolute",
          right: 0,
          height: "60%",
          //   width:9
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
            flexWrap: "wrap",
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
                padding: 6,
                margin: 6, // Add vertical space between icons
                cursor: "pointer",
              }}
              className="icon-container"
            >
              <i
                className={`${icon} ${
                  props.activeSection === section
                    ? "var(--third)"
                    : "var(--third)"
                }`}
                style={{ fontSize: "1rem", color: "var(--third)" }}
              ></i>
            </div>
          ))}
        </div>
      </div>
      <button
        className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          bottom: 70,
          backgroundColor:  "#25f59f",

          opacity: 1,
          height: 58,
          width: 58,
          borderRadius: "50%",
        }}
        onClick={()=>{
            props.setModalEdit(true)
        }}
      >
        <i
          className="bi bi-pencil-square"
          style={{
            fontSize: isMobile ? "2rem" : "1.5rem",
            color: "black",
          }}
        ></i>
      </button>
    </nav>
  );
};

export default NavbarVerticalView;
