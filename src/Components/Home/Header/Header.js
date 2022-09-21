import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "../../Header.css";
import Manu from "./HeaderMnu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="user">
          <div className=" text-center">
            <img
              className=""
              src="https://i.ibb.co/31CHk9T/rsz-beautyplus-20200725153101862-save-1.png"
              alt=""
            />
            <h3 className="name">Ifzal Hussain</h3>
          </div>

          <p className="post">
            {" "}
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "MERN-Stack Developer!",
                "Javascript Developer!",
                "React-Developer!",
                "Front-end Developer!",
              ]}
              loop={3}
              cursor
              cursorStyle="💻"
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </p>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home" href="#home">
                home
              </Link>
            </li>
            <li>
              <a href="#home">about</a>
            </li>
            <li>
              <a href="#education">education</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <!-- header section ends --> */}
      <div>
        <span
          style={{
            fontSize: " 25px",
            color: "wheat",
            padding: "10px",
          }}
          id="MANU"
          className="material-icons menu-btn fas fa-bars"
          onClick={() => setIsOpen(true)}
        >
          {" "}
          MENEU
        </span>
        <Manu isOpen={isOpen} onChange={setIsOpen}></Manu>
      </div>
    </div>
  );
};

export default Header;
