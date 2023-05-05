import '../style/services.css';


const Services = () => {
  return(
      <>
          <section id="services-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-3 col-sm-12 text-center">
                          <div className="services-card-content">
                              <img src="https://venia-store-demo.myshopify.com/cdn/shop/files/4.png?v=1614356568" alt=""/>
                              <h3>24/7 Friendly Support</h3>
                              <p>Our support team always ready for <span>you </span>
                                  to 7 days a week</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-12 text-center">
                          <div className="services-card-content">
                              <img src="//venia-store-demo.myshopify.com/cdn/shop/files/1.png?v=1614356568" alt=""/>
                              <h3>FREE SHIPPING</h3>
                              <p>Free worldwide shipping on all area
                                     order above $100 </p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-12 text-center">
                          <div className="services-card-content">
                              <img src="//venia-store-demo.myshopify.com/cdn/shop/files/2.png?v=1614356568" alt=""/>
                              <h3>7 Days Easy Return</h3>
                              <p>Product any fault within 7 days for an immediately exchange.</p>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-12 text-center">
                          <div className="services-card-content">
                              <img src="//venia-store-demo.myshopify.com/cdn/shop/files/3.png?v=1614356568" alt=""/>
                              <h3>Quality guaranteed</h3>
                              <p>If your product aren't perfect, return
                                  them for a full refund</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Services;