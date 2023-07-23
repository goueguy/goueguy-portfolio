import React from 'react'
import {PROJECT_NUMBER_FOUR, PROJECT_NUMBER_ONE, PROJECT_NUMBER_THREE, PROJECT_NUMBER_TWO } from '../../utils/showImage'
import { FaArrowRight } from 'react-icons/fa6'

export default function Projet() {
  return (
    <section id="projets" className='marge'>
        <div className="row">
            <div className='col-lg-12 text-center'>
                <h5 className='text-color-red'>PROJETS RECENTS</h5>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                   <img src={PROJECT_NUMBER_ONE} className="img-height img-thumbnail" alt="" />
                   <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="http://communautemangoro.josselinbrou.com" target="_blank" className='link fw-bold'>Communauté Mangoro</a></p>
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                   <img src={PROJECT_NUMBER_TWO} className="img-height img-thumbnail" alt="" />
                   <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="http://congres.eckankar-ci.org/" target="_blank" className='link fw-bold'>Congrès ECK</a></p>
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                   <img src={PROJECT_NUMBER_THREE} className="img-height img-thumbnail" alt="" />
                   <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://jspotwifi.com/" target="_blank" className='link fw-bold'>J-SPOT</a></p>
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                    <img src={PROJECT_NUMBER_FOUR} className="img-height img-thumbnail" alt="" />
                   <p className='text-center mt-2'><a title="Cliquez pour voir le détail" href="https://jighi.com/" target="_blank" className='link fw-bold'>Site web entreprise JIGHI</a></p>
                </div>
            </div>
            <div className='marge col-lg-12 text-center'>
                <a href="#" className='bg-view-more'>Voir tous les projets <FaArrowRight/></a>
            </div>
        </div>
    </section>
  )
}
