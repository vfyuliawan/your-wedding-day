"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CoverModelInterface } from "./CoverModel";
import { HeroViewInterface } from "../Hero/HeroModel";
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
    }, 6000);
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
      className="cover2"
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
      <div
        className="figure"
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          className="kenburns-top"
          style={{
            position: "absolute",
            top: 0,
            width: "40%",
            height: "100%",
            objectFit: "cover",
          }}
          src={bgImage.image.cover}
          alt="dfasdfsa"
        />
        <div
          className=""
          style={{
            background: bgColor.color.secondary,
            width: "100%",
            height: "15%",
            position: "absolute",
            flexDirection: "row",
            bottom: 0,
            fontSize: "24px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <svg
            style={{
              position: "relative",
              bottom: "83%",
              opacity: 0.5,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            height="90"
          >
            <path
              fill={bgColor.color.secondary}
              fill-opacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,213.3C672,213,768,139,864,112C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            style={{
              position: "relative",
              bottom: "140%",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill={bgColor.color.secondary}
              fill-opacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,213.3C672,213,768,139,864,112C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div
            className="text-center"
            style={{
              position: "absolute",
              bottom: "10%",
              right: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateX(50%)",
              fontFamily: "Times New Roman",
            }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                color: "white",
                marginBottom: "1rem",
                fontFamily: "Times New Roman",
              }}
            >
              Save The Date
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    {timeRemaining.days}
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Hari
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "5rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    {timeRemaining.hours}
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Jam
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "5rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    {timeRemaining.minutes}
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Menit
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "5rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    {timeRemaining.seconds}
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Detik
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <p style={{ color: "white", fontSize: "14px" }}>
                {TimeConvertionDate(props.detailCover.Date as any).dateFull}
              </p>
            </div>
          </div>
        </div>
        <div
          className="cover2-overlay-img"
          style={{
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            opacity: 1,
            position: "absolute",
            bottom: 0,
            color: "#fff",
            textAlign: "center",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "180px",
            left: 0,
            color: "#fff",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "2rem",
              fontFamily: "Times New Roman",
              color: bgColor.color.textColor,
            }}
          >
            THE WEDDING OF
          </p>
          <h2
            style={{
              fontFamily: "brilon",
              fontSize: "3rem",
              color: bgColor.color.textColor,
            }}
          >
            {props.detailCover.TitleCover}
          </h2>
          <div style={{ height: "5px" }}></div>
          <div
            style={{
              height: "140px",
              width: "140px",
              position: "relative",
              right: "-50%",
              transform: "translateX(-50%)",
              borderRadius: "50%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${props.detailCover.ImgCover})`,
              backgroundColor: bgColor.color.secondary,
            }}
          ></div>
          <div
            className="cover2-kepada"
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <p
              className=""
              style={{
                fontSize: "1.4rem",
                color: bgColor.color.textColor,
              }}
            >
              Kepada Bpk/Ibu/Saudara/i
            </p>
            <p
              className=""
              style={{
                fontSize: "2rem",
                color: bgColor.color.textColor,
              }}
            >
              {props.guest.toLocaleUpperCase()}
            </p>
            <a
              className="btn btn-lg text-center"
              style={{
                width: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: bgColor.color.secondary,
              }}
              onClick={() => {
                handleCoverClick();
              }}
            >
              <i style={{}} className="bi bi-envelope-open-fill">
                {" "}
                {"    "}Buka Undangan
              </i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  ) : null;
};

export default CoverView;
