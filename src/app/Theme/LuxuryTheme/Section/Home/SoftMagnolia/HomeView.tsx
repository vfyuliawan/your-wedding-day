"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import { HomeViewInterface } from "./HomeModel";
import React from "react";
import AnimationThemeInstance from "../../../../../Utils/AnimationThemes";
import { IConstantFont } from "../../../../../Utils/ConstantFont";
import { isMobile } from "react-device-detect";

const HomeView = (props: HomeViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeStartVertical);
    }
  }, [isVisible, controls]);
  return (
    <section id="new-home" style={{}} className="new-home" ref={targetRef}>
      <div
        id="home"
        className=""
        style={{
          backgroundColor: "var(--prim)",
        }}
      >
        <div
          style={{ position: "relative" }}
          className="row justify-content-center"
        >
          <motion.div
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-auto"
          >
            <div
              style={{
                height: isMobile ? 290 : 300,
                width: isMobile ? 290 : 300,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              <img
                className=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={"/image/soft_magnolia/homeImg.png"}
                alt="centered image"
              />
            </div>
            <div
              style={{
                height: isMobile ? 260 : 320,
                width: isMobile ? 260 : 320,
                position: "absolute",
                top: 50,
                left:"25%",
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              {!props.HomeDetail.title.includes("template") ? (
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: 28,
                    fontSize: 36,
                    fontWeight: 600,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.Lavishly_Yours,
                  }}
                >
                  Template <br /> & <br />
                  Design
                </h1>
              ) : (
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: 28,
                    fontSize: 38,
                    fontWeight: 600,
                    color: "var(--forth)",
                    fontFamily: IConstantFont.Lavishly_Yours,
                  }}
                >
                  {props.HomeDetail.title.split(" ")[0]} <br /> & <br />
                  {props.HomeDetail.title.split(" ")[2]}
                </h1>
              )}
            </div>
          </motion.div>
          <div className="row mt-1 justify-content-center">
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                width: "50%",
                height: 1,
                backgroundColor: "var(--fiveth)",
              }}
            />
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-8">
              {/* <motion.h1
                ref={targetRef}
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="home-text"
                style={{
                  color: "var(--forth)",
                  fontFamily: "Brilon",
                  textAlign: "center",
                  fontSize: "20px",
                  letterSpacing: 2,
                }}
              >
                {props?.HomeDetail?.title.toLowerCase()}
              </motion.h1> */}
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="home-text"
                style={{
                  color: "var(--fiveth)",
                  fontFamily: "Times-new-roman",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {props?.HomeDetail?.quotes !== "string"
                  ? props.HomeDetail.quotes
                  : " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet pariatur totam sit quibusdam alias fuga enim eligendi!"}
              </motion.p>
            </div>
          </div>
          <div className="home-quotes col-md-6 col-lg-6 col-sm-8 col-8 text-start d-flex align-items-center"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
