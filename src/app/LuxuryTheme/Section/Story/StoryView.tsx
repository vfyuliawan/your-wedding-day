"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import { StoryViewInterface } from "./SotryViewModel";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionInterface,
  TimeConvertionUSFormat,
} from "../../../utils/TimeConvertion";
import AnimationThemeInstance from "../../../utils/AnimationThemes";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    <section id="story" className="story">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 text-end">
            <motion.h2
              ref={targetRef}
              animate={animate}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay:0.6 }}
              style={{
                color: "var(--forth)",
                fontSize: "30px",
                fontFamily: "brilon",
                fontWeight: "100",
                letterSpacing: "1px",
              }}
            >
              event
              <br />
              <span
                style={{
                  fontFamily: "Creation",
                  fontWeight: "normal",
                  fontSize: "32px",
                  color: "var(--forth)",
                  textTransform: "capitalize",
                }}
              >
                Story
              </span>
            </motion.h2>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "var(--forth)",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            ></div>
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
        </div>
        <motion.div
          animate={animate}
          initial={AnimationThemeInstance.FadeUp}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            marginBottom: 30,
          }}
        >
          <TimeLineComponent />
        </motion.div>
      </div>
    </section>
  );

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
            contentStyle={{ background: "#fff", color: "var(--forth)" }}
            contentArrowStyle={{ borderRight: `7px solid  ${props.color}` }}
            date={TimeConvertionUSFormat(item.date.toString())}
            iconStyle={{ background: props.color, color: "var(--third)" }}
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
            <h3 style={{fontSize:18}} className="vertical-timeline-element-title">{item.title}</h3>
            <p style={{fontSize:12}}>{item.text}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  }
};

export default StoryView;
