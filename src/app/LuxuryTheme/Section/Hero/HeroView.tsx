"use client";

import { motion, useAnimation } from "framer-motion";
import { LegacyRef, MutableRefObject, forwardRef, useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import HeaderView from "../Header/HeaderView";
import { HeroViewInterface } from "./HeroModel";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionFullDateAndTime,
  TimeConvertionInterface,
  TimeConvertionUSFormat,
} from "../../../utils/TimeConvertion";
import React from "react";
import AnimationThemeInstance from "../../../utils/AnimationThemes";

const HeroView = forwardRef<any, HeroViewInterface>((props, ref) => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeStartVertical);
    }
  }, [isVisible, controls]);
  return (
    <>
      <section
        id="hero"
        ref={ref}
        style={{ height: "100vh" }}
        className="hero w-100 text-center d-flex justify-content-center align-items-center text-white position-relative"
      >
        <div
          className="background-overlay"
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: `url(${props?.HeroDetail?.img})`,
            filter: "grayscale(30%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="gradient-overlay" />
        <div
          className="inside"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            bottom: -180,
          }}
        >
          <motion.h1
          ref={targetRef}
          animate={controls}
          initial={AnimationThemeInstance.FadeUp}
          transition={{ duration: 0.5 }}
            style={{
              fontFamily: "brilon",
              fontSize: 40,
              color: "var(--third)",
            }}
          >
            {`${props.getTitle
              ?.split("-")[0]
              .split("")[0]
              .toUpperCase()}&${props.getTitle
              ?.split("-")[1]
              .split("")[0]
              .toUpperCase()}`}
          </motion.h1>
          <motion.h4
          ref={targetRef}
          animate={controls}
          initial={AnimationThemeInstance.FadeUp}
          transition={{ duration: 0.5 }}
            style={{ fontFamily: "serif", fontSize: 16, color: "var(--third)" }}
          >
            {TimeConvertionUSFormat(props.HeroDetail!.date!.toString())}
          </motion.h4>
        </div>
      </section>
    </>
  );
});

export default HeroView;
