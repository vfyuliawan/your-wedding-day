import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface CoverViewInterface {
    isVisible: boolean;
  setVisible?: Dispatch<SetStateAction<boolean>>;
  onCoverClick: () => void
}

const CoverView = (props: CoverViewInterface) => {
    const handleCoverClick = () => {
        props.onCoverClick();
      };
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: props.isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: props.isVisible ? 0 : 1 }}>
    <section
      style={{}}
      id="cover"
      className={`cover`}
    //   className={`cover ${!props.visible ? "visible" : ""}`}
    >
      <div
        className="cover-foto text-center"
        style={{
          backgroundImage: "url('/pink-essence/img/prawed/prawed4.jpg')",
        }}
      >
        <div className="cover-overlay d-flex justify-content-center align-items-center">
          <h1>Fulan & Fulana</h1>
          <h4>Kepada Bapak/Ibu Sodara/i</h4>
          <a
            onClick={() => {
                handleCoverClick()
            }}
          >
            <button className="btn btn-lg">Buka Undangan</button>
          </a>
        </div>
      </div>
    </section>
      </motion.div>

  );
};

export default CoverView;
