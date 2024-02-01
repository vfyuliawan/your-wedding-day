const HomeView = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Acara Pernikahan</h2>
            <h4>
              Diselenggarakan pada 20 November 2023 di bandung, Jawa Barat
            </h4>
            <p>
              Oleh karena itu, dengan segala hormat, kami bermaksud untuk
              mengundang Bapak/Ibu Saudara/i, untuk hadir pada acara pernikaahan
              kami
            </p>
          </div>
        </div>
        <div className="row couple mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-8 text-end">
                <h3>Fulan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  praesentium dolores eos quo.
                </p>
                <p>
                  Putra dari Bpk. lOrem <br />
                  dan <br />
                  Ibu Impus
                </p>
              </div>
              <div className="col-4">
                <img
                  src="/pink-essence/img/woman1.jpg"
                  className="img-responsive rounded-circle"
                />
              </div>
            </div>
          </div>
          <span className="heart">
            <i className="bi bi-balloon-heart-fill" />
          </span>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-4">
                <img
                  src="/pink-essence/img/man.png"
                  className="img-responsive rounded-circle"
                />
              </div>
              <div className="col-8">
                <h3>Fulan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  praesentium dolores eos quo.
                </p>
                <p>
                  Putra dari Bpk. lOrem <br />
                  dan <br />
                  Ibu Impus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
