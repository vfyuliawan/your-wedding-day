"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import { setAnimation } from "@/app/utils/AnimationThemes";
import { MaleFemaleViewInterface } from "./MaleFemaleModel";




const MaleFemaleView = (props: MaleFemaleViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);


useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);



  return (
    <section id="male-female" className="male-female" >
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="row justify-content-center mb-3">
          <div className="col-md-8 col-10 text-center">
            <h2
              style={{
                fontSize: "4rem",
                fontFamily: "brilon",
                color: "black",
                fontWeight: 900,
              }}
            >
              Our Wedding
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 col-3 col-sm-3 text-center justify-content-end d-flex align-items-center ">
            <h3
              style={{
                fontSize: "4rem",
                fontFamily: "Dancing Script",
                fontWeight: 400,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              The Ride
            </h3>
          </div>
          <div className="col-md-6 col-9 col-sm-9 d-flex align-items-star justify-content-star position-relative">
              <motion.img ref={targetRef}
               initial={{ opacity: setAnimation["fade-down"].initialX, y: setAnimation["fade-down"].initialY }}
               animate={controls}
               transition={{ duration: 1 }}
              style={{
              width:'100%',
              height:'100%',
              objectFit:'cover'
              }}
                src={props?.MaleFemaleDetail?.Female?.Photo}
                alt={""}
                srcSet=""
              />
            <motion.div
              initial={{ opacity: setAnimation["fade-Up"].initialX, y: setAnimation["fade-Up"].initialY }}
              animate={controls}
              transition={{ duration: 1, delay:0.5}}
              className="overlay"
            >
              <h1 className="">{props?.MaleFemaleDetail?.Female?.Name}</h1>
              <h3 className="">Putra Dari Bapaak {props?.MaleFemaleDetail?.Female?.Ayah}</h3>
              <h3 className="">Putra Dari Bapaak {props?.MaleFemaleDetail?.Female?.Ibu}</h3>
            </motion.div>
          </div>
        </div>

        <div className="row">
          <div
            className="justify-content-center d-flex p-3 mid-couple"
            style={{
              height: "5rem",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontFamily: "Dancing Script",
                color: "white",
                fontWeight: 800,
              }}
            >
              {props?.MaleFemaleDetail?.Female?.Name} & {props?.MaleFemaleDetail?.Male?.Name}
            </h2>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{ marginBottom: "2rem" }}
        >
          <div
            className="col-md-6 col-9 col-sm-9 d-flex align-items-end justify-content-end position-relative"
          >
            <motion.div
              initial={{ opacity: setAnimation["fade-down"].initialX, y: setAnimation["fade-down"].initialY }}
              animate={controls}
              transition={{ duration: 1, delay:1.5 }}
            >
            <motion.img
              style={{
                width:'100%',
                height:'100%',
                objectFit:'cover'
              }}
              src={props?.MaleFemaleDetail?.Male?.Photo}
              alt=""
              srcSet=""
              data-aos="fade-down"
            />
            </motion.div>
            <motion.div
              initial={{ opacity: setAnimation["fade-Up"].initialX, y: setAnimation["fade-Up"].initialY }}
              animate={controls}
              transition={{ duration: 1,delay:2 }}
              className="overlay"
            >
            <h1 className="">{props?.MaleFemaleDetail?.Male?.Name}</h1>
              <h3 className="">Putra Dari Bapaak {props?.MaleFemaleDetail?.Male?.Ayah}</h3>
              <h3 className="">Putra Dari Bapaak {props?.MaleFemaleDetail?.Male?.Ibu}</h3>
            </motion.div>
          </div>
          <div className="col-md-6 col-3 col-sm-3 text-center justify-content-start d-flex align-items-center">
            <h3
              style={{
                fontSize: "4rem",
                fontFamily: "Dancing Script",
                fontWeight: 400,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              The Broom
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaleFemaleView;
