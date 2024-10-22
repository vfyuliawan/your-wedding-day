"use client";

import { motion, useAnimation } from "framer-motion";
import EndView from "./Section/End/EndView";
import FooterView from "./Section/Footer/FooterView";
import GiftsView from "./Section/Giifts/GiftsView";
import HeaderView from "./Section/Header/HeaderView";
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
import MaleFemaleView from "./Section/Male-Female/RedEssence/MaleFemaleView";
import HomeView from "./Section/Home/RedEssence/HomeView";
// import CoverView from "./Section/Cover/CoverView";
import InfoView from "./Section/Info/RedEssence/InfoView";
import GaleryView from "./Section/Galery/GaleryView";
import StoryView from "./Section/Story/RedEssence/StoryView";
import { DocumentData, Timestamp } from "firebase/firestore";
import { TimeConvertionDate, TimeConvertionFullDate } from "../utils/TimeConvertion";
import CoverView from "./Section/Cover/RedEssence/CoverView";
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
import ModalQRCode from "./Section/GuestScanView/ModalQRCode";
import ModalQRCodeBgImage from "./Section/GuestScanView/ModalQRCodeBgImage";
import { ModalEditableForm } from "./Section/EditableForm/ModalEditableForm";
import HeathProtocol from "./Section/HealtProtocol/HealthProtocol";
import LiveIgAndLinkFilter from "./Section/LiveIgAndFilter/LivveIgAndFilter";
import HeroView from "./Section/Hero/RedEssence/HeroView";
import CountDownView from "./Section/CountDown/RedEssence/CountDownView";

interface RedEssenceInterface {
  details: ResultDetailSlug | undefined;
  message: MessagesRequest[];
  setMessage: React.Dispatch<React.SetStateAction<MessagesRequest[]>>;
  postMessage: (name: string, text: string, present: string) => Promise<void>;
  guest: string;
  idGuest: string;
  getParams?: string | null;
  getIsTemplate?: boolean;
  setDetails: React.Dispatch<
    React.SetStateAction<ResultDetailSlug | undefined>
  >;
}

const RedEssence = (props: RedEssenceInterface) => {
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
  const [healtProtocol, sethealtProtocol] = useState(true);

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
        threshold: 0.1,
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
  const [thirdColor, setThirdColor] = useState("");
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
      convertColor(props?.details?.theme?.thirdColor ?? "")
    );
    setThirdColor(convertColor(props?.details?.theme?.thirdColor ?? ""));
    document.documentElement.style.setProperty(
      "--forth",
      convertColor(props?.details?.theme?.textColor1 ?? "")
    );
    setTextColor1(convertColor(props?.details?.theme?.textColor1 ?? ""));

    document.documentElement.style.setProperty(
      "--fiveth",
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
              getTitle={props.getParams ?? ""}
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
              primColor={primaryColor}
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
        <div
          id="story"
          ref={(el) =>
            (sectionRefs.current!.story = el as HTMLDivElement | null)
          }
        >
          {props?.details?.story.isShow ? (
            <StoryView color={primaryColor} OurStory={props?.details?.story} />
          ) : null}
        </div>
        <div
          id="galery"
          ref={(el) =>
            (sectionRefs.current!.galery = el as HTMLDivElement | null)
          }
        >
          {props?.details?.galery.isShow ? (
            <GaleryView image={props?.details?.galery.galeries} />
          ) : null}
        </div>
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
        {props.details?.gift.isShow ? (
          <GiftsView Gifts={props!.details!.gift.gifts} />
        ) : null}

        <div ref={qrCodeRef}></div>

        {/* <GuestScanView idGuest={props.idGuest ?? 0} guest={props.guest ?? ""} /> */}
        {props.details?.isShowLinkFilter ? (
          <LiveIgAndLinkFilter
            title={props.details.title}
            date={TimeConvertionFullDate(
              props.details.countdown.toString()
            ).dateMonthandYear}
            linkFilter={props.details.igFilter}
            linkStream={props.details.livelink}
          />
        ) : null}

        {props.details?.healtProtocol ? <HeathProtocol /> : null}

        <FooterView Footer={props?.details!.home} />
        <EndView />
        <ModalQRCodeBgImage
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          image={props.details?.cover.img ?? ""}
          guest={props.guest}
          idGuest={props.idGuest}
        />
        <ModalEditableForm
          modalEdit={modalEdit}
          setModalEdit={setModalEdit}
          primaryColor={primaryColor}
          setPrimaryColor={setprimaryColor}
          secondaryColor={secondaryColor}
          setSecondaryColor={setsecondaryColor}
          textColor1={textColor1}
          setTextColor1={setTextColor1}
          textColor2={textColor2}
          setTextColor2={setTextColor2}
          setAllColor={setAllColor}
          gifts={props.details!.gift.isShow}
          setDetails={props.setDetails}
          story={props.details!.story.isShow}
          galery={props.details!.galery.isShow}
          protocoler={props.details!.healtProtocol}
          setProtocoler={sethealtProtocol}
          thirdColor={thirdColor}
          setThirdColor={setThirdColor}
          isShowLinkFilter={props.details!.isShowLinkFilter}
        />

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
              backgroundColor: "#25f59f",
              opacity: 1,
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              color: "#25f59f",
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
                color: "black",
                fontWeight: "900",
              }}
            ></i>
          </button>
        ) : null}

        {!isMobile && !coverVisible ? (
          <NavbarVerticalView
            setModalEdit={setModalEdit}
            setIsopen={setIsOpen}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            activeSection={activeSection}
          />
        ) : null}
      </div>
    </div>
  );
};

export default RedEssence;
