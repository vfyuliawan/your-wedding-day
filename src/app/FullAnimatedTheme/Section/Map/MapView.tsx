import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import {
  InfoViewInterface,
  InfoViewKeyValue,
} from "@/app/LuxuryTheme/Section/Info/InfoView";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { GetEmbededFromGmap } from "@/app/utils/GetEmbeded";
import { TimeConvertionDate } from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const MapView = (props: {
  themeName: string;
  embeded: string;
  info: InfoViewKeyValue[];
}) => {
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
          top: "5%",
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
                fontSize: "1.5rem",
                color: bgColor.color.secondary,
              }}
            >
              Lokasi <br />
              <span
                style={{
                  fontFamily: "Creation",
                  fontWeight: "normal",
                  fontSize: "2.8rem",
                  color: bgColor.color.secondary,
                }}
              >
                Acara
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: bgColor.color.secondary,
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            ></motion.div>
          </motion.div>
          <div style={{ position: "absolute", top: 70 }}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="row cols-10 justify-content-center"
            >
              <div className="container mt-5  ">
                <div className="row justify-content-center">
                  <div className="col-md-10" style={{}}>
                    <div
                      className="iframeContainer"
                      style={{ padding: "24px", borderRadius: "10%" }}
                    >
                      <iframe
                        src={GetEmbededFromGmap(props.embeded)}
                        width="100%"
                        height="300px"
                        style={{ borderRadius: "10%" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
            
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="row mt-2"
            >
              <p
                style={{
                  fontFamily: "faunaone",
                  textAlign: "center",
                  color: bgColor.color.secondary,
                  fontSize: "0.9rem",
                }}
              >
                {props.info[0].Place}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="row mt-2 justify-content-center"
            >
              <div className="col-8 align-items-center justify-content-center d-flex">
                <a
                  href={props.info[0].Map}
                  style={{
                    width: "80%",
                    textDecoration: "none",
                    backgroundColor: bgColor.color.secondary,
                    borderRadius: "20px",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    justifyContent: "center",
                    display: "flex",
                    fontSize: "13px",
                    fontFamily: "faunaone",
                    color: bgColor.color.primary,
                  }}
                  onClick={() => {}}
                >
                  <i className="bi bi-geo-alt-fill" style={{ marginRight: 2 }}>
                    {" "}
                  </i>{" "}
                  {"   "} Google Map
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapView;
