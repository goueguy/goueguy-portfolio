import React from 'react'
import Button from '../Button/Button'
import {FaRegPaperPlane} from "react-icons/fa6"
export default function ContactForm() {
  return (
    <form className='contactForm'>
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="text" name="nom" className="form-control p-2" placeholder='Entrer votre nom'/>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="tel" name="telephone" className="form-control p-2" placeholder='Entrer votre numéro de téléphone'/>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="email" name="email" className="form-control p-2" placeholder='Entrer votre adresse email'/>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="form-group">
                    <input type="text" name="objet" className="form-control p-2" placeholder='Entrer votre Objet'/>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                   <textarea className="form-control" name="message" id="message" cols="30" rows="8" placeholder='Tapez votre message'></textarea>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <Button className="mt-4 btn btn-dark">Envoyer le message &nbsp;<FaRegPaperPlane/></Button>
        </div>
    </form>
  )
}
