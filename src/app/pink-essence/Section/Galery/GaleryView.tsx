const GaleryView = () => {
    return ( 
        <section className="galery" id="galery">
        <div className="container">
          <div className="row mt-4 justify-content-center">
            <div className="col-md-8 col-10 text-center">
              <span>Memory Kisah Kami</span>
              <h2>Galery</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, dicta esse sapiente ea sunt aspernatur!
              </p>
            </div>
          </div>
          <div className="row row-cols-md-3 row-cols-sm-2 row-cols-2 justify-content-center">
            <div className="col mt-3">
              <a
                href="/pink-essence/img/prawed/prawed1.jpg"
                data-toggle="lightbox"
                data-caption="This describes the image"
              >
                <img
                  src="/pink-essence/img/prawed/prawed1.jpg"
                  style={{ maxHeight: 376, filter: "grayscale()" }}
                  className="img-fluid w-100 rounded"
                />
              </a>
            </div>
            <div className="col mt-3">
              <a
                href="/pink-essence/img/prawed/prawed2.jpg"
                data-toggle="lightbox"
                data-caption="This describes the image"
              >
                <img
                  src="/pink-essence/img/prawed/prawed2.jpg"
                  style={{ maxHeight: 376, filter: "grayscale()" }}
                  className="img-fluid w-100 rounded"
                />
              </a>
            </div>
            <div className="col mt-3">
              <a
                href="/pink-essence/img/prawed/prawed3.jpg"
                data-toggle="lightbox"
                data-caption="This describes the image"
              >
                <img
                  src="/pink-essence/img/prawed/prawed3.jpg"
                  style={{ maxHeight: 376, filter: "grayscale()" }}
                  className="img-fluid w-100 rounded"
                />
              </a>
            </div>
            <div className="col mt-3">
              <a
                href="/pink-essence/img/prawed/prawed4.jpg"
                data-toggle="lightbox"
                data-caption="This describes the image"
              >
                <img
                  src="/pink-essence/img/prawed/prawed4.jpg"
                  className="img-fluid w-100 rounded"
                  style={{ maxHeight: 376, filter: "grayscale()" }}
                />
              </a>
            </div>
            <div className="col mt-3">
              <a
                href="/pink-essence/img/prawed/prawed6.jpg"
                data-toggle="lightbox"
                data-caption="This describes the image"
              >
                <img
                  src="/pink-essence/img/prawed/prawed6.jpg"
                  className="img-fluid w-100 rounded"
                  style={{ maxHeight: 376, filter: "grayscale()" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default GaleryView;