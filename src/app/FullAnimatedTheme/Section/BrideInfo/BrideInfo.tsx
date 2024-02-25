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
    <section
      className="section"
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${bgTheme.image.cover})`,
          opacity: 0.2,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
        }}
      ></div>
      <div style={{ position: "absolute", top: "1%", width: "100%" }}>
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
          <div className="col-6 d-flex justify-content-right">
            <p
              style={{
                fontSize: "1rem",
                textAlign:'right',
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
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "30%",
          background: `linear-gradient(to top, ${bgColor.color.secondary}, transparent)`,
        }}
      ></div>
    </section>
  );
}

export default BrideInformation;
