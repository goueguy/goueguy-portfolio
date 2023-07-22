import React from 'react'
import { BLOCKHAUSS_FESTIVAL, ECK_COMPANY, H_AND_CO_COMPANY, MANGORO_COMPANY } from '../../utils/showImage'

export default function Customer() {
  return (
    <section id="customer" className='marge'>
        <div className="row">
            <div className='col-lg-12'>
                <h5 className='text-color-red'>MES CLIENTS</h5>
            </div>
        </div>
        <div className="row">
            <div className="marge col-lg-2">
                <div className="text-center">
                   <img src={H_AND_CO_COMPANY} className='company-logo' alt='H & CO GROUP'/>
                </div>
            </div>
            <div className="marge col-lg-2">
                <div className="text-center">
                    <img src={MANGORO_COMPANY} className='company-logo' alt='Communauté Mangoro'/>
                </div>
            </div>
            <div className="marge col-lg-2">
                <div className="text-center">
                    <img src={ECK_COMPANY} className='company-logo' alt='ECK'/>
                </div>
            </div>
            <div className="marge col-lg-2">
                <div className="text-center">
                    <img src={BLOCKHAUSS_FESTIVAL} className='company-logo' alt='Blockhauss Live Festival'/>
                </div>
            </div>
        </div>
    </section>
  )
}
