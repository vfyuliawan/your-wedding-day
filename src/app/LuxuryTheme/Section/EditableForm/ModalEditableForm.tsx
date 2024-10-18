import React, { SetStateAction, useState } from "react";
import { ColorResult } from "react-color";
import Swatches from "react-color/lib/components/swatches/Swatches";
import { isMobile } from "react-device-detect";
import Modal from "react-modal";
import Switch from "react-switch";
import { ResultDetailSlug } from "../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

export function ModalEditableForm(props: {
  modalEdit: boolean;
  setModalEdit: React.Dispatch<SetStateAction<boolean>>;
  primaryColor: string;
  setPrimaryColor: React.Dispatch<SetStateAction<string>>;
  secondaryColor: string;
  setSecondaryColor: React.Dispatch<SetStateAction<string>>;

  textColor1: string;
  setTextColor1: React.Dispatch<SetStateAction<string>>;

  textColor2: string;
  setTextColor2: React.Dispatch<SetStateAction<string>>;

  setAllColor: () => void;

  setDetails: React.Dispatch<
    React.SetStateAction<ResultDetailSlug | undefined>
  >;

  gifts: boolean;
  story: boolean;
  galery: boolean;
  protocoler: boolean;
  setProtocoler: React.Dispatch<SetStateAction<boolean>>;
}) {
  let subtitle: any;

  function afterOpenModal() {
    subtitle.style.color = "var(--prim)";
  }

  const [isActive, setisActive] = useState(0);

  return (
    <Modal
      isOpen={props.modalEdit}
      onRequestClose={() => {
        props.setModalEdit(false);
      }}
      style={{
        content: {
          top: "45%",
          border: `1px solid var(--prim)`,
          left: "50%",
          width: isMobile ? "90%" : "40%",
          backgroundColor: "#ffff",
          right: "auto",
          maxHeight: "75vh",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel="Example Modal"
    >
      <h2
        ref={(_subtitle) => (subtitle = _subtitle)}
        style={{
          justifyContent: "center",
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Brilon",
          letterSpacing: "1px",
          fontSize: 16,
        }}
      >
        edit theme Preset
      </h2>
      <div className="container">
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <p style={{ fontFamily: "sans-serif", fontSize: 14 }}>
              {" "}
              Sesuaikan Template
            </p>
          </div>
        </div>
        <div className="row ">
          <div
            style={
              {
                // border: "1px solid rgba(26, 26, 26, 0.9)"
              }
            }
            className="col d-flex justify-content-center p-auto"
          >
            <div className="col-3 d-flex justify-content-start mt-2 align-items-center">
              <p style={{ fontFamily: "sans-serif", fontSize: 12 }}>
                {" "}
                Amplop <br /> Digital
              </p>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center">
              <Switch
                height={25}
                onChange={() => {
                  props.setDetails((prev: any) => {
                    return {
                      ...prev,
                      gift: {
                        ...prev?.gift,
                        isShow: !props.gifts,
                      },
                    };
                  });
                }}
                checked={props.gifts}
              />
            </div>
            <div className="col-3 d-flex justify-content-start mt-2 align-items-center">
              <p style={{ fontFamily: "sans-serif", fontSize: 12 }}>
                {" "}
                Kisah <br />
                Cinta
              </p>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center">
              <Switch
                // offColor={"#00sss"}
                height={25}
                // width={49}
                onChange={() => {
                  props.setDetails((prev: any) => {
                    return {
                      ...prev,
                      story: {
                        ...prev?.story,
                        isShow: !props.story,
                      },
                    };
                  });
                }}
                checked={props.story}
              />
            </div>
          </div>
        </div>

        <div className="row ">
          <div
            style={
              {
                // border: "1px solid rgba(26, 26, 26, 0.9)"
              }
            }
            className="col d-flex justify-content-center p-auto"
          >
            <div className="col-3 d-flex justify-content-start mt-2 align-items-center">
              <p style={{ fontFamily: "sans-serif", fontSize: 12 }}>
                {" "}
                Galery <br /> Bersama
              </p>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center">
              <Switch
                height={25}
                onChange={() => {
                  props.setDetails((prev: any) => {
                    return {
                      ...prev,
                      galery: {
                        ...prev?.galery,
                        isShow: !props.galery,
                      },
                    };
                  });
                }}
                checked={props.galery}
              />
            </div>
            <div className="col-3 d-flex justify-content-start mt-2 align-items-center">
              <p style={{ fontFamily: "sans-serif", fontSize: 12 }}>
                {" "}
                Health <br />
                Protocol
              </p>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center">
              <Switch
                height={25}
                // width={49}
                onChange={() => {
                  props.setProtocoler(!props.protocoler);
                }}
                checked={props.protocoler}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <p style={{ fontFamily: "sans-serif", fontSize: 14 }}>
            {" "}
            Pilih warna undangan
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div
          style={{
            display: "flex",
            marginTop: 0,
            backgroundColor: "transparent",
            width: "60%",
            alignContent: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              style={{
                height: 38,
                width: 38,
                borderRadius: "50%", 
                border: "1px solid rgba(26, 26, 26, 0.9)",
                appearance: "none", 
                outline: "none", 
                background: "transparent", 
                cursor: "pointer",
              }}
              type="color"
              onChange={(e) => {
                const hexColor = e.target.value;
                props.setPrimaryColor(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--prim", hexColor);
              }}
              id="colorPicker"
              value={props.primaryColor}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
             <input
              style={{
                height: 38,
                width: 38,
                borderRadius: "50%", 
                border: "1px solid rgba(26, 26, 26, 0.9)",
                appearance: "none", 
                outline: "none", 
                background: "transparent", 
                cursor: "pointer",
              }}
              type="color"
              onChange={(e) => {
                const hexColor = e.target.value;
                props.setSecondaryColor(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--sec", hexColor);
              }}
              id="colorPicker"
              value={props.secondaryColor}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           <input
              style={{
                height: 38,
                width: 38,
                borderRadius: "50%", 
                border: "1px solid rgba(26, 26, 26, 0.9)",
                appearance: "none", 
                outline: "none", 
                background: "transparent", 
                cursor: "pointer",
              }}
              type="color"
              onChange={(e) => {
                const hexColor = e.target.value;
                props.setTextColor1(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--third", hexColor);
              }}
              id="colorPicker"
              value={props.textColor1}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
           <input
              style={{
                height: 38,
                width: 38,
                borderRadius: "50%", 
                border: "1px solid rgba(26, 26, 26, 0.9)",
                appearance: "none", 
                outline: "none", 
                background: "transparent", 
                cursor: "pointer",
              }}
              type="color"
              onChange={(e) => {
                const hexColor = e.target.value;
                props.setTextColor2(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--forth", hexColor);
              }}
              id="colorPicker"
              value={props.textColor2}

            />
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center mb-2">
        <div className="row  mt-3">
          <h5
            onClick={() => {
              props.setAllColor();
            }}
            style={{ color: "red" }}
          >
            Default Color
          </h5>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 0,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <button
          className="btn"
          onClick={() => {
            props.setModalEdit(false);
            setisActive(0);
          }}
          style={{
            width: "50%",
            paddingTop: 4,
            paddingBottom: 4,
            backgroundColor: "green",
            fontSize: 18,
            fontFamily: "sans-serif",
            color: "white",
            fontWeight: "bold",
            borderRadius: 20,
          }}
        >
          Perview
        </button>
      </div>

      {isActive == 1 ? (
        <>
          <div
            className="row mt-3"
            style={{
              display: "flex",
            }}
          >
            <div
              className="col"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: 12 }}>warna: {props.primaryColor}</p>
            </div>
          </div>
          <div
            className="row mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Swatches
              styles={{
                default: {},
              }}
              height={250}
              width={240}
              // color={"#ffff"}
              onChange={(val: ColorResult) => {
                const hexColor = val.hex;
                props.setPrimaryColor(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--prim", hexColor);
              }}
            />
          </div>
        </>
      ) : isActive == 2 ? (
        <>
          <div
            className="row mt-3"
            style={{
              display: "flex",
            }}
          >
            <div
              className="col"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: 12 }}>warna: {props.secondaryColor}</p>
            </div>
          </div>
          <div
            className="row mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Swatches
              styles={{
                default: {},
              }}
              height={250}
              width={240}
              // color={"#ffff"}
              onChange={(val: ColorResult) => {
                const hexColor = val.hex;
                props.setSecondaryColor(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--sec", hexColor);
              }}
            />
          </div>
        </>
      ) : isActive == 3 ? (
        <>
          <div
            className="row mt-3"
            style={{
              display: "flex",
            }}
          >
            <div
              className="col"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: 12 }}>warna: {props.textColor1}</p>
            </div>
          </div>
          <div
            className="row mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Swatches
              styles={{
                default: {},
              }}
              height={250}
              width={240}
              // color={"#ffff"}
              onChange={(val: ColorResult) => {
                const hexColor = val.hex;
                props.setTextColor1(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--third", hexColor);
              }}
            />
          </div>
        </>
      ) : isActive == 4 ? (
        <>
          <div
            className="row mt-3"
            style={{
              display: "flex",
            }}
          >
            <div
              className="col"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: 12 }}>warna: {props.textColor2}</p>
            </div>
          </div>
          <div
            className="row mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Swatches
              styles={{
                default: {},
              }}
              height={250}
              width={240}
              // color={"#ffff"}
              onChange={(val: ColorResult) => {
                const hexColor = val.hex;
                props.setTextColor2(hexColor);
                setisActive(0);
                document.documentElement.style.setProperty("--forth", hexColor);
              }}
            />
          </div>
        </>
      ) : null}
    </Modal>
  );
}
