const GiftsView = () => {
    return ( 
        <section id="gifts" className="gifts">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              <h2>Wedding</h2>
              <h5>
                Gifts
                <div className="vertical-line" />
              </h5>
              <p>
                Bagi yang berkeinginan memberikan kado pernikahan atau tanda
                kasih, kami juga menyediakan wedding gift pada link di bawah
                ini.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 col-10 col-sm-6 mt-2">
              <div className="card text-center">
                <div className="card-header">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png"
                    style={{ width: "15rem", height: "5rem" }}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: "black",
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: "2rem",
                    }}
                  >
                    1234567890
                  </h5>
                  <a className="btn btn-lg">Salin Rekening </a>
                </div>
                <div className="card-footer text-body-secondary text-light">
                  a/n fulana
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-sm-6 mt-2">
              <div className="card text-center">
                <div className="card-header">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
                    style={{ width: "15rem" }}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: "black",
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: "2rem",
                    }}
                  >
                    1234567890
                  </h5>
                  <a className="btn btn-lg">Salin Rekening </a>
                </div>
                <div className="card-footer text-body-secondary text-light">
                  a/n fulana
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10 col-sm-6 mt-2">
              <div className="card text-center">
                <div className="card-header">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png"
                    style={{ width: "15rem" }}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: "black",
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: "2rem",
                    }}
                  >
                    1234567890
                  </h5>
                  <a className="btn btn-lg">Salin Rekening </a>
                </div>
                <div className="card-footer text-body-secondary text-light">
                  a/n fulana
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default GiftsView;