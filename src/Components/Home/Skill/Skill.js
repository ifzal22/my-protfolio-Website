import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <div>
      <h1 class="heading">
        my <span>skill</span>
      </h1>

      <div className="row container mx-auto item-center SKILL">
        {/* HTML */}
        <div className="col-md-3  m-3 CARD container">
          <div className="ICON text-center">
            <i class="fab fa-html5"></i>
            <h3 className="">HTML</h3>
          </div>
          <p className="text-center">
            I can very well.I have been working with MTML for 1+ years. My HTML5
            learning skill average 95%.
          </p>
        </div>
        {/* css */}
        <div className="col-md-3  m-3 CARD">
          <div className="ICON text-center">
            <i class="fab fa-css3"></i>
            <h3 className="">CSS</h3>
          </div>
          <p className="text-center">
            I Have more css knowledge. I have been working with CSS for 1+ year.
            My CSS learning skill average 90%.
          </p>
        </div>
        {/* css */}
        <div className="col-md-3  m-3 CARD">
          <div className="ICON text-center">
            <i class="fab fa-js"></i>
            <h3 className="">JAVA SCRIPT</h3>
          </div>
          <p className="text-center">
            I Have advanced l knowledge about JS . I have done many projects
            with JS.I Have been working with JS for 1 years. MY Java Script
            scroll avarahe 80%.
          </p>
        </div>
        {/* css */}
        <div className="col-md-3  m-3 CARD">
          <div className="ICON text-center">
            <i class="fab fa-react"></i>
            <h3 className="">REACT.JS</h3>
          </div>
          <p className="text-center">
            I have been working with REACT.js for 1+ year. My React.JS learning
            skill average 90%.
          </p>
        </div>
        {/* css */}
        <div className="col-md-3  m-3 CARD">
          <div className="ICON text-center">
            <i class="fab fa-node"></i>
            <h3 className="">NODE.JS</h3>
          </div>
          <p className="text-center">
            I Have secondary knowledge about Node.JS. I have been working with
            Node.JS for 9+ months. My Node.JS learning skill average 70%.
          </p>
        </div>
        {/* css */}
        <div className="col-md-3  m-3 CARD">
          <div className="ICON text-center">
            <i class="fas fa-server"></i>
            <h3 className="">MONGO DB</h3>
          </div>
          <p className="text-center">
            I always useing Mongo DB as database.I have more knowledge about
            database.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
