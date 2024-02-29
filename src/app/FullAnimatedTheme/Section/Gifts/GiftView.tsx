import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import { StoryViewMap } from "@/app/FloralTheme/Section/Story/SotryViewModel";
import {
  InfoViewInterface,
  InfoViewKeyValue,
} from "@/app/LuxuryTheme/Section/Info/InfoView";
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

const GiftsView = (props: { themeName: string; gifts: GiftsOption }) => {
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
      <div style={{ position: "absolute", top: 0, right: -30 }}>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : -50,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ width: 280, height: 150 }}
          src={bgImage.image.top}
          alt=""
        />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0 }}>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ width: 240, height: 130 }}
          src={bgImage.image.bottom}
          alt=""
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7%",
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
                Send Gifts
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
              Thank you for adding to the joyfull spirit of our wedding with
              your presence and lovely gift.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 justify-content-end d-flex">
              <div
                style={{
                  width: "80%",
                  height: 50,
                  textDecoration: "none",
                  backgroundColor:
                    isActive === IsActiveEnum.Cashless
                      ? "black"
                      : bgColor.color.secondary,
                  borderRadius: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  fontSize: "16px",
                  fontFamily: "faunaone",
                  color: bgColor.color.primary,
                }}
                onClick={() => {
                  setIsActive(IsActiveEnum.Cashless);
                }}
              >
                <i className="bi bi-wallet-fill" style={{ marginRight: 2 }}>
                  {" "}
                </i>{" "}
                {"   "} <span style={{ marginLeft: 10 }}>Cashless</span>
              </div>
            </div>
            <div className="col-6">
              <div
                style={{
                  width: "80%",
                  height: 50,
                  textDecoration: "none",
                  backgroundColor:
                    isActive === IsActiveEnum.WeddingGifts
                      ? "black"
                      : bgColor.color.secondary,
                  borderRadius: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  fontSize: "16px",
                  fontFamily: "faunaone",
                  color: bgColor.color.primary,
                }}
                onClick={() => {
                  setIsActive(IsActiveEnum.WeddingGifts);
                }}
              >
                <i
                  className="bi bi-box2-heart-fill "
                  style={{ marginRight: 2 }}
                >
                  {" "}
                </i>{" "}
                {"   "} <span style={{ marginLeft: 10 }}>Wedding Gifts</span>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            {isActive === IsActiveEnum.WeddingGifts ? (
              <>
                <div className="col-10 justify-content-center d-flex">
                  <h3
                    style={{
                      fontFamily: "faunaone",
                      fontWeight: "bold",
                      color: bgColor.color.secondary,
                      fontSize: 25,
                    }}
                  >
                    Kirim Kado
                  </h3>
                </div>
                <div className="col-10 justify-content-center d-flex text-center">
                  <p
                    style={{
                      fontFamily: "faunaone",
                      fontSize: 16,
                    }}
                  >
                    Anda Dapat Mengirim Kado ke: <br />
                    Lorem ipsum dolor sit amet consectetur, adipisi cing elit.
                    Reprehenderit adipisci amet ullam?
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="col-10 justify-content-center d-flex">
                  <h3
                    style={{
                      fontFamily: "faunaone",
                      fontWeight: "bold",
                      color: bgColor.color.secondary,
                      fontSize: 25,
                    }}
                  >
                    Beri Hadiah
                  </h3>
                </div>
                <div className="row justify-content-center d-flex text-center">
                  {props.gifts.First.Visible ? (
                    <div className="col-6">
                      <div className="card">
                        <div className="justify-content-center">
                          <img
                            src={`/image/rekening/${props.gifts.First.Image}.png`}
                            style={{ height: 50, width: 100, padding: 10 }}
                            className="card-img-top"
                          />
                        </div>
                        <div className="card-header" style={{ fontSize: 12 }}>
                          {props.gifts.First.NoRek}
                          <div
                            style={{
                              width: "100%",
                              marginTop:5,
                              marginBottom:5,
                              height: 30,
                              textDecoration: "none",
                              backgroundColor: bgColor.color.secondary,
                              borderRadius: "20px",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              fontSize: "12px",
                              fontFamily: "faunaone",
                              color: bgColor.color.primary,
                            }}
                            onClick={() => {
                              copyToClipboard(props.gifts.First.NoRek)
                            }}
                          >
                            <i
                              className="bi bi-clipboard-check-fill"
                              style={{ marginRight: 2 }}
                            >
                              {" "}
                            </i>{" "}
                            {"   "}{" "}
                            <span style={{ marginLeft: 2 }}>
                              Salin Rekening
                            </span>
                          </div>
                          <p className="card-text" style={{ fontSize: 12 }}>
                            A/N {props.gifts.First.Name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {props.gifts.Second.Visible ? (
                    <div className="col-6">
                      <div className="card">
                        <div className="justify-content-center">
                          <img
                            src={`/image/rekening/${props.gifts.Second.Image}.png`}
                            style={{ height: 50, width: 100, padding: 10 }}
                            className="card-img-top"
                          />
                        </div>
                        <div className="card-header" style={{ fontSize: 12 }}>
                          {props.gifts.Second.NoRek}
                          <div
                            style={{
                              width: "100%",
                              marginTop:5,
                              marginBottom:5,
                              height: 30,
                              textDecoration: "none",
                              backgroundColor: bgColor.color.secondary,
                              borderRadius: "20px",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              fontSize: "12px",
                              fontFamily: "faunaone",
                              color: bgColor.color.primary,
                            }}
                            onClick={() => {
                              copyToClipboard(props.gifts.Second.NoRek)
                            }}
                          >
                            <i
                              className="bi bi-clipboard-check-fill"
                              style={{ marginRight: 2 }}
                            >
                              {" "}
                            </i>{" "}
                            {"   "}{" "}
                            <span style={{ marginLeft: 2 }}>
                              Salin Rekening
                            </span>
                          </div>
                          <p className="card-text" style={{ fontSize: 12 }}>
                            A/N {props.gifts.Second.Name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                   {props.gifts.Third.Visible ? (
                    <div className="col-6 mt-3">
                      <div className="card">
                        <div className="justify-content-center">
                          <img
                            src={`/image/rekening/${props.gifts.Third.Image}.png`}
                            style={{ height: 50, width: 100, padding: 10 }}
                            className="card-img-top"
                          />
                        </div>
                        <div className="card-header" style={{ fontSize: 12 }}>
                          {props.gifts.Third.NoRek}
                          <div
                            style={{
                              width: "100%",
                              marginTop:5,
                              marginBottom:5,
                              height: 30,
                              textDecoration: "none",
                              backgroundColor: bgColor.color.secondary,
                              borderRadius: "20px",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              fontSize: "12px",
                              fontFamily: "faunaone",
                              color: bgColor.color.primary,
                            }}
                            onClick={() => {
                              copyToClipboard(props.gifts.Third.NoRek)
                            }}
                          >
                            <i
                              className="bi bi-clipboard-check-fill"
                              style={{ marginRight: 2 }}
                            >
                              {" "}
                            </i>{" "}
                            {"   "}{" "}
                            <span style={{ marginLeft: 2 }}>
                              Salin Rekening
                            </span>
                          </div>
                          <p className="card-text" style={{ fontSize: 12 }}>
                            A/N {props.gifts.Third.Name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsView;
