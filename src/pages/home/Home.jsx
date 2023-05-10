import React from "react";
import Navbar from "../layout/Navbar";
import Mainslider from "../layout/Mainslider";
import Services from "../layout/Services";
import Productmenu from "../layout/Productmenu";
import Teamsection from "../layout/Teamsection";
import Productdeal from "../layout/Productdeal";
import Faqspage from "../layout/Faqspage";
import Arrivalsproduct from "../layout/Arrivalsproduct";
import Contactus from "../layout/Contactus";
import Footer from "../layout/Footer";


const Home = () => {
  return(
      <>
          <Mainslider/>
          <Services/>
          <Productmenu/>
          <Teamsection/>
          <Productdeal/>
          <Faqspage/>
          <Arrivalsproduct/>
          <Contactus/>
          <Footer/>
      </>
  )
}

export default Home;