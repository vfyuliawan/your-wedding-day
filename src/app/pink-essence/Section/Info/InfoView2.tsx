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
  TimeConvertionInterface,
} from "@/app/utils/TimeConvertion";

export interface InfoViewInterface {
  Info: InfoViewKeyValue[];
}

export interface InfoViewKeyValue {
  Date: Date | TimeConvertionInterface;
  Judul: string;
  Map: string;
  Photo: string;
  Place: string;
}

const InfoView2 = (props: InfoViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  console.log("cekProps", props.Info);

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
              transition={{ duration: 1.5 }}
              // style={{ textShadow: "black" }}
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
        {props.Info.map((item, index) => (
          <div key={index + " dfasd"} className="col-md-6 col-10 mt-3">
            <div className="row">
              <motion.img
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: index === 0 ? 0.8 : 1.9 }}
                src={item.Photo}
                style={{
                  borderTopRightRadius: index === 1 ? '0%' : '30%',
                  backgroundSize: "cover",
                borderTopLeftRadius: index === 1 ? '30%' : '0%' ,

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
                transition={{ duration: 1.5, delay: index === 0 ? 0.8 :  2.2 }}
                className="col-md-9 col-sm-9 col-9 text-center bg-light"
                style={{ color: "black" }}
              >
                <h4
                  style={{
                    fontSize: "3rem",
                    fontFamily: "Dancing Script",
                    fontWeight: 500,
                    marginTop: "2rem",
                  }}
                >
                  {TimeConvertionDate(item?.Date as TimeConvertionInterface)}
                </h4>
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                    marginBottom: "3rem",
                    marginTop: "3rem",
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
                        minWidth:'100%'
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
          <div className="col-md-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4267616824472!2d106.81876977550014!3d-6.207304660805113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5a1f54c1187%3A0xf8fa357babd8133a!2sMenara%20Astra!5e0!3m2!1sen!2sid!4v1705646637914!5m2!1sen!2sid"
              width="100%"
              height="400px"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoView2;
