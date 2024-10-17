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
      animate.start({ opacity: 0.6, y: 0 });
    }
    return () => {};
  }, [isVisible, animate]);

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
                top: 90,
              }}
            >
              <div className="row text-center">
                <motion.h1
                  initial={AnimationThemeInstance.FadeDown}
                  transition={{ duration: 1, delay: 0.5 }}
                  animate={animate}
                  style={{
                    color: "var(--third)",
                    fontFamily: "Dancing Script",
                    fontSize: "25px",
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
                    style={{
                      paddingBottom: "3rm",
                      paddingTop: "3rm",
                      color: "var(--third)",
                    }}
                  >
                    <h3
                      style={{
                        color: "var(--third)",
                        fontFamily: "Dancing Script",
                        fontSize: "25px",
                      }}
                    >
                      {timeRemaining.days}
                      <br /> <span style={{ fontSize: "25px" }}> Days </span>
                    </h3>
                  </div>
                </div>

                <div className="col-md-3 col-3">
                  <div
                    className="text-center jusify-content-center d-flex"
                    style={{
                      paddingBottom: "3rm",
                      paddingTop: "3rm",
                      color: "var(--third)",
                    }}
                  >
                    <h3
                      style={{
                        color: "var(--third)",
                        fontFamily: "Dancing Script",
                        fontSize: "25px",
                      }}
                    >
                      {timeRemaining.hours}
                      <br /> <span style={{ fontSize: "25px" }}> Hours </span>
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
                        color: "var(--third)",
                        fontFamily: "Dancing Script",
                        fontSize: "25px"
                      }}
                    >
                      {timeRemaining.minutes} <br />
                      <span style={{ fontSize: "25px" }}> Minute </span>
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
                        color: "var(--third)",
                        fontFamily: "Dancing Script",
                        fontSize: "25px",
                      }}
                    >
                      {timeRemaining.seconds} <br />
                      <span style={{ fontSize: "25px" }}> Second </span>
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
                  <i
                    style={{ fontSize: "12px", color: "var(--third)" }}
                    className="bi bi-calendar-check-fill"
                  >
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
