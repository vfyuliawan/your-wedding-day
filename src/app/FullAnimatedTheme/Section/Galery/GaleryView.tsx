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
// @ts-ignore
import OwlCarousel from "react-owl-carousel3";

interface GaleryViewInterface {
  image: Array<any>;
}

const GaleryView = (props: { themeName: string; galery: Array<any> }) => {
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
          top: "2%",
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
              Our <br />
              <span
                style={{
                  fontFamily: "Creation",
                  fontWeight: "normal",
                  fontSize: "2.8rem",
                  color: bgColor.color.secondary,
                }}
              >
                Galery
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
          <div style={{ position: "absolute", top: 90 }}>
            {ImageGalleryComponent()}
            {ImageGaleryComponent2()}
          </div>
        </div>
      </div>
    </section>
  );

  function ImageGalleryComponent() {
    return (
      <div>
        <div className="contaner">
          <div className="row justify-content-center">
            <div className="col-md-10 col-10">
              {/* <Galery autoPlay={true} items={images} disableSwipe /> */}
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                autoplay={true}
                animateIn={"slideInRight"}
                animateOut={"slideOutRight"}
                lrt={true}
              >
                {props.galery.map((item, key) => {
                  return (
                    <div>
                      <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: inView ? 1 : 0,
                          scale: inView ? 1 : 0.5,
                        }}
                        transition={{ duration: 1.5, delay: 2.0 }}
                        style={{
                          borderRadius: "8px",
                        }}
                        src={item}
                        alt=""
                      />
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ImageGaleryComponent2() {
    return (
      <div
        className="row row-cols-md-3 row-cols-sm-2 row-cols-3 justify-content-center"
      >
        {props.galery.map((item, key) => {
          return (
            <div className="col mt-3">
              <a
                href={item}
                data-toggle="lightbox"
                data-caption="This describes the image"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  src={item}
                  style={{
                    maxHeight: 376,
                    borderRadius: "8%",
                  }}
                  className="img-fluid w-100 "
                  alt="Image Description"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
};

export default GaleryView;
