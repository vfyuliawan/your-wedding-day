import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";

import { useRef, useState } from "react";
import CoverView from "./Section/Cover/CoverView";
import { DocumentData } from "firebase/firestore";
import Galery from "react-image-gallery";
import Home from "../page";
import NavbarView from "./Section/Navbar/NavbarView";
import BrideInformation from "./Section/BrideInfo/BrideInfo";
import { ThemeColorClass } from "../Constant/ThemeColor";

interface FullPageInterface {
  details: DocumentData | undefined;
  getDetails: () => void;
  guest: string;
  idGuest: string;
}

const Fullpage = (props: FullPageInterface) => {
  const [enableVerticalScroll, setEnableVerticalScroll] = useState(true);

  const [coverVisible, setCoverVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const bgColor = new ThemeColorClass(props.details!.ThemeName);

  const handleCoverClick = () => {
    setCoverVisible(false);
    openInvitation();
    enableScroll();
  };
  const rootElement = (
    typeof window !== undefined ? document.documentElement : undefined
  ) as any;

  function enableScroll() {
    window.onscroll = function () {};
    rootElement.style.scrollBehavior = "smooth";
  }

  const openInvitation = () => {
    setVisible(true);
    setIsPlaying(true);
    audioRef?.current?.play().catch((error) => {
      console.error("Audio playback error:", error);
    });
  };

  const handleButtonClick = (fullpageApi: fullpageApi) => {
    if (enableVerticalScroll) {
      fullpageApi.moveSectionDown();
      setEnableVerticalScroll(false);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href={`/ThemeStyle/${props?.details?.ThemeName}/assets/css/style.css`}
      />
      {/* <audio
        style={{ position: "fixed", visibility: "hidden" }}
        ref={audioRef}
        controls
      >
        <source
          src={`/music/${props?.details?.ThemeSong}.mp3`}
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio> */}

      <CoverView
        hero={props?.details?.Hero}
        guest={props.guest}
        isVisible={coverVisible}
        onCoverClick={handleCoverClick}
        detailCover={props?.details?.Cover}
        themeName={props.details?.ThemeName}
        home={props?.details?.Home}
      />
      <ReactFullpage
        credits={{ enabled: false, label: "", position: "right" }}
        scrollingSpeed={1000} // Set the scrolling speed
        scrollHorizontally={true} // Enable horizontal scrolling
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <BrideInformation
                  themeName={props.details?.ThemeName}
                  maleFemale={props?.details?.MaleFemale}
                />
                <section
                  className="section"
                  style={{
                    background: `linear-gradient(to bottom, ${bgColor.color.primary} -60%, rgba(255, 0, 0, 0) 200%)`,
                  }}
                >
                  <p>Section 2</p>
                </section>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
        afterLoad={(origin, destination, direction) => {
          if (direction === "down") {
            setEnableVerticalScroll(true);
          }
        }}
      />
      {!coverVisible ? (
        <NavbarView themeName={props.details!.ThemeName} />
      ) : null}
      {!coverVisible ? (
        <button
          className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
          style={{
            opacity: 0.4,
            position: "fixed",
            bottom: "150px",
            right: "20px",
            padding: "15px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            zIndex: "999",
          }}
          //   onClick={togglePlay}
        >
          {isPlaying ? (
            <i
              className="bi bi-music-player-fill"
              style={{ fontSize: "1.5" }}
            ></i>
          ) : (
            <i className="bi bi-pause-fill" style={{ fontSize: "1.5" }}></i>
          )}
        </button>
      ) : null}
      {!coverVisible ? (
        <button
          className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
          style={{
            opacity: 0.4,
            position: "fixed",
            bottom: "100px",
            right: "20px",
            padding: "15px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            zIndex: "999",
          }}
          onClick={() => {
            // scrollToBarcode(10000, endRef);
          }}
        >
          {isPlaying ? (
            <i
              className="bi bi-lg bi-arrow-down-circle"
              style={{ fontSize: "1.5rem" }}
            ></i>
          ) : (
            <i
              className="bi bi-lg bi-arrow-down-circle"
              style={{ fontSize: "1.5rem" }}
            ></i>
          )}
        </button>
      ) : null}
      {!coverVisible ? (
        <button
          className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            opacity: 0.4,
            bottom: "200px",
            right: "20px",
            padding: "15px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            zIndex: "999",
          }}
          onClick={() => {
            // scrollToBarcode(2000, qrCodeRef);
          }}
        >
          {isPlaying ? (
            <i
              className="bi bi-lg bi-qr-code"
              style={{ fontSize: "1.2rem" }}
            ></i>
          ) : (
            <i
              className="bi bi-lg bi-qr-code"
              style={{ fontSize: "1.2rem" }}
            ></i>
          )}
        </button>
      ) : null}
    </>
  );
};

export default Fullpage;
