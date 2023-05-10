import '../style/footer.css';

const Footer = () => {
  return(
      <>
          <section id="footer-main-content">
              <div className="footer-list-main-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-2 col-sm-12">
                              <div className="footer-list-content">
                                  <h3>Shop</h3>
                                  <ul>
                                      <li><a href="">Skin products</a></li>
                                      <li><a href="">Nail products</a></li>
                                      <li><a href="">Perfumes</a></li>
                                      <li><a href="">Hair care products</a></li>
                                      <li><a href="">Accessories</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="footer-list-content">
                                  <h3>Infomation</h3>
                                  <ul>
                                      <li><a href="">Pagination</a></li>
                                      <li><a href="">Terms & Conditions</a></li>
                                      <li><a href="">Contact</a></li>
                                      <li><a href="">Accessories</a></li>
                                      <li><a href="">Term of use</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="footer-list-content">
                                  <h3>About</h3>
                                  <ul>
                                      <li><a href="">Help Center</a></li>
                                      <li><a href="">Address Store</a></li>
                                      <li><a href="">Privacy Policy</a></li>
                                      <li><a href="">Receivers & Amplifiers</a></li>
                                      <li><a href="">Clothings</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-2 col-sm-12">
                              <div className="footer-list-content">
                                  <h3>Follow Us</h3>
                                  <ul>
                                      <li><a href="">(646) 663-4575</a></li>
                                      <li><a href="">(646) 968-0608</a></li>
                                      <li><a href="">help@engotheme.com</a></li>
                                      <li><a href="">1201 Broadway Suite 600</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-4 col-sm-12"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Footer;