import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Carousel from "../Carousal";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />

        <div className="home-container">
          <h2 className="section-title">Explore Beautiful Destinations</h2>
          <p className="section-description">
            Discover amazing places to visit and enjoy a wonderful experience. Click below to explore destinations on the map.
          </p>
          <Link to="/map" className="explore-link">
            Show Destinations
          </Link>
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
