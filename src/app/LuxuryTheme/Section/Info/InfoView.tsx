"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionDay,
  TimeConvertionFullDate,
  TimeConvertionInterface,
} from "../../../utils/TimeConvertion";
import React from "react";
import AnimationThemeInstance from "../../../utils/AnimationThemes";
import { GetEmbededFromGmap } from "../../../utils/GetEmbeded";
import { InfoAcara } from "../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

export interface InfoViewInterface {
  Info: InfoAcara | undefined;
  Embeded: string | undefined;
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
        <div key={"123"} className="col-md-6 col-10 mt-3">
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeRight}
              transition={{ duration: 1.5, delay: 0.8 }}
              src={props.Info?.akad.imageAkad}
              style={{
                borderTopRightRadius: 50,
                backgroundSize: "cover",
                borderTopLeftRadius: 50,
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
              transition={{ duration: 1.5, delay: 0.8 }}
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
                {props.Info?.akad.titleAkad}
              </h3>
            </motion.div>
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeRight}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="col-md-9 col-sm-9 col-9 text-center bg-light"
              style={{ color: "black" }}
            >
              <div className="row">
                <div className="col-4">
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeLeft}
                    transition={{ duration: 1.5, delay: 1.3 }}
                    style={{
                      fontSize: "3rem",
                      fontFamily: "Dancing Script",
                      fontWeight: 500,
                      marginTop: "1rem",
                    }}
                  >
                    {
                      TimeConvertionFullDate(
                        props.Info!.akad.dateAkad.toString()
                      ).dayOfWeek
                    }{" "}
                  </motion.h4>
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeRight}
                    transition={{ duration: 1.5, delay: 1.4 }}
                    style={{
                      fontSize: "6rem",
                      fontFamily: "Dancing Script",
                      fontWeight: 500,
                    }}
                  >
                    {
                      TimeConvertionFullDate(
                        props.Info!.akad.dateAkad.toString()
                      ).dateToString
                    }
                  </motion.h4>
                </div>
                <div className="col-8 d-flex justify-content-start align-items-end">
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeLeft}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    style={{
                      fontSize: "1.8rem",
                      fontFamily: "Dancing Script",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      marginTop: "2rem",
                    }}
                  >
                    {
                      TimeConvertionFullDate(
                        props.Info!.akad.dateAkad.toString()
                      ).monthandYear
                    }
                  </motion.h4>
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
              <motion.span
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: 1.6 }}
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
                  {
                    TimeConvertionFullDate(props.Info!.akad.dateAkad.toString())
                      .formattedTime
                  }
                </p>
              </motion.span>
              <motion.h4
                animate={controls}
                initial={AnimationThemeInstance.FadeLeft}
                transition={{ duration: 1.5, delay: 1.7 }}
                style={{ marginBottom: "2rem", letterSpacing: "1px" }}
              >
                Tempat
              </motion.h4>
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeLeft}
                transition={{ duration: 1.5, delay: 1.7 }}
                style={{
                  fontSize: "1.6rem",
                  letterSpacing: "0.5px",
                  marginBottom: "4rem",
                }}
              >
                {props.Info?.akad.lokasiAkad}
              </motion.p>
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
                    href={props.Info?.akad.mapAkad}
                  >
                    <i className="bi bi-geo-alt-fill"> {"    "}Google Map</i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div key={"123"} className="col-md-6 col-10 mt-3">
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeRight}
              transition={{ duration: 1.5, delay: 1.9 }}
              src={props.Info?.resepsi.imageResepsi}
              style={{
                borderTopRightRadius: 50,
                backgroundSize: "cover",
                borderTopLeftRadius: 50,
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
              transition={{ duration: 1.5, delay: 1.9 }}
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
                {props.Info?.resepsi.titleResepsi}
              </h3>
            </motion.div>
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeRight}
              transition={{ duration: 1.5, delay: 2.3 }}
              className="col-md-9 col-sm-9 col-9 text-center bg-light"
              style={{ color: "black" }}
            >
              <div className="row">
                <div className="col-4">
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeLeft}
                    transition={{ duration: 1.5, delay: 2.3 }}
                    style={{
                      fontSize: "3rem",
                      fontFamily: "Dancing Script",
                      fontWeight: 500,
                      marginTop: "1rem",
                    }}
                  >
                    {
                      TimeConvertionFullDate(
                        props.Info!.resepsi.dateResepsi.toString()
                      ).dayOfWeek
                    }{" "}
                  </motion.h4>
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeRight}
                    transition={{ duration: 1.5, delay: 2.3 }}
                    style={{
                      fontSize: "6rem",
                      fontFamily: "Dancing Script",
                      fontWeight: 500,
                    }}
                  >
                    {
                      TimeConvertionFullDate(
                        props.Info!.resepsi.dateResepsi.toString()
                      ).dateToString
                    }
                  </motion.h4>
                </div>
                <div className="col-8 d-flex justify-content-start align-items-end">
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeLeft}
                    transition={{ duration: 1.5, delay: 2.3 }}
                    style={{
                      fontSize: "1.8rem",
                      fontFamily: "Dancing Script",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      marginTop: "2rem",
                    }}
                  >
                    {
                      TimeConvertionFullDate(
                        props.Info!.resepsi.dateResepsi.toString()
                      ).monthandYear
                    }
                  </motion.h4>
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
              <motion.span
                animate={controls}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: 2.3 }}
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
                  {
                    TimeConvertionFullDate(
                      props.Info!.resepsi.dateResepsi.toString()
                    ).formattedTime
                  }
                </p>
              </motion.span>
              <h4 style={{ marginBottom: "2rem", letterSpacing: "1px" }}>
                Tempat
              </h4>
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeLeft}
                transition={{ duration: 1.5, delay: 2.3 }}
                style={{
                  fontSize: "1.6rem",
                  letterSpacing: "0.5px",
                  marginBottom: "4rem",
                }}
              >
                {props.Info?.resepsi.lokasiResepsi}
              </motion.p>
              <div className="row justify-content-center mb-5">
                <motion.div
                  animate={controls}
                  initial={AnimationThemeInstance.FadeRight}
                  transition={{ duration: 1.5, delay: 2.3 }}
                  className="col-9 d-flex align-items-center justify-content-center"
                >
                  <a
                    className="btn btn-lg text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minWidth: "100%",
                    }}
                    href={props.Info?.resepsi.mapResepsi}
                  >
                    <i className="bi bi-geo-alt-fill"> {"    "}Google Map</i>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mt-5  ">
        <div className="row justify-content-center">
          <div className="col-md-10" style={{}}>
            <div
              className="iframeContainer"
              style={{ padding: "24px", borderRadius: "10%" }}
            >
              <iframe
                src={GetEmbededFromGmap(props.Embeded ?? "")}
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
