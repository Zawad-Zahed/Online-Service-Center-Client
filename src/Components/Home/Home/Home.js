import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import OurWork from "../OurWork/OurWork";
import Reviews from "../Reviews/Reviews";
import OurFeature from "../OurFeature/OurFeature";
import Header from "./../Header/Header";
import Services from "./../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <OurWork></OurWork>
      <Reviews></Reviews>
      <OurFeature></OurFeature>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
