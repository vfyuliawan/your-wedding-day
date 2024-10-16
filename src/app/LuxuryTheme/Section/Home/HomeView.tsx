"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import { HomeViewInterface } from "./HomeModel";
import React from "react";
import AnimationThemeInstance from "../../../utils/AnimationThemes";

const HomeView = (props: HomeViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeHorizon);
    }
  }, [isVisible, controls]);
  return (
    <section id="new-home" className="new-home" ref={targetRef}>
      <div id="home" className="home-bg" style={{}}>
        <div className="row justify-content-center ">
          <motion.div
            animate={controls}
            initial={AnimationThemeInstance.FadeLeft}
            transition={{ duration: 1 }}
            className="home-img col-md-6 col-lg-6 col-8 col-sm-8 justify-content-end"
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              paddingRight:'2rem',
              display: "flex",
            }}
          >
            <img
              src={props?.HomeDetail?.img}
              style={{
                width: "90%",
                height: "100%",
                borderTopLeftRadius: "10%",
                borderBottomRightRadius: "10%",
                objectFit:'cover'
              }}
              alt=""
              srcSet=""
            />
          </motion.div>
          <div className="home-quotes col-md-6 col-lg-6 col-sm-8 col-8 text-start d-flex align-items-center">
            <div className="row">
              <div className="container">
                <motion.h1
                  animate={controls}
                  initial={AnimationThemeInstance.FadeRight}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="home-text"
                  style={{
                    color: "white",
                    fontFamily: "Brilon",
                    fontSize: '28px',
                  }}
                >
                  {props?.HomeDetail?.title}
                </motion.h1>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeLeft}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="home-text"
                  style={{
                    color: "#ffff",
                    fontFamily: "Times-new-roman",
                    fontSize: "14px",
                  }}
                >
                  {props?.HomeDetail?.quotes}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
