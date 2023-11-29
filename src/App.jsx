/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 * Foto de <a href="https://unsplash.com/es/@sortino?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joshua Sortino</a> en <a href="https://unsplash.com/es/fotos/fotografia-del-techo-a-vista-de-gusano-LqKhnDzSF-8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Carlos Fernández",
  title: "Data Engineer",
  email: "cefernandezabad@gmail.com",
  gitHub: "https://github.com/ingcarlosefren",
  instagram: "microsoft",
  linkedIn: "www.linkedin.com/in/carlos-efren-fernandez-abad-a72297156",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#31B49E"; // 
const secondaryColor = "#32D4AF"; //

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
