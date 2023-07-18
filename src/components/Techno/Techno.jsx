import React from 'react'
import { BiLogoTailwindCss,BiLogoRedux,BiLogoBootstrap } from "react-icons/bi";
import {FaGit,FaFigma,FaFacebook,FaJs,FaNodeJs,FaSass,FaDatabase,FaPhp} from "react-icons/fa6";
export default function Techno() {
  return (
    <section id="techno" className='marge'>
        <div className="row">
            <div className='col-lg-12'>
                <h5 className='text-color-red'>TECHNOS UTILISEES</h5>
            </div>
            <div className="marge d-flex techno-card col-lg-6">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><FaJs/></span>
                    <div className='p-4'>
                        <h5 className='fw-bold'>Javascript / React JS / React Native</h5>
                        <p className='text-justify'>Applications mobiles , Web et sites web dynamiques, Validation des formulaires, animations des pages etc..</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-6">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><FaNodeJs/></span>
                    <div className='p-4'>
                        <h5 className='fw-bold'>Node JS</h5>
                        <p className='text-justify'>Conception de backend, API afin de dynamiser le contenu de vos sites web, applications web et mobiles etc..</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-6">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><FaPhp/></span>
                    <div className='p-4'>
                        <h5 className='fw-bold'>Laravel / PHP</h5>
                        <p className='text-justify'>Conception de backend, API afin de dynamiser le contenu de vos sites web, applications web et mobiles etc..</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-6">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><FaGit/></span>
                    <div className='p-4 w-100'>
                        <h5 className='fw-bold'>Git</h5>
                        <p className='text-justify'>Gestion de versions de code source.</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-6">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><BiLogoTailwindCss/></span>
                    <div className='p-4 w-100'>
                        <h5 className='fw-bold'>Tailwind CSS</h5>
                        <p className='text-justify'>Conception d'interfaces utilisateurs élégants, modernes, agréables et responsives.</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-6">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><BiLogoBootstrap/></span>
                    <div className='p-4 w-100'>
                        <h5 className='fw-bold'>Bootstrap 5.3</h5>
                        <p className='text-justify'>Conception d'interfaces utilisateurs élégants, modernes, agréables et responsives.</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-4">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><FaDatabase/></span>
                    <div className='p-4 w-100'>
                        <h5 className='fw-bold'>MySQL / MongoDB / FireBase</h5>
                        <p className='text-justify'>Conception de base de données relationnelles et NoSQL</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-4">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><FaFigma/></span>
                    <div className='p-4 w-100'>
                        <h5 className='fw-bold'>Figma</h5>
                        <p className='text-justify'>Maquettage,prototypage de sites web, d'applications web, landing page et applications mobiles</p>
                    </div>
                </div>
            </div>
            <div className="marge d-flex techno-card col-lg-4">
                <div className="w-100 d-flex dark-card align-items-center flex-row justify-content-between card">
                    <span className='icon-techno'><FaDatabase/></span>
                    <div className='p-4 w-100'>
                        <h5 className='fw-bold'>Trello / Notion</h5>
                        <p className='text-justify'>Gérer les tâches de manière éfficiente dans le cadre d'un projet</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
