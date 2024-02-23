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
// import AOS from 'aos';

interface LuxuryThemeInterface {
  details: DocumentData | undefined;
  getDetails: () => void;
  guest: string;
  idGuest: string;
}

const LuxuryTheme = (props: LuxuryThemeInterface) => {
  const [visible, setVisible] = useState(false);
  const [removeComp, setRemoveComp] = useState(false);
  const heroRef = useRef<any>(null);
  const headerRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<any>(null);

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

  const easeInOutQuad = (t: any) => (t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t);

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
          src={`/music/${props?.details?.ThemeSong}.mp3`}
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>
      <CoverView
        hero={props?.details?.Hero}
        guest={props.guest}
        isVisible={coverVisible}
        onCoverClick={handleCoverClick}
        detailCover={props?.details?.Cover}
      />
      <div style={{ overflowY: "scroll" }} ref={containerRef}>
        {!coverVisible ? <NavbarView /> : null}
        <HeaderView themeName={props?.details?.ThemeName} />
        <div className="hero-home">
          {props?.details?.Hero?.Visible ? (
            <HeroView ref={heroRef} HeroDetail={props?.details?.Hero} />
          ) : null}
          {props?.details?.Home?.Visible ? (
            <HomeView HomeDetail={props?.details?.Home} />
          ) : null}
        </div>
        {props?.details?.MaleFemale?.Visible ? (
          <MaleFemaleView MaleFemaleDetail={props?.details?.MaleFemale} />
        ) : null}
        {props?.details?.InfoAcara?.Visible ? (
          <InfoView Info={props?.details?.InfoAcara} Embeded={props?.details?.Embeded} />
        ) : (
          <InfoView Info={props?.details?.InfoAcara} Embeded={props?.details?.Embeded}/>
        )}
        {props?.details?.CountDown?.Visible ? (
          <CountDownView
            targetDate={
              new Date(
                new Timestamp(
                  props?.details?.CountDown?.Date?.seconds,
                  props?.details?.CountDown?.Date?.nanoseconds
                )
                  .toDate()
                  .toISOString()
                  .split(".")[0]
              )
            }
          />
        ) : null}
        {props?.details?.OurStory.Visible ? (
          <StoryView OurStory={props?.details?.OurStory} />
        ) : null}

        {props?.details?.Galery.Visible ? (
          <GaleryView image={props?.details?.Galery.image} />
        ) : null}
        <RsvpView
          Message={props?.details?.Message}
          slug={props?.details?.Slug}
          userId={props?.details?.idDoc}
          getDetail={function (): void {
            props.getDetails();
          }}
        />
        {props?.details?.Gifts.Visible ? (
          <GiftsView Gifts={props?.details?.Gifts} />
        ) : null}
        <div ref={qrCodeRef}></div>

        {props?.details?.GuestBarcode ? (
          <GuestScanView
            idGuest={props.idGuest ?? 0}
            guest={props.guest ?? ""}
          />
        ) : null}

        <FooterView Footer={props?.details?.Footer} />
        <EndView />
        {!coverVisible ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
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
            onClick={togglePlay}
          >
            {isPlaying ? (
              <i
                className="bi bi-music-player-fill"
                style={{ fontSize: "1rem" }}
              ></i>
            ) : (
              <i className="bi bi-pause-fill"></i>
            )}
          </button>
        ) : null}
        {!coverVisible ? (
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
            onClick={() =>{scrollToBarcode(18000, endRef)}}          
          >
            {isPlaying ? (
              <i
                className="bi bi-lg bi-arrow-down-circle"
                style={{ fontSize: "1rem" }}
              ></i>
            ) : (
              <i className="bi bi-lg bi-arrow-down-circle"></i>
            )}
          </button>
        ) : null}
        {!coverVisible ? (
          <button
            className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
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
            onClick={() =>{scrollToBarcode(18000, endRef)}}          
          >
            {isPlaying ? (
              <i
                className="bi bi-lg bi-qr-code"
                style={{ fontSize: "4rem" }}
              ></i>
            ) : (
              <i className="bi bi-lg bi-qr-code" style={{fontSize:"2rem"}}></i>
            )}
          </button>
        ) : null}
         
      </div>
    </div>
  );
};

export default LuxuryTheme;
