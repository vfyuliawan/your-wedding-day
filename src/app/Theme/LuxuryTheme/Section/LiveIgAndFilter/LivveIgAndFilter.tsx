import React from "react";

const LiveIgAndLinkFilter = (props: {
  title: string;
  date: String;
  linkFilter: string;
  linkStream: string;
}) => {
  const data = [
    {
      title: "Live Streaming",
      name: props.title,
      desc: props.date,
      button: "instagram",
      onClick: props.linkStream,
    },
    {
      title: "Filter Wedding",
      name: props.title,
      desc: "Jika Bapak/Ibu/Saudara ingin mengabadikan momen pernikahan kami bisa menggunakan filter instagram di bawah ini",
      button: "Filter Instagram",
      onclick: props.linkFilter,
    },
  ];
  return (
    <section
      style={{
        backgroundColor: "var(--prim)",
      }}
    >
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-md-12 mt-3 d-flex justify-content-center align-items-center mb-4">
              <div
                className="row text-center d-flex justify-content-center"
                style={{
                  width: "70%",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: "poppins",
                    color: "var(--forth)",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: 32,
                    fontFamily: "Sachettele Signature, Creation",
                    color: "var(--forth)",
                  }}
                >
                  {item.name}
                </p>

                <p
                  style={{
                    fontSize: 12,
                    fontFamily: "poppins",
                    color: "var(--forth)",
                  }}
                >
                  {item.desc}
                </p>

                <button
                  style={{
                    fontFamily: "poppins",
                    backgroundColor: "var(--forth)",
                    color: "var(--prim)",
                    width: 140,
                    padding: 8,
                    fontSize: 12,
                  }}
                >
                  <i className="bi bi-instagram"></i> {item.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LiveIgAndLinkFilter;
