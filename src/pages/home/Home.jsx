import React from "react";
import Navbar from "../layout/Navbar";
import Mainslider from "../layout/Mainslider";
import Services from "../layout/Services";
import Productmenu from "../layout/Productmenu";


const Home = () => {
  return(
      <>
          <Mainslider/>
          <Services/>
          <Productmenu/>
      </>
  )
}

export default Home;