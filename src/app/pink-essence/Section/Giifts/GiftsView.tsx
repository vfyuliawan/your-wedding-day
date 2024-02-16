import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";

interface GiftsViewInterface {
  Gifts: GiftsOption;
}

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

const GiftsView = (props: GiftsViewInterface) => {
  const targetRefGift = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRefGift);

  const textAreaRef = useRef<any>(null);

  const copyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard:", textToCopy);
    } catch (err) {
      console.error("Error copying text to clipboard:", err);
    }
  };

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeHorizon);
    }

    return () => {};
  }, [animate, isVisible]);

  return (
    <section
      id="gifts"
      style={{ paddingTop: "2rem" }}
      className="gifts"
      ref={targetRefGift}
    >
      <div
        style={{
          borderRadius: "4% 4% 0 0",
          backgroundColor: "white",
          paddingTop: "5rem",
          marginTop:'10rem'
        }}
      >
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
            {props.Gifts.First.Visible ? (
              <div className="col-md-4 col-10 col-sm-6 mt-2">
                <div className="card text-center">
                  <div className="card-header">
                    <img
                      src={`/image/rekening/${props.Gifts.First.Image}.png`}
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
                      {props.Gifts.First.NoRek}
                    </h5>
                    <a
                      onClick={() => {
                        copyToClipboard(props.Gifts.First.NoRek);
                      }}
                      className="btn btn-lg"
                    >
                      Salin Rekening{" "}
                    </a>
                  </div>
                  <div className="card-footer text-body-secondary text-light">
                    A/N {props.Gifts.First.Name}
                  </div>
                </div>
              </div>
            ) : null}
            {props.Gifts.Second.Visible ? (
              <div className="col-md-4 col-10 col-sm-6 mt-2">
                <div className="card text-center">
                  <div className="card-header">
                    <img
                      src={`/image/rekening/${props.Gifts.Second.Image}.png`}
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
                      {props.Gifts.Second.NoRek}
                    </h5>
                    <a
                      onClick={() => {
                        copyToClipboard(props.Gifts.Second.NoRek);
                      }}
                      className="btn btn-lg"
                    >
                      Salin Rekening{" "}
                    </a>{" "}
                  </div>
                  <div className="card-footer text-body-secondary text-light">
                    A/N {props.Gifts.Second.Name}
                  </div>
                </div>
              </div>
            ) : null}
            {props.Gifts.Third.Visible ? (
              <div className="col-md-4 col-10 col-sm-6 mt-2">
                <div className="card text-center">
                  <div className="card-header">
                    <img
                      src={`/image/rekening/${props.Gifts.Third.Image}.png`}
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
                      {props.Gifts.Third.NoRek}
                    </h5>
                    <a
                      onClick={() => {
                        copyToClipboard(props.Gifts.Third.NoRek);
                      }}
                      className="btn btn-lg"
                    >
                      Salin Rekening{" "}
                    </a>{" "}
                  </div>
                  <div className="card-footer text-body-secondary text-light">
                    A/N {props.Gifts.Third.Name}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "5rem" }}
          >
            <div className="col-10 justify-content-center d-flex">
              <a
              
                className="btn btn-lg text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: "100%",
                }}
              >
                <i className="bi bi-whatsapp">
                  {" "}
                  {"      "}Upload Hadiah dan Kirim Ke Whatsapp
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsView;
