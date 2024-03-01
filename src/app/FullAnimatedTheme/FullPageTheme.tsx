import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";

import { useEffect, useRef, useState } from "react";
import CoverView from "./Section/Cover/CoverView";
import { DocumentData } from "firebase/firestore";
import Galery from "react-image-gallery";
import Home from "../page";
import NavbarView from "./Section/Navbar/NavbarView";
import BrideInformation from "./Section/BrideInfo/BrideInfo";
import { ThemeColorClass } from "../Constant/ThemeColor";
import DaysInfo from "./Section/DaysInfo/DaysInfo";
import InfoView from "./Section/Info/InfoView";
import StoryView from "./Section/Story/StoryView";
import MapView from "./Section/Map/MapView";
import GaleryView from "./Section/Galery/GaleryView";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import HomeView from "./Section/Home/HomeView";
import GiftsView from "./Section/Gifts/GiftView";
import MessageView from "./Section/Message/MessageView";
import FooterView from "./Section/Footer/FooterView";
import Modal from "react-modal";
import React from "react";
import QRCode from "react-qr-code";

interface FullPageInterface {
  details: DocumentData | undefined;
  getDetails: () => void;
  guest: string;
  idGuest: string;
}

const FullPageTheme = (props: FullPageInterface) => {
  const [enableVerticalScroll, setEnableVerticalScroll] = useState(true);

  const [coverVisible, setCoverVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef?.current?.pause();
    } else {
      audioRef?.current?.play();
    }

    setIsPlaying(!isPlaying);
  };

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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const bgColor = new ThemeColorClass(props.details?.ThemeName);

  useEffect(() => {
    Modal.setAppElement("#yourAppElement");
    return () => {};
  }, []);

  const customStyles = {
    content: {
      top: "45%",
      border: `3px solid ${bgColor.color.secondary}`,
      left: "50%",
      width: "90%",
      height: "75vh",
      backgroundColor: "white",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = bgColor.color.secondary;
  }

  function closeModal() {
    setIsOpen(false);
  }
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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <audio
        style={{ position: "fixed", visibility: "hidden" }}
        ref={audioRef}
        controls
      >
        <source
          src={`/music/${props?.details?.ThemeSong}.mp3`}
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
      <body>
        <div className="yourAppElement" id="yourAppElement"></div>

        <CoverView
          hero={props?.details?.Hero}
          guest={props.guest}
          isVisible={coverVisible}
          onCoverClick={handleCoverClick}
          detailCover={props?.details?.Cover}
          themeName={props.details?.ThemeName}
          home={props?.details?.Home}
        />
        {!coverVisible ? (
          <>
            <FullpageContainer
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              <FullpageSection>
                <BrideInformation
                  themeName={props.details?.ThemeName}
                  maleFemale={props?.details?.MaleFemale}
                  coverVisible={coverVisible}
                />
              </FullpageSection>
              <FullpageSection>
                <HomeView
                  themeName={props.details?.ThemeName}
                  home={props?.details?.Home}
                />
              </FullpageSection>
              <FullpageSection>
                <DaysInfo
                  themeName={props.details?.ThemeName}
                  countDown={props?.details?.CountDown.Date}
                  hero={props?.details?.Hero}
                />
              </FullpageSection>
              <FullpageSection>
                <InfoView
                  themeName={props.details?.ThemeName}
                  info={props?.details?.InfoAcara}
                />
              </FullpageSection>
              <FullpageSection>
                <MapView
                  themeName={props.details?.ThemeName}
                  embeded={props?.details?.Embeded}
                  info={props?.details?.InfoAcara}
                />
              </FullpageSection>
              <FullpageSection>
                <StoryView
                  themeName={props.details?.ThemeName}
                  OurStory={props?.details?.OurStory}
                />
              </FullpageSection>
              <FullpageSection>
                <GaleryView
                  themeName={props.details?.ThemeName}
                  galery={props?.details?.Galery.image}
                />
              </FullpageSection>
              <FullpageSection>
                <GiftsView
                  alamat={props.details?.Alamat ?? ""}
                  themeName={props.details?.ThemeName}
                  gifts={props?.details?.Gifts}
                />
              </FullpageSection>
              <FullpageSection>
                <MessageView
                  rsvp={{
                    Message: props?.details?.Message,
                    getDetail: function (): void {
                      props.getDetails();
                    },
                    slug: props?.details?.Slug,
                    userId: props?.details?.idDoc,
                  }}
                  themeName={props.details?.ThemeName}
                  gifts={props?.details?.Gifts}
                  countDown={props?.details?.CountDown.Date}
                />
              </FullpageSection>
              <FullpageSection>
                <FooterView
                  alamat={props.details?.Alamat ?? ""}
                  themeName={props.details?.ThemeName}
                  gifts={props?.details?.Gifts}
                  footer={props.details?.Footer}
                />
              </FullpageSection>
            </FullpageContainer>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2
                ref={(_subtitle) => (subtitle = _subtitle)}
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Brilon",
                }}
              >
                E-Reservation
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  width: 60,
                  opacity: 0.5,
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: 0,
                  right: "50%",
                  transform: "translate(50%, -0%)",
                }}
                onClick={closeModal}
              >
                x
              </div>
              <div
                style={{
                  height: 200,
                  width: "100%",
                  backgroundColor: bgColor.color.secondary,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius:20,
                  marginTop: 30,
                  padding: 100,
                  border: `3px solid ${bgColor.color.secondary}`,
                }}
              >
                <img
                  src={props.details?.Cover.ImgCover}
                  style={{ objectFit: "cover", padding: "100" }}
                  alt=""
                />
              </div>
              <div className="row justify-content-center">
                <div className="col-10 justify-content-center d-flex">
                  <div
                    style={{
                      width: "100%",
                      marginTop: 20,
                      backgroundColor: "white",
                      borderRadius: "10%",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <QRCode
                      value={props.guest + "nviteMe" + props.idGuest}
                      size={140}
                      bgColor="#ffffff"
                      fgColor="#000000"
                      level="L"
                    />
                    <div className="col-12">
                      <div
                        style={{
                          opacity: 0.5,
                          marginTop:20,
                          borderTop: `2px dotted ${bgColor.color.secondary}`,
                          width: "100%",
                        }}
                      ></div>
                    </div>
                    <p
                      style={{
                        marginTop: "10px",
                        color: "grey",
                        fontSize: "1rem",
                        fontFamily:'faunaOne',
                        textAlign:'center',
                        fontWeight:'bold'
                      }}
                    >
                      Nama Tamu<br/> <span style={{color:'black'}}>{props.guest.charAt(0).toUpperCase() +
                        props.guest.slice(1)}
                        </span><br/>
                        Guest ID :  {props.idGuest}
                    </p>
                    <div className="col-12">
                      <div
                        style={{
                          opacity: 0.5,
                          marginTop:5,
                          borderTop: `2px dotted ${bgColor.color.secondary}`,
                          width: "100%",
                        }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </Modal>
          </>
        ) : null}

        {!coverVisible ? (
          <NavbarView
            themeName={props.details!.ThemeName}
            activeIndex={activeIndex}
            setActiveIndex={(value) => {
              setActiveIndex(value);
            }}
          />
        ) : null}
        {!coverVisible ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              opacity: 0.4,
              backgroundColor: bgColor.color.secondary,
              position: "fixed",
              bottom: "170px",
              right: "20px",
              padding: "15px",
              height: "55px",
              width: "55px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              zIndex: "999",
            }}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <i
                className="bi bi-music-player-fill"
                style={{ fontSize: "2rem" }}
              ></i>
            ) : (
              <i className="bi bi-pause-fill" style={{ fontSize: "2rem" }}></i>
            )}
          </button>
        ) : null}
        {!coverVisible ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              opacity: 0.4,
              backgroundColor: bgColor.color.secondary,
              position: "fixed",
              bottom: "100px",
              right: "20px",
              padding: "15px",
              height: "55px",
              width: "55px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              zIndex: "999",
            }}
            onClick={() => {}}
          >
            {isPlaying ? (
              <i
                className="bi bi-lg bi-arrow-down-circle"
                style={{ fontSize: "2rem" }}
              ></i>
            ) : (
              <i
                className="bi bi-lg bi-arrow-down-circle"
                style={{ fontSize: "2rem" }}
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
              backgroundColor: bgColor.color.secondary,
              bottom: "240px",
              right: "20px",
              padding: "15px",
              height: "55px",
              width: "55px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              zIndex: "999",
            }}
            onClick={() => {
              openModal();
            }}
          >
            {isPlaying ? (
              <i
                className="bi bi-lg bi-qr-code"
                style={{ fontSize: "2rem" }}
              ></i>
            ) : (
              <i
                className="bi bi-lg bi-qr-code"
                style={{ fontSize: "2rem" }}
              ></i>
            )}
          </button>
        ) : null}
      </body>
    </>
  );
};

export default FullPageTheme;
