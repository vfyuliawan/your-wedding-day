"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Galery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// @ts-ignore
import OwlCarousel from "react-owl-carousel3";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import GaleryView from "./GaleryView";

interface GaleryViewInterface {
  image: Array<any>;
}

const GaleryView2 = (props: GaleryViewInterface) => {
  const targetRef = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRef);

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
          <div className="col-6 text-end">
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
              Our <br /> Galery
            </motion.h2>
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
      <div className="col-12 mt-3">
        <a
          href="/pink-essence/img/prawed/prawed4.jpg"
          data-toggle="lightbox"
          data-caption="This describes the image"
        >
          <img
            src={props.image[0] ?? ""}
            style={{}}
            className="img-fluid w-100 rounded"
          />
        </a>
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
                <img
                  src={item}
                  style={{ maxHeight: 376 }}
                  className="img-fluid w-100 rounded"
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
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </OwlCarousel>
              {/* <OwlCarousel
                className="owl-theme rtl"
                loop
                margin={10}
                autoplay={true}
                animateIn={true}
                direction={"ltr"}
                rtl={false}
                animateOut={true}
                autoplaySpeed={4000}
                >
                <div>
                  <img src="/pink-essence/img/prawed/prawed1.jpg" alt="" />
                </div>
                <div>
                  <img src="/pink-essence/img/prawed/prawed2.jpg" alt="" />
                </div>
                <div>
                  <img src="/pink-essence/img/prawed/prawed3.jpg" alt="" />
                </div>
                <div>
                  <img src="/pink-essence/img/prawed/prawed4.jpg" alt="" />
                </div>
                <div>
                  <img src="/pink-essence/img/prawed/prawed5.jpg" alt="" />
                </div>
                <div>
                  <img src="/pink-essence/img/prawed/prawed6.jpg" alt="" />
                </div>
                <div>
                  <img src="/pink-essence/img/prawed/prawed6.jpg" alt="" />
                </div>
              </OwlCarousel> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GaleryView2;
