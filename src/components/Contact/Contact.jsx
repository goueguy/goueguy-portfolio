import React from 'react'
import ContactForm from './ContactForm'
import {FaLocationDot,FaPhone,FaSquareEnvelope,FaRegCircleCheck} from "react-icons/fa6"

export default function Contact() {
  return (
    <section id="contact" className='marge'>
        <div className="row">
            <div className='col-lg-12 text-center'>
                <h5 className='text-color-red'>CONTACTEZ-MOI</h5>
            </div>
        </div>
        <div className="row marge">
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-12 mb-2">
                        <div className="bg-gray shadow text-center p-2">
                            <span className='icon-contact'><FaLocationDot/></span>
                            <p className='text-white lh-lg'>Abidjan, Cocody-Blockhauss</p>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-2">
                        <div className="bg-gray shadow text-center p-2">
                            <span className='icon-contact'><FaPhone/></span>
                            <p className='text-white lh-lg'>+225 0103663050 / 0709162396</p>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-2">
                        <div className="bg-gray shadow text-center p-2">
                            <span className='icon-contact'><FaSquareEnvelope/></span>
                            <p className='text-white lh-lg'>jlagoueguy@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="bg-gray shadow text-center p-2">
                            <span className='icon-contact'><FaRegCircleCheck/></span>
                            <p className='text-white lh-lg'>Disponible pour le Freelance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}
