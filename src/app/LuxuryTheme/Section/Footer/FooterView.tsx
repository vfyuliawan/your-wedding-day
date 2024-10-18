import React, { useEffect, useRef } from "react";
import { Cover } from "../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import { useAnimation, motion } from 'framer-motion';
import AnimationThemeInstance from "../../../utils/AnimationThemes";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";

interface FooterViewInterface {
  Footer: Cover;
}
interface KeyValueFooter {
  Qutes: string;
  Image: string;
  Name: string;
}

const FooterView = (props: FooterViewInterface) => {

  const targetRef = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeStartVertical);
    }

    return () => {};
  }, [animate, isVisible]);

  return (
    <div
    ref={targetRef}
      style={{
        position: "relative",
      }}
    >
     
      <section
        id=""
        style={{
          backgroundImage: `url('${props.Footer.img}')`,
          backgroundPosition: "center",
        }}
        className="footer w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
      >
        <div className="gradient-overlay" />
        <main className="inside" style={{ position: "relative", top: 300 }}>
          <motion.h2
            animate={animate}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay:0.6 }}
            style={{
              textShadow: "none  !important",
              fontSize: "40px",
              color: "var(--third)",
            }}
          >
            Terimakasih
          </motion.h2>
          <motion.p
            animate={animate}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay:1 }}
            style={{
              textShadow: "none !important",
              fontSize: "12px",
              color: "var(--third)",
              fontFamily: "Times-new-roman",
            }}
          >
            {props.Footer.quotes}
          </motion.p>
          <motion.h4
            animate={animate}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay:1.5 }}
            style={{
              textShadow: "none !important",
              fontSize: 16,
              color: "var(--third)",

              fontFamily: "Times-new-roman",
            }}
          >
            Kami Yang Berbahagia
          </motion.h4>
          <motion.h3
            animate={animate}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay:2}}
            style={{
              textShadow: "none !important",
              fontSize: 40,
              color: "var(--third)",
            }}
          >
            {props.Footer.title}
          </motion.h3>
        </main>
      </section>
      <div
        className=""
        style={{
          position: "absolute",
          top: 0,
          background: "linear-gradient(var(--prim) -100%, var(--sec) 200%)",
          left: 0,
          right: 0,
          height: "10rem",
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default FooterView;
