import { useState } from "react";

interface IContainerInterface {
  title: string;
  children?: React.ReactNode;
  isContainerOpen: boolean;
}

const IContainer = (props: IContainerInterface) => {
  const [isContainerOpen, setisContainerOpen] = useState(props.isContainerOpen);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          onClick={() => {
            setisContainerOpen(!isContainerOpen);
          }}
          style={{
            width: "100%",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            height: 55,
            border: 0,
            backgroundColor: "#116A7B",
          }}
          className=""
          type="button"
        >
          <div
            style={{
              display: "flex",
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "white", marginLeft: 10, fontSize: 16 }}>
              {props.title}
            </p>
            {isContainerOpen ? (
              <i
                className="bi bi-chevron-up"
                style={{ fontSize: 18, color: "white", marginRight: 10 }}
              ></i>
            ) : (
              <i
                className="bi bi-chevron-down"
                style={{ fontSize: 18, color: "white", marginRight: 10 }}
              ></i>
            )}
          </div>
        </button>
      </h2>

      {isContainerOpen ? (
        <div className="accordion-body">{props.children}</div>
      ) : null}
    </div>
  );
};

export default IContainer;
