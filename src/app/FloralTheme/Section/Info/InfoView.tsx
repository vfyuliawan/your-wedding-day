"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance, {
  setAnimation,
} from "@/app/utils/AnimationThemes";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionDay,
  TimeConvertionInterface,
} from "@/app/utils/TimeConvertion";
import { ThemeColorClass } from "@/app/Constant/GreenFloral/ThemeColor";

export interface InfoViewInterface {
  Info: InfoViewKeyValue[];
}

export interface InfoViewKeyValue {
  Date: TimeConvertionInterface;
  Judul: string;
  Map: string;
  Photo: string;
  Place: string;
}

const InfoView = (props: InfoViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeHorizon);
    }
  }, [isVisible, controls]);

  const apiKey = "AIzaSyCojsLM-OulTC4CRYYfmLaGGA90tjTLtio";
  return (
    <section id="info" className="info ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 text-end">
            <motion.h2
              ref={targetRef}
              animate={controls}
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 2 }}
              style={{ fontFamily: "brilon", fontSize: "3.4rem" }}
            >
              Informasi <br />
              Acara
            </motion.h2>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "black",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            ></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ color: "black", fontSize: "1.2rem" }}
                className="alamat"
              >
                Tanpa mengurangi rasa hormat, kami mengundang
                Bapak/Ibu/Saudara/i untuk hadir dihari bahagia Pernikahan kami
                yang akan dilaksanakan pada:
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div
          style={{
            height: "50rem",
          }}
          className="col-10"
        >
          <img
            src={props.Info[0].Photo}
            style={{
              borderTopRightRadius: "20%",
              backgroundSize: "cover",
              borderTopLeftRadius: "20%",
            }}
            width={"100%"}
            height={"auto"}
            alt=""
          />
          <div
            className="col justify-content-center d-flex"
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <div className="row">
              <div className="col-12 text-center">
                <motion.img
                  animate={controls}
                  initial={AnimationThemeInstance.FadeRight}
                  transition={{ duration: 2, delay: 1 }}
                  style={{ width: "50px", height: "50px", marginTop: "2rem" }}
                  src="/image/icons/wedding-rings.png"
                  alt=""
                />
                <motion.h1
                  className="mt-4"
                  animate={controls}
                  initial={AnimationThemeInstance.FadeLeft}
                  transition={{ duration: 2, delay: 1.3 }}
                  style={{
                    color: ThemeColorClass.ThemeColor.colors.secondary,
                    fontFamily: "brilon",
                    fontSize: "2.5rem",
                  }}
                >
                  {props.Info[0].Judul}
                </motion.h1>
              </div>
            </div>
          </div>
          <div
            className="col align-items-center"
            style={{ backgroundColor: "white", padding: "1rem" }}
          >
            <motion.p
            animate={controls}
            initial={AnimationThemeInstance.FadeRight}
            transition={{ duration: 2, delay: 1.5 }}
              style={{
                fontSize: "1.5rem",
                color: ThemeColorClass.ThemeColor.colors.textColor2,
              }}
            >
              <span>
                <i className="bi bi-calendar-check-fill"></i>
              </span>{" "}
              {
                TimeConvertionDate(
                  props?.Info[0].Date as TimeConvertionInterface
                ).dateFull
              }{" "}
            </motion.p>
            <motion.p
            animate={controls}
            initial={AnimationThemeInstance.FadeLeft}
            transition={{ duration: 2, delay: 1.7 }}
              style={{
                fontSize: "1.5rem",
                color: ThemeColorClass.ThemeColor.colors.textColor2,
              }}
            >
              <span>
                <i className="bi bi-alarm-fill"></i>
              </span>{" "}
              {TimeConversionTime(
                props?.Info[0].Date as TimeConvertionInterface
              )}
            </motion.p>
            <motion.p
            animate={controls}
            initial={AnimationThemeInstance.FadeRight}
            transition={{ duration: 2, delay: 1.9 }}
              style={{
                fontSize: "1.5rem",
                color: ThemeColorClass.ThemeColor.colors.textColor2,
              }}
            >
              <span>
                <i className="bi bi-geo-alt-fill"></i>
              </span>{" "}
              {props.Info[0].Place}
            </motion.p>
          </div>
          <div
            className="col align-items-center justify-content-center d-flex"
            style={{ backgroundColor: "white", padding: "1rem" }}
          >
            <div className="col-6 justify-content-center">
              <motion.a
              animate={controls}
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 2, delay: 2 }}
                className="btn btn-lg text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "100%",
                }}
                href={props.Info[0].Map}
              >
                <i className="bi bi-geo-alt-fill"> {"    "}Google Map</i>
              </motion.a>
            </div>
          </div>
          <div
            className="col justify-content-center d-flex"
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <div className="row">
              <div className="col-12 text-center">
                <motion.img
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 2, delay: 2.2 }}
                  style={{ width: "50px", height: "50px", marginTop: "2rem" }}
                  src="/image/icons/restaurant.png"
                  alt=""
                />
                <motion.h1
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 2, delay: 2.4 }}
                  className="mt-4"
                  style={{
                    color: ThemeColorClass.ThemeColor.colors.secondary,
                    fontFamily: "brilon",
                    fontSize: "2.5rem",
                  }}
                >
                  {props.Info[0].Judul}
                </motion.h1>
              </div>
            </div>
          </div>
          <div
            className="col align-items-center"
            style={{ backgroundColor: "white", padding: "1rem" }}
          >
            <motion.p animate={controls}
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 2, delay: 2.5 }}
              style={{
                fontSize: "1.5rem",
                color: ThemeColorClass.ThemeColor.colors.textColor2,
              }}
            >
              <span>
                <i className="bi bi-calendar-check-fill"></i>
              </span>{" "}
              {
                TimeConvertionDate(
                  props?.Info[1].Date as TimeConvertionInterface
                ).dateFull
              }
            </motion.p>
            <motion.p
            animate={controls}
            initial={AnimationThemeInstance.FadeRight}
            transition={{ duration: 2, delay: 2.6 }}
              style={{
                fontSize: "1.5rem",
                color: ThemeColorClass.ThemeColor.colors.textColor2,
              }}
            >
              <span>
                <i className="bi bi-alarm-fill"></i>
              </span>{" "}
              {TimeConversionTime(
                props?.Info[1].Date as TimeConvertionInterface
              )}
            </motion.p>
            <motion.p
            animate={controls}
            initial={AnimationThemeInstance.FadeLeft}
            transition={{ duration: 2, delay: 2.8 }}
              style={{
                fontSize: "1.5rem",
                color: ThemeColorClass.ThemeColor.colors.textColor2,
              }}
            >
              <span>
                <i className="bi bi-geo-alt-fill"></i>
              </span>{" "}
              {props.Info[1].Place}
            </motion.p>
          </div>
          <div
            className="col align-items-center justify-content-center d-flex"
            style={{ backgroundColor: "white", padding: "1rem" }}
          >
            <div className="col-6 justify-content-center">
              <motion.a
              animate={controls}
              initial={AnimationThemeInstance.FadeRight}
              transition={{ duration: 2, delay: 2.9 }}
                className="btn btn-lg text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "100%",
                }}
                href={props.Info[1].Map}
              >
                <i className="bi bi-geo-alt-fill"> {"    "}Google Map</i>
              </motion.a>
            </div>
          </div>
          <img
            src={props.Info[1].Photo}
            style={{
              borderBottomLeftRadius: "20%",
              backgroundSize: "cover",
              borderBottomRightRadius: "20%",
            }}
            width={"100%"}
            height={"auto"}
            alt=""
          />
        </div>
      </div>
      <div style={{ height: "80rem" }}></div>

      <div className="container mt-5  ">
        <div className="row justify-content-center">
          <div className="col-md-10" style={{}}>
            <div
              className="iframeContainer"
              style={{ padding: "24px", borderRadius: "10%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4267616824472!2d106.81876977550014!3d-6.207304660805113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a1f54c1187%3A0xf8fa357babd8133a!2sMenara%20Astra!5e0!3m2!1sen!2sid!4v1705646637914!5m2!1sen!2sid"
                width="100%"
                height="400px"
                style={{ borderRadius: "10%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoView;
