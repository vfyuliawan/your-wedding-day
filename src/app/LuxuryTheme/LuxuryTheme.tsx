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
// import AOS from 'aos';

interface LuxuryThemeInterface {
  details: ResultDetailSlug | undefined;
  message: MessagesRequest[];
  setMessage: React.Dispatch<React.SetStateAction<MessagesRequest[]>>;
  postMessage: (name: string, text: string, present: string) => Promise<void>;
  guest: string;
  idGuest: string;
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
        threshold: 0.3,
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
    scrollToBottom();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--prim', convertColor(props?.details?.theme?.theme?.primaryColor ?? ""));
    document.documentElement.style.setProperty('--sec', convertColor(props?.details?.theme?.theme?.secondaryColor ?? ""));

    disableScroll();
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
    <div>
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
      <div style={{ overflowY: "scroll", overflowX:'hidden' }} ref={containerRef}>
        {!coverVisible ? <NavbarView activeSection={activeSection} /> : null}
        <HeaderView themeName={props?.details?.theme.theme.themeName ?? ""} />
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
                (sectionRefs.current!.hero = el as HTMLDivElement | null)
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
            <MaleFemaleView MaleFemaleDetail={props?.details?.braidInfo} />
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
            <StoryView OurStory={props?.details?.story} />
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

        <GuestScanView
            idGuest={props.idGuest ?? 0}
            guest={props.guest ?? ""}
          />

        <FooterView Footer={props?.details!.home} />
        <EndView />

        {!coverVisible ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              bottom: "90px",
              right: "20px",
              padding: "15px",
              height: "40px",
              width: "40px",
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
        {/* {!coverVisible ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
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
              scrollToBarcode(10000, endRef);
            }}
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
        ) : null} */}
        {!coverVisible ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              bottom: "140px",
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
              scrollToBarcode(2000, qrCodeRef);
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
      </div>
    </div>
  );
};

export default LuxuryTheme;
