import React from 'react'
import {PROJECT_NUMBER_FOUR, PROJECT_NUMBER_ONE, PROJECT_NUMBER_THREE, PROJECT_NUMBER_TWO } from '../../utils/showImage'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Button from '../Button/Button'
import {showContainerProjetSlide } from '../../utils/carousel'

export default function Projet() {
    const previousProject = ()=>{
        const {container, sliderWidth} = showContainerProjetSlide();
        container.scrollLeft-=sliderWidth;
    }
    const nextProject = ()=>{
        const {container, sliderWidth} = showContainerProjetSlide();
        container.scrollLeft+=sliderWidth;
    }

  return (
    <div id="projects" className='container'>
        <div className="row marge">
            <div className='col-lg-12 text-center'>
                <h5 className='text-color-red'>PROJETS RECENTS</h5>
            </div>
        </div>
        <div className="row marge" id='project-container'>
            <div className="col-lg-12 project">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                    <div className="card">
                            <img src={PROJECT_NUMBER_ONE} className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://www.salondesmetiersdecocody.com/" target="_blank" className='link fw-bold'>Salon des Métiers de Cocody</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card">
                        <img src={PROJECT_NUMBER_TWO} className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://sifage.netlify.app/" target="_blank" className='link fw-bold'>SIVAGE</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card">
                        <img src={PROJECT_NUMBER_THREE} className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://jighi.com/fr" target="_blank" className='link fw-bold'>JIGHI.com</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card">
                        <img src={PROJECT_NUMBER_FOUR} className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://www.i-tecks.com/" target="_blank" className='link fw-bold'>ITECKS</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 project">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <div className="card">
                            <img src="#" className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://jspotwifi.com/" target="_blank" className='link fw-bold'>EN COURS</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card">
                        <img src="#" className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://jspotwifi.com/" target="_blank" className='link fw-bold'>EN COURS</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card">
                        <img src="#" className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://jspotwifi.com/" target="_blank" className='link fw-bold'>EN COURS</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-3">
                        <div className="card">
                        <img src="#" className="img-height img-thumbnail" alt="" />
                            <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://jspotwifi.com/" target="_blank" className='link fw-bold'>EN COURS</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className='marge col-lg-12 text-center'>
                <div>
                    <Button onClick={previousProject} type="button" className="btn btn-primary testimony-switch" ><FaArrowLeft/></Button>&nbsp;&nbsp;&nbsp;
                    <Button onClick={nextProject} type="button" className="btn btn-primary testimony-switch" ><FaArrowRight/></Button>
                </div>
            </div>
        </div>
    </div>
  )
}
