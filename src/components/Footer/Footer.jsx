import React from 'react'
import Logo from '../Logo/Logo'
import { FaLinkedinIn, FaSquareFacebook, FaSquareGithub } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className='container'>
        <div className="row">
           <div className="col-lg-12 d-flex justify-content-center">
                <Logo/>
           </div>
           <div className="col-lg-2 offset-lg-5 mt-4">
                <div className='d-flex flex-row justify-content-around'>
                    <span className='icon text-white'><a target="_blank" href="https://www.linkedin.com/in/jean-louis-alexis-goueguy-455316199/"><FaLinkedinIn/></a></span>
                    <span className='icon text-white'><a target="_blank" href="https://www.facebook.com/jeanlouis.goueguy"><FaSquareFacebook/></a></span>
                    <span className='icon text-white'><a target="_blank" href="https://github.com/goueguy"><FaSquareGithub/></a></span>
                </div>
            </div>
            <div className="col-lg-12 mt-4">
                <p className='copyright text-white text-center'>JG &copy; {new Date().toLocaleDateString("fr-FR",{
                    year:'numeric'
                })}  Tous droits réservés par Goueguy Jean-Louis Alexis</p>
               
            </div>
        </div>
    </footer>
  )
}
