"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionDay,
  TimeConvertionFullDate,
  TimeConvertionInterface,
  TimeConvertionUSFormat,
} from "../../../../utils/TimeConvertion";
import React from "react";
import AnimationThemeInstance from "../../../../utils/AnimationThemes";
import { GetEmbededFromGmap } from "../../../../utils/GetEmbeded";
import { InfoAcara } from "../../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import { IConstantFont } from "../../../../utils/ConstantFont";
import { isMobile } from "react-device-detect";

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
      controls.start(AnimationThemeInstance.FadeStartVertical);
    }
  }, [isVisible, controls]);

  const apiKey = "AIzaSyCojsLM-OulTC4CRYYfmLaGGA90tjTLtio";
  return (
    <section
      style={{ backgroundColor: "var(--sec)" }}
      id="info"
      className="info "
    >
      <div className="container" style={{ marginTop: !isMobile ? -80 : 0 }}>
        <div className="row justify-content-center">
          <div className="col-5 text-end">
            <motion.div
              ref={targetRef}
              animate={{
                rotate: 360, 
              }}
              initial={{ rotate: 0 }}
              transition={{
                repeat: Infinity,
                duration: 5, 
                ease: "linear", 
              }}
              style={{
                height: 150,
                width: 150,
                backgroundColor: "transparent",
                overflow: "hidden",
              }}
            >
              <img
                src={"/image/Jade_Garden/InfoImg.png"}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt=""
              />
            </motion.div>
          </div>
          <div className="col-7 d-flex justify-content-center align-items-center">
            <motion.div
              ref={targetRef}
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                width: "100%",
                height: "4px",
                backgroundColor: "var(--prim)",
              }}
            ></motion.div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  color: "var(--third)",
                  fontSize: 12,
                  fontFamily: "Times-new-roman",
                }}
                className="alamat"
              >
                Dengan mengucap syukur atas kehadirat Allah SWT dan dengan
                segenap kerendahan hati, tanpa mengurangi rasa hormat. Kami
                mohon doa dan restu dari Bapak/Ibu/Saudara/i untuk hadir dihari
                bahagia Pernikahan kami yang akan dilaksanakan pada :
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div key={"123"} className="col-10 mt-3">
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 0.7 }}
              src={props.Info?.akad.imageAkad}
              style={{
                borderTopRightRadius: 150,
                backgroundSize: "cover",
                borderTopLeftRadius: 150,
              }}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "white",
              marginRight: 3,
              marginLeft: 3,
            }}
            className="row justify-content-center  d-flex align-items-center mt-1 mb-1"
          >
            <div className="row text-center justify-content-center d-flex align-items-center">
              <motion.img
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ width: 60, height: 50 }}
                src="/image/icons/wedding-rings.png"
                alt=""
              />
              <motion.h1
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-4"
                style={{
                  color: "var(--fiveth)",
                  fontFamily: IConstantFont.parisienne,
                  fontSize: 36,
                }}
              >
                Akad Nikah
              </motion.h1>
              <div className="row d-flex align-items-start text-start justify-content-start">
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.3 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-calendar-check-fill"></i>
                  </span>{" "}
                  {TimeConvertionUSFormat(props.Info!.akad.dateAkad.toString())}
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.4 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-alarm-fill"></i>
                  </span>{" "}
                  {
                    TimeConvertionFullDate(props.Info!.akad.dateAkad.toString())
                      .formattedTime
                  }
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.6 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>{" "}
                  {props.Info?.akad.lokasiAkad == "string"
                    ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda et praesentium doloribus laboriosam similique eligendi laudantium soluta reiciendis repellendus voluptatem quaerat, expedita aperiam amet!"
                    : props.Info?.akad.lokasiAkad}
                </motion.p>
              </div>

              <div className="row justify-content-center">
                <motion.a
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.8 }}
                  className="btn ext-center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    marginBottom: 25,
                  }}
                  href={props.Info?.akad.mapAkad}
                >
                  <i
                    style={{
                      fontSize: 12,
                      color: "var(--third)",
                    }}
                    className="bi bi-geo-alt-fill"
                  >
                    {" "}
                    {"    "}Google Map
                  </i>
                </motion.a>
              </div>
              <motion.img
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 1.3, delay: 2 }}
                style={{ width: 60, height: 50 }}
                src="/image/icons/restaurant.png"
                alt=""
              />
              <motion.h1
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 1.3, delay: 2.2 }}
                className="mt-4"
                style={{
                  color: "var(--fiveth)",
                  fontFamily: IConstantFont.parisienne,
                  fontSize: 36,
                }}
              >
                Resepsi
              </motion.h1>
              <div className="row d-flex align-items-start text-start justify-content-start">
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 2.4 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-calendar-check-fill"></i>
                  </span>{" "}
                  {TimeConvertionUSFormat(
                    props.Info!.resepsi.dateResepsi.toString()
                  )}
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 2.7 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-alarm-fill"></i>
                  </span>{" "}
                  {
                    TimeConvertionFullDate(
                      props.Info!.resepsi.dateResepsi.toString()
                    ).formattedTime
                  }
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 2.9 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>{" "}
                  {props.Info?.resepsi.lokasiResepsi == "string"
                    ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda et praesentium doloribus laboriosam similique eligendi laudantium soluta reiciendis repellendus voluptatem quaerat, expedita aperiam amet!"
                    : props.Info?.resepsi.lokasiResepsi}
                </motion.p>
              </div>
              <motion.a
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 1.3, delay: 3.3 }}
                className="btn ext-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 150,
                  marginBottom: 25,
                }}
                href={props.Info?.resepsi.mapResepsi}
              >
                <i
                  style={{
                    fontSize: 12,
                    color: "var(--third)",
                  }}
                  className="bi bi-geo-alt-fill"
                >
                  {" "}
                  {"    "}Google Map
                </i>
              </motion.a>
            </div>
            <div className="row justify-content-center d-flex text-center align-items-center"></div>
          </div>
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 3.7 }}
              src={props.Info?.akad.imageAkad}
              style={{
                borderBottomLeftRadius: 150,
                backgroundSize: "cover",
                borderBottomRightRadius: 150,
              }}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </div>
        </div>

        {/* <div key={"123"} className="col-10 mt-3">
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 2.5 }}
              src={props.Info?.resepsi.imageResepsi}
              style={{
                borderTopRightRadius: "150px",
                backgroundSize: "cover",
                // borderTopLeftRadius: 50,
              }}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </div>
          <div className="row justify-content-center m-1 ">
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 2.5 }}
              style={{}}
              className="col-md-3 col-sm-3 col-3 text-center d-flex justify-content-center align-items-center info-text"
            >
              <motion.h3
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="info-h3"
                style={{
                  fontSize: "38px",
                  fontFamily: "Dancing script",
                  fontWeight: 800,
                  color: "var(--forth)",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                {props.Info?.resepsi.titleResepsi}
              </motion.h3>
            </motion.div>
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 2.7 }}
              className="col-md-9 col-sm-9 col-9 text-center"
              style={{ color: "var(--fiveth)", backgroundColor: "#fff" }}
            >
              <div className="row">
                <div className="col-4 justify-content-end align-items-end">
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeUp}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    style={{
                      fontSize: "22px",
                      letterSpacing: "3px",
                      fontFamily: "brilon",
                      fontWeight: 400,
                      marginTop: "1rem",
                    }}
                  >
                    {TimeConvertionFullDate(
                      props.Info!.resepsi.dateResepsi.toString()
                    ).dayOfWeek.toLowerCase()}{" "}
                  </motion.h4>
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-start align-items-end">
                    <motion.h4
                      animate={controls}
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.8, delay: 2.9 }}
                      style={{
                        fontSize: "45px",
                        fontFamily: "brilon",
                        textAlign: "start",
                        marginLeft: 10,
                        fontWeight: 500,
                        marginBottom: 8,
                      }}
                    >
                      {
                        TimeConvertionFullDate(
                          props.Info!.resepsi.dateResepsi.toString()
                        ).dateToString
                      }
                    </motion.h4>
                  </div>
                  <div
                    style={{
                      backgroundColor: "",
                      paddingBottom: 10,
                      paddingRight: 5,
                    }}
                    className="col-7 d-flex justify-content-start align-items-end"
                  >
                    <motion.h4
                      animate={controls}
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.8, delay: 3 }}
                      style={{
                        fontSize: "22px",
                        fontFamily: "brilon",
                        fontWeight: 400,
                        letterSpacing: "3px",
                        textAlign: "start",
                        marginLeft: "15px",
                      }}
                    >
                      {TimeConvertionFullDate(
                        props.Info!.resepsi.dateResepsi.toString()
                      ).monthandYear.toLowerCase()}
                    </motion.h4>
                  </div>
                </div>
                <div className="col-8 d-flex justify-content-start align-items-end "></div>
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
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 3.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px ",
                }}
              >
                <i
                  className="bi bi-alarm-fill"
                  style={{ marginRight: "0.4rem", fontSize: 14 }}
                ></i>
                <p
                  style={{
                    letterSpacing: "2px",
                    margin: 0,
                    fontSize: 14,
                    fontFamily: "Times-new-roman",
                  }}
                >
                  {
                    TimeConvertionFullDate(
                      props.Info!.resepsi.dateResepsi.toString()
                    ).formattedTime
                  }
                </p>
              </motion.span>
              <motion.h4
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 3.2 }}
                style={{
                  marginBottom: "2rem",
                  letterSpacing: "1px",
                  fontFamily: "Times-new-roman",
                  fontSize: 16,
                }}
              >
                Tempat
              </motion.h4>
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 3.3 }}
                style={{
                  fontFamily: "Times-new-roman",
                  fontSize: 16,
                  letterSpacing: "0.5px",
                  marginBottom: "4rem",
                }}
              >
                {props.Info?.resepsi.lokasiResepsi}
              </motion.p>
              <div className="row justify-content-center mb-5">
                <div className="col-9 d-flex align-items-center justify-content-center">
                  <a
                    className="btn ext-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // hei
                      minWidth: "100%",
                    }}
                    href={props.Info?.resepsi.mapResepsi}
                  >
                    <i
                      style={{
                        fontSize: 12,
                      }}
                      className="bi bi-geo-alt-fill"
                      color="var(--third)"
                    >
                      {" "}
                      {"    "}Google Map
                    </i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}
      </div>

      <div className="container mt-5  ">
        <div className="row justify-content-center">
          <div className="col-md-10" style={{}}>
            <div className="iframeContainer" style={{ padding: "24px" }}>
              <iframe
                src={GetEmbededFromGmap(props.Embeded ?? "")}
                width="100%"
                height="400px"
                style={{}}
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

  function CardInfo(params: {
    title: string;
    image: string;
    date: Date;
    lokasi: string;
    map: string;
  }) {
    return (
      <div key={"123"} className="col-10 mt-3">
        <div className="row">
          <motion.img
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay: 0.8 }}
            src={params.image}
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
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-md-3 col-sm-3 col-3 text-center d-flex justify-content-center align-items-center info-text"
          >
            <h3
              className="info-h3"
              style={{
                fontSize: "4rem",
                fontFamily: "Dancing script",
                fontWeight: 800,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {params.title}
            </h3>
          </motion.div>
          <motion.div
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-md-9 col-sm-9 col-9 text-center bg-light"
            style={{ color: "black" }}
          >
            <div className="row">
              <div className="col-4  align-items-end">
                <motion.h4
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  style={{
                    fontSize: "25px",
                    fontFamily: "brilon",
                    fontWeight: 400,
                    marginTop: "1rem",
                  }}
                >
                  {TimeConvertionFullDate(params.date.toString()).dayOfWeek}{" "}
                </motion.h4>
                <motion.h4
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  style={{
                    fontSize: "60px",
                    fontFamily: "brilon",
                    fontWeight: 500,
                  }}
                >
                  {TimeConvertionFullDate(params.date.toString()).dateToString}
                </motion.h4>
              </div>
              <div className="col-8 d-flex justify-content-start align-items-end ">
                <motion.h4
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  style={{
                    fontSize: "16px",
                    marginBottom: "20px",
                    fontFamily: "brilon",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    marginTop: "2rem",
                  }}
                >
                  {TimeConvertionFullDate(params.date.toString()).monthandYear}
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
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 1.6 }}
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
                {TimeConvertionFullDate(params.date.toString()).formattedTime}
              </p>
            </motion.span>
            <motion.h4
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 1.7 }}
              style={{ marginBottom: "2rem", letterSpacing: "1px" }}
            >
              Tempat
            </motion.h4>
            <motion.p
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 1.7 }}
              style={{
                fontSize: "1.6rem",
                letterSpacing: "0.5px",
                marginBottom: "4rem",
              }}
            >
              {params.lokasi}
            </motion.p>
            <div className="row justify-content-center mb-5">
              <div className="col-9 d-flex align-items-center justify-content-center">
                <a
                  className="btn ext-center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // hei
                    minWidth: "100%",
                  }}
                  href={params.map}
                >
                  <i className="bi bi-geo-alt-fill"> {"    "}Google Map</i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
};

export default InfoView;
