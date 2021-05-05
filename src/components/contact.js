import React, { useState } from 'react';
import './contact.scss';
import axios from '../axios-contact';

const Contact =()=>{

    const [name ,setName] = useState("");
    const [subject , setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message , setMessage] = useState("");

    const [loader , setLoader] = useState("");

     const contactDataHandler=(event)=>{
        event.preventDefault();
        setLoader(true);

        const contact ={
            name:name,
            subject:subject,
            email:email,
            message:message
        }

        axios.post('/contact.json',contact)
        .then(()=>{
            alert("Message has been submitted 😊🙌 " );
            setLoader(false);
        })

        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
    }


    return(  
        <div className='contact'>
            <form className='contactForm' onSubmit={contactDataHandler}>
                <h1 className='contactFormTitle'>Contact</h1>
                <label>Name : </label>
                <input type='text' placeholder='Name' 
                    value={name} 
                    onChange={(event)=>setName(event.target.value)} />

                <label>Subject :</label>
                <input type='text' placeholder='Subject'
                    value={subject} 
                    onChange={(event)=>setSubject(event.target.value)}/>
                
                <label>Email :</label>
                <input type='text' placeholder='Email'
                    value={email} 
                    onChange={(event)=>setEmail(event.target.value)}/>

                <label>Message :</label>
                <textarea placeholder='Message'
                    value={message} 
                    onChange={(event)=>setMessage(event.target.value)}></textarea>

                <button className='contactFormSend' style={{background: loader ? "#a9a9a9":"#dc143c"}} >Send</button>
            </form>
        </div>
    )      
}
export default Contact;