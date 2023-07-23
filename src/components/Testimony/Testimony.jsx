import React, { useState } from 'react'
import Button from '../Button/Button'
import {FaArrowRight,FaArrowLeft,FaComment,FaStarHalfStroke,FaUser} from "react-icons/fa6"
import showNumberTestimonialSlide from '../../utils/carousel';

export default function Testimony() {

    const [slide, setSlide]=useState(0);
    const handleNextCarousel = ()=>{
        const nbrOfSlides = showNumberTestimonialSlide();
        if(slide<nbrOfSlides-1){
            setSlide(slide+1);
        }else{
            setSlide(0);
        }
    }
    const handlePreviousCarousel = ()=>{
        const nbrOfSlides = showNumberTestimonialSlide();
        if(slide<nbrOfSlides-1){
            setSlide(slide+1);
        }else{
            setSlide(slide-1);
        }
       
    }
  return (
    <section id="testimony" className='marge'>
        <div className="row">
            <div className="col-lg-12 text-center">
                <h5 className='text-color-red'>CE QUE DISENT LES CLIENTS</h5>
            </div>
            <div className='col-lg-12 d-flex flex-wrap justify-content-end'>
                <div>
                    <Button type="button" className="btn btn-primary testimony-switch" onClick={handlePreviousCarousel}><FaArrowLeft/></Button>&nbsp;&nbsp;&nbsp;
                    <Button type="button" className="btn btn-primary testimony-switch" onClick={handleNextCarousel}><FaArrowRight/></Button>
                </div>
            </div>
        </div>
        <section className='carousel-container'>
            <div className={`row carousel ${slide===0 ? "show":"hidden"}`}>
                <div className="col-lg-4 marge">
                        <div className="card dark-card p-3">
                            <div className='d-flex justify-content-between mb-4'>
                                <span className='comment-icon'><FaComment/></span>
                                <span className='stars-icon'><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquam illum quaerat vel nisi corporis vero. Ipsam labore quaerat consequuntur magni modi corrupti. Iure harum laboriosam illo est ipsum commodi.</p>
                            <div className='d-flex align-items-center'>
                                <div className='mr-3'>
                                    <div className='avatar'><FaUser/></div>
                                </div>
                                <div className='ml-3'>
                                    <div className='fw-bold'>Sam Freeman</div>
                                    <div>Business Manager and CEO</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 marge">
                    <div className="card dark-card p-3">
                        <div className='d-flex justify-content-between mb-4'>
                            <span className='comment-icon'><FaComment/></span>
                            <span className='stars-icon'><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquam illum quaerat vel nisi corporis vero. Ipsam labore quaerat consequuntur magni modi corrupti. Iure harum laboriosam illo est ipsum commodi.</p>
                        <div className='d-flex align-items-center'>
                            <div className='mr-3'>
                                <div className='avatar'><FaUser/></div>
                            </div>
                            <div className='ml-3'>
                                <div className='fw-bold'>Sam Freeman</div>
                                <div>Business Manager and CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 marge">
                    <div className="card dark-card p-3">
                        <div className='d-flex justify-content-between mb-4'>
                            <span className='comment-icon'><FaComment/></span>
                            <span className='stars-icon'><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquam illum quaerat vel nisi corporis vero. Ipsam labore quaerat consequuntur magni modi corrupti. Iure harum laboriosam illo est ipsum commodi.</p>
                        <div className='d-flex align-items-center'>
                            <div className='mr-3'>
                                <div className='avatar'><FaUser/></div>
                            </div>
                            <div className='ml-3'>
                                <div className='fw-bold'>Sam Freeman</div>
                                <div>Business Manager and CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row carousel ${slide===1 ? "show":"hidden"}`}>
                <div className="col-lg-4 marge">
                        <div className="card dark-card p-3">
                            <div className='d-flex justify-content-between mb-4'>
                                <span className='comment-icon'><FaComment/></span>
                                <span className='stars-icon'><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquam illum quaerat vel nisi corporis vero. Ipsam labore quaerat consequuntur magni modi corrupti. Iure harum laboriosam illo est ipsum commodi.</p>
                            <div className='d-flex align-items-center'>
                                <div className='mr-3'>
                                    <div className='avatar'><FaUser/></div>
                                </div>
                                <div className='ml-3'>
                                    <div className='fw-bold'>Sam Freeman</div>
                                    <div>Jighi CEO</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 marge">
                    <div className="card dark-card p-3">
                        <div className='d-flex justify-content-between mb-4'>
                            <span className='comment-icon'><FaComment/></span>
                            <span className='stars-icon'><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquam illum quaerat vel nisi corporis vero. Ipsam labore quaerat consequuntur magni modi corrupti. Iure harum laboriosam illo est ipsum commodi.</p>
                        <div className='d-flex align-items-center'>
                            <div className='mr-3'>
                                <div className='avatar'><FaUser/></div>
                            </div>
                            <div className='ml-3'>
                                <div className='fw-bold'>Sam Freeman</div>
                                <div>Marketing Dept at Facebook</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 marge">
                    <div className="card dark-card p-3">
                        <div className='d-flex justify-content-between mb-4'>
                            <span className='comment-icon'><FaComment/></span>
                            <span className='stars-icon'><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aliquam illum quaerat vel nisi corporis vero. Ipsam labore quaerat consequuntur magni modi corrupti. Iure harum laboriosam illo est ipsum commodi.</p>
                        <div className='d-flex align-items-center'>
                            <div className='mr-3'>
                                <div className='avatar'><FaUser/></div>
                            </div>
                            <div className='ml-3'>
                                <div className='fw-bold'>Sam Freeman</div>
                                <div>Director at Google</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='testimony-indicator d-flex justify-content-center'>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={slide==0 ? "indicator active":"indicator"} aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={slide==1 ? "indicator active":"indicator"} aria-label="Slide 2"></button>
        </div>
    </section>
  )
}
