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
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                   <img src={PROJECT_NUMBER_TWO} className="img-height img-thumbnail" alt="" />
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                   <img src={PROJECT_NUMBER_THREE} className="img-height img-thumbnail" alt="" />
                </div>
            </div>
            <div className="marge col-lg-3">
                <div className="card">
                    <img src={PROJECT_NUMBER_FOUR} className="img-height img-thumbnail" alt="" />
                </div>
            </div>
            <div className='marge col-lg-12 text-center'>
                <a href="#" className='bg-view-more'>Voir tous les projets <FaArrowRight/></a>
            </div>
        </div>
    </section>
  )
}
