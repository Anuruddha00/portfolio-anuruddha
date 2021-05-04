import React, { Component } from 'react';
import './contact.scss';
import axios from '../axios-contact';

class Contact extends Component{

    state={
        name:'',
        subject:'',
        email:'',
        message:''   
    }

    contactDataHandler=()=>{
        const contact={
            name:this.state.name,
            subject:this.state.subject,
            email:this.state.email,
            message:this.state.message

        }
        axios.post('/contact.json',contact)
        .then(response=>{
            console.log(response)
        })
    }

    render(){
        return(  
            <div className='contact'>
                <form className='contactForm'>
                    <h1 className='contactFormTitle'>Contact</h1>
                    Name: <input type='text' placeholder='Name' 
                            value={this.state.name} 
                            onChange={(event)=>this.setState({name:event.target.value})} />

                    Subject: <input type='text' placeholder='Subject'
                                value={this.state.subject} 
                                onChange={(event)=>this.setState({subject:event.target.value})}/>

                    Email: <input type='text' placeholder='Email'
                                value={this.state.email} 
                                onChange={(event)=>this.setState({email:event.target.value})}/>

                    Message: <input className='contactFormMessage' type='text' placeholder='Message'
                                value={this.state.message} 
                                onChange={(event)=>this.setState({message:event.target.value})}/>
                    <button className='contactFormSend' onClick={this.contactDataHandler}>Send</button>
                </form>
            </div>
        )
    }   
}
export default Contact;