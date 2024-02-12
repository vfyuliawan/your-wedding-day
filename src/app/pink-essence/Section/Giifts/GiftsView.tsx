import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";

const GiftsView = () => {
  const targetRefGift = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRefGift);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeHorizon);
    }

    return () => {};
  }, [animate, isVisible]);

  return (
    <section id="gifts" className="gifts" ref={targetRefGift}>
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div className="col-6 text-end">
            <motion.h2
              animate={animate}
              initial={AnimationThemeInstance.FadeLeft}
              transition={{ duration: 1.5 }}
              style={{
                color: "black",
                fontWeight: "100",
                fontFamily: "brilon",
                fontSize: "4rem",
              }}
            >
              Wedding <br /> Gifts
            </motion.h2>
          </div>
          <div className="col-5 d-flex align-items-center">
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "black",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            ></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={animate}
                initial={AnimationThemeInstance.FadeRight}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ color: "black", fontSize: "1.2rem" }}
                className="alamat"
              >
                Bagi yang berkeinginan memberikan kado pernikahan atau tanda
                kasih, kami juga menyediakan wedding gift pada link di bawah
                ini.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-10 col-sm-6 mt-2">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png"
                  style={{ width: "15rem", height: "5rem" }}
                />
              </div>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "black",
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: "2rem",
                  }}
                >
                  1234567890
                </h5>
                <a className="btn btn-lg">Salin Rekening </a>
              </div>
              <div className="card-footer text-body-secondary text-light">
                a/n fulana
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10 col-sm-6 mt-2">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
                  style={{ width: "15rem" }}
                />
              </div>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "black",
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: "2rem",
                  }}
                >
                  1234567890
                </h5>
                <a className="btn btn-lg">Salin Rekening </a>
              </div>
              <div className="card-footer text-body-secondary text-light">
                a/n fulana
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10 col-sm-6 mt-2">
            <div className="card text-center">
              <div className="card-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png"
                  style={{ width: "15rem" }}
                />
              </div>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "black",
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: "2rem",
                  }}
                >
                  1234567890
                </h5>
                <a className="btn btn-lg">Salin Rekening </a>
              </div>
              <div className="card-footer text-body-secondary text-light">
                a/n fulana
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsView;
