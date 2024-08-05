import React from 'react'
import { BLOCKHAUSS_FESTIVAL, STANDARDIX_COMPANY, H_AND_CO_COMPANY, MANGORO_COMPANY } from '../../utils/showImage'

export default function Customer() {
  return (
    <section id="customer" className='marge'>
        <div className="row">
            <div className='col-lg-12'>
                <h5 className='text-color-red text-center'>MES CLIENTS</h5>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center row">
            <div className="marge col-lg-2">
                <div className="text-center">
                    <img src={`https://sifage.netlify.app/assets/sivage-cxOCVKnR.png`} className='w-100 company-logo'
                         alt='Standardix'/>
                </div>
            </div>
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
                    <img src={BLOCKHAUSS_FESTIVAL} className='company-logo' alt='Blockhauss Live Festival'/>
                </div>
            </div>
        </div>
    </section>
  )
}
