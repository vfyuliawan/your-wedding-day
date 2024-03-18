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
import AnimatedImageComponent from "../../component/AnimatedImage";

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
      {/* Corner Image */}
      <AnimatedImageComponent
        bgImage={bgImage}
        ref={function (node?: Element | null | undefined): void {
          ref;
        }}
        inView={inView}
      />
      {/* Corner Image */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "50%",
          width: "100%",
          transform: "translateX(50%)",
        }}
      >
        <div className="row justify-content-center">
        <div className="col-10 text-center">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                fontFamily: "faunaOne",
                fontSize: "1.2rem",
                color: bgColor.color.secondary,
              }}
            >
              Our <br /> 
              <span
                style={{
                  fontFamily: "Brilon",
                  fontWeight: "normal",
                  fontSize: "2rem",
                  color: bgColor.color.secondary,
                }}
              >
                Story<br />
              </span>
            </motion.h2>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.5,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="row"
          style={{ position: "absolute", top: 80 }}
        >
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
                <motion.div
                  className="timeline-panel"
                  style={{ width: 300, height: 260, left: 100, top: -10 }}
                >
                  <div className="timeline-heading">
                    <h4
                      style={{ fontSize: 20, color: bgColor.color.secondary }}
                    >
                      {props?.OurStory?.First.Tittle}
                    </h4>
                    <div
                      style={{
                        width: "100%",
                        height: "140px",
                        overflow: "hidden", 
                        borderRadius:'20px'
                      }}
                    >
                      <img
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src={props?.OurStory?.First.Photo}
                        alt=""
                      />
                    </div>

                    <span
                      style={{
                        fontSize: "0.5rem",
                        fontFamily: "faunaOne",
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
                        fontSize: "0.7rem",
                        color: bgColor.color.secondary,
                        fontFamily: "faunaOne",
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
                <motion.div
                  className="timeline-panel"
                  style={{ width: 300, height: 260, left: 100, top: -15 }}
                >
                  <div className="timeline-heading">
                    <h4
                      style={{ fontSize: 20, color: bgColor.color.secondary }}
                    >
                      {props?.OurStory?.Second.Tittle}
                    </h4>
                    <div
                      style={{
                        width: "100%",
                        height: "140px",
                        overflow: "hidden", 
                        borderRadius:'20px'
                      }}
                    >
                      <img
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src={props?.OurStory?.Second.Photo}
                        alt=""
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "0.5rem",
                        fontFamily: "faunaOne",
                        color: bgColor.color.secondary,
                      }}
                    >
                      {" "}
                      {
                        TimeConvertionDate(
                          props?.OurStory?.Second
                            .Date as TimeConvertionInterface
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
                        fontSize: "0.7rem",
                        color: bgColor.color.secondary,
                        fontFamily: "faunaOne",
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
