import '../style/productdeal.css';

const Productdeal = () => {
  return(
      <>
          <section id="today-deal-main-content">
              <h1>Deal Of The Days</h1>
              <div className="today-deal-product-card-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12">
                              <div className="product-deal-card-content">
                                  <div className="product-deal-img-content">
                                      <div className="container">
                                          <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/36.jpg?v=1588752195" alt="Avatar" className="image"/>
                                          <div className="top-right">SALE</div>
                                          <div className="centered">Centered</div>
                                              <div className="overlay">
                                                  <div className="main-icon-link">
                                                      <a href="#" className="icon">
                                                          <i title="Add to Wishlist" className="fa-regular fa-heart"></i>
                                                          <i title="Add to Card" className="fa-solid fa-cart-shopping"></i>
                                                          <i title="Quickview" className="fa-solid fa-magnifying-glass"></i>
                                                      </a>
                                                  </div>
                                              </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12"></div>
                          <div className="col-md-3 col-sm-12"></div>
                          <div className="col-md-3 col-sm-12"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Productdeal;