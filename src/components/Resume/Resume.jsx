import React from 'react'

export default function Resume() {
  return (
    <section id="resume" className='marge'>
        <div className='row'>
            <div className="row">
                {/* EXPERIENCE */}
                <section className="col-lg-6">
                    <header className="fw-bold title text-white">
                        <span className='text-color-red'>EXPERIENCE</span>
                    </header>
                    <div className="content-one">
                        <div className="row">
                            <div className="w-100 col-lg-12 box border-radius mb-3 text-white">
                                <h4>Du 10 Août 2021 à Aujourd'hui</h4>
                                <span className='fw-bold'>NSIA PARTICIPATIONS</span>
                                <p className='lh-lg'>Développeur Web Fullstack</p>
                            </div>
                            <div className="col-lg-12 box border-radius mb-3 text-white">
                                <h4>15 Mai 2018 – 15 Novembre 2018</h4>
                                <span className='fw-bold'>ALGORITHME CI</span>
                                <p className='lh-lg'>Développeur Web Stagiaire</p>
                            </div>
                            <div className="col-lg-12 box border-radius mb-3 text-white">
                                <h4>15 Août 2014 – 15 Juin 2015</h4>
                                <span className='fw-bold'>SODEMI</span>
                                <p className='lh-lg'>Stagiaire Technicien Réseaux Informatiques</p>
                            </div>
                            <div className="col-lg-12 box border-radius mb-3 text-white">
                                <h4>15 Août 2014 – 15 Juin 2015</h4>
                                <span className='fw-bold'>SODEMI</span>
                                <p className='lh-lg'>Stagiaire Technicien Réseaux Informatiques</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* EDUCATION */}
                <section className="col-lg-6">
                    <header className="fw-bold title text-white text-right">
                       <span className='text-color-red'>EDUCATION</span>
                    </header>
                    <div className="content-two">
                       <div className="row">
                            <div className="box border-radius mb-3 text-white">
                                <h4>Du 10 Août 2021 à Aujourd'hui</h4>
                                <span className='fw-bold'>NSIA PARTICIPATIONS</span>
                                <p className='lh-lg'>Développeur Web Fullstack</p>
                            </div>
                            <div className="box border-radius mb-3 text-white">
                                <h4>15 Mai 2018 – 15 Novembre 2018</h4>
                                <span className='fw-bold'>ALGORITHME CI</span>
                                <p className='lh-lg'>Développeur Web Stagiaire</p>
                            </div>
                            <div className="box border-radius mb-3 text-white">
                                <h4>15 Août 2014 – 15 Juin 2015</h4>
                                <span className='fw-bold'>SODEMI</span>
                                <p className='lh-lg'>Stagiaire Technicien Réseaux Informatiques</p>
                            </div>
                            <div className="box border-radius mb-3 text-white">
                                <h4>15 Août 2014 – 15 Juin 2015</h4>
                                <span className='fw-bold'>SODEMI</span>
                                <p className='lh-lg'>Stagiaire Technicien Réseaux Informatiques</p>
                            </div>
                       </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
  )
}
