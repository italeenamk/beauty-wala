import React from "react";
import Navbar from "../layout/Navbar";
import Mainslider from "../layout/Mainslider";
import Services from "../layout/Services";
import Productmenu from "../layout/Productmenu";
import Teamsection from "../layout/Teamsection";
import Productdeal from "../layout/Productdeal";
import Faqspage from "../layout/Faqspage";
import Arrivalsproduct from "../layout/Arrivalsproduct";


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
      </>
  )
}

export default Home;