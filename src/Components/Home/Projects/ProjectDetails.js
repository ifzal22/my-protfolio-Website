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
    <div style={{height:'1200px'}}>
        <div className='mt-5'>
        <h1 className="heading"> my <span>{details[about]?.name} WEB</span> WEB </h1>
           
        </div>
        <div className="p1">
<div className="box  p-2 h-100 text-center">
<div>
<img  className='p-img' src={details[about]?.img} alt=""/>
</div>  </div> </div>

<div className='text-center'>

<a href={details[about]?.Live} className='btn m-2 BTN '>
    <i class="fab fa-github"></i>LIVE</a>
<a className='btn m-2 ' href={details[about]?.client}>
<i class="fas fa-server"></i>Client Code</a>
<a href={details[about]?.server} className='btn m-2 href={details[about]?.server}'> 
<i class="fab fa-codepen"></i>Server Code</a>
</div>

{/* <a href={resume} download="Ifzal_Resume"><button class="btn">resume<i class="fas fa-download"></i></button></a> */}
<div className='m-8' style={{marginTop:'30px'}}>
        <div className='text-center'>
        <h1 style={{color:'white' , textShadow: '2px 2px 4px #000000'}} class=" "> Web  <span style={{color:'yellow'}}>Features</span> </h1>

        </div>

<div className='w-75 text-center mx-auto'>
    <h3 style={{color:'white' , textShadow: '2px 2px 4px #000000'}}><span style={{color:'yellow',fontSize:'35px'}} className='m-3'>1.</span>{details[about]?.features1}</h3>
    <h3 style={{color:'white' , textShadow: '2px 2px 4px #000000'}}><span style={{color:'yellow',fontSize:'35px'}} className='m-3'>2.</span>{details[about]?.features2}</h3>
    <h3 style={{color:'white' , textShadow: '2px 2px 4px #000000'}}><span style={{color:'yellow',fontSize:'35px'}} className='m-3'>3.</span>{details[about]?.features3}</h3>


    <div className='mt-5'>
    <h3 style={{color:'white' , textShadow: '2px 2px 4px #000000'}}><span style={{color:'yellow',fontSize:'35px'}} className='m-3'>***Description</span>{details[about]?.about}</h3> 
    </div>


{
 details[about]?.email &&   
 <div className='mt-5'>
 <h5 style={{color:'white' , textShadow: '2px 2px 4px #000000'}}><span style={{color:'yellow',fontSize:'28px'}} className='m-3'>*Email :</span>{details[about]?.email}</h5> 
 <h5 style={{color:'white' , textShadow: '2px 2px 4px #000000'}}><span style={{color:'yellow',fontSize:'28px'}} className='m-3'>*Password :</span>{details[about]?.password}</h5> 
 </div>
}





</div>
      
       </div>
    </div>
    </>
    );
};

export default ProjectDetails;