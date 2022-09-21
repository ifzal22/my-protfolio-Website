import React from "react";
import About from "../About/About";
import Countac from "../Contuct/Countac";
import Home2 from "../Home2";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill.js";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Home2></Home2>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Countac></Countac>
    </div>
  );
};

export default Home;
