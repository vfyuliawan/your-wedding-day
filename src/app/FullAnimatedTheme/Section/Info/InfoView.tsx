import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { TimeConvertionDate } from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedImageComponent from "../../component/AnimatedImage";
import { InfoViewKeyValue } from "../../../LuxuryTheme/Section/Info/RedEssence/InfoView";

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
              Informasi <br /> <br />
              <span
                style={{
                  fontFamily: "Brilon",
                  fontWeight: "normal",
                  fontSize: "2rem",
                  color: bgColor.color.secondary,
                }}
              >
                Acara
              </span>
            </motion.h2>
          </div>
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
                width: "100px",
                height: "160px",
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
                width: "100px",
                height: "160px",
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
                Pernikahan kami dilaksanakan pada:
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
            style={{ position: "absolute", top: "93%" }}
          >
            {props.info.map((item) => {
              return (
                <div
                  className="card"
                  style={{
                    marginTop: 15,
                    padding: "1rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Brilon",
                      fontSize: 18,
                      color: bgColor.color.secondary,
                    }}
                  >
                    {item.Judul}
                  </h3>
                  <p style={{ fontSize: 10, fontFamily: "FaunaOne" }}>
                    {TimeConvertionDate(item.Date).dateFull}
                  </p>
                  <p style={{ fontSize: 11, fontFamily: "FaunaOne" }}>
                    {item.Place}
                  </p>
                  <div className="row justify-content-center ">
                  <div className="col-8 justify-content-center d-flex">
                    <a
                      href={item.Map}
                      style={{
                        width: "80%",
                        textDecoration: "none",
                        textAlign: "center",
                        backgroundColor: bgColor.color.secondary,
                        borderRadius: "20px",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                        paddingRight: "20px",
                        paddingLeft: "20px",
                        fontSize: "13px",
                        fontFamily: "faunaone",
                        color: bgColor.color.primary,
                      }}
                      onClick={() => {}}
                    >
                      <i className="bi bi-geo-alt-fill"> </i> Google Map
                    </a>
                  </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoView;
