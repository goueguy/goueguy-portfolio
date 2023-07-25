import React, { useRef } from 'react'
import Button from '../Button/Button'
import {FaRegPaperPlane} from "react-icons/fa6"
export default function ContactForm({sendemail,errors}) {
    
    const nameRef = useRef();
    const contactFormRef = useRef();
    const telephoneRef = useRef();
    const emailRef = useRef();
    const objetRef = useRef();
    const messageRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const contactFormData = {
            name:nameRef.current.value,
            telephone:telephoneRef.current.value,
            email:emailRef.current.value,
            objet:objetRef.current.value,
            message:messageRef.current.value
        }
        sendemail(contactFormData);
        contactFormRef.current.reset();
    }
  return (
    <form className='contactForm' onSubmit={handleSubmit} ref={contactFormRef}>
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="text" name="nom" ref={nameRef} className="form-control p-2" placeholder='Entrer votre nom'/>
                    <span className='text-danger fw-bold'>{errors.errors!=null ? errors.errors.name:""}</span>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="tel" name="telephone" ref={telephoneRef} className="form-control p-2" placeholder='Entrer votre numéro de téléphone'/>
                    <span className='text-danger fw-bold'>{errors.errors!=null ? errors.errors.telephone:""}</span>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="email" name="email" ref={emailRef} className="form-control p-2" placeholder='Entrer votre adresse email'/>
                    <span className='text-danger fw-bold'>{errors.errors!=null ? errors.errors.email:""}</span>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="text" name="objet" ref={objetRef} className="form-control p-2" placeholder='Entrer votre Objet'/>
                    <span className='text-danger fw-bold'>{errors.errors!=null ? errors.errors.objet:""}</span>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                   <textarea className="form-control" ref={messageRef} name="message" id="message" cols="30" rows="8" placeholder='Tapez votre message'></textarea>
                   <span className='text-danger fw-bold'>{errors.errors!=null ? errors.errors.message:""}</span>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <Button type="submit" className="mt-4 btn btn-dark">Envoyer le message &nbsp;<FaRegPaperPlane/></Button>
        </div>
    </form>
  )
}
