import React, { Component } from 'react';
import './contact.scss';
import axios from '../axios-contact';

class Contact extends Component{


    contactDataHandler=(event)=>{
        const contact={
            Name:'ssa',
            Subject:event.target.value,
            Email:event.target.value,
            Massage:event.target.value

        }
        axios.post('./contact.json',contact)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    render(){
        return(  
            <div className='contact'>
                <form className='contactForm'>
                    <h1 className='contactFormTitle'>Contact</h1>
                    Name: <input type='text' placeholder='Name' />
                    Subject: <input type='text' placeholder='Subject'/>
                    Email: <input type='text' placeholder='Email'/>
                    Message: <input className='contactFormMessage' type='text' placeholder='Message'/>
                    <button className='contactFormSend' onClick={this.contactDataHandler}>Send</button>
                </form>
            </div>
        )
    }   
}
export default Contact;