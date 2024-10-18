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
      controls.start(AnimationThemeInstance.FadeStartVertical);
    }
  }, [isVisible, controls]);
  return (
    <section id="new-home" className="new-home" ref={targetRef}>
      <div id="home" className="home-bg" style={{}}>
        <div className="row justify-content-center ">
          <motion.div
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{
              type: "spring",     // Keep the spring transition for bouncing
              duration: 0.8,      // Overall animation duration
              bounce: 0.8,        // Higher bounce value for more visible bouncing
              damping: 3,         // Lower damping for a slower stop (more bounce cycles)
              stiffness: 80,  
            }}
            className="home-img col-md-6 col-lg-6 col-8 col-sm-8 justify-content-end"
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              paddingRight: "2rem",
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
                objectFit: "cover",
              }}
              alt=""
              srcSet=""
            />
          </motion.div>
          <div className="home-quotes col-md-6 col-lg-6 col-sm-8 col-8 text-start d-flex align-items-center">
            <div className="row">
              <div className="container">
                <motion.h1
                  ref={targetRef}
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="home-text"
                  style={{
                    color: "var(--third)",
                    fontFamily: "Brilon",
                    fontSize: "20px",
                    letterSpacing: 2,
                  }}
                >
                  {props?.HomeDetail?.title.toLowerCase()}
                </motion.h1>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="home-text"
                  style={{
                    color: "var(--third)",
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
