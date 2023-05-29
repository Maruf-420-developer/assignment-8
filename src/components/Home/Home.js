import React from "react";
import "./Home.css";
import SectionTwo from "../SectionTwo/SectionTwo";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Statistics from "../Statistics/Statistics";
const Home = () => {
  return (
    <>
      <div className="home">
        <h3>Online Coding </h3>
        <p>THE BEST SOLUTION FOR ONLINE COACHING</p>
        <a className="join" href="/home">
          Join Now <span>$50</span>
        </a>
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div>
        <div className="img4"></div>
      </div>
      <SectionTwo></SectionTwo>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
