"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { StoryViewInterface } from "./SotryViewModel";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionInterface,
} from "../../../utils/TimeConvertion";

const StoryView = (props: StoryViewInterface) => {
  const targetRef = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeHorizon);
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
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 1.5 }}
              style={{ color: "black" }}
            >
              Cerita <br />
              Kita Berdua
            </motion.h2>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "black",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            ></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={animate}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ color: "black", fontSize: "1.5rem" }}
                className="alamat"
              >
                Dari pertemuan, aku belajar bahwa setiap momen kebersamaan
                adalah waktu yang berharga
              </motion.p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="timeline">
              <li>
                <div className="timeline-image2 text-center justify-content-center d-flex align-items-center">
                  <i
                    className="bi bi-balloon-heart-fill bi-lg bi-love"
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      position: "absolute",

                      top: "10%",
                    }}
                  ></i>
                </div>
                <motion.div
                  initial={AnimationThemeInstance.FadeRight}
                  animate={animate}
                  transition={{ duration: 1, delay: 1 }}
                  className="timeline-panel"
                >
                  <div className="timeline-heading">
                    <h3>{props?.OurStory?.First.Tittle}</h3>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      src={props?.OurStory?.First.Photo}
                      alt=""
                    />
                    <span style={{ fontSize: "1.2rem" }}>
                      {" "}
                      {TimeConvertionDate(
                        props?.OurStory?.First.Date as TimeConvertionInterface
                      )}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p style={{ fontSize: "1.5rem" }}>
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
                      fontSize: "2rem",
                      position: "absolute",

                      top: "10%",
                    }}
                  ></i>
                </div>
                <motion.div
                  initial={AnimationThemeInstance.FadeLeft}
                  animate={animate}
                  transition={{ duration: 1, delay: 2 }}
                  className="timeline-panel"
                >
                  <div className="timeline-heading">
                    <h3>{props?.OurStory?.Second?.Tittle}</h3>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      src={props?.OurStory?.Second?.Photo}
                      alt=""
                    />
                    <span style={{ fontSize: "1.2rem" }}>
                      {" "}
                      {TimeConvertionDate(
                        props?.OurStory?.Second?.Date as TimeConvertionInterface
                      )}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p style={{ fontSize: "1.5rem" }}>
                      {props?.OurStory?.Second?.Story}
                    </p>
                  </div>
                </motion.div>
              </li>
              <li>
                <div className="timeline-image2 text-center justify-content-center d-flex align-items-center">
                  <i
                    className="bi bi-balloon-heart-fill bi-lg bi-love"
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      position: "absolute",
                      top: "10%",
                    }}
                  ></i>
                </div>
                <motion.div
                  initial={AnimationThemeInstance.FadeRight}
                  animate={animate}
                  transition={{ duration: 1, delay: 2.7 }}
                  className="timeline-panel"
                >
                  <div className="timeline-heading">
                    <h3>{props?.OurStory?.Third?.Tittle}</h3>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      src={props?.OurStory?.Third?.Photo}
                      alt=""
                    />
                    <span style={{ fontSize: "1.2rem" }}>
                      {" "}
                      {TimeConvertionDate(
                        props?.OurStory?.Third?.Date as TimeConvertionInterface
                      )}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p style={{ fontSize: "1.5rem" }}>
                      {props?.OurStory?.Third?.Story}
                    </p>
                  </div>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryView;
