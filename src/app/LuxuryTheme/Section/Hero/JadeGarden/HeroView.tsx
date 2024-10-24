"use client";

import { motion, useAnimation } from "framer-motion";
import {
  LegacyRef,
  MutableRefObject,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import HeaderView from "../../Header/HeaderView";
import { HeroViewInterface } from "./HeroModel";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionFullDate,
  TimeConvertionFullDateAndTime,
  TimeConvertionInterface,
  TimeConvertionUSFormat,
} from "../../../../utils/TimeConvertion";
import React from "react";
import AnimationThemeInstance from "../../../../utils/AnimationThemes";
import { IConstantFont } from "../../../../utils/ConstantFont";
import { convertColor, hexToRgba } from "@/app/utils/ConvertColor";

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
        <div
          className=""
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "30%",
            background:
              "linear-gradient(to bottom,rgba(255, 0, 0, 0) 20%,var(--prim) 80%)",
          }}
        />
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
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              fontFamily: IConstantFont.delius,
              fontSize: 35,
              color: "var(--forth)",
              fontWeight:100,
              textShadow: "none",
            }}
          >
            Undangan Pernikahan
          </motion.h1>
          <motion.div
            ref={targetRef}
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ width: "100%", height: 1, backgroundColor: "white" }}
          />
          <motion.p
            ref={targetRef}
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              color: "var(--forth)",
              textShadow: "none",
              fontFamily: IConstantFont.regulerLight,
              fontSize: 16,
            }}
          >
            Acara Akan Dimulai pada
          </motion.p>
          <motion.h4
            ref={targetRef}
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              color: "var(--forth)",
              textShadow: "none",
              fontFamily: IConstantFont.regulerLight,
              fontSize: 16,
            }}
          >
            {
              TimeConvertionFullDate(props.HeroDetail!.date!.toString())
                .dateMonthandYearDot
            }
          </motion.h4>
          <motion.div
            ref={targetRef}
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ width: "100%", height: 1, backgroundColor: "white" }}
          />
          {/* <motion.h4
            ref={targetRef}
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ fontFamily: "serif", fontSize: 16, color: "var(--forth)" }}
          >
            {TimeConvertionUSFormat(props.HeroDetail!.date!.toString())}
          </motion.h4> */}
        </div>
      </section>
    </>
  );
});

export default HeroView;
