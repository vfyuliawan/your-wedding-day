import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import { StoryViewMap } from "@/app/FloralTheme/Section/Story/SotryViewModel";
import {
  InfoViewInterface,
  InfoViewKeyValue,
} from "@/app/LuxuryTheme/Section/Info/InfoView";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionInterface,
} from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const StoryView = (props: { themeName: string; OurStory: StoryViewMap }) => {
  const bgImage = new ThemeImageClass(props.themeName);

  const bgColor = new ThemeColorClass(props.themeName);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeHorizon);
    }
  }, [isVisible, controls]);

  return (
    <section className="section" style={{}} ref={targetRef}>
      <div
        className=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          background: `url('${bgImage.image.cover}')`,
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div style={{ position: "absolute", top: 0, right: -30 }}>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : -50,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ width: 280, height: 150 }}
          src={bgImage.image.top}
          alt=""
        />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0 }}>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ width: 240, height: 130 }}
          src={bgImage.image.bottom}
          alt=""
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "3%",
          right: "50%",
          width: "100%",
          transform: "translateX(50%)",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-6 text-end">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                fontFamily: "brilon",
                fontSize: "1.8rem",
                color: bgColor.color.secondary,
              }}
            >
              Our <br />
              <span
                style={{
                  fontFamily: "Creation",
                  fontWeight: "normal",
                  fontSize: "2.8rem",
                  color: bgColor.color.secondary,
                }}
              >
                Story
              </span>
            </motion.h2>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.5,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="col-5 d-flex align-items-center"
          >
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: bgColor.color.secondary,
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            ></div>
          </motion.div>
        </div>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.5,
            }}
            transition={{ duration: 1.5, delay: 0.5 }} className="row" style={{ position: "absolute", top: 60 }}>
          <div className="col">
            <ul className="timeline">
              <li>
                <div className="timeline-image2 text-center justify-content-center d-flex align-items-center">
                  <i
                    className="bi bi-balloon-heart-fill bi-lg bi-love"
                    style={{
                      color: "white",
                      fontSize: "1.2rem",
                      position: "absolute",
                    }}
                  ></i>
                </div>
                <motion.div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4
                      style={{ fontSize: 20, color: bgColor.color.secondary }}
                    >
                      {props?.OurStory?.First.Tittle}
                    </h4>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px",
                      }}
                      src={props?.OurStory?.First.Photo}
                      alt=""
                    />
                    <span
                      style={{
                        fontSize: "1rem",
                        color: bgColor.color.secondary,
                      }}
                    >
                      {" "}
                      {
                        TimeConvertionDate(
                          props?.OurStory?.First.Date as TimeConvertionInterface
                        ).dateMonth
                      }
                      {TimeConversionTime(
                        props?.OurStory?.First.Date as TimeConvertionInterface
                      )}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p
                      style={{
                        fontSize: "1rem",
                        color: bgColor.color.secondary,
                      }}
                    >
                      {props?.OurStory?.First.Story}
                    </p>
                  </div>
                </motion.div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image2 text-center justify-content-center d-flex align-items-center">
                  <i
                    className="bi bi-balloon-heart-fill bi-lg bi-love"
                    style={{
                      color: "white",
                      fontSize: "1.2rem",
                      position: "absolute",
                    }}
                  ></i>
                </div>
                <motion.div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4
                      style={{ fontSize: 20, color: bgColor.color.secondary }}
                    >
                      {props?.OurStory?.Second.Tittle}
                    </h4>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px",
                      }}
                      src={props?.OurStory?.Second.Photo}
                      alt=""
                    />
                    <span
                      style={{
                        fontSize: "1rem",
                        color: bgColor.color.secondary,
                      }}
                    >
                      {" "}
                      {
                        TimeConvertionDate(
                          props?.OurStory?.Second.Date as TimeConvertionInterface
                        ).dateMonth
                      }
                      {TimeConversionTime(
                        props?.OurStory?.Second.Date as TimeConvertionInterface
                      )}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p
                      style={{
                        fontSize: "1rem",
                        color: bgColor.color.secondary,
                      }}
                    >
                      {props?.OurStory?.Second.Story}
                    </p>
                  </div>
                </motion.div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryView;
