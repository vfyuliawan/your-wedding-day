"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import { StoryViewInterface } from "./SotryViewModel";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionFullDate,
  TimeConvertionInterface,
  TimeConvertionUSFormat,
} from "../../../../utils/TimeConvertion";
import AnimationThemeInstance from "../../../../utils/AnimationThemes";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IConstantFont } from "../../../../utils/ConstantFont";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const StoryView = (props: StoryViewInterface) => {
  const targetRef = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeStartVertical);
    }
    return () => {};
  }, [animate, isVisible]);


  return (
    <section
      ref={targetRef}
      style={{
        backgroundColor: "var(--prim)",
        height:"120vh"
      }}
      id="story"
      className="story"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 d-flex justify-content-center align-items-center">
            <motion.div
              animate={animate}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "var(--forth)",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            ></motion.div>
          </div>
          <div className="col-4 text-start">
            <motion.h2
              animate={animate}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                color: "var(--forth)",
                fontSize: 38,
                fontFamily: IConstantFont.dreamEvanue,
                fontWeight: "100",
                letterSpacing: "1px",
              }}
            >
              Event
              <span
                style={{
                  fontFamily: IConstantFont.dreamEvanue,
                  fontWeight: "normal",
                  fontSize: 38,
                  color: "var(--forth)",
                  textTransform: "capitalize",
                }}
              >
                Story
              </span>
            </motion.h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={animate}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5, delay: 1 }}
                style={{
                  color: "var(--forth)",
                  fontSize: "14px",
                  fontFamily: "Times-new-roman",
                }}
                className="alamat"
              >
                Dari pertemuan, aku belajar bahwa setiap momen kebersamaan
                adalah waktu yang berharga
              </motion.p>
            </div>
          </div>
          <div className="row align-items-start justify-content-start">
            <div className="col-12">
              <motion.svg
                animate={animate}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5, delay: 1.3 }}
                data-v-0c5a5448=""
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                contentScriptType="text/ecmascript"
                width={140}
                height={140}
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
              </motion.svg>
            </div>
          </div>
        </div>
        <motion.div
          animate={animate}
          initial={AnimationThemeInstance.FadeUp}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            marginBottom: 30,
          }}
        >
          <TimeLineImage />
        </motion.div>
      </div>
    </section>
  );

  function TimeLineImage(params: {}) {
    return (
      <Slide arrows={false} autoplay={true} infinite={true} duration={200}> 
        {props.OurStory?.stories.map((story, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height:700,
              // display: "inline-block",
              position: "relative",
            }}
          >
            {/* Main story content */}
            <div
              style={{
                height: 450,
                marginRight: 20,
                width: 300,
                borderTopLeftRadius: 125,
                borderTopRightRadius: 125,
                overflow: "hidden",
                backgroundColor: "var(--sec)",
                position: "relative",
              }}
            >
              <img
                src={story.image}
                height={"100%"}
                width={"100%"}
                style={{
                  objectFit: "cover",
                }}
                alt=""
              />
            </div>

            {/* Overlay border */}
            <div
              style={{
                height: 450,
                position: "absolute",
                top: 15,
                left: 15,
                border: "2px solid var(--forth)",
                width: 300,
                borderTopLeftRadius: 125,
                borderTopRightRadius: 125,
              }}
            ></div>

            <div className="row mt-5">
              <h3 style={{
                color:"var(--forth)",
                fontSize:22,
                fontFamily:IConstantFont.dreamEvanue
              }}>
                {story.title.toUpperCase()} {TimeConvertionFullDate(story.date.toString()).year}
              </h3>
              <h3 style={{
                color:"var(--forth)",
                fontSize:14,
                fontFamily:IConstantFont.regulerLight
              }}>
                {story.title == "string" ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum enim consequuntur voluptate illum quia temporibus culpa praesentium cupiditate." : story.text}
                
              </h3>
            </div>
          </div>
        ))}
      </Slide>
    );

  }

  function TimeLineComponent(params: {}) {
    return (
      <VerticalTimeline
        animate={false}
        lineColor={props.color}
        layout="1-column-left"
      >
        {props.OurStory?.stories.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "var(--fiveth)" }}
            contentArrowStyle={{ borderRight: `7px solid  ${props.color}` }}
            date={TimeConvertionUSFormat(item.date.toString())}
            iconStyle={{ background: props.color, color: "var(--sec)" }}
            icon={
              <i
                style={{
                  fontSize: 24,
                  top: 7,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                className="bi bi-arrow-through-heart-fill"
              ></i>
            }
          >
            <div
              style={{
                width: "auto",
                overflow: "hidden",
                borderRadius: "5%",
                marginBottom: 10,
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                src={item.image}
                alt="story image"
              />
            </div>
            <h3
              style={{ fontSize: 18 }}
              className="vertical-timeline-element-title"
            >
              {item.title}
            </h3>
            <p style={{ fontSize: 12 }}>{item.text}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  }
};

export default StoryView;
