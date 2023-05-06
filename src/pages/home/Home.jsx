import React from "react";
import Navbar from "../layout/Navbar";
import Mainslider from "../layout/Mainslider";
import Services from "../layout/Services";
import Productmenu from "../layout/Productmenu";
import Teamsection from "../layout/Teamsection";
import Productdeal from "../layout/Productdeal";


const Home = () => {
  return(
      <>
          <Mainslider/>
          <Services/>
          <Productmenu/>
          <Teamsection/>
          <Productdeal/>
      </>
  )
}

export default Home;