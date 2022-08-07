import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
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
        <h1 className="heading"> my <span>{details[about]?.name}</span> </h1>
           
        </div>
        <div className="p">
<div className="box  p-2 h-100">

    <img  className='p-img' src={details[about]?.img} alt=""/>
    
        
    </div>
    </div>
        <div>


        </div>


        <div></div>
        <div></div>
    </div>
    </>
    );
};

export default ProjectDetails;