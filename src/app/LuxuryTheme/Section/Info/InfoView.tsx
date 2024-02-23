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
import { GetEmbededFromGmap } from "@/app/utils/GetEmbeded";

export interface InfoViewInterface {
  Info: InfoViewKeyValue[];
  Embeded: string;
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
              <span
                style={{
                  fontFamily: "Creation",
                  fontWeight: "normal",
                  fontSize: "65px",
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
        {props.Info.map((item, index) => (
          <div key={index + " dfasd"} className="col-md-6 col-10 mt-3">
            <div className="row">
              <motion.img
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: index === 0 ? 0.8 : 1.9 }}
                src={item.Photo}
                style={{
                  borderTopRightRadius: index === 1 ? "0%" : "30%",
                  backgroundSize: "cover",
                  borderTopLeftRadius: index === 1 ? "30%" : "0%",
                }}
                width={"100%"}
                height={"100%"}
                alt=""
              />
            </div>
            <div className="row justify-content-center m-1 ">
              <motion.div
                animate={controls}
                initial={AnimationThemeInstance.FadeLeft}
                transition={{ duration: 1.5, delay: index === 0 ? 0.8 : 2.2 }}
                className="col-md-3 col-sm-3 col-3 text-center d-flex justify-content-center align-items-center info-text"
              >
                <h3
                  className="info-h3"
                  style={{
                    fontSize: "3rem",
                    fontFamily: "Dancing Script",
                    fontWeight: 800,
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item.Judul}
                </h3>
              </motion.div>
              <motion.div
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: index === 0 ? 0.8 : 2.2 }}
                className="col-md-9 col-sm-9 col-9 text-center bg-light"
                style={{ color: "black" }}
              >
                <div className="row">
                  <div className="col-4">
                    <h4
                      style={{
                        fontSize: "3rem",
                        fontFamily: "Dancing Script",
                        fontWeight: 500,
                        marginTop: "1rem",
                      }}
                    >
                      {
                        TimeConvertionDay(item?.Date, item.Date as any)
                          .dayString
                      }{" "}
                    </h4>
                    <h4
                      style={{
                        fontSize: "6rem",
                        fontFamily: "Dancing Script",
                        fontWeight: 500,
                      }}
                    >
                      {TimeConvertionDay(item?.Date, item.Date as any).day}
                    </h4>
                  </div>
                  <div className="col-8 d-flex justify-content-start align-items-end">
                    <h4
                      style={{
                        fontSize: "1.8rem",
                        fontFamily: "Dancing Script",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        marginTop: "2rem",
                      }}
                    >
                      {
                        TimeConvertionDate(
                          item?.Date as TimeConvertionInterface
                        ).dateMonth
                      }
                    </h4>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "black",
                    marginBottom: "1rem",
                    marginTop: "1rem",
                  }}
                ></div>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem ",
                  }}
                >
                  <i
                    className="bi bi-alarm-fill"
                    style={{ marginRight: "0.4rem" }}
                  ></i>
                  <p style={{ letterSpacing: "2px", margin: 0 }}>
                    {TimeConversionTime(item?.Date as TimeConvertionInterface)}
                  </p>
                </span>
                <h4 style={{ marginBottom: "2rem", letterSpacing: "1px" }}>
                  Tempat
                </h4>
                <p
                  style={{
                    fontSize: "1.6rem",
                    letterSpacing: "0.5px",
                    marginBottom: "4rem",
                  }}
                >
                  {item.Place}
                </p>
                <div className="row justify-content-center mb-5">
                  <div className="col-9 d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-lg text-center"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                      href={item.Map}
                    >
                      <i className="bi bi-geo-alt-fill"> {"    "}Google Map</i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-5  ">
        <div className="row justify-content-center">
          <div className="col-md-10" style={{}}>
            <div
              className="iframeContainer"
              style={{ padding: "24px", borderRadius: "10%" }}
            >
              <iframe
                src={GetEmbededFromGmap(props.Embeded)}
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
