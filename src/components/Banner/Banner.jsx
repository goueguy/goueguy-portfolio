import React from 'react'
import photo from "/src/assets/images/illustration.svg";
import {FaLinkedinIn,FaSquareFacebook,FaSquareGithub} from "react-icons/fa6";
export default function Banner() {
  return (
    <div className='row banner'>
        <div className='col-lg-8'>
            <p className='text-white mb-3'><span>Bonjour, </span><span className='myself'>Je suis</span></p>
            <h2 className='text-white fw-bold mb-3'>GOUEGUY Jean-Louis Alexis,</h2>
            <p className='text-white'>passionné de développement web et mobile depuis l'âge de 20 ans, vivant en Côte d’Ivoire. <br/>Bienvenue sur mon portfolio.</p>
            <p className='text-white'></p>
            <section id='contact' className='mt-5'>
                <h5 className='text-white'>TROUVER MOI SUR:</h5>
                <div className='d-flex flex-row justify-content-start'>
                    <span className='icon text-white'><a target="_blank" href="https://www.linkedin.com/in/jean-louis-alexis-goueguy-455316199/"><FaLinkedinIn/></a></span>&nbsp;&nbsp;
                    <span className='icon text-white'><a target="_blank" href="https://www.facebook.com/jeanlouis.goueguy"><FaSquareFacebook/></a></span>&nbsp;&nbsp;
                    <span className='icon text-white'><a target="_blank" href="https://github.com/goueguy"><FaSquareGithub/></a></span>
                </div>
            </section>
            <section id='statistics' className='row'>
                <div className="col-lg-4">
                    <div className='stats-item'>
                        <p className='fw-bold text-color-red counter'>3 +</p>
                        <p>ANS D'EXPERIENCE</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='stats-item'>
                        <p className='fw-bold text-color-red counter'>4 +</p>
                        <p>PROJETS EN COURS</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='stats-item'>
                        <p className='fw-bold text-color-red counter'>13 +</p>
                        <p>PROJETS REALISES</p>
                    </div>
                </div>
            </section>
        </div>
        <div className='col-lg-4'>
            <div className="container-photo">
                <img src={photo} className="img" alt="Goueguy Jean-Louis photo" />
            </div>
        </div>
    </div>
  )
}
