import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Muhammad Hashim",
  title: "Web Developer & AI Enthusiast", // Corrected spelling
  email: "muhammad.hashimsid@gmail.com",
  gitHub: "https://github.com/muhammadhashim06",
  instagram: "", // Leave empty if not used
  linkedIn: "https://www.linkedin.com/in/muhammad-hashim-6055b222b/",
  medium: "", // Leave empty if not used
  twitter: "", // Leave empty if not used
  youTube: "", // Leave empty if not used
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
