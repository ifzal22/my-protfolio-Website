import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Projects.css';

const Allprojects = () => {
  
    const [myProjects , setProject] = useState([]);
    console.log(myProjects);
    useEffect(()=>{
        fetch('./data.json')
        .then(r => r.json())
        .then(data => setProject(data))
    },[])
    return (<><Header></Header>
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
     <div className='text-center'>
        <Link to="/" className='btn'>More Projects <i class="fas fa-arrow-right"></i> </Link> </div>
  
    </div>
</section>
        </div></>
    );
};

export default Allprojects;