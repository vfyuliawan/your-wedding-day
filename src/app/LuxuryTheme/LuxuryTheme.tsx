"use client";

import { motion, useAnimation } from "framer-motion";
import EndView from "./Section/End/EndView";
import FooterView from "./Section/Footer/FooterView";
import GiftsView from "./Section/Giifts/GiftsView";
import HeaderView from "./Section/Header/HeaderView";
import HeroView from "./Section/Hero/HeroView";
import FadeDownAnimation from "./Section/MotionText";
import NavbarView from "./Section/Navbar/NavbarView";
import RsvpView from "./Section/Rsvp/RsvpView";
import {
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import MaleFemaleView from "./Section/Male-Female/MaleFemaleView";
import HomeView from "./Section/Home/HomeView";
// import CoverView from "./Section/Cover/CoverView";
import InfoView from "./Section/Info/InfoView";
import CountDownView from "./Section/CountDown/CountDownView";
import GaleryView from "./Section/Galery/GaleryView";
import StoryView from "./Section/Story/StoryView";
import { DocumentData, Timestamp } from "firebase/firestore";
import { TimeConvertionDate } from "../utils/TimeConvertion";
import CoverView from "./Section/Cover/CoverView";
import GuestScanView from "./Section/GuestScanView/GuestScanView";
import { ResultDetailSlug } from "../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import React from "react";
import { MessagesRequest } from "../Dashboard/Domain/Models/ModelResponse/ModalResponseMessage/ModelResponseGetMessage";
import { convertColor } from "../utils/ConvertColor";
import { isMobile } from "react-device-detect";
// import AOS from 'aos';
import Modal from "react-modal";
import QRCode from "react-qr-code";
import NavbarVerticalView from "./Section/Navbar/NavbarVerticalView";
import { ColorResult, SketchPicker } from "react-color";
import Swatches from "react-color/lib/components/swatches/Swatches";

interface LuxuryThemeInterface {
  details: ResultDetailSlug | undefined;
  message: MessagesRequest[];
  setMessage: React.Dispatch<React.SetStateAction<MessagesRequest[]>>;
  postMessage: (name: string, text: string, present: string) => Promise<void>;
  guest: string;
  idGuest: string;
  getParams?: string | null;
  getIsTemplate?: boolean;
}

const LuxuryTheme = (props: LuxuryThemeInterface) => {
  const [visible, setVisible] = useState(false);
  const [removeComp, setRemoveComp] = useState(false);
  // const heroRef = useRef<any>(null);
  const headerRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<any>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [isActive, setisActive] = useState(0);

  let subtitle: any;

  function afterOpenModal() {
    subtitle.style.color = "var(--prim)";
  }

  const customStyles = {
    content: {
      top: "45%",
      border: `3px solid var(--prim)`,
      left: "50%",
      width: isMobile ? "90%" : "40%",
      height: "75vh",
      backgroundColor: "white",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const sectionRefs = useRef<{
    hero: HTMLDivElement | null;
    home: HTMLDivElement | null;
    maleFemale: HTMLDivElement | null;
    information: HTMLDivElement | null;
    countdown: HTMLDivElement | null;
    story: HTMLDivElement | null;
    galery: HTMLDivElement | null;
    rsvp: HTMLDivElement | null;
  }>({
    hero: null,
    home: null,
    maleFemale: null,
    information: null,
    countdown: null,
    story: null,
    galery: null,
    rsvp: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry, "entry");
          if (entry.isIntersecting) {
            console.log(entry.target.id, "id");
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    // Attach observer to each section
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Cleanup observer on unmount
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef?.current?.pause();
    } else {
      audioRef?.current?.play();
    }

    setIsPlaying(!isPlaying);
  };
  const openInvitation = () => {
    setVisible(true);
    setIsPlaying(true);
    audioRef?.current?.play().catch((error) => {
      console.error("Audio playback error:", error);
    });
  };
  const rootElement = (
    typeof window !== undefined ? document.documentElement : undefined
  ) as any;
  function disableScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollTop, scrollLeft);
    };
    rootElement.style.scrollBehavior = "auto";
  }
  function enableScroll() {
    window.onscroll = function () {};
    rootElement.style.scrollBehavior = "smooth";
  }

  const qrCodeRef = useRef<any>(null);
  const endRef = useRef<any>(null);

  const easeInOutQuad = (t: any) =>
    t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t;

  const scrollToBarcode = (duration: number, ref: MutableRefObject<any>) => {
    const targetElement = ref.current;
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const scrollStep = (timestamp: any) => {
      const currentTime = timestamp - startTime;
      const progress = currentTime / duration;

      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

      if (currentTime < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  useEffect(() => {
    // scrollToBottom();
  }, []);

  const [primaryColor, setprimaryColor] = useState("");
  const [secondaryColor, setsecondaryColor] = useState("");
  const [textColor1, setTextColor1] = useState("");
  const [textColor2, setTextColor2] = useState("");

  const setAllColor = () => {
    document.documentElement.style.setProperty(
      "--prim",
      convertColor(props?.details?.theme?.primaryColor ?? "")
    );
    setprimaryColor(convertColor(props?.details?.theme?.primaryColor ?? ""));
    document.documentElement.style.setProperty(
      "--sec",
      convertColor(props?.details?.theme?.secondaryColor ?? "")
    );
    setsecondaryColor(
      convertColor(props?.details?.theme?.secondaryColor ?? "")
    );
    document.documentElement.style.setProperty(
      "--third",
      convertColor(props?.details?.theme?.textColor1 ?? "")
    );
    setTextColor1(convertColor(props?.details?.theme?.textColor1 ?? ""));

    document.documentElement.style.setProperty(
      "--forth",
      convertColor(props?.details?.theme?.textColor2 ?? "")
    );
    setTextColor2(convertColor(props?.details?.theme?.textColor2 ?? ""));
  };

  useEffect(() => {
    setAllColor();

    // disableScroll();
    return () => {};
  }, []);
  const [coverVisible, setCoverVisible] = useState(true);
  const handleCoverClick = () => {
    setCoverVisible(false);
    openInvitation();
    enableScroll();
  };

  const scrollToBottom = useCallback(() => {
    const container = containerRef.current;
    const scrollHeight = qrCodeRef.current.offsetTop - container.offsetTop;

    const duration = 1000; // Adjust the duration in milliseconds
    const startTime = performance.now();

    const animateScroll = (timestamp: any) => {
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      container.scrollTop = scrollHeight * progress;

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return (
    <div style={{ maxHeight: 100 }}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <audio
        style={{ position: "fixed", visibility: "hidden" }}
        ref={audioRef}
        controls
      >
        <source
          src={`/music/${props?.details?.theme.music}.mp3`}
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
      <CoverView
        guest={props.guest}
        isVisible={coverVisible}
        onCoverClick={handleCoverClick}
        detailCover={props?.details?.cover}
      />
      <div
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        ref={containerRef}
      >
        {!coverVisible && isMobile ? (
          <NavbarView activeSection={activeSection} />
        ) : null}
        <HeaderView
          themeName={props?.details?.theme.theme.themeName ?? ""}
          title={props.getParams ?? ""}
        />
        <div className="hero-home">
          {props?.details?.hero?.isShow ? (
            <HeroView
              ref={(el) => (sectionRefs.current!.hero = el)}
              HeroDetail={props?.details?.hero}
            />
          ) : null}
          {props?.details?.home?.isShow ? (
            <div
              id="home"
              ref={(el) =>
                (sectionRefs.current!.home = el as HTMLDivElement | null)
              }
            >
              <HomeView HomeDetail={props?.details?.home} />
            </div>
          ) : null}
        </div>
        {props?.details?.braidInfo?.isShow ? (
          <div
            id="maleFemale"
            ref={(el) =>
              (sectionRefs.current!.maleFemale = el as HTMLDivElement | null)
            }
          >
            <MaleFemaleView
              ref={(el: any) =>
                (sectionRefs.current!.maleFemale = el as HTMLDivElement | null)
              }
              MaleFemaleDetail={props?.details?.braidInfo}
            />
          </div>
        ) : null}
        <div
          id="maleFemale"
          ref={(el) =>
            (sectionRefs.current!.maleFemale = el as HTMLDivElement | null)
          }
        >
          <InfoView
            Info={props?.details?.infoAcara}
            Embeded={props?.details?.theme.embeded}
          />
        </div>

        <div
          id="countdown"
          ref={(el) =>
            (sectionRefs.current!.countdown = el as HTMLDivElement | null)
          }
        >
          <CountDownView targetDate={props.details?.countdown} />
        </div>
        {props?.details?.story.isShow ? (
          <div
            id="story"
            ref={(el) =>
              (sectionRefs.current!.story = el as HTMLDivElement | null)
            }
          >
            <StoryView color={primaryColor} OurStory={props?.details?.story} />
          </div>
        ) : null}
        {props?.details?.galery.isShow ? (
          <div
            id="galery"
            ref={(el) =>
              (sectionRefs.current!.galery = el as HTMLDivElement | null)
            }
          >
            <GaleryView image={props?.details?.galery.galeries} />
          </div>
        ) : null}
        <div
          id="rsvp"
          ref={(el) =>
            (sectionRefs.current!.rsvp = el as HTMLDivElement | null)
          }
        >
          <RsvpView
            message={props?.message}
            postMessage={props.postMessage}
            setMessage={props.setMessage}
          />
        </div>

        <GiftsView Gifts={props!.details!.gift.gifts} />

        <div ref={qrCodeRef}></div>

        <GuestScanView idGuest={props.idGuest ?? 0} guest={props.guest ?? ""} />

        <FooterView Footer={props?.details!.home} />
        <EndView />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={() => {
            setIsOpen(false);
          }}
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
              letterSpacing: "2px",
              fontSize: 22,
            }}
          >
            e-reservation
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              opacity: 0.5,
              color: "white",
              backgroundColor: "red",
              // borderRadius: "50%",
              paddingLeft: 5,
              paddingRight: 5,
              position: "absolute",
              top: 0,
              right: isMobile ? 25 : 35,
              transform: "translate(50%, -0%)",
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </div>
          <div
            style={{
              height: 200,
              width: "100%",
              backgroundColor: "var(--prim)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              marginTop: 30,
              padding: 100,
              border: `3px solid ${"var(--prim)"}`,
            }}
          >
            <img
              src={props.details?.cover.img}
              style={{ objectFit: "fill", height: 200 }}
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
                      marginTop: 20,
                      borderTop: `2px dotted ${"var(--prim)"}`,
                      width: "100%",
                    }}
                  ></div>
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    color: "grey",
                    fontSize: "1rem",
                    fontFamily: "faunaOne",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Nama Tamu
                  <br />{" "}
                  <span style={{ color: "black" }}>
                    {props.guest.charAt(0).toUpperCase() + props.guest.slice(1)}
                  </span>
                  <br />
                  Guest ID : {props.idGuest}
                </p>
                <div className="col-12">
                  <div
                    style={{
                      opacity: 0.5,
                      marginTop: 5,
                      borderTop: `2px dotted ${"var(--prim)"}`,
                      width: "100%",
                    }}
                  ></div>
                </div>
              </div>{" "}
            </div>
          </div>
        </Modal>
        <ModalPickColor />

        {!coverVisible && isMobile ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              bottom: "80px",
              right: "20px",
              padding: "15px",
              backgroundColor: "var(--prim)",
              opacity: 0.7,
              height: "50px",
              width: "50px",
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
        ) : null}
        {!coverVisible && isMobile ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              bottom: "140px",
              right: "20px",
              padding: "15px",

              backgroundColor: "var(--prim)",
              opacity: 0.7,
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              zIndex: "999",
            }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {isPlaying ? (
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
        ) : null}
        {!coverVisible && isMobile && props.getIsTemplate ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              bottom: "200px",
              right: "20px",
              padding: "15px",
              backgroundColor: "black",
              opacity: 1,
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              zIndex: "999",
            }}
            onClick={() => {
              setModalEdit(true);
            }}
          >
            <i
              className="bi bi-pencil-square"
              style={{
                fontSize: isMobile ? "2rem" : "1.5rem",
                color: "var(--third)",
              }}
            ></i>
          </button>
        ) : null}

        {!isMobile && !coverVisible ? (
          <NavbarVerticalView
            setIsopen={setIsOpen}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            activeSection={activeSection}
          />
        ) : null}
      </div>
    </div>
  );

  function ModalPickColor() {
    return (
      <Modal
        isOpen={modalEdit}
        // onAfterOpen={()=>()}
        onRequestClose={() => {
          setModalEdit(false);
        }}
        style={{
          content: {
            top: "45%",
            border: `1px solid var(--prim)`,
            left: "50%",
            width: isMobile ? "90%" : "40%",
            // height: "80vh",
            backgroundColor: "#ffff",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <h2
          ref={(_subtitle) => (subtitle = _subtitle)}
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Brilon",
            letterSpacing: "2px",
            fontSize: 22,
          }}
        >
          theme trial color
        </h2>
        <div
          style={{
            display: "flex",
            marginTop: 25,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                setisActive(0);
                setTimeout(() => {
                  setisActive(1);
                }, 200);
              }}
              style={{
                height: 50,
                width: 50,

                borderRadius: 25,
                border: "3px solid rgba(26, 26, 26, 0.9)", // Corrected border color
                backgroundColor: primaryColor,
              }}
            />
            <h4
              style={{
                fontSize: 12,
                fontFamily: "Times-new-roman",
                letterSpacing: 1,
              }}
            >
              Primary
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                setisActive(0);
                setTimeout(() => {
                  setisActive(2);
                }, 200);
              }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                border: "3px solid rgba(26, 26, 26, 0.9)", // Corrected border color
                backgroundColor: secondaryColor,
              }}
            />
            <h4
              style={{
                fontSize: 12,
                fontFamily: "Times-new-roman",
                letterSpacing: 1,
              }}
            >
              Secondary
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                setisActive(0);
                setTimeout(() => {
                  setisActive(3);
                }, 200);
              }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                border: "3px solid rgba(26, 26, 26, 0.9)", // Corrected border color
                backgroundColor: textColor1,
              }}
            />
            <h4
              style={{
                fontSize: 12,
                fontFamily: "Times-new-roman",
                letterSpacing: 1,
              }}
            >
              Text 1
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                setisActive(0);
                setTimeout(() => {
                  setisActive(4);
                }, 200);
              }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                border: "3px solid rgba(26, 26, 26, 0.9)", // Corrected border color
                backgroundColor: textColor2,
              }}
            />
            <h4
              style={{
                fontSize: 12,
                fontFamily: "Times-new-roman",
                letterSpacing: 1,
              }}
            >
              Text 2
            </h4>
          </div>
        </div>
        <div className="row mt-3">
          <h5
            onClick={() => {
              setAllColor();
            }}
            style={{ color: "red" }}
          >
            Default Color
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <button
            className="btn"
            onClick={() => {
              setModalEdit(false);
            }}
            style={{
              width: "50%",
              paddingTop: 4,
              paddingBottom: 4,
              backgroundColor: "green",
              fontSize: 18,
              fontFamily: "Times-new-roman",
              color: "white",
              fontWeight: "bold",
              borderRadius: 20,
            }}
          >
            Perview
          </button>
        </div>

        {isActive == 1 ? (
          <>
            <div
              className="row mt-3"
              style={{
                display: "flex",
              }}
            >
              <div
                className="col"
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: 12 }}>warna: {primaryColor}</p>
              </div>
            </div>
            <div
              className="row mt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Swatches
                styles={{
                  default: {},
                }}
                height={250}
                width={240}
                // color={"#ffff"}
                onChange={(val: ColorResult) => {
                  const hexColor = val.hex;
                  setprimaryColor(hexColor);
                  setisActive(0);
                  document.documentElement.style.setProperty(
                    "--prim",
                    hexColor
                  );
                }}
              />
            </div>
          </>
        ) : isActive == 2 ? (
          <>
            <div
              className="row mt-3"
              style={{
                display: "flex",
              }}
            >
              <div
                className="col"
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: 12 }}>warna: {secondaryColor}</p>
              </div>
            </div>
            <div
              className="row mt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Swatches
                styles={{
                  default: {},
                }}
                height={250}
                width={240}
                // color={"#ffff"}
                onChange={(val: ColorResult) => {
                  const hexColor = val.hex;
                  setsecondaryColor(hexColor);
                  setisActive(0);
                  document.documentElement.style.setProperty("--sec", hexColor);
                }}
              />
            </div>
          </>
        ) : isActive == 3 ? (
          <>
            <div
              className="row mt-3"
              style={{
                display: "flex",
              }}
            >
              <div
                className="col"
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: 12 }}>warna: {textColor1}</p>
              </div>
            </div>
            <div
              className="row mt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Swatches
                styles={{
                  default: {},
                }}
                height={250}
                width={240}
                // color={"#ffff"}
                onChange={(val: ColorResult) => {
                  const hexColor = val.hex;
                  setTextColor1(hexColor);
                  setisActive(0);
                  document.documentElement.style.setProperty(
                    "--third",
                    hexColor
                  );
                }}
              />
            </div>
          </>
        ) : isActive == 4 ? (
          <>
            <div
              className="row mt-3"
              style={{
                display: "flex",
              }}
            >
              <div
                className="col"
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: 12 }}>warna: {textColor2}</p>
              </div>
            </div>
            <div
              className="row mt-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Swatches
                styles={{
                  default: {},
                }}
                height={250}
                width={240}
                // color={"#ffff"}
                onChange={(val: ColorResult) => {
                  const hexColor = val.hex;
                  setTextColor2(hexColor);
                  setisActive(0);
                  document.documentElement.style.setProperty(
                    "--forth",
                    hexColor
                  );
                }}
              />
            </div>
          </>
        ) : null}
      </Modal>
    );
  }
};

export default LuxuryTheme;
