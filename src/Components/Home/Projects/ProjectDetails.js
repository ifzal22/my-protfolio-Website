import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './projectsDetails.css';
const ProjectDetails = () => {
    const {about} = useParams();
    const [details, setDetails] = useState([]);
    console.log(details);


    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
    <> 
    <Header></Header>
    <div>
        <div className='mt-5'>
        <h1 className="heading"> my <span>{details[about]?.name} WEB</span> WEB </h1>
           
        </div>
        <div className="p1">
<div className="box  p-2 h-100 text-center">
<div>
<img  className='p-img' src={details[about]?.img} alt=""/>
</div>  </div> </div>

<div className='text-center'>
<a href='https://car-rileted-web.web.app/home' className='btn m-2 '>LIVE</a>
<button className='btn m-2 '>Client Code</button>
<button className='btn m-2 '> Server Code</button>
</div>


        <div className='text-center'>
        <h1 style={{color:'white' , textShadow: '2px 2px 4px #000000'}} class=" "> Web  <span style={{color:'yellow'}}>Features</span> </h1>

        </div>


        <div></div>
        <div></div>
    </div>
    </>
    );
};

export default ProjectDetails;