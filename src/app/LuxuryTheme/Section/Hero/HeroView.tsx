"use client";

import { useAnimation } from "framer-motion";
import { LegacyRef, MutableRefObject, forwardRef, useRef } from "react";
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

const HeroView = forwardRef<any, HeroViewInterface>((props, ref) => {  

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
          <h1 style={{ fontFamily: "brilon", color:"var(--third)" }}>{props.HeroDetail.title}</h1>
          <h4 style={{ fontFamily: "serif", fontSize: 20, color:"var(--third)" }}>
            {TimeConvertionUSFormat(props.HeroDetail!.date!.toString())}
          </h4>
        </div>
      </section>
    </>
  );
});

export default HeroView;
