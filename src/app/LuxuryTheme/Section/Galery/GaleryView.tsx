"use client";

import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Galery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// @ts-ignore
import OwlCarousel from "react-owl-carousel3";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import { useInView } from "react-intersection-observer";
import AnimationThemeInstance from "../../../utils/AnimationThemes";
import React from "react";
import ReactPlayer from "react-player";
import ImageViewer from "react-simple-image-viewer";

interface GaleryViewInterface {
  image: string[];
}

const GaleryView = (props: GaleryViewInterface) => {
  const targetRef = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRef);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeStartVertical);
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

  const openImageViewer = useCallback((index:any) => {
    setCurrImg(index);
    setmodalIsOpen(true);
  }, []);
  return (
    <section
      style={{
        background: "linear-gradient(var(--prim) 0%, var(--sec) 400%)",
      }}
      className="galery"
      id="galery"
    >
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div className="col-6 text-end">
            <motion.h2
              ref={targetRef}
              animate={animate}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.5, delay:0.5 }}
              style={{
                color: "var(--third)",
                fontWeight: "100",
                fontFamily: "brilon",
                fontSize: "30px",
              }}
            >
              Moment
            </motion.h2>
            <motion.h4
              animate={animate}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.5, delay:0.9 }}
              style={{
                fontFamily: "Creation",
                fontWeight: "normal",
                color: "var(--third)",
                fontSize: "32px",
              }}
            >
              Galery
            </motion.h4>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--third)",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            ></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={animate}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration:0.8, delay: 1 }}
                style={{
                  color: "var(--third)",
                  fontSize: "14px",
                  fontFamily: "Courier New",
                }}
                className="alamat"
              >
                Bukan karna bertemu lalu kita berjodoh tapi karena berjodohlah
                maka kami dipertemukan
              </motion.p>
            </div>
          </div>
        </div>
        {firstImage()}
        <div style={{ marginBottom: "3rem" }}></div>
        {ImageGalleryComponent()}
        {ImageGaleryComponent2()}
        {videoPlayer()}
      </div>
      {/* <button onClick={() => setmodalIsOpen(true)}>Open Gallery</button> */}
      <div
        style={{
          width: "50%",
        }}
      >
        {modalIsOpen && (
          <div style={{ position: "relative"}}>
            <button
              onClick={() => {}}
              style={{
                position: "absolute",
                top: "10%",
                left: "10px",
                zIndex: 1000,
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <i
                className="bi bi-arrow-left-circle"
                style={{ fontSize: "30px", color: "white" }}
              ></i>
            </button>
            <div style={{ width: 300 }}>
              <ImageViewer
                backgroundStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                closeComponent={
                  <div
                    style={{
                      display: "flex",
                      position:"absolute",
                      top:15,
                      right:10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "green",
                      padding: 10,
                      height: 40,
                      borderRadius: 3,
                      margin: "auto",
                    }}
                    onClick={() => {}}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        color: "white",
                        fontWeight: "300",
                        fontFamily: "Times-new-roman",

                        margin: 0,
                      }}
                    >
                      {" "}
                      Close
                    </p>
                  </div>
                }
                src={props.image}
                currentIndex={currImg}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={() => {
                  setCurrImg(0);
                  setmodalIsOpen(false);
                }}
              />
            </div>

            <button onClick={() => {}}>
              <i
                className="bi bi-arrow-left-circle"
                style={{ fontSize: "30px" }}
              ></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );

  function videoPlayer() {
    return (
      <motion.div
        animate={animate}
        initial={AnimationThemeInstance.FadeUp}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <ReactPlayer
          style={{ height: "100px", width: "400px" }} // Ensure valid styling
          url="https://youtu.be/NrqM4TrlXHA"
          height={250}
          width={"85%"}
          controls
        />
      </motion.div>
    );
  }

  function firstImage() {
    return (
      <div ref={ref} className="row justify-content-center ">
        <div className="col-10 mt-3">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            src={props.image[0] ?? ""}
            style={{}}
            className="img-fluid w-100"
            onTap={() => {
              openImageViewer(0);
            }}
          />
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
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                src={item}
                style={{
                  maxHeight: 376,
                  // borderRadius: "8%",
                }}
                className="img-fluid w-100 "
                alt="Image Description"
                onClick={() => {
                  openImageViewer(key);
                }}
              />
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
                    <div
                      onClick={() => {
                        openImageViewer(key);
                      }}
                    >
                      <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: inView ? 1 : 0,
                          scale: inView ? 1 : 0.5,
                        }}
                        transition={{ duration: 1.5, delay: 2.0 }}
                        style={{}}
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
