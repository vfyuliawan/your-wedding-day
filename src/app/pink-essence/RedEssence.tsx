"use client";

import { motion, useAnimation } from "framer-motion";
import EndView from "./Section/End/EndView";
import FooterView from "./Section/Footer/FooterView";
import GaleryView from "./Section/Galery/GaleryView";
import GiftsView from "./Section/Giifts/GiftsView";
import HeaderView from "./Section/Header/HeaderView";
import HeroView from "./Section/Hero/HeroView";
import HomeView from "./Section/Home/HomeView";
import InfoView from "./Section/Info/InfoView";
import FadeDownAnimation from "./Section/MotionText";
import Navbar2View from "./Section/Navbar/Navbar2View";
import NavbarView from "./Section/Navbar/NavbarView";
import RsvpView from "./Section/Rsvp/RsvpView";
import StoryView from "./Section/Story/StoryView";
import { SetStateAction, useEffect, useRef, useState } from "react";
import MaleFemaleView from "./Section/Male-Female/MaleFemaleView";
import NewHomeView from "./Section/NewHome/NewHomeView";
// import CoverView from "./Section/Cover/CoverView";
import { CoverTestView } from "./Section/CoverTest";
import InfoView2 from "./Section/Info/InfoView2";
import CountDownView from "./Section/CountDown/CountDownView";
import GaleryView2 from "./Section/Galery/GaleryView2";
import StoryView2 from "./Section/Story/StoryView2";
import { DocumentData, Timestamp } from "firebase/firestore";
import { TimeConvertionDate } from "../utils/TimeConvertion";
import CoverView2 from "./Section/Cover/CoverView2";
// import AOS from 'aos';

interface RedEssenceInterface {
  details: DocumentData | undefined;
  getDetails: () => void
  guest:string;
}

const RedEssence = (props: RedEssenceInterface) => {
  const [visible, setVisible] = useState(false);
  const [removeComp, setRemoveComp] = useState(false);
  const heroRef = useRef<any>(null);
  const headerRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
        <source src={`/music/${props?.details?.ThemeSong}.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <CoverView2
      guest={props.guest}
        isVisible={coverVisible}
        onCoverClick={handleCoverClick}
        detailCover={props?.details?.Cover}
      />
      {!coverVisible ? <Navbar2View /> : null}
      <HeaderView themeName={props?.details?.ThemeName} />
      <div className="hero-home">
        {props?.details?.Hero?.Visible ? (
          <HeroView ref={heroRef} HeroDetail={props?.details?.Hero} />
        ) : null}
        {props?.details?.Home?.Visible ? (
          <NewHomeView HomeDetail={props?.details?.Home} />
        ) : null}
      </div>
      {props?.details?.MaleFemale?.Visible ? (
        <MaleFemaleView MaleFemaleDetail={props?.details?.MaleFemale} />
      ) : null}
      {props?.details?.InfoAcara?.Visible ? (
        <InfoView2 Info={props?.details?.InfoAcara} />
      ) : (
        <InfoView2 Info={props?.details?.InfoAcara} />
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
                .toISOString().split(".")[0]
            )
          }
        />
      ) : null}
      <StoryView2 OurStory={props?.details?.OurStory} />
      <GaleryView2 />
      <RsvpView Message={props?.details?.Message} slug={props?.details?.Slug} userId={props?.details?.idDoc} getDetail={function (): void {
        props.getDetails()
      } } />
      <GiftsView />
      <FooterView />
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
    </div>
  );
};

export default RedEssence;
