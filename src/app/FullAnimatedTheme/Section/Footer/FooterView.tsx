import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import { StoryViewMap } from "@/app/FloralTheme/Section/Story/SotryViewModel";

import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionInterface,
} from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedImageComponent from "../../component/AnimatedImage";

interface GiftsOption {
  First: GiftsKeyValue;
  Second: GiftsKeyValue;
  Third: GiftsKeyValue;
}

interface GiftsKeyValue {
  Name: string;
  NoRek: string;
  Image: string;
  Visible: boolean;
}

interface KeyValueFooter {
  Qutes: string;
  Image: string;
  Name: string;
}

const FooterView = (props: {
  themeName: string;
  gifts: GiftsOption;
  alamat: string;
  footer: KeyValueFooter;
}) => {
  const bgImage = new ThemeImageClass(props.themeName);

  const bgColor = new ThemeColorClass(props.themeName);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);

  const copyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard:", textToCopy);
    } catch (err) {
      console.error("Error copying text to clipboard:", err);
    }
  };

  enum IsActiveEnum {
    Cashless = "Cashless",
    WeddingGifts = "WeddingGifts",
  }
  const [isActive, setIsActive] = useState(IsActiveEnum.WeddingGifts);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeHorizon);
    }
  }, [isVisible, controls]);

  return (
    <section className="section" style={{}} ref={targetRef}>
      <div
        className=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          background: `url('${bgImage.image.cover}')`,
          width: "100%",
          height: "100vh",
        }}
      ></div>

       {/* Corner Image */}
      <AnimatedImageComponent
        bgImage={bgImage}
        ref={function (node?: Element | null | undefined): void {
          ref;
        }}
        inView={inView}
      />
      {/* Corner Image */}

      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "50%",
          width: "100%",
          transform: "translateX(50%)",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                fontFamily: "faunaOne",
                fontSize: "1.2rem",
                color: bgColor.color.secondary,
              }}
            >
              <br />
              <span
                style={{
                  fontFamily: "Brilon",
                  fontWeight: "normal",
                  fontSize: "2rem",
                  color: bgColor.color.secondary,
                }}
              >
                Terima Kasih
                <br />
              </span>
            </motion.h2>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.5,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="row d-flex justify-content-center"
          style={{ position: "absolute", top: 80 }}
        >
          <div className="col-10 justify-content-center text-center">
            <p style={{ fontSize: 18, fontFamily: "faunaOne", color: "black" }}>
              {props.footer.Qutes}
            </p>
          </div>
          <div className="col-10 justify-content-center text-center">
            <p
              style={{
                fontSize: 18,
                fontFamily: "faunaOne",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Hormat Kami yang mengundang
            </p>
          </div>
          <div className="col-10 justify-content-center text-center">
            <p
              style={{
                fontSize: 32,
                fontWeight: "bold",
                fontFamily: "brilon",
                color: bgColor.color.secondary,
              }}
            >
              {props.footer.Name}
            </p>
          </div>
          <div className="row mt-4 justify-content-center"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterView;
