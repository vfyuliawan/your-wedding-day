import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { GetEmbededFromGmap } from "@/app/utils/GetEmbeded";
import { TimeConvertionDate } from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// @ts-ignore
import OwlCarousel from "react-owl-carousel3";
import AnimatedImageComponent from "../../component/AnimatedImage";

interface GaleryViewInterface {
  image: Array<any>;
}

const HomeView = (props: { themeName: string; home: HomeKeyValue }) => {
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
          top: "6%",
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
                fontFamily: "brilon",
                fontSize: "1.5rem",
                color: bgColor.color.secondary,
              }}
            >
              <span
                style={{
                  fontFamily: "brilon",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: bgColor.color.secondary,
                  textAlign: "center",
                }}
              >
                Quotes
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
          ></motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.5,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ position: "absolute", top: 70 }}
          >
            <div className="row justify-content-center">
              <div className="col-10 d-flex justify-content-center">
                <div
                  style={{
                    height: 370,
                    width: 280,
                    borderTopLeftRadius: 180,
                    borderTopRightRadius: 180,
                    border: `5px solid ${bgColor.color.secondary}`,
                    borderColor: bgColor.color.secondary,
                    padding: 8,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={props.home.HomeImg}
                    alt=""
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      borderTopLeftRadius: 180,
                      borderTopRightRadius: 180,
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-10 d-flex justify-content-center">
                <p
                  style={{
                    fontFamily: "faunaOne",
                    color: bgColor.color.secondary,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {props.home.HomeQuotes}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
