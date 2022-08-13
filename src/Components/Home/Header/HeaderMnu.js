import React from "react";
import { Items } from "./Items";

import "./ProfileRouteHeader.css";
 

function  Manu({ isOpen, onChange }) {
  return (
      <>
    <div className={`Menu ${isOpen && "open"}`} >
      <span
   style={{
    fontSize:' 25px',
    color: 'wheat',
    padding:'10px'
}}
      id="close-login-form" 
        className="material-icons  fas fa-times"
        onClick={() => onChange(false)}
      >
        <span style={{color:'black'}} >  close</span>
      
      </span>
      
      <div 
    style={{marginTop:'-500px'}}
      className="Menu-items" id="">




        {Items.map((item, index) => (
          <a href={item.itemLink} key={index}>
            {item.itemText}
          </a>
        ))}
      </div>
    </div></>
  );
}

export default Manu;