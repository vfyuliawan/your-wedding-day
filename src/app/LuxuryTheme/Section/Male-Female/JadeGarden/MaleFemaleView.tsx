"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import { MaleFemaleViewInterface } from "./MaleFemaleModel";
import React from "react";
import AnimationThemeInstance, {
  setAnimation,
} from "../../../../utils/AnimationThemes";
import { isMobile } from "react-device-detect";
import { hexToRgba } from "../../../../utils/ConvertColor";
import { IConstantFont } from "../../../../utils/ConstantFont";

const MaleFemaleView = (props: MaleFemaleViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeStartVertical);
    }
  }, [isVisible, controls]);

  return (
    <section
      ref={props.ref}
      id="male-female"
      className=" male-female"
      style={{
        backgroundColor: "var(--prim)",
        overflow: "hidden",
        height: "90vh",
        position: "relative",
      }}
    >
      <img
        src="/image/Jade_Garden/MaleFemaleBg.jpeg"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
        }}
        alt=""
      />
      <div
        style={{
          background: "linear-gradient(to bottom, var(--prim), transparent)",
          width: "100%",
          height: 100,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>
      <motion.div
      ref={targetRef}
       animate={controls}
       initial={AnimationThemeInstance.FadeUp}
       transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          width: "100%",
          height: 100,
          position: "absolute",
          top: isMobile ? 20 : 60,
          left: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BraidInfo
          right={false}
          photo={props.MaleFemaleDetail.female.image}
          name={props.MaleFemaleDetail.female.name}
          ayah={props.MaleFemaleDetail.female.dad}
          ibu={props.MaleFemaleDetail.female.mom}
        />
      </motion.div>
      <motion.div
      ref={targetRef}
       animate={controls}
       initial={AnimationThemeInstance.FadeUp}
       transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          width: "100%",
          height: 100,
          position: "absolute",
          top: isMobile ? 270 : 320,
          left: 170,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BraidInfo
          right={true}
          photo={props.MaleFemaleDetail.female.image}
          name={props.MaleFemaleDetail.female.name}
          ayah={props.MaleFemaleDetail.female.dad}
          ibu={props.MaleFemaleDetail.female.mom}
        />
      </motion.div>
    </section>
  );

  function BraidInfo(params: {
    right: boolean;
    photo: string;
    name: string;
    ayah: string;
    ibu: string;
  }) {
    return (
      <div

        style={{
          position: "relative",
          width: isMobile ? 220 : 250,
          height: isMobile ? 220 : 250,
          
        }}
      >
        <div
          style={{
            height: isMobile ? 160 : 170,
            width: isMobile ? 160 : 170,
            overflow: "hidden",
            backgroundColor: "transparent",
            borderRadius: "50%",
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          <img
            src={params.photo}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            alt="test bg"
          />
        </div>
        <div
          style={{
            height: isMobile ? 220 : 250,
            width: isMobile ? 220 : 250,
            overflow: "hidden",
            backgroundColor: "transparent",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          <img
            src={"/image/Jade_Garden/MaleFemaleFrame2.png"}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            alt="test bg"
          />
        </div>
        <div
          style={{
            height: isMobile ? 220 : 250,
            width: isMobile ? 220 : 250,
            overflow: "hidden",
            backgroundColor: "transparent",
            position: "absolute",
            top: 220,
            left: 0,
            zIndex: 2,
          }}
        >
          <div
            style={{
              textAlign: params.right ? "end" : "start",
            }}
            className="row ms-2 mt-1"
          >
            <h4
              style={{
                fontSize: 32,
                fontWeight: 600,
                marginTop: isMobile ? 2 : 25,
                color: "var(--third)",
                fontFamily: IConstantFont.lavishlyYours,
              }}
            >
              {params.name == "string" ? "Template Design" : params.name}
            </h4>
            <h4
           
              style={{
                marginTop: 0,
                fontSize: 18,
                color: "var(--third)",
                fontFamily: IConstantFont.BellezaRegular,
              }}
            >
              Putri Dari
            </h4>
            <h4
     
              style={{
                fontSize: 18,
                color: "var(--third)",
                fontFamily: IConstantFont.BellezaRegular,
              }}
            >
              Ibu {params.ibu}
            </h4>
            <h4
            
              style={{
                fontSize: 18,
                color: "var(--third)",
                fontFamily: IConstantFont.BellezaRegular,
              }}
            >
              Ayah {params.ayah}
            </h4>
          </div>
        </div>
      </div>
    );
  }
};

export default MaleFemaleView;
