import '../style/productmenu.css';

const Productmenu = () => {
  return(
      <>
          <section id="product-menu-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-sm-12">
                          <div className="product-effect-content">
                              <div className="portfolio-design-content">
                                  <div className="portfolio-img-content">
                                      <img src="//venia-store-demo.myshopify.com/cdn/shop/files/bannerv4-1.jpg?v=1614355465" className="img-fluid" alt=""/>
                                  </div>
                              </div>
                              <div className="product-menu-text-content">
                                  <h2>Skin care products</h2>
                                  <p>Daily Essentials</p>
                                  <a href="">Explore all</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                          <div className="product-effect-content">
                          <div className="product-menu-content">
                              <div className="portfolio-design-content">
                                  <div className="portfolio-img-content">
                                      <img src="//venia-store-demo.myshopify.com/cdn/shop/files/bannerv4-2.jpg?v=1614355464" className="img-fluid" alt=""/>
                                  </div>
                              </div>
                          </div>
                          <div className="product-menu-text-content">
                              <h2>lipstick collection</h2>
                              <p>Daily Essentials</p>
                              <a href="">Explore all</a>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Productmenu;