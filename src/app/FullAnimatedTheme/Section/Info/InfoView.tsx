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
import { TimeConvertionDate } from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const InfoView = (props: { themeName: string; info: InfoViewKeyValue[] }) => {
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
              Informasi <br />
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
          className="col-5 d-flex align-items-center">
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

          <div className="row cols-10 justify-content-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                width: "140px",
                height: "200px",
                borderTopRightRadius: "150px",
                borderBottomLeftRadius: "150px",
                marginRight: 3,
                background: `url('${props.info?.[0].Photo}')`,
                backgroundSize: "100%",
              }}
            ></motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                width: "140px",
                height: "200px",
                borderTopLeftRadius: "150px",
                borderBottomRightRadius: "150px",
                background: `url('${props.info?.[1].Photo}')`,
                backgroundSize: "100%",
              }}
            ></motion.div>
          </div>
          <div ref={ref} className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  scale: inView ? 1 : 0.5,
                }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{
                  fontSize: "0.8rem",
                  color: bgColor.color.secondary,
                }}
                className="alamat"
              >
                Pernikahan kami yang akan dilaksanakan pada:
              </motion.p>
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
            className="row justify-content-center mt-2"
          >
            <div
              className="col-10"
              style={{
                backgroundColor: "white",
                height: "25rem",
                borderRadius: "20px",
              }}
            >
              {props.info.map((item) => {
                return (
                  <div
                    className="row"
                    style={{ marginTop: 15, paddingLeft: "1rem" }}
                  >
                    <h3
                      style={{
                        fontFamily: "Brilon",
                        fontSize: 24,
                        color: bgColor.color.secondary,
                      }}
                    >
                      {item.Judul}
                    </h3>
                    <p style={{ fontSize: 14, fontFamily: "FaunaOne" }}>
                      {TimeConvertionDate(item.Date).dateFull}
                    </p>
                    <p style={{ fontSize: 14, fontFamily: "FaunaOne" }}>
                      {item.Place}
                    </p>
                    <a
                      href={item.Map}
                      style={{
                        width: "50%",
                        textDecoration: "none",
                        backgroundColor: bgColor.color.secondary,
                        borderRadius: "20px",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                        paddingRight: "35px",
                        paddingLeft: "35px",
                        fontSize: "13px",
                        fontFamily: "faunaone",
                        color: bgColor.color.primary,
                      }}
                      onClick={() => {}}
                    >
                      <i className="bi bi-geo-alt-fill"> </i> Google Map
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoView;
