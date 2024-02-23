"use client";

import { useAnimation } from "framer-motion";
import { LegacyRef, MutableRefObject, forwardRef, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import HeaderView from "../Header/HeaderView";
import { HeroViewInterface } from "./HeroModel";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionInterface,
} from "../../../utils/TimeConvertion";
import { ThemeColorClass } from "@/app/Constant/GreenFloral/ThemeColor";

const HeroView = forwardRef<HTMLDivElement, HeroViewInterface>((props, ref) => {
  

  const bgColor = new ThemeColorClass(props.themeName);
  return (
    <>
      <section
        ref={ref}
        id="hero"
        style={{ height: "100vh" }}
        className="hero w-100 text-center d-flex justify-content-center align-items-center text-white position-relative"
      >
        <div
          className="background-overlay kenburns-top"
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: 'url("/image/background/floralVertical.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <main
          className="inside"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            top: -180,
          }}
        >
          <div style={{ height: "8rem" }}></div>

          <h4
            style={{
              fontFamily: "Times New Roman",
              color: bgColor.color.secondary,
              fontSize: "2.7rem",
              textShadow: "none",
            }}
          >
            The Wedding of
          </h4>
          <div style={{ height: "2.1rem" }}></div>
          <h1
            style={{
              fontFamily: "brilon",
              color: bgColor.color.textColor,
            }}
          >
            {props.HeroDetail.HeroTittle}
          </h1>
          <div style={{ height: "2.1rem" }}></div>
          <div className="row justify-content-center">
            <div
            
              style={{
                height: "180px",
                width: "180px",
                borderRadius: "50%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${props.HeroDetail.HeroImg})`,
                backgroundColor: bgColor.color.secondary,
              }}
            ></div>
          </div>
          <div style={{ height: "2.1rem" }}></div>  
          <h4
            style={{
              fontFamily: "Times New Roman",
              fontSize: "2.2rem",
              textShadow: "none",
              color: bgColor.color.secondary,
            }}
          >
            {" "}
            {
              TimeConvertionDate(
                props?.HeroDetail?.HeroDate as TimeConvertionInterface
              ).dateFull
            }
          </h4>
        </main>
        <div className="gradient-overlay" />
      </section>
    </>
  );
});

export default HeroView;
