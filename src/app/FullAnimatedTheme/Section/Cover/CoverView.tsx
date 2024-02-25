"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CoverModelInterface } from "./CoverModel";
import {
  TimeConvertionDate,
  TimeConvertionInterface,
} from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";

const CoverView = (props: CoverModelInterface) => {
  const [appear, setAppear] = useState(false);
  const handleCoverClick = () => {
    props.onCoverClick();
    setTimeout(() => {
      setAppear(true);
    }, 2000);
  };

  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetDate: Date = new Date(
      props.detailCover.Date.toDate().toISOString().split(".")[0]
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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return !appear ? (
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
      <img
        className="kenburns-top"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "75%",
          objectFit: "cover",
        }}
        src={props.detailCover.ImgCover}
        alt="dfasdfsa"
      />
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

      <svg
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
      </svg>
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
            bottom: 35,
            width: "100%",
          }}
        >
          <p
            style={{
              color: bgColor.color.primary,
              fontSize: "18px",
              fontFamily: "FaunaOne",
            }}
          >
            The Wedding of
          </p>
          <div style={{ marginTop: 8 }} />
          <h2
            style={{
              color: bgColor.color.primary,
              fontFamily: "brilon",
              fontSize: 24,
            }}
          >
            Romeo And Juliet
          </h2>
          <div style={{ marginTop: 8 }} />
          <p
            style={{
              fontSize: "12px",
              color: bgColor.color.primary,
              fontFamily: "FaunaOne",
            }}
          >
            Turut Mengundang Bapak/Ibu/Sdr/i
          </p>
          <div style={{ marginTop: 16 }} />
          <p
            style={{
              fontSize: 20,
              color: bgColor.color.primary,
              fontFamily: "faunaone",
            }}
          >
            Setrytjh
          </p>
          <div style={{ marginTop: 16 }} />
          <div
            style={{
              backgroundColor: bgColor.color.primary,
              borderRadius: "20px",
              paddingBottom: "10px",
              paddingTop: "10px",
              paddingRight: "15px",
              paddingLeft: "15px",
              fontSize: "15px",
              fontFamily: "faunaone",
              color: bgColor.color.secondary,
            }}
            onClick={() => {
              handleCoverClick();
            }}
          >
            Open Invitation
          </div>
        </div>
      </div>
    </motion.div>
  ) : null;
};

export default CoverView;
