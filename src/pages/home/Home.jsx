import React from "react";
import Navbar from "../layout/Navbar";
import Mainslider from "../layout/Mainslider";
import Services from "../layout/Services";
import Productmenu from "../layout/Productmenu";
import Teamsection from "../layout/Teamsection";


const Home = () => {
  return(
      <>
          <Mainslider/>
          <Services/>
          <Productmenu/>
          <Teamsection/>
      </>
  )
}

export default Home;