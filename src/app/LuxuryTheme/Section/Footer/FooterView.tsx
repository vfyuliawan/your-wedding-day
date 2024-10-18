import React from "react";
import { Cover } from "../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";

interface FooterViewInterface {
  Footer: Cover;
}
interface KeyValueFooter {
  Qutes: string;
  Image: string;
  Name: string;
}

const FooterView = (props: FooterViewInterface) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
     
      <section
        id=""
        style={{
          backgroundImage: `url('${props.Footer.img}')`,
          backgroundPosition: "center",
        }}
        className="footer w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white"
      >
        <div className="gradient-overlay" />
        <main className="inside" style={{ position: "relative", top: 300 }}>
          <h2
            style={{
              textShadow: "none  !important",
              fontSize: "40px",
              color: "var(--third)",
            }}
          >
            Terimakasih
          </h2>
          <p
            style={{
              textShadow: "none !important",
              fontSize: "12px",
              color: "var(--third)",
              fontFamily: "Times-new-roman",
            }}
          >
            {props.Footer.quotes}
          </p>
          <h4
            style={{
              textShadow: "none !important",
              fontSize: 16,
              color: "var(--third)",

              fontFamily: "Times-new-roman",
            }}
          >
            Kami Yang Berbahagia
          </h4>
          <h3
            style={{
              textShadow: "none !important",
              fontSize: 40,
              color: "var(--third)",
            }}
          >
            {props.Footer.title}
          </h3>
        </main>
      </section>
      <div
        className=""
        style={{
          position: "absolute",
          top: 0,
          background: "linear-gradient(var(--prim) -100%, var(--sec) 200%)",
          left: 0,
          right: 0,
          height: "10rem",
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default FooterView;
