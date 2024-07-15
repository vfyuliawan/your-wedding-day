import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import {
  HomeKeyValue,
  HomeViewInterface,
} from "@/app/FloralTheme/Section/Home/HomeModel";
import {
  RSVPKeyValue,
  RSVPViewInterface,
} from "@/app/FloralTheme/Section/Rsvp/RsvpModel";
import { RsvpViewModel } from "@/app/FloralTheme/Section/Rsvp/RsvpViewModel";
import { StoryViewMap } from "@/app/FloralTheme/Section/Story/SotryViewModel";
import {
  InfoViewInterface,
  InfoViewKeyValue,
} from "@/app/LuxuryTheme/Section/Info/InfoView";
import useIntersectionObserver from "@/app/LuxuryTheme/Section/UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance from "@/app/utils/AnimationThemes";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionInterface,
} from "@/app/utils/TimeConvertion";
import { Timestamp } from "firebase/firestore";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ReactLoading from "react-loading";
import Modal from "react-modal";
import Swal from "sweetalert2";
import AnimatedImageComponent from "../../component/AnimatedImage";

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

const MessageView = (props: {
  themeName: string;
  gifts: GiftsOption;
  countDown: Timestamp;
  rsvp: RSVPViewInterface;
}) => {
  const {
    message,
    setMessage,
    submitMessage,
    progress,
    seTprogress,
    loading,
    setLoading,
  } = RsvpViewModel({
    slug: props.rsvp.slug,
    userId: props.rsvp.userId,
    getDetail: function (): void {
      props.rsvp.getDetail();
    },
  });
  const bgImage = new ThemeImageClass(props.themeName);

  const bgColor = new ThemeColorClass(props.themeName);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);

  enum IsActiveEnum {
    Cashless = "Cashless",
    WeddingGifts = "WeddingGifts",
  }
  const [isActive, setIsActive] = useState(IsActiveEnum.WeddingGifts);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeHorizon);
    }
  }, [isVisible, controls]);

  useEffect(() => {
    Modal.setAppElement("#yourAppElement");

    return () => {};
  }, []);

  const customStyles = {
    content: {
      top: "48%",
      border: `5px solid ${bgColor.color.secondary}`,
      left: "50%",
      width: "90%",
      height: "75vh",
      backgroundColor: "white",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = bgColor.color.secondary;
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="section" style={{}} ref={targetRef}>
      <div className="yourAppElement" id="yourAppElement"></div>
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
        style={{
          position: "absolute",
          top: "20%",
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
                fontFamily: "faunaOne",
                fontSize: "1.2rem",
                color: bgColor.color.secondary,
              }}
            >
              <br />
              <span
                style={{
                  fontFamily: "FaunaOne",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: bgColor.color.secondary,
                }}
              >
                Ucapan Untuk Pengantin
                <br />
              </span>
            </motion.h2>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.5,
          }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="row d-flex justify-content-center"
          style={{ position: "absolute", top: 120 }}
        >
          <div className="col-10 justify-content-center text-center">
            <p style={{ fontSize: 18, fontFamily: "faunaOne", color: "black" }}>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 justify-content-center d-flex">
              <div
                style={{
                  width: "90%",
                  height: 50,
                  textDecoration: "none",
                  backgroundColor:
                    isActive === IsActiveEnum.Cashless
                      ? "black"
                      : bgColor.color.secondary,
                  borderRadius: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  fontSize: "16px",
                  fontFamily: "faunaone",
                  color: bgColor.color.primary,
                }}
                onClick={() => {
                  openModal();
                }}
              >
                <i
                  className="bi bi-envelope-arrow-up"
                  style={{ marginRight: 2 }}
                >
                  {" "}
                </i>{" "}
                {"   "}{" "}
                <span style={{ marginLeft: 10 }}>Kirim Ucapan & Doa</span>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            <div className="col-10 justify-content-center d-flex align-items-center text-center">
              <p
                style={{
                  fontSize: 18,
                  fontFamily: "faunaOne",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Batas Akhir Konfrimasi :<br />
                {TimeConvertionDate(props.countDown).dateFull}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="RSVP"
      >
        <div className="row, justify-content-center d-flex">
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            style={{
              fontFamily: "brilon",
              color: bgColor.color.secondary,
              fontWeight: "bold",
            }}
          >
            RSVP
          </h2>
        </div>

        <div
          style={{
            width: 40,
            height: 40,
            opacity: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            position: "fixed",
            color: "white",
            top: 0,
            right: 0,
          }}
          onClick={closeModal}
        >
          X
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 ">
              <label
                style={{
                  fontFamily: "faunaOne",
                  fontSize: 14,
                  color: bgColor.color.secondary,
                }}
                htmlFor="nama"
                className="form-label"
              >
                Nama
              </label>
              <input
                value={message?.Name}
                color="red"
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
              <label
                style={{
                  fontFamily: "faunaOne",
                  fontSize: 14,
                  color: bgColor.color.secondary,
                }}
                htmlFor="Pesan"
                className="form-label"
              >
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
              <label
                style={{
                  fontFamily: "faunaOne",
                  fontSize: 14,
                  color: bgColor.color.secondary,
                }}
                htmlFor="nama"
                className="form-label"
              >
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
                rows={3}
                name="pesan"
                value={message?.Text}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 d-flex align-items-center justify-content-center">
              <div
                style={{
                  width: "90%",
                  marginTop: 8,
                  height: 50,
                  textDecoration: "none",
                  backgroundColor: bgColor.color.secondary,
                  borderRadius: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  fontSize: "16px",
                  fontFamily: "faunaone",
                  color: bgColor.color.primary,
                }}
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
              >
                Submit
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div
              style={{
                opacity: 0.5,
                borderTop: `2px dotted ${bgColor.color.secondary}`,
                width: "100%",
              }}
            ></div>
          </div>
          <MessageView />
        </div>
      </Modal>
    </section>
  );

  function MessageView() {
    if (loading) {
      return (
        <div
          style={{ height: 400 }}
          className="row d-flex justify-content-center align-items-center"
        >
          <ReactLoading
            type={"spinningBubbles"}
            color={"#e3b383"}
            height={200}
            width={70}
          />
        </div>
      );
    } else {
      return props?.rsvp?.Message?.slice()
        .reverse()
        .map((item, index) => {
          return (
            <div style={{ borderRadius: "10px" }} className="bg-white mt-3 ">
              <div className="row justify-content-center align-items-center d-flex">
                <div className="col-3 justify-content-center d-flex items-content-center">
                  <div
                    style={{
                      borderRadius: "50%",
                      backgroundColor: item.Confirm
                        ? "rgba(0, 0, 0, 0.25)"
                        : "rgba(0, 0, 0, 0.25)",
                      width: 50,
                      height: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center", // Center both horizontally and vertically
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        margin: 0, // Remove default margin to ensure text is centered
                      }}
                    >
                      {item?.Name?.split("")[0] !== undefined
                        ? item?.Name.split("")[0].toLocaleUpperCase()
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
                    {item?.Name}{" "}
                    {item.Confirm ? (
                      <span
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          fontSize: "12px",
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
                  <p
                    style={{
                      fontFamily: "faunaone",
                      color: "black",
                      fontSize: "12px",
                    }}
                  >
                    {item.Text}
                    <br />
                    <span
                      style={{
                        fontFamily: "times-new-roman",
                        fontSize: "0.8rem",
                      }}
                    >
                      {TimeConvertionDate(item.Date).dateFull}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        });
    }
  }
};

export default MessageView;
