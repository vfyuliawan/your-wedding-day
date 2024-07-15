import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import { motion, useAnimation } from "framer-motion";

interface AnimatedImageInterface {
  bgImage: ThemeImageClass;
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
}

const AnimatedImageComponent = (props: AnimatedImageInterface) => {
  return (
    <>
      {/* Corner Image */}
      {props.bgImage.image.topRight !== "" ? (
        <div style={{ position: "absolute", top: 0, right: 0, opacity: 0.6 }}>
          <motion.img
            ref={props.ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: props.inView ? 1 : 0,
              y: props.inView ? 0 : -50,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ width: 280, height: "100%" }}
            src={props.bgImage.image.topRight}
            alt=""
          />
        </div>
      ) : null}
      {props.bgImage.image.topLeft !== "" ? (
        <div style={{ position: "absolute", top: 0, left: 0, opacity: 0.6 }}>
          <motion.img
            ref={props.ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: props.inView ? 1 : 0,
              y: props.inView ? 0 : -50,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ width: 280, height: "100%" }}
            src={props.bgImage.image.topLeft}
            alt=""
          />
        </div>
      ) : null}
      {props.bgImage.image.bottomLeft !== "" ? (
        <div style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.6 }}>
          <motion.img
            ref={props.ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: props.inView ? 1 : 0,
              y: props.inView ? 0 : 100,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ width: 280, height: "100%" }}
            src={props.bgImage.image.bottomLeft}
            alt=""
          />
        </div>
      ) : null}
      {props.bgImage.image.bottomRight !== "" ? (
        <div
          style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.6 }}
        >
          <motion.img
            ref={props.ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: props.inView ? 1 : 0,
              y: props.inView ? 0 : 100,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ width: 280, height: "100%" }}
            src={props.bgImage.image.bottomRight}
            alt=""
          />
        </div>
      ) : null}
      {/* Corner Image */}
    </>
  );
};

export default AnimatedImageComponent;
