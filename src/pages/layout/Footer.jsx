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
                          <div className="col-md-2 col-sm-12"></div>
                          <div className="col-md-4 col-sm-12"></div>
                          <div className="col-md-4 col-sm-12"></div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Footer;