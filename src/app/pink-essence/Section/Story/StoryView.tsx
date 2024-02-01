const StoryView = () => {
    return ( 
        <section id="story" className="story">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              <span>Baimana Cinta Kami Bersemi</span>
              <h2>Cerita Kami</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, dicta esse sapiente ea sunt aspernatur!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="timeline">
                <li>
                  <div
                    className="timeline-image"
                    style={{ backgroundImage: 'url("/pink-essence/img/rinjani.jpg")'}}
                  />
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3>Pertama Bertemu</h3>
                      <span> 1June 2021</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel aliquid nostrum eum fugit odio aspernatur?
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div
                    className="timeline-image"
                    style={{ backgroundImage: 'url("/pink-essence/img/gilitrawangan.jpg")'}}

                  />
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3>Jadian</h3>
                      <span> 1 June 2021</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel aliquid nostrum eum fugit odio aspernatur?
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="timeline-image"
                    style={{ backgroundImage: 'url("/pink-essence/img/singapura.jpg")'}}

                  />
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3>Tunangan</h3>
                      <span> 1 June 2026</span>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel aliquid nostrum eum fugit odio aspernatur?
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default StoryView;