import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { TimeConvertionDate } from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const DaysInfo = (props: {
  themeName: string;
  countDown: Timestamp;
  home: HomeKeyValue;
}) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetDate: Date = new Date(
      props.countDown?.toDate().toISOString().split(".")[0]
    );

    const difference =
      typeof targetDate === "number" || targetDate instanceof Date
        ? +targetDate - now.getTime()
        : 0;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  const bgImage = new ThemeImageClass(props.themeName);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const bgColor = new ThemeColorClass(props.themeName);
  const [ref, inView] = useInView({
    // triggerOnce: true,
  });

  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeHorizon);
    }
  }, [isVisible, controls]);

  return (
    <section className="section" style={{}}>
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
      <div style={{ position: "absolute", top: "8%", width: "100%" }}>
        <div className="row justify-content-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.5,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="col-10"
            style={{ textAlign: "center" }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontFamily: "FaunaOne",
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              Menuju
            </p>
            <h4
              style={{
                fontSize: "1.5rem",
                fontFamily: "brilon",
                fontWeight: 800,
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              Hari Bahagia
            </h4>
            <img
              className="mt-2 mb-2"
              src={bgImage.image.maleFemale}
              height={130}
              width={150}
            />

            <p
              style={{
                fontSize: "0.6rem",
                fontFamily: "FaunaOne",
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              Semoga selalu merasakan kebahagiaan dan keagungan cinta bersama.
              Selamat menjalani hidup sebagai sepasang suami istri.
            </p>
          </motion.div>
        </div>
        <div className="row justify-content-center">
          <div
            className="text-center"
            ref={targetRef}
            style={{
              position: "absolute",
              top: "100%",
              right: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateX(50%)",
              fontFamily: "Times New Roman",
            }}
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                className="box-time"
                style={{ color: bgColor.color.secondary }}
              >
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "20px" }}>
                    {timeRemaining.days}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "13px" }}>
                    Hari
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "3rem" }} />
              <div
                className="box-time"
                style={{ color: bgColor.color.secondary }}
              >
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "20px" }}>
                    {timeRemaining.hours}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "13px" }}>
                    Jam
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "3rem" }} />
              <div
                className="box-time"
                style={{ color: bgColor.color.secondary }}
              >
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "20px" }}>
                    {timeRemaining.minutes}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "13px" }}>
                    Menit
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "3rem" }} />
              <div
                className="box-time"
                style={{ color: bgColor.color.secondary }}
              >
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "20px" }}>
                    {timeRemaining.seconds}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "13px" }}>
                    Detik
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.5,
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="row mt-2"
            >
              <p
                style={{
                  color: bgColor.color.secondary,
                  fontSize: "13px",
                  fontFamily: "faunaone",
                }}
              >
                {TimeConvertionDate(props.countDown! as any).dateFull}
              </p>
            </motion.div>
            <div className="row mt-2">
              <div className="col-8">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    scale: inView ? 1 : 0.5,
                  }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  style={{
                    height: "18rem",
                    width: "15rem",
                    borderTopRightRadius: "80px",
                    borderTopLeftRadius: "80px",
                    backgroundColor: bgColor.color.secondary,
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0.5,
                    }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    src={props.home?.HomeImg}
                    alt=""
                    style={{
                      borderTopRightRadius: "80px",
                      borderTopLeftRadius: "80px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaysInfo;
