import React from 'react'

export default function Resume() {
  return (
    <section id="resume" className='marge'>
        <div className='row'>
            <div className='col-lg-12 text-center'>
                <h5 className='text-color-red'>MES EXPERIENCES</h5>
            </div>
            <div className="col-lg-6 marge">
                <div className="row">
                   <div className="timeline">
                        <div className="w-100 item mb-3 col-lg-6">
                            <div className="border-radius item-dark">
                                <h5>Du 10 Août 2021 à Aujourd'hui</h5>
                                <span className='fw-bold'>NSIA PARTICIPATIONS</span>
                                <p className='lh-lg'>Développeur Web Fullstack</p>
                            </div>
                        </div>
                        <div className="w-100 item mb-3 col-lg-6">
                            <div className="border-radius item-dark">
                                <div className="experience-item">
                                    <h5>15 Mai 2018 – 15 Novembre 2018</h5>
                                    <span className='fw-bold'>ALGORITHME CI</span>
                                    <p className='lh-lg'>Développeur Web Stagiaire</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 item mb-3 col-lg-6">
                            <div className="border-radius item-dark">
                                <div className="experience-item">
                                    <h5>15 Août 2014 – 15 Juin 2015</h5>
                                    <span className='fw-bold'>SODEMI</span>
                                    <p className='lh-lg'>Stagiaire Technicien Réseaux Informatiques</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div className="col-lg-6 marge">
                <div className="row">
                   <div className="timeline">
                        <div className="w-100 item mb-3 col-lg-6">
                            <div className="border-radius item-dark">
                                <div className="experience-item">
                                    <h5>Du 28 Juin 2019 à 20 Décembre 2019</h5>
                                    <span className='fw-bold'>JIGHI</span>
                                    <p className='lh-lg'>Développeur Web</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 item mb-3 col-lg-6">
                            <div className="border-radius item-dark">
                                <div className="experience-item">
                                    <h5>Du 12 Février 2019 – 27 Juin 2019</h5>
                                    <span className='fw-bold'>TAILORED SERVICE PRO (TSP)</span>
                                    <p className='lh-lg'>Développeur Web Stagiaire</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 item mb-3 col-lg-6">
                            <div className="border-radius item-dark">
                                <div className="experience-item">
                                    <h5>16 Octobre 2017 – 16 Avril 2018</h5>
                                    <span className='fw-bold'>FODI</span>
                                    <p className='lh-lg'>Webmaster Stagiaire</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}
