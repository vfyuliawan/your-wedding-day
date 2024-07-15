import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import { HomeKeyValue } from "@/app/FloralTheme/Section/Home/HomeModel";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedImageComponent from "../../component/AnimatedImage";
import { MaleFemaleProps } from "@/app/FloralTheme/Section/Male-Female/MaleFemaleModel";

const TheBroomView = (props: {
  themeName: string;
  maleFemale: MaleFemaleProps;
}) => {
  const bgImage = new ThemeImageClass(props.themeName);
  const bgColor = new ThemeColorClass(props.themeName);
  const [ref, inView] = useInView({
    triggerOnce: false,
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

      <div
        style={{
          position: "absolute",
          top: "6%",
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
                fontFamily: "brilon",
                fontSize: "1.5rem",
                color: bgColor.color.secondary,
              }}
            >
              <span
                style={{
                  fontFamily: "brilon",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: bgColor.color.secondary,
                  textAlign: "center",
                }}
              >
                The Broom
              </span>
            </motion.h2>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.5,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="col-5 d-flex align-items-center"
          ></motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.5,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ position: "absolute", top: 70 }}
          >
            <div className="row justify-content-center">
              <div className="">
                <div
                  style={{
                    position: "absolute",
                    zIndex: -1,
                    opacity: 0.8,
                    left: 20,
                    width: 350,
                    height: 630,
                    backgroundColor: bgColor.color.secondary,
                    borderTopLeftRadius: 175,
                  }}
                ></div>
              </div>
              <div className="">
                <div
                  style={{
                    position: "absolute",
                    zIndex: -1,
                    right: 20,
                    top: 60,
                    width: 350,
                    height: 600,
                    backgroundColor: "white",
                    border: `4px solid ${bgColor.color.secondary}`,
                    borderTopRightRadius: 175,
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "14rem",
                      marginTop: 40,
                      width: "11rem",
                      borderRadius: "10px",
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
                  <h1
                    style={{
                      fontSize: "2.2rem",
                      marginTop: 20,
                      fontWeight: 900,
                      color: bgColor.color.secondary,
                      fontFamily: "Brilon",
                    }}
                  >
                    {props.maleFemale?.Male.Name}
                  </h1>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      marginTop: "0.5rem",
                      color: bgColor.color.secondary,
                    }}
                  >
                    Bapak {props.maleFemale.Male.Ayah}
                  </h4>
                  <h4
                    style={{
                      fontSize: "4rem",
                      color: bgColor.color.secondary,
                    }}
                  >
                    &
                  </h4>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      color: bgColor.color.secondary,
                    }}
                  >
                    Ibu {props.maleFemale.Male.Ibu}
                  </h4>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Corner Image */}
      <AnimatedImageComponent
        bgImage={bgImage}
        ref={function (node?: Element | null | undefined): void {
          ref;
        }}
        inView={inView}
      />
      {/* Corner Image */}
    </section>
  );
};

export default TheBroomView;
