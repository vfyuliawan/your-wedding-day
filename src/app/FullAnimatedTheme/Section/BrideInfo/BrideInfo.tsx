import { ThemeColorClass } from "@/app/Constant/ThemeColor";
import { ThemeImageClass } from "@/app/Constant/ThemeImage";
import { MaleFemaleProps } from "@/app/FloralTheme/Section/Male-Female/MaleFemaleModel";

function BrideInformation(props: {
  themeName: string;
  maleFemale: MaleFemaleProps;
}) {
  const bgTheme = new ThemeImageClass(props.themeName);
  const bgColor = new ThemeColorClass(props.themeName);
  return (
    <section className="section" style={{ position: "relative" }}>
        <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "20%",
          background: `linear-gradient(to top, ${bgColor.color.primary} -20%, rgba(255, 0, 0, 0) 70%)`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "20%",
          background: `linear-gradient(to bottom, ${bgColor.color.primary} -20%, rgba(255, 0, 0, 0) 70%)`,
        }}
      ></div>
      <div
        style={{
          width: "100%",
          opacity:0.15,
          height:630,
          background: `url(${bgTheme.image.cover})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div style={{ position: "absolute", top: "0%", width: "100%" }}>
        <div className="row justify-content-center">
          <div className="col-10" style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "1.5rem",
                fontFamily: "FaunaOne",
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              The Be Loved
            </p>
            <h4
              style={{
                fontSize: "2rem",
                fontFamily: "brilon",
                fontWeight: 800,
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              Romeo & Juliet
            </h4>
            <p
              style={{
                fontSize: "0.9rem",
                fontFamily: "FaunaOne",
                color: bgColor.color.secondary,
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda id dolores odit hic obcaecati quo cum dolore repellendus
              vitae eius?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5 d-flex justify-content-center">
            <div
              style={{
                height: "9rem",
                width: "7rem",
                borderRadius: "20px",
                backgroundColor: bgColor.color.secondary,
              }}
            ></div>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: 900,
                color: bgColor.color.secondary,
                fontFamily: "Brilon",
              }}
            >
              &
            </h1>
          </div>
          <div className="col-5 d-flex justify-content-center">
            <div
              style={{
                height: "9rem",
                width: "7rem",
                borderRadius: "20px",
                backgroundColor: bgColor.color.secondary,
              }}
            ></div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-5 d-flex justify-content-center">
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: bgColor.color.secondary,
                fontFamily: "Brilon",
              }}
            >
              Romeo
            </h1>
          </div>
          <div className="col-2"></div>
          <div className="col-5 d-flex justify-content-center">
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: bgColor.color.secondary,
                fontFamily: "Brilon",
              }}
            >
              Juliete
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 d-flex justify-content-center">
            <div
              style={{
                width: "80%",
                height: 3,
                backgroundColor: bgColor.color.secondary,
              }}
            ></div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div
              style={{
                width: "80%",
                height: 3,
                backgroundColor: bgColor.color.secondary,
              }}
            ></div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 d-flex justify-content-left">
            <p
              style={{
                fontSize: "1rem",
                marginLeft: "1rem",
                color: bgColor.color.secondary,
              }}
            >
              Anak Dari <br />
              Ibu Nana Sarkina <br />
              <span style={{ fontSize: "2rem" }}>&</span> <br />
              Bapak Leonardo
            </p>
          </div>
          <div className="col-6 d-flex align-items-right justify-content-right">
            <p
              style={{
                fontSize: "1rem",
                textAlign: "right",
                
                marginLeft: "2rem",
                color: bgColor.color.secondary,
              }}
            >
              Anak Dari <br />
              Ibu Nana Sarkina <br />
              <span style={{ fontSize: "2rem" }}>&</span> <br />
              Bapak Leonardo
            </p>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default BrideInformation;
