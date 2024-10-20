"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CoverModelInterface } from "./CoverModel";
import { HeroViewInterface } from "../Hero/HeroModel";
import { Timestamp } from "firebase/firestore";
import {
  TimeConvertionDate,
  TimeConvertionDay,
  TimeConvertionFullDate,
  TimeConvertionFullDateAndTime,
  TimeConvertionUSFormat,
} from "../../../utils/TimeConvertion";
import React from "react";
import { isMobile } from "react-device-detect";

const CoverView = (props: CoverModelInterface) => {
  const [appear, setAppear] = useState(false);
  const handleCoverClick = () => {
    props.onCoverClick();
    setTimeout(() => {
      setAppear(true);
    }, isMobile?1500: 2000);
  };

  const calculateTimeRemaining = () => {
    const now = new Date();

    // Convert the date string to a Date object
    const targetDate = props.detailCover!.date
      ? new Date(props.detailCover!.date)
      : undefined;

    // Check if targetDate is valid
    if (!(targetDate instanceof Date) || isNaN(targetDate.getTime())) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Default values if invalid
    }

    const difference = targetDate.getTime() - now.getTime();

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

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);

      // Clear the interval if countdown has finished
      if (
        newTimeRemaining.days === 0 &&
        newTimeRemaining.hours === 0 &&
        newTimeRemaining.minutes === 0 &&
        newTimeRemaining.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

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
        <div
          style={{
            position: "absolute",
            width: "100vh",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className="kenburns-top"
            style={{
              width: "70%",
              height: "100%",
              objectFit: "cover",
            }}
            src={props.detailCover?.img}
            alt="centered image"
          />
        </div>

        {/* {isMobile ? (
          <>
            <div
              className="cover2-overlay-shadow"
              style={{
                width: "100%",
                overflow: "hidden",
                height: "78%",
                position: "absolute",
                bottom: "3%",
                color: "#fff",

                fontSize: "24px",
                textAlign: "center",
              }}
            ></div>
            <div
              className="cover2-overlay"
              style={{
                width: "100%",
                height: "78%",
                opacity: 0.8,
                overflow: "hidden",

                position: "absolute",
                flexDirection: "row",
                bottom: 0,
                fontSize: "24px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                className="text-center"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  right: "50%",
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  // alignItems: "center",
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
                  <p
                    style={{
                      color: "white",
                      fontFamily: "brilon",
                      fontSize: 20,
                    }}
                  >
                    {TimeConvertionUSFormat(
                      props!.detailCover!.date!.toString()
                    )}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )} */}

        <div
          className="cover2-overlay-img"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "120%",
            opacity: 1,
            marginTop:-90,
            position: "fixed",
            // bottom: 0,
            top:0,
            color: "var(--third)",
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
            color: "var(--third)",
            fontSize: "24px",
            textAlign: "center",
            // display:'flex',
          }}
        >
          <div className="row">
            <div className="col-sm-12">
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  fontFamily: "brilon",
                  textShadow:"var(--shadow2)",
                  color:"var(--forth)"
                }}
              >
                the wedding of
              </p>
            </div>
            <div className="col-sm-12">
              <p
                style={{
                  fontFamily: "brilon",
                  fontSize: "32px",
                  color:"var(--forth)"

                }}
              >
                {props.detailCover?.title}
              </p>
            </div>
            <div style={{ marginTop:  isMobile?"30rem":"19rem" }} className="col-12">
            <p
                className=""
                style={{
                  fontSize: "24px",
                  color: "white",
                  letterSpacing:3,
                  fontFamily: "brilon",
                }}
              >
                {props.guest}
              </p>
              <p
                className=""
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontFamily: "sans-serif",
                }}
              >
                Kepada Bpk/Ibu/Saudara/i
              </p>
            </div>
            <div className="col-12">
            <button
              className="btn btn-md text-center"
              style={{
                width: "180px",
                opacity: 0.7,
                height: 40,
                backgroundColor:"var(--prim)",
                fontSize:12,
                color:"var(--sec)",
                // padding:8,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                handleCoverClick();
              }}
            ><i
            style={{ fontSize: "12px" }}
            className="bi bi-envelope-open-fill"
          />{"    "}
             Buka Undangan
            </button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  ) : null;
};

export default CoverView;
