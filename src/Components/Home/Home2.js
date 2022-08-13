import React from 'react';
import resume from '../resume/Ifzal-Hussain-RESUME.pdf';
import './Home.css';
const Home2 = () => {
    return (
        <div>
            
{/* <!-- home section starts  --> */}

<section className="home" id="home">

    <h3>HI THERE !</h3>
    <h1>I'M <span>ifzal hussain</span></h1>
    <p>A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.
    </p> 
    <span>  
        <span className='m-2'>  
         <a href={resume} download="Ifzal_Resume"><button className="btn">resume<i className="fas fa-download"></i></button></a>
         </span>
       <span>
       <a href='https://www.linkedin.com/in/ifzal-hussain-576376230/' ><button className="btn">Linke-din<i className="fab fa-linkedin p-2"></i></button></a>
       </span>
       <span className='m-2'>
       <a href='https://github.com/ifzal22' ><button className="btn">Git-hub<i class="fab fa-github"></i></button></a>
       </span>
        
    
    
    
    </span>
  

</section>



        </div>
    );
};

export default Home2;