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
    triggerOnce: true,
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
          animate={controls}
          initial={AnimationThemeInstance.FadeLeft}
          transition={{ duration: 1.7 }}
          style={{ width: 280, height: 150 }}
          src={bgImage.image.top}
          alt=""
        />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0 }}>
        <motion.img
          animate={controls}
          initial={AnimationThemeInstance.FadeRight}
          transition={{ duration: 1.7 }}
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
              animate={controls}
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 1.3 }}
              style={{
                fontFamily: "brilon",
                fontSize: "2.5rem",
                color: bgColor.color.secondary,
              }}
            >
              Informasi <br />
              <span
                style={{
                  fontFamily: "Creation",
                  fontWeight: "normal",
                  fontSize: "65px",
                  color: bgColor.color.secondary,
                }}
              >
                Acara
              </span>
            </motion.h2>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: bgColor.color.secondary,
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            ></div>
          </div>
          <div ref={ref} className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
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
          <div className="row cols-10 justify-content-center">
            <div
              style={{
                width: "140px",
                height: "200px",
                borderTopRightRadius: "150px",
                borderBottomLeftRadius: "150px",
                marginRight: 3,
                background: `url('${props.info?.[0].Photo}')`,
                backgroundSize: "100%",
              }}
            ></div>
            <div
              style={{
                width: "140px",
                height: "200px",
                borderTopLeftRadius: "150px",
                borderBottomRightRadius: "150px",
                background: `url('${props.info?.[1].Photo}')`,
                backgroundSize: "100%",
              }}
            ></div>
          </div>
          <div className="row justify-content-center mt-2">
            <div
              className="col-10"
              style={{
                backgroundColor: "white",
                height: "25rem",
                borderRadius: "20px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoView;
