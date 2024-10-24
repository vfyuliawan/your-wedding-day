"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import { HomeViewInterface } from "./HomeModel";
import React from "react";
import AnimationThemeInstance from "../../../../utils/AnimationThemes";
import { IConstantFont } from "../../../../utils/ConstantFont";
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
                height: isMobile ? 270 : 300,
                width: isMobile ? 270 : 300,
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
                src={"/image/Jade_Garden/homeFrame.png"}
                alt="centered image"
              />
            </div>
            <div
              style={{
                height: isMobile ? 260 : 320,
                width: isMobile ? 260 : 320,
                position: "absolute",
                top: 30,
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            >
              {!props.HomeDetail.title.includes("template") ? (
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: 28,
                    fontSize: 48,
                    fontWeight: 600,
                    color: "var(--forth)",
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

          {/* <motion.div
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{
              type: "spring", // Keep the spring transition for bouncing
              duration: 0.8, // Overall animation duration
              bounce: 0.8, // Higher bounce value for more visible bouncing
              damping: 3, // Lower damping for a slower stop (more bounce cycles)
              stiffness: 80,
            }}
            style={{
              height: 150,
              marginTop: 50,
              borderTopLeftRadius: 75,
              borderTopRightRadius: 75,
              width: 150,
              // overflow:"auto",
              borderTop: "1px solid var(--forth)",
              borderRight: "1px solid var(--forth)",
              borderLeft: "1px solid var(--forth)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            className=""
          >
            <div
              className="col-6 text-end justify-content-start align-items-start"
              style={{ marginTop: 30 }}
            >
              <h4
                style={{
                  fontSize: 48,
                  color: "var(--forth)",
                  fontFamily: IConstantFont.dreamEvanue,
                }}
              >
                {" "}
                {props.HomeDetail.title.split("&")[0].split("")[0]}

              </h4>
              <svg
                data-v-0c5a5448=""
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                contentScriptType="text/ecmascript"
                width={40}
                height={40}
                viewBox="308 337 250 180"
                id="svg2"
                version="1.0"
              >
                <g
                  data-v-0c5a5448=""
                  xmlns="http://www.w3.org/2000/svg"
                  clip-path="url(#clip-1)"
                >
                  <path
                    data-v-0c5a5448=""
                    fontSize={12}
                    d="M 529.5625 432.050781 C 441.691406 437.378906 437.382812 441.691406 432.050781 529.554688 C 426.730469 441.691406 422.410156 437.378906 334.546875 432.050781 C 422.410156 426.722656 426.730469 422.40625 432.050781 334.550781 C 437.382812 422.40625 441.691406 426.722656 529.5625 432.050781 Z M 529.5625 432.050781 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    fill="var(--forth)"
                    className="fill-fourth"
                  ></path>
                </g>
              </svg>
            </div>
            <div
              style={{
                // backgroundColor: "var(--sec)",
                marginTop: 200,
              }}
              className="col-6 text-start justify-content-start align-items-start mt-5"
            >
              <svg
                data-v-0c5a5448=""
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                contentScriptType="text/ecmascript"
                width={70}
                height={70}
                viewBox="308 337 250 180"
                id="svg2"
                version="1.0"
              >
                <g
                  data-v-0c5a5448=""
                  xmlns="http://www.w3.org/2000/svg"
                  clip-path="url(#clip-1)"
                >
                  <path
                    data-v-0c5a5448=""
                    fontSize={12}
                    d="M 529.5625 432.050781 C 441.691406 437.378906 437.382812 441.691406 432.050781 529.554688 C 426.730469 441.691406 422.410156 437.378906 334.546875 432.050781 C 422.410156 426.722656 426.730469 422.40625 432.050781 334.550781 C 437.382812 422.40625 441.691406 426.722656 529.5625 432.050781 Z M 529.5625 432.050781 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    fill="var(--forth)"
                    className="fill-fourth"
                  ></path>
                </g>
              </svg>
              <h4
                style={{
                  fontSize: 78,
                  color: "var(--forth)",
                  fontFamily: IConstantFont.dreamEvanue,
                }}
              >
                {" "}
                {!props.HomeDetail.title.includes("&")
                  ? "D"
                  : props.HomeDetail.title.split("&")[1].split("")[0]}
              </h4>
            </div>
          </motion.div> */}
          <div className="row mt-1 justify-content-center">
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                width: "50%",
                height: 1,
                backgroundColor: "var(--forth)",
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
                  color: "var(--forth)",
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
