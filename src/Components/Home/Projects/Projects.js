import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  
    const [myProjects , setProject] = useState([]);
    console.log(myProjects);
    useEffect(()=>{
        fetch('./data.json')
        .then(r => r.json())
        .then(data => setProject(data))
    },[])
    return (
        <div>
            
<section className="portfolio" id="portfolio">

<h1 className="heading"> my <span>portfolio</span> </h1>

<div class="row">


    {
        myProjects.map(p=>
        <>
            <div className="p">
<div className="box  p-2">
{
    p.img?.length === 0 ?
    'loding......' :<Link to={`/about/${p.id}`}> 
    <img className='p-img' src={p?.img} alt=""/>
    </Link>

}
        
    </div>
    </div>
    
      
    
 
    </>




            )
         
    }

  
    </div>
</section>
        </div>
    );
};

export default Projects;