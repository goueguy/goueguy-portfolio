import React from 'react'
import { ACSC_IMAGE, CONGRES_IMAGE ,FODI_IMAGE, FONDATION_JIGHI_IMAGE } from '../../utils/showImage'
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
                   <img src={CONGRES_IMAGE} className="thumbnail" alt="" />
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                   <img src={FODI_IMAGE} className="thumbnail" alt="" />
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                   <img src={FONDATION_JIGHI_IMAGE} className="thumbnail" alt="" />
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                    <img src={ACSC_IMAGE} className="thumbnail" alt="" />
                </div>
            </div>
            <div className='marge col-lg-12 text-center'>
                <a href="#" className='bg-view-more'>Voir tous les projets <FaArrowRight/></a>
            </div>
        </div>
    </section>
  )
}
