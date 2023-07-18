import React from 'react'
import {FaJs,FaMobileScreenButton,FaRegRectangleList,FaGraduationCap} from "react-icons/fa6";
export default function Services() {
  return (
    <section id="services" className='marge'>
        <div className='row'>
            <div className='col-lg-12'>
                <h5 className='text-color-red'>MES SERVICES</h5>
            </div>
            <div className="mt-4 col-lg-3">
                <div className="card dark-card">
                    <span className='icon-service'><FaJs/></span>
                    <h5 className='mt-3 mb-3 fw-bold'>APPLICATIONS WEB</h5>
                    <p className='text-justify'>Grâce à une approche centrée sur l’utilisateur l'interface de votre application ou site web sera dynamique et moderne.</p>
                </div>
            </div>
            <div className="mt-4 col-lg-3">
                <div className="card dark-card">
                    <span className='icon-service'><FaMobileScreenButton/></span>
                    <h5 className='mt-3 mb-3 fw-bold'>APPLICATIONS MOBILES</h5>
                    <p className='text-justify'>Je conçois des applications mobiles sécurisées , innovantes et performantes sur IOS et Android en partant d'une maquette.</p>
                </div>
            </div>
            <div className="mt-4 col-lg-3">
                <div className="card dark-card">
                    <span className='icon-service'><FaRegRectangleList/></span>
                    <h5 className='mt-3 mb-3 fw-bold'>SEO</h5>
                    <p className='text-justify'>J’améliore le positionnement de vos pages, sites ou applications web dans la page des résultats des moteurs de recherches.</p>
                </div>
            </div>
            <div className="mt-4 col-lg-3">
                <div className="card dark-card">
                    <span className='icon-service'><FaGraduationCap/></span>
                    <h5 className='mt-3 mb-3 fw-bold'>COACHING</h5>
                    <p className='text-justify'>J'accompagne toutes personnes ayant le désir d’apprendre la programation à réaliser des projets de A à Z.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
