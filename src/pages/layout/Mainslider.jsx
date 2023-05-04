import '../style/slider.css';
import Navbar from "./Navbar";


const Mainslider = () => {
  return(
      <>
          <section id="main-slider-content">
              <Navbar/>
              <section className="slider-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="slider-side-content">
                                  <h3>OUT NOW</h3>
                                  <h2>New Beauty Trend</h2>
                                  <h5>Discover our collection for this new hot season.</h5>
                                  <button>SHOP NOW</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </section>
      </>
  )
}

export default Mainslider;