import React from 'react';
import './about.css';
const About = () => {
    return (
        <div>
            
<section class="about" id="about">

<h1 class="heading"> <span>about</span> me </h1>

<div class="row">

    <div class="info">
        <h3> <span> name : </span> ifzal hussain</h3>
        <h3> <span> age : </span> 19 </h3>
        <h3> <span> qualification : </span> intermediate </h3>
        <h3> <span> post : </span> MERN-Stack Developer </h3>
        <h3> <span> student : </span>Programming Hero(0382)</h3>
        <h3> <span> language : </span> English & Bangla </h3>
       {/*  <a href="#"><button class="btn"> download CV <i class="fas fa-download"></i> </button></a> */}
    </div>

    <div class="counter">

        <div class="box">
            <span>1+</span>
            <h3>years of experience</h3>
        </div>

        <div class="box">
            <span>50+</span>
            <h3>porject completed</h3>
        </div>

        <div class="box">
            <span>30+</span>
            <h3>happy clients</h3>
        </div>

        <div class="box">
            <span>12+</span>
            <h3>awards won</h3>
        </div>

    </div>

</div>

</section>

        </div>
    );
};

export default About;