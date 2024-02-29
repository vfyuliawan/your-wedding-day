"use client";

import { motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CoverModelInterface } from "./CoverModel";
import {
  TimeConvertionDate,
  TimeConvertionInterface,
} from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import { useInView } from "react-intersection-observer";

const CoverView = (props: CoverModelInterface) => {
  const [appear, setAppear] = useState(false);
  const [images, setImages] = useState<string[]>([
    props?.detailCover?.ImgCover,
    props.home?.HomeImg,
  ]);

  const handleCoverClick = () => {
    props.onCoverClick();
    setTimeout(() => {
      setAppear(true);
    }, 2000);
  };

  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0, transition: { duration: 2 } });
      setIndex((prevIndex) => (prevIndex + 1) % images!.length);
      controls.start({ opacity: 1, transition: { duration: 2 } });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [controls, images!.length]);

  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetDate: Date = new Date(
      props.detailCover?.Date.toDate().toISOString().split(".")[0]
    );

    const difference =
      typeof targetDate === "number" || targetDate instanceof Date
        ? +targetDate - now.getTime()
        : 0;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  const bgColor = new ThemeColorClass(props.themeName);
  const bgImage = new ThemeImageClass(props.themeName);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return !appear ? (
    <div>
      <motion.div
        className=""
        initial={{ opacity: 1 }}
        animate={{ opacity: props.isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: props.isVisible ? 0 : 1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
          background: bgColor.color.secondary,
        }}
      >
        <motion.img
          animate={controls}
          className="kenburns-top"
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={images![index]}
          alt="dfasdfsa"
        />
        <div style={{ position: "absolute", top: 0, right: -20, zIndex: 999 }}>
          <motion.img
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : -50,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ width: 280, height: 150 }}
            src={bgImage.image.top}
            alt=""
          />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, zIndex: 999 }}>
          <motion.img
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 100,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ width: 240, height: 130 }}
            src={bgImage.image.bottom}
            alt=""
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.5,
            backgroundColor: "black",
          }}
        ></div>

        {/* <svg
          style={{ position: "absolute", bottom: 0, height: 430, opacity: 0.9 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={bgColor.color.secondary}
            fill-opacity="1"
            d="M0,96L288,128L576,160L864,128L1152,128L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
        <svg
          style={{ position: "absolute", bottom: 0, opacity: 0.6, height: 460 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={bgColor.color.secondary}
            fill-opacity="1"
            d="M0,96L288,128L576,160L864,128L1152,128L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg> */}
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              flexDirection: "column",
              top: "20%",
              width: "100%",
            }}
          >
            <p
              style={{
                color: bgColor.color.primary,
                fontSize: 24,
                fontFamily: "FaunaOne",
              }}
            >
              The Wedding of
            </p>
            <div style={{ marginTop: 2 }} />
            <h2
              style={{
                color: bgColor.color.primary,
                fontFamily: "brilon",
                fontSize: 32,
              }}
            >
              {props.detailCover?.TitleCover}
            </h2>
            <div style={{ marginTop: 2 }} />

            <div style={{ marginTop: 2 }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              flexDirection: "column",
              top: "60%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "65%",
              height: 150,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for transparency (0.5 for 50%)
              borderRadius: "10px",
              backdropFilter: "blur(10px)", // Adjust the blur value as needed
            }}
          >
            <div style={{ marginTop: 10 }} />

            <p
              style={{
                fontSize: "16px",
                color: bgColor.color.primary,
                fontFamily: "FaunaOne",
                textAlign: "center",
              }}
            >
              Kepada Yth:
              <br />
              Bapak/Ibu/Saudara/i
            </p>
            <div style={{ marginTop: 2 }} />
            <p
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: bgColor.color.primary,
                fontFamily: "faunaone",
              }}
            >
              {props.guest}
            </p>
            <p
              style={{
                fontSize: "16px",
                color: bgColor.color.primary,
                fontFamily: "FaunaOne",
                textAlign: "center",
              }}
            >
              Di Tempat
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              zIndex:999,
              transform: "translateX(-50%)",
              top: "82%",
              left: "50%",
              backgroundColor: bgColor.color.secondary,
              borderRadius: "20px",
              paddingBottom: "10px",
              paddingTop: "10px",
              paddingRight: "15px",
              paddingLeft: "15px",
              fontSize: "15px",
              fontFamily: "faunaone",
              color: bgColor.color.primary,
            }}
            onClick={() => {
              handleCoverClick();
            }}
          >
            Open Invitation
          </div>
        </div>
      </motion.div>
    </div>
  ) : null;
};

export default CoverView;
