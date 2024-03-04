import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import { MaleFemaleProps } from "@/app/FloralTheme/Section/Male-Female/MaleFemaleModel";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedImageComponent from "../../component/AnimatedImage";

function BrideInformation(props: {
  themeName: string;
  maleFemale: MaleFemaleProps;
  coverVisible: boolean;
}) {
  const bgImage = new ThemeImageClass(props.themeName);
  const bgColor = new ThemeColorClass(props.themeName);
  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);
  const [ref, inView] = useInView({
    // tr: true,
  });

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
        style={{ position: "absolute", top: "9%", width: "100%" }}
        ref={targetRef}
      >
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
                fontSize: "1.5rem",
                fontFamily: "FaunaOne",
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              The Be Loved
            </p>
            <h4
              style={{
                fontSize: "2rem",
                fontFamily: "brilon",
                fontWeight: 800,
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              {props.maleFemale?.Male.Name} & {props.maleFemale?.Female.Name}
            </h4>
            <p
              style={{
                fontSize: "0.9rem",
                fontFamily: "FaunaOne",
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              Tanpa mengurangi rasa hormat, kami bermaksud untuk mengundang
              Bapak/Ibu/Saudara/i pada acara resepsi pernikahan kami
            </p>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.5,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="row"
        >
          <div className="col-5 d-flex justify-content-center">
            <div
              style={{
                height: "9rem",
                width: "7rem",
                borderRadius: "20px",
                backgroundColor: bgColor.color.secondary,
                overflow: "hidden",
              }}
            >
              <img
                src={props.maleFemale?.Male.Photo}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: 900,
                color: bgColor.color.secondary,
                fontFamily: "Brilon",
              }}
            >
              &
            </h1>
          </div>
          <div className="col-5 d-flex justify-content-center">
            <div
              style={{
                height: "9rem",
                width: "7rem",
                borderRadius: "20px",
                backgroundColor: bgColor.color.secondary,
                overflow: "hidden",
              }}
            >
              <img
                src={props.maleFemale?.Female.Photo}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
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
          className="row mt-4"
        >
          <div className="col-5 d-flex justify-content-center">
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: bgColor.color.secondary,
                fontFamily: "Brilon",
              }}
            >
              {props.maleFemale?.Male.Name}
            </h1>
          </div>
          <div className="col-2"></div>
          <div className="col-5 d-flex justify-content-center">
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: bgColor.color.secondary,
                fontFamily: "Brilon",
              }}
            >
              {props.maleFemale?.Female.Name}
            </h1>
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
          className="row mt-4"
        >
          <div className="col-6 d-flex justify-content-center">
            <div
              style={{
                width: "80%",
                height: 3,
                backgroundColor: bgColor.color.secondary,
              }}
            ></div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div
              style={{
                width: "80%",
                height: 3,
                backgroundColor: bgColor.color.secondary,
              }}
            ></div>
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
          className="row mt-4"
        >
          <div className="col-6 d-flex justify-content-left">
            <p
              style={{
                fontSize: "1rem",
                marginLeft: "1rem",
                color: bgColor.color.secondary,
              }}
            >
              Anak Dari <br />
              Ibu {props.maleFemale?.Male.Ibu} <br />
              <span style={{ fontSize: "2rem" }}>&</span> <br />
              Bapak {props.maleFemale?.Male.Ayah}
            </p>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center">
            <p
              style={{
                fontSize: "1rem",
                textAlign: "right",
                marginLeft: "2rem",
                color: bgColor.color.secondary,
              }}
            >
              Anak Dari <br />
              Ibu {props.maleFemale?.Female.Ibu} <br />
              <span style={{ fontSize: "2rem" }}>&</span> <br />
              Bapak {props.maleFemale?.Female.Ayah}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrideInformation;
