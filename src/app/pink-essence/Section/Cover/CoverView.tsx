"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface CoverViewInterface {
  man: string;
  woman: string;
  coverImg: string;

  isVisible: boolean;
  setVisible?: Dispatch<SetStateAction<boolean>>;
  onCoverClick: () => void;
}

const CoverView = (props: CoverViewInterface) => {
  const [appear, setAppear] = useState(false);
  const handleCoverClick = () => {
    props.onCoverClick();
    setTimeout(() => {
      setAppear(true);
    }, 6000);
  };

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
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('${props.coverImg}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "fill",
        }}
      >
        {/* <img
          style={{
            width: "100%",
            minHeight:'100vh',
            objectFit:'fill'
          }}
          src="/pink-essence/img/prawed/prawed2.jpg"
          alt="dfasdfsa"
        /> */}
        <div
          className="cover2-overlay"
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.4,
            position: "absolute",
            bottom: 0,
            color: "#fff",
            fontSize: "24px",
            textAlign: "center",
          }}
        ></div>
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
            // transform: "translate(-50%, -50%)",
            color: "#fff",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.5rem" }}>THE WEDDING OF</p>
          <h2
            style={{
              fontFamily: "sacramento",
              fontSize: "5rem",
            }}
          >
            {props.man} dan {props.woman}
          </h2>
          <div
            className="cover2-kepada"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <p className="" style={{ fontSize: "1.4rem", color: "white" }}>
              Kepada Bpk/Ibu/Saudara/i
            </p>
            <a
              className="btn btn-lg text-center"
              style={{
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

export default CoverView;
