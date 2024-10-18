"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import { MaleFemaleViewInterface } from "./MaleFemaleModel";
import React from "react";
import { setAnimation } from "../../../utils/AnimationThemes";
import { isMobile } from "react-device-detect";
import { hexToRgba } from "../../../utils/ConvertColor";

const MaleFemaleView = (props: MaleFemaleViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  return (
    <section
    ref={props.ref}
      style={{ marginBottom: 80 }}
      id="male-female"
      className="male-female"
    >
      <div ref={targetRef} className="container" style={{ paddingTop: "2rem" }}>
        <div className="row justify-content-center mb-3">
          <div className="col-md-8 col-10 text-center">
            <h2
              style={{
                fontSize: "32px",
                fontFamily: "brilon",
                color: "var(--forth)",
                fontWeight: 400,
              }}
            >
              Our <br />
              <span
                style={{
                  fontFamily: "Creation",
                  fontWeight: "normal",
                  fontSize: "30px",
                }}
              >
                Wedding
              </span>
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className=" col-3 col-sm-3 text-center justify-content-end d-flex align-items-center ">
            <h3
              style={{
                fontSize: "30px",
                fontFamily: "Dancing Script",
                fontWeight: 400,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                color: "var(--forth)",
              }}
            >
              The Ride
            </h3>
          </div>
          <div className=" col-9 col-sm-9 d-flex align-items-star justify-content-star position-relative">
            <div
              className=" w-100"
              style={{
                height: isMobile ? 450 : 430,
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                position: "relative",
              }}
            >
              <motion.img
                initial={{
                  opacity: setAnimation["fade-down"].initialX,
                  y: setAnimation["fade-down"].initialY,
                }}
                animate={controls}
                transition={{ duration: 1 }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={props?.MaleFemaleDetail?.female?.image}
                alt={""}
                srcSet=""
              />
              <motion.div
                initial={{
                  opacity: setAnimation["fade-Up"].initialX,
                  y: setAnimation["fade-Up"].initialY,
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  // backgroundColor:hexToRgba(props.primColor, 0.2)
                }}
                animate={controls}
                transition={{ duration: 1, delay: 0.5 }}
                className="overlay"
              >
                <h1
                  style={{
                    color: "var(--third)",
                    fontSize:30
                  }}
                  className=""
                >
                  {props?.MaleFemaleDetail?.female?.name}
                </h1>
                <h3
                  style={{
                    color: "var(--third)",
                    fontSize:12

                  }}
                  className=""
                >
                  Putra Dari Bapak {props?.MaleFemaleDetail?.female?.dad}
                </h3>
                <h3
                  style={{
                    color: "var(--third)",
                    fontSize:12

                  }}
                  className=""
                >
                  Putra Dari Ibu {props?.MaleFemaleDetail?.female?.mom}
                </h3>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="justify-content-center align-items-center d-flex p-2 mid-couple"
            style={{
              width: "100%",
              // padding:2
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                fontFamily: "Dancing Script",
                color:"var(--third)",
                fontWeight: 400,
              }}
            >
              {props?.MaleFemaleDetail?.female?.name} &{" "}
              {props?.MaleFemaleDetail?.male?.name}
            </h2>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{ marginBottom: "2rem" }}
        >
          <div className=" col-9 col-sm-9 d-flex align-items-end justify-content-end position-relative">
            <div
              className=" w-100"
              style={{
                height: isMobile ? 450 : 430,
                overflow: "hidden",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                position: "relative",
              }}
            >
              <motion.img
                ref={targetRef}
                initial={{
                  opacity: setAnimation["fade-down"].initialX,
                  y: setAnimation["fade-down"].initialY,
                }}
                animate={controls}
                transition={{ duration: 1, delay: 0.8}}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={props?.MaleFemaleDetail?.female?.image}
                alt={""}
                srcSet=""
              />
              <motion.div
                initial={{
                  opacity: setAnimation["fade-Up"].initialX,
                  y: setAnimation["fade-Up"].initialY,
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  // backgroundColor:hexToRgba(props.primColor, 0.2)

                }}
                animate={controls}
                transition={{ duration: 1, delay: 0.84 }}
                className="overlay"
              >
                <h1 style={{
                  color:"var(--third)",
                  fontSize:30
                }} className="">{props?.MaleFemaleDetail?.female?.name}</h1>
                <h3 style={{
                  color:"var(--third)",
                  fontSize:12

                }} className="">
                  Putra Dari Bapak {props?.MaleFemaleDetail?.female?.dad}
                </h3>
                <h3 style={{
                  color:"var(--third)",
                  fontSize:12

                }} className="">
                  Putra Dari Ibu {props?.MaleFemaleDetail?.female?.mom}
                </h3>
              </motion.div>
            </div>
          </div>
          <div className=" col-3 col-sm-3 text-center justify-content-start d-flex align-items-center">
            <h3
              style={{
                fontSize: "30px",
                fontFamily: "Dancing Script",
                fontWeight: 400,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                color:"var(--forth)"
              }}
            >
              The Broom
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaleFemaleView;
