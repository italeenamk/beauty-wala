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
                                          <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/36.jpg?v=1588752195" alt="Avatar" className="img-fluid"/>
                                          <div className="top-right">SALE</div>
                                          <div className="centered"> Expired</div>
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
                                      <div className="product-item-detail-content">
                                          <h3>Desodorante para mujer</h3>
                                          <p>$28.00 <span>$35.00</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="product-deal-card-content">
                                  <div className="product-deal-img-content">
                                      <div className="container">
                                          <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/10.jpg?v=1588753304" alt="Avatar" className="img-fluid"/>
                                          <div className="top-right">SALE</div>
                                          <div className="centered"> Expired</div>
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
                                      <div className="product-item-detail-content">
                                          <h3>Mascara</h3>
                                          <p>$28.00 <span>$35.00</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="product-deal-card-content">
                                  <div className="product-deal-img-content">
                                      <div className="container">
                                          <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/33_4a302e7b-a7e2-4c3c-8c2d-ef9e9d70ded0.jpg?v=1588752047" alt="Avatar" className="img-fluid"/>
                                          {/*<div className="top-right">SALE</div>*/}
                                          <div className="centered"> Expired</div>
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
                                      <div className="product-item-detail-content">
                                          <h3>Essence Moisturizing Facial Skin</h3>
                                          <p>$28.00 <span>$35.00</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12">
                              <div className="product-deal-card-content">
                                  <div className="product-deal-img-content">
                                      <div className="container">
                                          <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/42.jpg?v=1588753581" alt="Avatar" className="img-fluid"/>
                                          <div className="top-right">SALE</div>
                                          <div className="centered"> Expired</div>
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
                                      <div className="product-item-detail-content">
                                          <h3>Lotion</h3>
                                          <p>$28.00 <span>$35.00</span></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Productdeal;