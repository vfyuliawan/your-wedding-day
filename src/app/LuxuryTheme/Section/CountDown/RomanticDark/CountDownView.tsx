"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import React from "react";
import AnimationThemeInstance from "../../../../utils/AnimationThemes";
import { IConstantFont } from "../../../../utils/ConstantFont";

interface CountDownViewInterface {
  targetDate: Date | undefined;
  img?: string;
}

const CountDownView = (props: CountDownViewInterface) => {
  const calculateTimeRemaining = () => {
    const now = new Date();

    // Convert the date string to a Date object
    const targetDate = props.targetDate!
      ? new Date(props.targetDate!)
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

  const animate = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeStartVertical);
    }

    return () => {};
  }, [animate, isVisible]);

  return (
    <section
      id="count-down"
      className="count-down"
      // style={{ marginTop: "5rem" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div
            style={{
              width: "100%",
              height: 500,
              backgroundColor: "green",
              position: "relative",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              width={"100%"}
              height={"100%"}
              src={props.img}
              alt=""
            />
            <motion.div
              ref={targetRef}
              initial={AnimationThemeInstance.FadeUp}
              animate={animate}
              transition={{ duration: 0.5, delay: 0 }}
              className="container"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                opacity: 1,
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
              }}
            ></motion.div>
            <div
              className=""
              style={{
                padding: "2%",
                position: "absolute",
                height: "70%",
                width: "90%",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                top: 90,
              }}
            >
              <div className="row text-start">
                <motion.h1
                  initial={AnimationThemeInstance.FadeDown}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  animate={animate}
                  style={{
                    color: "var(--forth)",
                    fontFamily: IConstantFont.homadeApple,
                    fontSize: 28,
                    fontWeight: 800,
                  }}
                >
                  Wedding
                </motion.h1>
                <motion.h1
                  initial={AnimationThemeInstance.FadeDown}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  animate={animate}
                  style={{
                    color: "var(--forth)",
                    fontFamily: IConstantFont.regulerLight,
                    fontSize: 24,
                    fontWeight: 800,
                  }}
                >
                  Event
                </motion.h1>
                <motion.p
                  initial={AnimationThemeInstance.FadeDown}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  animate={animate}
                  style={{
                    color: "var(--forth)",
                    fontFamily: IConstantFont.regulerLight,
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Dengan kerendahan hati kami bermaksud mengundang
                  Bapak/Ibu/Sodara/Sodari guna hadir dalam acara pernikahan kami
                  yang akan diselenggarakan pada:
                </motion.p>
              </div>
              {/* <motion.div
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}

                animate={animate}
                className="row mt-5"
              >
                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{
                      paddingBottom: "3rm",
                      paddingTop: "3rm",
                      color: "var(--forth)",
                    }}
                  >
                    <motion.h3
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.5, delay: 0.5 }}

                      animate={animate}
                      style={{
                        color: "var(--forth)",
                        fontFamily: IConstantFont.regulerLight,
                        fontSize: 28,
                        fontWeight:"bold"
                      }}
                    >
                      {timeRemaining.days}
                      <br /> <span style={{ fontSize: 12 }}> Days </span>
                    </motion.h3>
                  </div>
                </div>

                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{
                      paddingBottom: "3rm",
                      paddingTop: "3rm",
                      color: "var(--forth)",
                    }}
                  >
                    <motion.h3
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.5, delay: 0.6 }}

                      animate={animate}
                      style={{
                        color: "var(--forth)",
                        fontFamily: IConstantFont.regulerLight,
                        fontSize: "25px",
                      }}
                    >
                      {timeRemaining.hours}
                      <br /> <span style={{ fontSize: "25px" }}> Hours </span>
                    </motion.h3>
                  </div>
                </div>

                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{ paddingBottom: "3rm", paddingTop: "3rm" }}
                  >
                    <motion.h3
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.5, delay: 0.7 }}

                      animate={animate}
                      style={{
                        color: "var(--forth)",
                        fontFamily: IConstantFont.regulerLight,
                        fontSize: "25px",
                      }}
                    >
                      {timeRemaining.minutes} <br />
                      <span style={{ fontSize: "25px" }}> Minute </span>
                    </motion.h3>
                  </div>
                </div>

                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{ paddingBottom: "3rm", paddingTop: "3rm" }}
                  >
                    <motion.h3
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.5, delay: 0.8 }}

                      animate={animate}
                      style={{
                        color: "var(--forth)",
                        fontFamily: IConstantFont.regulerLight,
                        fontSize: "25px",
                      }}
                    >
                      {timeRemaining.seconds} <br />
                      <span style={{ fontSize: "25px" }}> Second </span>
                    </motion.h3>
                  </div>
                </div>
              </motion.div> */}
              <div className="row mt-5">
                <div className="col-3">
                  <div
                    className="text-center"
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 10,
                      border: "3px solid white",
                      justifyContent: "space-between",
                      padding: 6,
                    }}
                  >
                    <h1 style={{ fontSize: 30, color: "var(--forth)" }}>
                      {" "}
                      {timeRemaining.days}
                    </h1>
                    <p style={{ fontSize: 14, color: "var(--forth)" }}>Hari</p>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="text-center"
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 10,
                      border: "3px solid white",
                      justifyContent: "space-between",
                      padding: 6,
                    }}
                  >
                    <h1 style={{ fontSize: 30, color: "var(--forth)" }}>
                    {timeRemaining.hours}
                    </h1>
                    <p style={{ fontSize: 14, color: "var(--forth)" }}>Jam</p>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="text-center"
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 10,
                      border: "3px solid white",
                      justifyContent: "space-between",
                      padding: 6,
                    }}
                  >
                    <h1 style={{ fontSize: 30, color: "var(--forth)" }}>
                    {timeRemaining.minutes}
                    </h1>
                    <p style={{ fontSize: 14, color: "var(--forth)" }}>Menit</p>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="text-center"
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 10,
                      border: "3px solid white",
                      justifyContent: "space-between",
                      padding: 6,
                    }}
                  >
                    <h1 style={{ fontSize: 30, color: "var(--forth)" }}>{timeRemaining.seconds}
                    </h1>
                    <p style={{ fontSize: 14, color: "var(--forth)" }}>Detik</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 22 }} className="row">
                <div className="col-5">
                  <div
                    style={{
                      height: 3,
                      backgroundColor: "var(--forth)",
                      marginBottom: 8,
                    }}
                  ></div>
                  <h4 style={{ color: "var(--forth)", fontSize: 15 }}>
                    <i
                      style={{
                        fontSize: 16,
                        marginRight: 3,
                        color: "var(--forth)",
                      }}
                      className="bi bi-calendar-check"
                    />
                    {"   "}
                    Simpan Tanggal
                  </h4>

                  <div
                    style={{
                      height: 3,
                      marginTop: 8,
                      backgroundColor: "var(--forth)",
                    }}
                  ></div>
                </div>
              </div>

              {/* <div className="row mt-5">
                <a
                  className="btn btn-lg text-center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "100%",
                  }}
                >
                  <i
                    style={{ fontSize: "12px", color: "var(--forth)" }}
                    className="bi bi-calendar-check-fill"
                  >
                    {" "}
                    {"      "}Save To Calendar
                  </i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDownView;
