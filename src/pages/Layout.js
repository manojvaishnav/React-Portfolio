import React, { useState } from "react";
import Nav from "../components/NavBar";
import Header from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

function Layout() {
  const [selectedColor, setSelectedColor] = useState("teal");

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  return (
    <>
      <Nav onSelectColor={handleColorSelection} />
      <Header color={selectedColor} />
      <About color={selectedColor} />
      <Education color={selectedColor} />
      <Skills color={selectedColor} />
      <Projects color={selectedColor} />
      <Contact color={selectedColor} />
      <Footer />
    </>
  );
}

export default Layout;
