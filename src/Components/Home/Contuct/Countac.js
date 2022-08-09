
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import './Countec.css';
const Countac = () => {
    const [done, setDone] = useState(false)
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_3jar88e",
            "template_okr4r1m",
            formRef.current,
            "0DKhL0XX34jbIpm3L"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    return (
        <div>

<section class="contact" id="contact">

<h1 class="heading"> <span>contact</span> me </h1>

<div class="row">

    <div class="content">

        <h3 class="title">contact info</h3>

        <div class="info">
            <h3> <i class="fas fa-envelope"></i>ifzal.hussain1122@gmail.com </h3>
            <h3> <i class="fas fa-phone"></i>+8801880704115</h3>
          
            <h3> <i class="fas fa-map-marker-alt"></i> Sylhet, Bangladesh - 3103 </h3>
        </div>

    </div>

    <form action=" " ref={formRef} onSubmit={handleSubmit}>

        <input required type="text" placeholder="name" class="box" name="user_name"/>
        <input required type="email" placeholder="email" class="box"   name="user_email" />
        <input  required type="text" placeholder="subject" class="box"  name="user_subject"/>
        <textarea required     name="message" id="" cols="30" rows="10" class="box message" placeholder="message" ></textarea>
        <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>
        {done && <h2 style={{color:'yellow',margin:'10px'}}>Thank you...</h2>}
    </form>

</div>

</section>

        </div>
    );
};

export default Countac;