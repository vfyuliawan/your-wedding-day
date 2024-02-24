"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Galery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// @ts-ignore
import OwlCarousel from "react-owl-carousel3";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { useInView } from "react-intersection-observer";

interface GaleryViewInterface {
  image: Array<any>;
}

const GaleryView = (props: GaleryViewInterface) => {
  const targetRef = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRef);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeHorizon);
    }

    return () => {};
  }, [animate, isVisible]);

  const images = [
    {
      original: "/pink-essence/img/prawed/prawed1.jpg",
    },
    {
      original: "/pink-essence/img/prawed/prawed2.jpg",
    },
    {
      original: "/pink-essence/img/prawed/prawed3.jpg",
    },
  ];
  return (
    <section className="galery" id="galery">
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div  className="col-6 text-end">
            <motion.h2
              ref={targetRef}
              animate={animate}
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 1.5 }}
              style={{
                color: "white",
                fontWeight: "100",
                fontFamily: "brilon",
                fontSize: "4rem",
              }}
            >
              Our
            </motion.h2>
            <motion.h4
              animate={animate}
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 1.5 }}
              style={{
                fontFamily: "Creation",
                fontWeight: "normal",
                color: "white",
                fontSize: "65px",
              }}
            >
              Galery
            </motion.h4>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "white",
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
                style={{ color: "white", fontSize: "1.5rem" }}
                className="alamat"
              >
                Dari pertemuan, aku belajar bahwa setiap momen kebersamaan
                adalah waktu yang berharga
              </motion.p>
            </div>
          </div>
        </div>
        {firstImage()}
        <div style={{ marginBottom: "3rem" }}></div>
        {ImageGalleryComponent()}
        {ImageGaleryComponent2()}
      </div>
    </section>
  );

  function firstImage() {
    return (
      <div ref={ref} className="row justify-content-center ">
        <div className="col-10 mt-3">
          <a
            href="/pink-essence/img/prawed/prawed4.jpg"
            data-toggle="lightbox"
            data-caption="This describes the image"
          >
            <motion.img
                 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                 transition={{ duration: 1.5, delay:0.5 }}
              src={props.image[0] ?? ""}
              style={{
                borderRadius: "8%",
              }}
              className="img-fluid w-100"
            />
          </a>
        </div>
      </div>
    );
  }

  function ImageGaleryComponent2() {
    return (
      <div className="row row-cols-md-3 row-cols-sm-2 row-cols-2 justify-content-center">
        {props.image.map((item, key) => {
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
                  transition={{ duration: 1.5, delay:1.5 }}
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
                {props.image.map((item, key) => {
                  return (
                    <div>
                      <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                        transition={{ duration: 1.5, delay:2.0 }}
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
};

export default GaleryView;
