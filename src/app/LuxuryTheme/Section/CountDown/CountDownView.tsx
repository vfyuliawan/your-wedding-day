"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import React from "react";
import AnimationThemeInstance from "../../../utils/AnimationThemes";

interface CountDownViewInterface {
  targetDate: Date | undefined;
}

const CountDownView = (props: CountDownViewInterface) => {
  const calculateTimeRemaining = () => {
    const now = new Date();

    const difference =
      typeof props.targetDate === "number" || props.targetDate instanceof Date
        ? +props.targetDate - now.getTime()
        : 0;

    if (difference <= 0) {
      // Countdown reached, do something here
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const animate = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      animate.start({ opacity: 0.6, y: 0 });
    }
    return () => {};
  }, [isVisible, animate]);

  return (
    <section
      id="count-dowm"
      className="count-down"
      style={{ marginTop: "5rem" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div
            style={{
              width: "100%",
              height: "400px",
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
              src="/pink-essence/img/weddingDecor2.jpg"
              alt=""
            />
            <motion.div
              ref={targetRef}
              initial={AnimationThemeInstance.FadeUp}
              animate={animate}
              transition={{ duration: 1, delay: 0.5 }}
              className="count-down-overlay container"
              style={{
                padding: "2%",
                position: "absolute",
                height: "70%",
                width: "90%",
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="row text-center">
                <motion.h1
                  initial={AnimationThemeInstance.FadeDown}
                  transition={{ duration: 1, delay: 0.5 }}
                  animate={animate}
                  style={{
                    color: "white",
                    fontFamily: "Dancing Script",
                    fontSize: "4rem",
                  }}
                >
                  Menuju Hari Bahagia
                </motion.h1>
              </div>
              <motion.div
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 1, delay: 1 }}
                animate={animate}
                className="row mt-5"
              >
                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{ paddingBottom: "3rm", paddingTop: "3rm" }}
                  >
                    <h3
                      style={{
                        color: "white",
                        fontFamily: "Dancing Script",
                        fontSize: "2.4rem",
                      }}
                    >
                      {timeRemaining.days}
                      <br /> <span style={{ fontSize: "2rem" }}> Days </span>
                    </h3>
                  </div>
                </div>

                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{ paddingBottom: "3rm", paddingTop: "3rm" }}
                  >
                    <h3
                      style={{
                        color: "white",
                        fontFamily: "Dancing Script",
                        fontSize: "2.4rem",
                      }}
                    >
                      {timeRemaining.hours}
                      <br /> <span style={{ fontSize: "2rem" }}> Hours </span>
                    </h3>
                  </div>
                </div>

                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{ paddingBottom: "3rm", paddingTop: "3rm" }}
                  >
                    <h3
                      style={{
                        color: "white",
                        fontFamily: "Dancing Script",
                        fontSize: "2.4rem",
                      }}
                    >
                      {timeRemaining.minutes} <br />
                      <span style={{ fontSize: "2rem" }}> Minute </span>
                    </h3>
                  </div>
                </div>

                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{ paddingBottom: "3rm", paddingTop: "3rm" }}
                  >
                    <h3
                      style={{
                        color: "white",
                        fontFamily: "Dancing Script",
                        fontSize: "2.4rem",
                      }}
                    >
                      {timeRemaining.seconds} <br />
                      <span style={{ fontSize: "2rem" }}> Second </span>
                    </h3>
                  </div>
                </div>
              </motion.div>

              <div className="row mt-5">
                <a
                  className="btn btn-lg text-center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "100%",
                  }}
                >
                  <i className="bi bi-calendar-check-fill">
                    {" "}
                    {"      "}Save To Calendar
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDownView;
