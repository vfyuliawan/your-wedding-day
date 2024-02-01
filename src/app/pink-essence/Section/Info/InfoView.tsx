import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import AnimationThemeInstance, { setAnimation } from "@/app/utils/AnimationThemes";

const InfoView = () => {
  const controls = useAnimation();
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  return (
    <section id="info" className="info">
      <div className="container" ref={targetRef}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 text-center">
            <motion.div
              initial={{ opacity: setAnimation["fade-down"].initialX, y: setAnimation["fade-down"].initialY }}
              animate={controls}
              transition={{ duration: 1 }}
            >
              <motion.h2>Informasi Acarasss</motion.h2>
            </motion.div>

            <p className="alamat">
              Alamat : Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Fuga asperiores quibusdam pariatur! <br />
              Lorem, ipsum dolor.
            </p>
            <a
              href="https://maps.app.goo.gl/PoZ41TXf88mRhqRR8"
              target="_blank"
              className="btn btn-lg"
              rel="noopener noreferrer"
            >
              Klik untuk membuka peta
            </a>
            <p className="alamat">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              nostrum ullam dignissimos laudantium quos omnis culpa distinctio
              maxime voluptate eveniet cupiditate saepe vero reprehenderit porro
              suscipit repellat dicta earum aperiam sapiente, aut aliquid
              dolorum! Molestiae?
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-5 col-10 mt-3">
            <div className="card text-center text-bg-light">
              <div className="card-header">Akad Nikah</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <i className="bi bi-clock d-block" />
                    <span> 08.00 - 10.00 </span>
                  </div>
                  <div className="col-md-6">
                    <i className="bi bi-calendar3 d-block" />
                    <span> Minggu 14 Agustus 2024 </span>
                  </div>
                </div>
              </div>
              <div className="card-footer text-body-secondary">
                Saat Acara Akad Diharapkan Kondusif
              </div>
            </div>
          </div>
          <div className="col-md-5 col-10 mt-3">
            <div className="card text-center text-bg-light">
              <div className="card-header">Resepsi</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <i className="bi bi-clock d-block" />
                    <span> 08.00 - 10.00 </span>
                  </div>
                  <div className="col-md-6">
                    <i className="bi bi-calendar3 d-block" />
                    <span> Minggu 14 Agustus 2024 </span>
                  </div>
                </div>
              </div>
              <div className="card-footer text-body-secondary">
                Saat Acara Akad Diharapkan Kondusif
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoView;
