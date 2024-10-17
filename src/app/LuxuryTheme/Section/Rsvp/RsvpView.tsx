"use client";

import { useEffect, useRef, useState } from "react";
import { RSVPKeyValue, RSVPViewInterface } from "./RsvpModel";
// import { RsvpViewModel } from "./RsvpViewModel";
import { Timestamp } from "firebase/firestore";
import ReactLoading from "react-loading";
import {
  TimeConvertionDate,
  TimeConvertionFullDateAndTime,
} from "../../../utils/TimeConvertion";
import Swal from "sweetalert2";
import { motion, useAnimation } from "framer-motion";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import React from "react";
import AnimationThemeInstance from "../../../utils/AnimationThemes";
import { MessagesRequest } from "../../../Dashboard/Domain/Models/ModelResponse/ModalResponseMessage/ModelResponseGetMessage";

const RsvpView = (props: RSVPViewInterface) => {
  // const {
  //   message,
  //   setMessage,
  //   submitMessage,
  //   progress,
  //   seTprogress,
  //   loading,
  //   setLoading,
  // } = RsvpViewModel({
  //   slug: props.slug,
  //   userId: props.userId,
  //   getDetail: function (): void {
  //     props.getDetail();
  //   },
  // });

  const [sendMessage, setSendMessage] = useState<RSVPKeyValue | undefined>();
  const [progress, seTprogress] = useState(true);
  const [loading, setLoading] = useState(false);

  const targetRef = useRef<any>(null);
  const animate = useAnimation();
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      animate.start(AnimationThemeInstance.FadeHorizon);
    }
    return () => {};
  }, [animate, isVisible]);

  return (
    <>
      <section
        ref={targetRef}
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          opacity: 1,
          backgroundImage: 'url("/pink-essence/img/weddinigDecor.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="rsvp"
        className="rsvp"
      >
        <div
          className="container"
          style={{
            backgroundColor: "black",
            opacity: 0.7,
          }}
        >
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <motion.h2
                    animate={animate}
                    initial={AnimationThemeInstance.FadeLeft}
                    transition={{ duration: 1.5 }}
                    style={{
                      color: "white",
                      fontSize: "32px",
                      fontFamily: "Brilon",
                      textAlign: "right",
                      letterSpacing: "2px",
                    }}
                  >
                    ucapan <br />
                    <span
                      style={{
                        fontFamily: "Creation",
                        fontWeight: "100",
                        fontSize: "28px",
                      }}
                    >
                      Selamat
                    </span>
                  </motion.h2>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <motion.div
                    animate={animate}
                    initial={AnimationThemeInstance.FadeRight}
                    transition={{ duration: 1.5 }}
                    style={{
                      position: "absolute",
                      width: "50%",
                      height: "2px",
                      backgroundColor: "white",
                      marginBottom: "3rem",
                      marginTop: "3rem",
                    }}
                  ></motion.div>
                </div>
              </div>
              <motion.p
                animate={animate}
                initial={AnimationThemeInstance.FadeLeft}
                transition={{ duration: 1.5 }}
                style={{
                  color: "white",
                  fontSize: "12px",
                  textAlign: "center",
                  fontFamily: "Times-new-roman",
                }}
              >
                Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.{" "}
              </motion.p>
              <br />
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 ">
                <label htmlFor="nama" className="form-label">
                  Nama
                </label>
                <input
                  value={sendMessage?.name}
                  type="text"
                  className="form-control"
                  id="nama"
                  name="nama"
                  onChange={(val) => {
                    setSendMessage((prev: RSVPKeyValue | undefined) => {
                      return {
                        ...prev,
                        name: val?.target?.value,
                      } as RSVPKeyValue;
                    });
                  }}
                />
              </div>
              <div className="col-12 ">
                <label htmlFor="Pesan" className="form-label">
                  Konfrimasi
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(val) => {
                    setSendMessage((prev: RSVPKeyValue | undefined) => {
                      return {
                        ...prev,
                        present: val.target.value,
                      } as RSVPKeyValue;
                    });
                  }}
                >
                  <option selected> </option>
                  <option value={1}>Yes</option>
                  <option value={2}>No</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="nama" className="form-label">
                  Pesan
                </label>
                <textarea
                  onChange={(val) => {
                    setSendMessage((prev: RSVPKeyValue | undefined) => {
                      return {
                        ...prev,
                        text: val.target.value,
                      } as RSVPKeyValue;
                    });
                  }}
                  className="form-control"
                  id="pesan"
                  rows={5}
                  name="pesan"
                  value={sendMessage?.text}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  onClick={() => {
                    console.log(sendMessage);

                    setLoading(true);
                    if (
                      sendMessage?.name !== "" ||
                      sendMessage?.text !== "" ||
                      sendMessage.present !== undefined ||
                      sendMessage.present !== " "
                    ) {
                      props
                        .postMessage(
                          sendMessage!.name,
                          sendMessage!.text,
                          sendMessage!.present
                        )
                        .then((res) => {
                          setLoading(false);
                          props.setMessage((prev: MessagesRequest | any) => [
                            ...prev,
                            {
                              messageId: "res",
                              name: sendMessage?.name ?? "",
                              present: sendMessage?.present ?? "",
                              text: sendMessage?.text ?? "",
                              time: new Date().getTime(), // Set the current timestamp
                            },
                          ]);
                        });
                    } else {
                      Swal.fire("Harap Jangan Kosongkan Form");
                    }
                  }}
                  className="btn btn-lg mb-3"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    height: 40,
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="row justify-content-center message-box"
          style={{
            overflowY: "auto",
            maxHeight: "500px",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "15px",
          }}
        >
          <h4
            style={{
              color: "white",
              fontFamily: "brilon",
              fontSize: "20px",
              letterSpacing: "2px",
            }}
          >
            {`pesan ( ${props.message.length} )`}
          </h4>
          {loading ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#e3b383"}
              height={200}
              width={70}
            />
          ) : props.message.length !== 0 ? (
            <MessageView />
          ) : (
            <div style={{ justifyContent: "center", display: "flex" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                }}
              >
                No Comments Yet
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );

  function MessageView() {
    return props?.message.map((item, index) => {
      return (
        <div style={{ borderRadius: "", height:110 }} className="bg-white mt-3 ">
          <div className="row  mt-4 justify-content-center align-items-center d-flex">
            <div className="col-3 justify-content-center d-flex items-content-center">
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: item.present
                    ? "rgba(0, 0, 0, 0.25)"
                    : "rgba(0, 0, 0, 0.25)",
                  width: "5rem",
                  height: "5rem",
                  // maxHeight: "5rem",
                  // maxWidth: "5rem",
                }}
                className="text-center justify-content-center d-flex align-items-center"
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginTop: "8px",
                  }}
                >
                  {item?.name?.split("")[0] !== undefined
                    ? item?.name.split("")[0].toLocaleUpperCase()
                    : ""}
                </p>
              </div>
            </div>

            <div key={index} className="col-9 ">
              <h3
                style={{
                  color: "black",
                  marginTop: "10px",
                  fontSize: "18px",
                }}
              >
                {item?.name}{" "}
                {item.present == "1" ? (
                  <span
                    style={{
                      backgroundColor: "green",
                      fontSize: "12px",
                      color: "white",
                      paddingRight: "5px",
                      paddingLeft: "5px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "5px",
                    }}
                  >
                    <i className="bi bi-check-circle-fill"></i> Hadir
                  </span>
                ) : (
                  <span
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.25)",
                      fontSize: "12px",
                      color: "red",

                      paddingRight: "5px",
                      paddingLeft: "5px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "5px",
                    }}
                  >
                    <i className="bi bi-dash-circle-fill"></i> Tidak Hadir
                  </span>
                )}
              </h3>
              <p style={{ color: "black", fontSize: "12px" }}>
                {item.text}
                <br />
                <span style={{ fontSize: "0.9rem" }}>
                  {TimeConvertionFullDateAndTime(item.time.toString())}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
};

export default RsvpView;
