import '../style/navbar.css';
import logo_img from '../assest/makeup.png';


const Navbar = () => {
  return(
      <>
          <section id="navbar-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12">
                          <nav className="navbar navbar-expand-md navbar-dark">
                              <a className="navbar-brand" href="#"><img src={ logo_img } alt=""/>Beauty</a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                  <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                  <div className="mr-auto"></div>
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">HOME</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">SHOP HOT</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">FEATURED</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">PAGES</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#">BLOGS</a>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Navbar;