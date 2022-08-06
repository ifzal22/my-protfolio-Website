import React from 'react';
import resume from '../resume/IFZAL HUSSAIN  .pdf';
import './Home.css';
const Home2 = () => {
    return (
        <div>
            
{/* <!-- home section starts  --> */}

<section class="home" id="home">

    <h3>HI THERE !</h3>
    <h1>I'M <span>ifzal hussain</span></h1>
    <p>A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.
    </p>
    <a href={resume} download="Ifzal_Resume"><button class="btn">resume<i class="fas fa-download"></i></button></a>

</section>



        </div>
    );
};

export default Home2;