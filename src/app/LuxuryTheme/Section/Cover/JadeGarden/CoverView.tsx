"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CoverModelInterface } from "./CoverModel";
import { HeroViewInterface } from "../../Hero/RedEssence/HeroModel";
import { Timestamp } from "firebase/firestore";
import {
  TimeConvertionDate,
  TimeConvertionDay,
  TimeConvertionFullDate,
  TimeConvertionFullDateAndTime,
  TimeConvertionUSFormat,
} from "../../../../utils/TimeConvertion";
import React from "react";
import { isMobile } from "react-device-detect";
import { IConstantFont } from "../../../../utils/ConstantFont";
import { hexToRgba } from "../../../../utils/ConvertColor";

const CoverView = (props: CoverModelInterface) => {
  const [appear, setAppear] = useState(false);

  const handleCoverClick = () => {
    setAppear(true);
    props.onCoverClick();
  };

  const calculateTimeRemaining = () => {
    const now = new Date();

    const targetDate = props.detailCover!.date
      ? new Date(props.detailCover!.date)
      : undefined;

    if (!(targetDate instanceof Date) || isNaN(targetDate.getTime())) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
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

  return (
    <AnimatePresence>
      {!appear && (
        <motion.div
          className="cover2"
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: props.isVisible ? 0 : -1000 }}
          exit={{ y: -1000 }}
          transition={{ duration: 2, delay: props.isVisible ? 0 : 1 }}
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
            backgroundColor: appear ? "var(--third)" : "black",
          }}
        >
          {/* Cover content */}
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
            {/* <div
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
        </div> */}

            <div
              style={{
                position: "absolute",
                width: "70vh",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 1,
                overflow: "hidden",
                backgroundColor: "var(--prim)",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                width: "100vh",
                height: "100vh",
                display: "flex",
                top: -10,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                className=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={"/image/Jade_Garden/coverbg.png"}
                alt="centered image"
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "150px",
                left: isMobile ? -58 : -120,
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
                      fontSize: 24,
                      fontWeight: "400",
                      fontFamily: IConstantFont.Forum,
                      textShadow: "var(--shadow2)",
                      color: "var(--forth)",
                      marginLeft: 20,
                    }}
                  >
                    THE WEDDING OF
                  </p>
                </div>

                <div className="col-sm-12 justify-content-center align-items-center d-flex">
                  <div
                    style={{
                      width: 300,
                      height: 300,
                      // backgroundColor: "red",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? 165 : 220,
                        height: isMobile ? 165 : 220,
                        top: isMobile ? 90 : 50,
                        left: isMobile ? "54%" : "51%",
                        transform: "translateX(-50%)",
                        borderRadius: "50%",
                        position: "absolute",
                        overflow: "hidden",
                        backgroundImage: `url("${props.detailCover?.img}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* <img
                    className=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={props.detailCover?.img}
                    alt="centered image"
                  /> */}
                    </div>
                    <div
                      style={{
                        width: isMobile ? 330 : 300,
                        height: isMobile ? 330 : 300,
                        top: 10,
                        left: isMobile ? 50 : "50%",
                        transform: isMobile
                          ? "translateX(0%)"
                          : "translateX(-50%)",
                        position: "absolute",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        className=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={"/image/Jade_Garden/coverFrame.png"}
                        alt="centered image"
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: isMobile ? -50 : -30,
                    marginLeft: isMobile ? 10 : 20,
                  }}
                  className="col-12 align-items-center d-flex  justify-content-center"
                >
                  <div className="row">
                    <div className="col-12">
                      <p
                        style={{
                          fontFamily: IConstantFont.lavishlyYours,
                          fontSize: 30,
                          color: "var(--forth)",
                          letterSpacing: 3,
                          fontWeight: 500,
                        }}
                      >
                        {props.detailCover?.title.toLocaleLowerCase()}
                      </p>
                    </div>
                    <div className="col-12 justify-content-center align-items-end d-flex">
                      <div
                        style={{
                          width: 200,
                          height: 1,
                          backgroundColor: "white",
                          marginBottom: 4,
                        }}
                      ></div>
                    </div>
                    <div className="col-12">
                      <p
                        className=""
                        style={{
                          fontSize: 18,
                          fontFamily: "dream evanue",
                          color: "var(--forth)",
                          letterSpacing: 12,
                          fontWeight: 800,
                        }}
                      >
                        {
                          TimeConvertionFullDate(
                            props.detailCover!.date!.toString()
                          ).dateMonthandYearDot
                        }
                      </p>
                    </div>
                    <div className="col-12 mt-4">
                      <p
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "var(--forth)",
                          fontFamily: IConstantFont.regulerLight,
                        }}
                      >
                        Kepada Bpk/Ibu/Saudara/i
                      </p>
                    </div>
                    <div className="col">
                      <p
                        className=""
                        style={{
                          fontSize: 24,
                          color: "var(--forth)",
                          fontFamily: IConstantFont.regulerLight,
                        }}
                      >
                        {props.guest.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: isMobile ? 10 : 25,
                  }}
                  className="col-12"
                >
                  <button
                    className="btn btn-md text-center"
                    style={{
                      width: "180px",
                      opacity: 0.8,
                      height: 40,
                      backgroundColor: "var(--third)",
                      fontSize: 12,
                      color: "var(--forth)",
                      // padding:8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      handleCoverClick();
                    }}
                  >
                    <i
                      style={{ fontSize: "12px", color: "var(--forth)" }}
                      className="bi bi-envelope-open-fill"
                    />
                    {"    "}
                    Buka Undangan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

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
        backgroundColor: "black",
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
        {/* <div
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
        </div> */}

        <div
          style={{
            position: "absolute",
            width: "70vh",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 1,
            overflow: "hidden",
            backgroundColor: "var(--prim)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "100vh",
            height: "100vh",
            display: "flex",
            top: -10,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={"/image/Jade_Garden/coverbg.png"}
            alt="centered image"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "150px",
            left: isMobile ? -58 : -120,
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
                  fontSize: 24,
                  fontWeight: "400",
                  fontFamily: IConstantFont.Forum,
                  textShadow: "var(--shadow2)",
                  color: "var(--forth)",
                  marginLeft: 20,
                }}
              >
                THE WEDDING OF
              </p>
            </div>

            <div className="col-sm-12 justify-content-center align-items-center d-flex">
              <div
                style={{
                  width: 300,
                  height: 300,
                  // backgroundColor: "red",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: isMobile ? 165 : 220,
                    height: isMobile ? 165 : 220,
                    top: isMobile ? 90 : 50,
                    left: isMobile ? "54%" : "51%",
                    transform: "translateX(-50%)",
                    borderRadius: "50%",
                    position: "absolute",
                    overflow: "hidden",
                    backgroundImage: `url("${props.detailCover?.img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img
                    className=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={props.detailCover?.img}
                    alt="centered image"
                  /> */}
                </div>
                <div
                  style={{
                    width: isMobile ? 330 : 300,
                    height: isMobile ? 330 : 300,
                    top: 10,
                    left: isMobile ? 50 : "50%",
                    transform: isMobile ? "translateX(0%)" : "translateX(-50%)",
                    position: "absolute",
                    overflow: "hidden",
                  }}
                >
                  <img
                    className=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={"/image/Jade_Garden/coverFrame.png"}
                    alt="centered image"
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: isMobile ? -50 : -30,
                marginLeft: isMobile ? 10 : 20,
              }}
              className="col-12 align-items-center d-flex  justify-content-center"
            >
              <div className="row">
                <div className="col-12">
                  <p
                    style={{
                      fontFamily: IConstantFont.lavishlyYours,
                      fontSize: 30,
                      color: "var(--forth)",
                      letterSpacing: 3,
                      fontWeight: 500,
                    }}
                  >
                    {props.detailCover?.title.toLocaleLowerCase()}
                  </p>
                </div>
                <div className="col-12 justify-content-center align-items-end d-flex">
                  <div
                    style={{
                      width: 200,
                      height: 1,
                      backgroundColor: "white",
                      marginBottom: 4,
                    }}
                  ></div>
                </div>
                <div className="col-12">
                  <p
                    className=""
                    style={{
                      fontSize: 18,
                      fontFamily: "dream evanue",
                      color: "white",
                      letterSpacing: 12,
                      fontWeight: 800,
                    }}
                  >
                    {
                      TimeConvertionFullDate(
                        props.detailCover!.date!.toString()
                      ).dateMonthandYearDot
                    }
                  </p>
                </div>
                <div className="col-12 mt-4">
                  <p
                    className=""
                    style={{
                      fontSize: "16px",
                      color: "white",
                      fontFamily: IConstantFont.regulerLight,
                    }}
                  >
                    Kepada Bpk/Ibu/Saudara/i
                  </p>
                </div>
                <div className="col">
                  <p
                    className=""
                    style={{
                      fontSize: 24,
                      color: "white",
                      fontFamily: IConstantFont.regulerLight,
                    }}
                  >
                    {props.guest.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                marginLeft: isMobile ? 10 : 25,
              }}
              className="col-12"
            >
              <button
                className="btn btn-md text-center"
                style={{
                  width: "180px",
                  opacity: 0.8,
                  height: 40,
                  backgroundColor: "#344843",
                  fontSize: 12,
                  color: "var(--forth)",
                  // padding:8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  handleCoverClick();
                }}
              >
                <i
                  style={{ fontSize: "12px", color: "var(--forth)" }}
                  className="bi bi-envelope-open-fill"
                />
                {"    "}
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
