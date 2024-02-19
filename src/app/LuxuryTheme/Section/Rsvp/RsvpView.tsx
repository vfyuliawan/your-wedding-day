"use client";

import { useEffect, useRef, useState } from "react";
import { RSVPKeyValue, RSVPViewInterface } from "./RsvpModel";
import { RsvpViewModel } from "./RsvpViewModel";
import { Timestamp } from "firebase/firestore";
import ReactLoading from "react-loading";
import { TimeConvertionDate } from "../../../utils/TimeConvertion";
import Swal from "sweetalert2";
import { motion, useAnimation } from "framer-motion";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";

const RsvpView = (props: RSVPViewInterface) => {
  const {
    message,
    setMessage,
    submitMessage,
    progress,
    seTprogress,
    loading,
    setLoading,
  } = RsvpViewModel({
    slug: props.slug,
    userId: props.userId,
    getDetail: function (): void {
      props.getDetail();
    },
  });

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
                      fontSize: "2rem",
                      fontFamily: "brilon",
                      textAlign: "right", // Add this line
                    }}
                  >
                    Konfrimasi <br />
                    <span
                      style={{
                        color: "white",
                        fontSize: "3.3rem",
                        fontFamily: "brilon",
                      }}
                    >
                      Kehadiran
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
                  fontSize: "1.2rem",
                  textAlign: "center",
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
                  value={message?.Name}
                  type="text"
                  className="form-control"
                  id="nama"
                  name="nama"
                  onChange={(val) => {
                    setMessage((prev: RSVPKeyValue | undefined) => {
                      return {
                        ...prev,
                        Name: val?.target?.value,
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
                    setMessage((prev: RSVPKeyValue | undefined) => {
                      return {
                        ...prev,
                        Confirm: val.target.value == "1" ? true : false,
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
                    setMessage((prev: RSVPKeyValue | undefined) => {
                      return {
                        ...prev,
                        Text: val.target.value,
                      } as RSVPKeyValue;
                    });
                  }}
                  className="form-control"
                  id="pesan"
                  rows={5}
                  name="pesan"
                  value={message?.Text}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  onClick={() => {
                    if (
                      message?.Name !== "" ||
                      message?.Text !== "" ||
                      message.Confirm !== undefined ||
                      message.Confirm !== " "
                    ) {
                      submitMessage();
                    } else {
                      Swal.fire("Harap Jangan Kosongkan Form");
                    }
                  }}
                  className="btn btn-lg mb-3"
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
          <h4 style={{color:'white', fontFamily:'Times-new-roman', fontSize:'16px'}}>Pesan</h4>
          {loading ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#e3b383"}
              height={200}
              width={70}
            />
          ) : (
            <MessageView />
          )}
        </div>
      </section>
    </>
  );

  function MessageView() {
    return props?.Message?.slice()
      .reverse()
      .map((item, index) => {
        return (
          <div style={{ borderRadius: "10px" }} className="bg-white mt-3 ">
            <div className="row justify-content-center align-items-center d-flex">
              <div className="col-2 justify-content-center d-flex items-content-center">
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: item.Confirm ? "green" : 'red',
                    width: "5rem",
                    height: "5rem",
                    maxHeight:'5rem',
                    maxWidth:'5rem'
                  }}
                  className="text-center justify-content-center d-flex align-items-center"
                >
                  <p style={{color:'white', fontSize:'22px', marginTop:'8px'}}>
                  { item?.Name?.split("")[0] !== undefined ? item?.Name.split("")[0].toLocaleUpperCase() : ""}
                  </p>
                </div>
              </div>
              <div key={index} className="col-10 ">
                <h3
                  style={{
                    color: "black",
                    marginTop: "10px",
                    fontSize: "18px",
                  }}
                >
                  {item?.Name} {item.Confirm ? " ✅" : "❌"}
                </h3>
                <p style={{ color: "black", fontSize: "12px" }}>
                  {item.Text}
                  <br />
                  <span style={{ fontSize: "0.9rem" }}>
                    {TimeConvertionDate(item.Date).dateFull}
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
