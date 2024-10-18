import React, { SetStateAction } from "react";
import { isMobile } from "react-device-detect";
import Modal from "react-modal";
import QRCode from "react-qr-code";

const ModalQRCodeBgImage = (props: {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  image: string;
  guest: string;
  idGuest: string;
}) => {
  let subtitle: any;

  function afterOpenModal() {
    subtitle.style.color = "var(--prim)";
  }

  const customStyles = {
    content: {
      top: "45%",
      border: `1px solid var(--prim)`,
      left: "50%",

      width: isMobile ? "90%" : "40%",
      height: "50vh",
      backgroundColor: "white",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => {
        props.setIsOpen(false);
      }}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              opacity: 0.5,
              color: "white",
              backgroundColor: "green",
              // borderRadius: "50%",
              paddingLeft: 5,
              paddingRight: 5,
              position: "absolute",
              top: 0,
              right: isMobile ? 25 : 35,
              transform: "translate(50%, -0%)",
            }}
            onClick={() => {
              props.setIsOpen(false);
            }}
          >
            Close
          </div>
      <div
        style={{
          position: "relative", 
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("${props.image}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat", 
            opacity: 0.2,
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            style={{
              justifyContent: "center",
              textAlign: "center",
              marginTop:50,
              fontWeight: "bold",
              fontFamily: "Brilon",
              letterSpacing: "2px",
              fontSize: 22,
            }}
          >
            e-reservation
          </h2>
          <div className="row justify-content-center mt-5">
            <div className="col-10 justify-content-center d-flex">
              <div
                style={{
                  width: "100%",
                  marginTop: 20,
                  backgroundColor: "white",
                  borderRadius: "10%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{
                  backgroundColor:"red"
                }}>
                <QRCode
                  value={props.guest + "nviteMe" + props.idGuest}
                  size={140}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="L"
                />
                </div>
                
                <div className="col-12">
                  <div
                    style={{
                      opacity: 0.5,
                      marginTop: 20,
                      borderTop: `2px dotted ${"var(--prim)"}`,
                      width: "100%",
                    }}
                  ></div>
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    color: "grey",
                    fontSize: "1rem",
                    fontFamily: "faunaOne",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Nama Tamu
                  <br />{" "}
                  <span style={{ color: "black" }}>
                    {props.guest.charAt(0).toUpperCase() + props.guest.slice(1)}
                  </span>
                  <br />
                  Guest ID : {props.idGuest}
                </p>
                <div className="col-12">
                  <div
                    style={{
                      opacity: 0.5,
                      marginTop: 5,
                      borderTop: `2px dotted ${"var(--prim)"}`,
                      width: "100%",
                    }}
                  ></div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalQRCodeBgImage;
