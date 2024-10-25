import React, { SetStateAction } from "react";
import { isMobile } from "react-device-detect";
import Modal from 'react-modal';
import QRCode from "react-qr-code";

const ModalQRCode = (props:{
    modalIsOpen:boolean;
    setIsOpen:  React.Dispatch<SetStateAction<boolean>>
    image: string
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
          border: `3px solid var(--prim)`,
          left: "50%",
          width: isMobile ? "90%" : "40%",
          height: "75vh",
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
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            style={{
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Brilon",
              letterSpacing: "2px",
              fontSize: 22,
            }}
          >
            e-reservation
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              opacity: 0.5,
              color: "white",
              backgroundColor: "red",
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
              height: 200,
              width: "100%",
              backgroundColor: "var(--prim)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              marginTop: 30,
              padding: 100,
              border: `3px solid ${"var(--prim)"}`,
            }}
          >
            <img
              src={props.image}
              style={{ objectFit: "fill", height: 200 }}
              alt=""
            />
          </div>
          <div className="row justify-content-center">
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
                <QRCode
                  value={props.guest + "nviteMe" + props.idGuest}
                  size={140}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="L"
                />
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
        </Modal>
     );
}
 
export default ModalQRCode;