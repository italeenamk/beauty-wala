import '../style/contactus.css';


const Contactus = () => {
  return(
      <>
          <section id="contactus-page-main-content">
              <h1>Contact us</h1>
              <div className="contact-us-file-content">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 col-sm-12"></div>
                          <div className="col-md-6 col-sm-12">
                              <div className="right-google-map-content">
                                  <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23093.71763356974!2d73.38141231280427!3d33.58367404246317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfe37485203baf%3A0x88995d6953abad46!2sKahuta%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1683555701488!5m2!1sen!2s"
                                      width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy"
                                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contactus;