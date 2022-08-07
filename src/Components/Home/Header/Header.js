
import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import "../../Header.css";
const Header = () => {
    return (
        <div>
        <header className='header'>
            
            <div className="user">
                <div className=' text-center'>
                <img  className='' src='https://i.ibb.co/31CHk9T/rsz-beautyplus-20200725153101862-save-1.png' alt=""/>
        <h3 className="name">Ifzal Hussain</h3>
                </div>
      
        <p className="post">   {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN-Stack Developer!', 'Javascript Developer!', 'React-Developer!', 'Front-end Developer!']}
                                loop={3}
                                cursor
                                cursorStyle='💻'
                                typeSpeed={120}
                                deleteSpeed={70}
                                delaySpeed={1500}


                            /></p>
    </div>

    <nav className="navbar">
        <ul>
            <li><Link to='/home' href="#home">home</Link></li>
            <li><a href="#about">about</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>
        </header>
        {/* <!-- header section ends --> */}

        <div id="menu" class="fas fa-bars"></div></div>
    );
};

export default Header;