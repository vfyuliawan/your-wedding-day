import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import Swal from "sweetalert2";
import React from "react";
import { GiftElement } from "../../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import AnimationThemeInstance from "../../../../utils/AnimationThemes";
import { copyToClipboard } from "../../../../utils/CopytoClipboard";

interface GiftsViewInterface {
  Gifts: GiftElement[];
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

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeStartVertical);
    }

    return () => {};
  }, [animate, isVisible]);

  return (
    <section
      id="gifts"
      style={{ paddingTop: "1rem", backgroundColor: "var(--sec)" }}
      className="gifts"
      ref={targetRefGift}
    >
      <div
        style={{
          borderRadius: "20px 20px 0 0",
          backgroundColor: "var(--third)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.80)",
          paddingTop: "5rem",
          marginTop: "2rem",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="row mt-4 justify-content-center">
            <div className="col-6 text-end">
              <motion.h2
                animate={animate}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5 }}
                style={{
                  color: "var(--forth)",
                  fontWeight: "100",
                  fontFamily: "brilon",
                  fontSize: "25px",
                }}
              >
                Wedding <br />
                <span
                  style={{
                    fontFamily: "Creation",
                    fontWeight: "10",
                    fontSize: "30px",
                    color: "var(--forth)",
                  }}
                >
                  Gifts
                </span>
              </motion.h2>
            </div>
            <div className="col-5 d-flex align-items-center">
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "var(--forth)",
                  marginBottom: "3rem",
                  marginTop: "3rem",
                }}
              ></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 text-center">
                <motion.p
                  animate={animate}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration:0.5, delay: 0.5 }}
                  style={{
                    color: "var(--forth)",
                    fontSize: "12px",
                    fontFamily: "Times-new-roman",
                  }}
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
            {props.Gifts.map((item, index) => {
              return (
                <motion.div
                  animate={animate}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="col-11"
                  style={{
                  }}
                >
                  <div style={{
                    backgroundColor:"white",
                    borderRadius:15,
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:20

                  }} className=" text-center justify-content-center align-items-center">
                    <div
                      style={{ padding: 10, }}
                      className=""
                    >
                      <img
                        src={`/image/rekening/${item.image}.png`}
                        style={{ height: "3rem" }}
                      />
                    </div>
                    <div style={{height:3}}></div>

                    <div
                      style={{
                        width: "100%",
                        height: 3,
                        alignItems:"center",
                        alignSelf:"center",
                        backgroundColor: "var(--prim)",
                      }}
                    ></div>
                    <div style={{height:10}}></div>
                    <div style={{
                    }} className="card-body mt-4">
                      <h5
                        className="card-title mt-4"
                        style={{
                          color: "var(--fiveth)",
                          fontFamily: '"Courier New", Courier, monospace',
                          fontSize: "12px",
                          marginTop:12
                        }}
                      >
                        {item.noRek}
                      </h5>
                      <div style={{height:10}}></div>

                      <a
                        onClick={() => {
                          copyToClipboard(item.noRek);
                        }}
                        className="btn btn-lg"
                        style={{
                          backgroundColor:"var(--prim)",
                          color: "var(--forth)",
                          fontSize: "12px",
                        }}
                      >
                       <i className="bi bi-clipboard"></i>  Salin Rekening{" "}
                      </a>
                    </div>
                    {/* <div style={{width:"90%", marginBottom:12, height:1, backgroundColor:"var(--prim)"}}></div> */}
                    <div style={{height:10}}></div>

                    <div
                      style={{
                        color: "var(--forth)",
                        marginTop: 12,
                        marginBottom: 12,
                        fontSize: "12px",
                      }}
                      className="text-body-secondary mt-2 text-light"
                    >
                      A/N {item.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "5rem", marginBottom: "2rem" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default GiftsView;
