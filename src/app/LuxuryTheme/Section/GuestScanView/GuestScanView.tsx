import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import React from "react";
import AnimationThemeInstance from "../../../utils/AnimationThemes";
interface GuestScanViewInterface {
  idGuest: string;
  guest: string;
}

const GuestScanView = (props: GuestScanViewInterface) => {
  const targetRefGift = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRefGift);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeHorizon);
    }

    return () => {};
  }, [animate, isVisible]);
  return (
    <section
      className="guest"
      id="guest"
      style={{ height: "100hv" }}
      ref={targetRefGift}
    >
      <div
        className="stright-top"
        style={{ backgroundColor: "white", height: "100px" }}
      ></div>
      <div
        className="stright-bottom guestContainer"
        style={{ paddingTop: "5rem" }}
      >
        <div className="row mt-4 justify-content-center">
          <div className="col-6 text-end">
            <div className="row">
              <motion.h2
                animate={animate}
                initial={AnimationThemeInstance.FadeLeft}
                transition={{ duration: 1.5 }}
                style={{
                  color: "var(--forth)",
                  fontWeight: "100",
                  fontFamily: "brilon",
                  fontSize: "32px",
                }}
              >
                scan
              </motion.h2>
              <motion.h2
                animate={animate}
                initial={AnimationThemeInstance.FadeLeft}
                transition={{ duration: 1.5 }}
                style={{
                  color: "var(--forth)",
                  fontWeight: "100",
                  fontFamily: "Creation",
                  fontSize: "32px",
                }}
              >
                Barcode
              </motion.h2>
            </div>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--forth)",
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
                style={{
                  color: "var(--forth)",
                  fontSize: "12px",
                  fontFamily: "Times-new-roman",
                }}
                className="alamat"
              >
                Silahkan Scan barcode tamu di bawah. <br />
                Barcode akan dilakukan scan oleh penerima tamu undangan
              </motion.p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 justify-content-center d-flex">{body()}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <motion.p
              animate={animate}
              initial={AnimationThemeInstance.FadeRight}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                color:"var(--forth)" ,
                fontSize: "12px",
                fontFamily: "Times-new-roman",
              }}
              className="alamat"
            >
              Terimakasih Akan Kehadiran anda . <br />
              Diacara kami
            </motion.p>
          </div>
        </div>
        <div style={{ height: "100px" }}></div>
      </div>
    </section>
  );

  function body() {
    return (
      <>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: "10%",
            paddingTop: "50px",
            paddingBottom: "50px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <QRCode
            value={props.guest + "nviteMe" + props.idGuest}
            size={128}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
          />
          <p style={{ marginTop: "10px", color: "grey", fontSize: "12px" }}>
            {props.guest.charAt(0).toUpperCase() +
              props.guest.slice(1) +
              " With Id Guests " +
              props.idGuest}
          </p>
        </div>
      </>
    );
  }
};

export default GuestScanView;
