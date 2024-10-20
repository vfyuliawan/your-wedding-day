import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "../../../utils/AnimationThemes";

const HeathProtocol = () => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeHorizon);
    }
  }, [isVisible, controls]);
  const helathContent = [
    {
      icon: "/image/icons/healthprotocol/hand-sanitizer.png",
      text: "Mencuci Tangan Mencuci tangan sebelum memasuki resepsi acara",
    },
    {
      icon: "/image/icons/healthprotocol/hands.png",
      text: "Kebersihan adalah tanggung jawab bersama",
    },
    {
      icon: "/image/icons/healthprotocol/mask.png",
      text: "Menggunakan Masker Wajib menggunakan masker/face shield",
    },
    {
      icon: "/image/icons/healthprotocol/social-distancing.png",
      text: "Menjaga JarakSaling Menjaga Jarak ketika menghadiri acara",
    },
  ];
  return (
    <section ref={targetRef} style={{ height: 600, position: "relative", display:"flex" }}>
      <div
        style={{
          background: "linear-gradient(var(--prim) 0%, var(--sec) 300%)",
          opacity: 1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          zIndex: -1,
        }}
      />
      <div
        style={{
          width: "90%",
        //   position:"absolute",
          marginTop:40,
          marginBottom:40,
          backgroundColor: "var(--prim)",
          borderRadius: 20,
        }}
        className="container p-4 justify-content-center align-items-center"
      >
        <div className="row d-flex justify-content-center align-items-center ">
          <motion.p
            animate={controls}
            initial={AnimationThemeInstance.FadeLeft}
            transition={{ duration: 2 }}
            style={{
              color: "var(--forth)",
              textAlign: "center",
              fontFamily: "Dancing script",
              fontSize: 32,
            }}
          >
            Health Protocol
          </motion.p>
        </div>
        <div className="row mb-3 mt-3">
          <motion.p
            animate={controls}
            initial={AnimationThemeInstance.FadeRight}
            transition={{ duration: 2 }}
            style={{
              textAlign: "center",
              fontFamily: "Quicksand",
              color: "var(--forth)",
              fontSize: 16,
            }}
          >
            Demi memutus mata rantai penyebaran virus Covid-19 kami menerapkan
            protokol kesehatan dalam acara pernikahan kami. Kami harap
            Bapak/Ibu/Saudara/i mematuhi protokol kesehatan demi kenyamanan
            bersama
          </motion.p>
        </div>
        <div className="row mt-4">
          {helathContent.map((item) => {
            return (
              <div className="col-6">
                <div className="row d-flex justify-content-center">
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      overflow: "hidden",
                    }}
                  >
                    <motion.img
                      animate={controls}
                      initial={AnimationThemeInstance.FadeRight}
                      transition={{ duration: 2 }}
                      style={{
                        objectFit: "cover",
                      }}
                      height={"100%"}
                      width={"100%"}
                      src={item.icon}
                      alt=""
                    />
                  </div>
                  <motion.p
                    animate={controls}
                    initial={AnimationThemeInstance.FadeLeft}
                    transition={{ duration: 2 }}
                    style={{
                      fontSize: 16,
                      fontFamily: "Quicksand",
                      marginTop: 12,
                      color: "var(--forth)",
                    }}
                  >
                    {item.text}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeathProtocol;
