import '../style/teamstyle.css';

const Teamsection = () => {
  return(
      <>
          <section id="team-main-section-content">
              <div className="about-team-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3"></div>
                          <div className="col-md-6 col-sm-12 text-center">
                              <div className="about-team-text-content">
                                  <h2>Meet Our Teams </h2>
                                  <p>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                      ut fermentum massa justo. condimentum nibh.</p>
                              </div>
                          </div>
                          <div className="col-md-3"></div>
                      </div>
                  </div>
              </div>
              <div className="about-team-profile-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="team-profile-content">
                                  <div className="extra-team-hover-effect">
                                      <div className="team-img-content">
                                          <img src="https://venia-store-demo.myshopify.com/cdn/shop/files/about02_07.jpg?v=1614356550" alt=""/>
                                      </div>
                                  </div>
                                  <h3>Karen Ryan</h3>
                                  <p>Project Manager</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="team-profile-content">
                                  <div className="extra-team-hover-effect">
                                  <div className="team-img-content">
                                      <img src="https://venia-store-demo.myshopify.com/cdn/shop/files/about02_05.jpg?v=1614356550" alt=""/>
                                  </div>
                                  </div>
                                  <h3>Karen Ryan</h3>
                                  <p>Sale Agents</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="team-profile-content">
                                  <div className="extra-team-hover-effect">
                                  <div className="team-img-content">
                                      <img src="https://venia-store-demo.myshopify.com/cdn/shop/files/about02_09.jpg?v=1614356550" alt=""/>
                                  </div>
                                  </div>
                                  <h3>Karen Ryan</h3>
                                  <p>Photographer</p>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-12 text-center">
                              <div className="team-profile-content">
                                  <div className="extra-team-hover-effect">
                                  <div className="team-img-content">
                                      <img src="https://venia-store-demo.myshopify.com/cdn/shop/files/about02_03.jpg?v=1614356549" alt=""/>
                                  </div>
                                  </div>
                                  <h3>Karen Ryan</h3>
                                  <p>Designer</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Teamsection;