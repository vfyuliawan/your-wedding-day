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
import { ThemeColorClass } from "@/app/Constant/GreenFloral/ThemeColor";

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

  const background = new ThemeColorClass(props.themeName);


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
        background:background.color.secondary
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
          src="image/background/floralVertical.jpg"
          alt="dfasdfsa"
        />
        <div
          className=""
          style={{
            background: background.color.secondary,
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
          <svg  style={{
              position: "relative",
              bottom: "70%",
              opacity:0.5 
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={background.color.secondary}
              fill-opacity="1"
              d="M0,128L17.1,133.3C34.3,139,69,149,103,128C137.1,107,171,53,206,42.7C240,32,274,64,309,69.3C342.9,75,377,53,411,74.7C445.7,96,480,160,514,170.7C548.6,181,583,139,617,101.3C651.4,64,686,32,720,37.3C754.3,43,789,85,823,106.7C857.1,128,891,128,926,138.7C960,149,994,171,1029,149.3C1062.9,128,1097,64,1131,53.3C1165.7,43,1200,85,1234,138.7C1268.6,192,1303,256,1337,282.7C1371.4,309,1406,299,1423,293.3L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
            ></path>
          </svg>
          <svg
            style={{
              position: "relative",
              bottom: "130%",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill={background.color.secondary}
              fill-opacity="1"
              d="M0,160L21.8,138.7C43.6,117,87,75,131,48C174.5,21,218,11,262,21.3C305.5,32,349,64,393,106.7C436.4,149,480,203,524,186.7C567.3,171,611,85,655,53.3C698.2,21,742,43,785,96C829.1,149,873,235,916,240C960,245,1004,171,1047,133.3C1090.9,96,1135,96,1178,96C1221.8,96,1265,96,1309,90.7C1352.7,85,1396,75,1418,69.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
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
            top: "150px",
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
              color: background.color.textColor,
            }}
          >
            THE WEDDING OF
          </p>
          <h2
            style={{
              fontFamily: "brilon",
              fontSize: "4rem",
              color: background.color.textColor,
            }}
          >
            {props.detailCover.TitleCover}
          </h2>

          <div style={{
            height:'140px',
            width:'140px',
            position:'relative',
            right:'-50%',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            backgroundPosition:'center',
            backgroundSize: 'cover', 
            backgroundImage:`url(${props.detailCover.ImgCover})`,
            backgroundColor:background.color.secondary
          }}>
          </div>
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
                color: background.color.textColor,
              }}
            >
              Kepada Bpk/Ibu/Saudara/i
            </p>
            <p
              className=""
              style={{
                fontSize: "2rem",
                color: background.color.textColor,
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
                background: background.color.secondary,
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
