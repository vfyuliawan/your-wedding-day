"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CoverModelInterface } from "./CoverModel";
import { HeroViewInterface } from "../Hero/HeroModel";
import { TimeConvertionDate, TimeConvertionInterface } from "@/app/utils/TimeConvertion";

const CoverView2 = (props: CoverModelInterface, ) => {
  const [appear, setAppear] = useState(false);
  const handleCoverClick = () => {
    props.onCoverClick();
    setTimeout(() => {
      setAppear(true);
    }, 6000);
  };

  console.log(props.hero?.HeroDate);
  

  return !appear ? (
    <motion.div
      className="cover2"
      initial={{ opacity: 1 }}
      animate={{ opacity: props.isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: props.isVisible ? 0 : 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        className="figure"
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          minHeight: "100vh",
          // backgroundImage: `url('${props.coverImg}')`,
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          // objectFit: "fill",
        }}
      >
        <img
          className="kenburns-top"
          style={{
            position: "absolute",
            top: 0,
            width: "40%",
            height: "100%",
            objectFit: "cover",
          }}
          src={props.detailCover.ImgCover}
          alt="dfasdfsa"
        />
        {/* <div
          className="cover2-overlay"
          style={{
            backgroundColor:'red',
            width: "100%",
            height: "100%",
            opacity: 0.4,
            position: "absolute",
            bottom: 0,
            color: "#fff",
            fontSize: "24px",
            textAlign: "center",
          }}
        ></div> */}
        <div
          className="cover2-overlay-shadow"
          style={{
            width: "100%",
            height: "78%",
            position: "absolute",
            bottom: "3%",
            color: "#fff",
            fontSize: "24px",
            textAlign: "center",
          }}
        ></div>
        <div
          className="cover2-overlay"
          style={{
            width: "100%",
            height: "78%",
            position: "absolute",
            flexDirection: "row",
            bottom: 0,
            fontSize: "24px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className="text-center"
            style={{
              position: "absolute",
              bottom: "7%",
              right: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateX(50%)",
              fontFamily:'Times New Roman'
            }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "row",
                color: "white",
                marginBottom: "1rem",
                fontFamily: "Times New Roman",
              }}
            >
              Save The Date
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    00
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Hari
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "5rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    00
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Jam
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "5rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    00
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Menit
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "5rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "sans-serif", fontSize: "21px" }}>
                    00
                  </p>
                  <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                    Detik
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <p style={{color:'white', fontSize:'14px'}}>{TimeConvertionDate(props.hero?.HeroDate as TimeConvertionInterface).dateFull}</p>
            </div>
          </div>
        </div>
        <div
          className="cover2-overlay-img"
          style={{
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            opacity: 1,
            position: "absolute",
            bottom: 0,
            color: "#fff",
            textAlign: "center",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "200px",
            left: 0,
            color: "#fff",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "2rem", fontFamily: "Times New Roman" }}>
            THE WEDDING OF
          </p>
          <h2
            style={{
              fontFamily: "brilon",
              fontSize: "5rem",
            }}
          >
            {props.detailCover.TitleCover}
          </h2>
          <div
            className="cover2-kepada"
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <p className="" style={{ fontSize: "1.4rem", color: "white" }}>
              Kepada Bpk/Ibu/Saudara/i
            </p>
            <p className="" style={{ fontSize: "2rem", color: "white" }}>
              {props.guest.toLocaleUpperCase()}
            </p>
            <a
              className="btn btn-lg text-center"
              style={{
                width: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                handleCoverClick();
              }}
            >
              <i className="bi bi-envelope-open-fill"> {"    "}Buka Undangan</i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  ) : null;
};

export default CoverView2;
