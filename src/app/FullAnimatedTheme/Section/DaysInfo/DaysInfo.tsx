import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import { TimeConvertionDate } from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const DaysInfo = (props: {
  themeName: string;
  countDown: Timestamp;
  home: HomeKeyValue;
}) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetDate: Date = new Date(
      props.countDown!.toDate().toISOString().split(".")[0]
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
    triggerOnce: true,
  });
  return (
    <section
      className="section"
      style={{
        background: `${bgColor.color.primary}`,
      }}
    >
      <div style={{ position: "absolute", top: 0, right: -80 }}>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{ duration: 1.5, delay: 0 }}
          style={{ width: 280, height: 160 }}
          src="image/background/frame-tr.jpg"
          alt=""
        />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0 }}>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{ duration: 1.5, delay: 0 }}
          style={{ width: 240, height: 150 }}
          src="image/background/frame-bl.jpg"
          alt=""
        />
      </div>
      <div style={{ position: "absolute", top: "1%", width: "100%" }}>
        <div className="row justify-content-center">
          <div className="col-10" style={{ textAlign: "center" }}>
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
              src="/image/background/flowerIcon.png"
              height={130}
              width={160}
            />

            <p
              style={{
                fontSize: "0.8rem",
                fontFamily: "FaunaOne",
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              Semoga selalu merasakan kebahagiaan dan keagungan cinta bersama.
              Selamat menjalani hidup sebagai sepasang suami istri.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="text-center"
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "23px" }}>
                    {timeRemaining.days}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "15px" }}>
                    Hari
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "3rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "23px" }}>
                    {timeRemaining.hours}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "15px" }}>
                    Jam
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "3rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "23px" }}>
                    {timeRemaining.minutes}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "15px" }}>
                    Menit
                  </p>
                </div>
              </div>
              <div style={{ marginRight: "3rem" }} />
              <div className="box-time" style={{ color: "white" }}>
                <div className="col">
                  <p style={{ fontFamily: "FaunaOne", fontSize: "23px" }}>
                    {timeRemaining.seconds}
                  </p>
                  <p style={{ fontFamily: "FaunaOne", fontSize: "15px" }}>
                    Detik
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "faunaone",
                }}
              >
                {TimeConvertionDate(props.countDown! as any).dateFull}
              </p>
            </div>
            <div className="row mt-2">
              <div className="col-8">
                <div
                  style={{
                    height: "18rem",
                    width: "15rem",
                    borderTopRightRadius: "80px",
                    borderTopLeftRadius: "80px",
                    backgroundColor: bgColor.color.secondary,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={props.home.HomeImg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaysInfo;
