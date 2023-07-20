import React from 'react'
import Button from '../Button/Button'
import {FaArrowRight,FaArrowLeft,FaComment,FaStarHalfStroke,FaUser} from "react-icons/fa6"
export default function Testimony() {
  return (
    <section id="testimony" className='marge'>
        <div className="row">
            <div className='col-lg-12 d-flex justify-content-between'>
                <h5 className='text-color-red'>TEMOIGNAGES DES CLIENTS</h5>
                <div>
                    <Button className="btn btn-primary testimony-switch"><FaArrowLeft/></Button>&nbsp;&nbsp;&nbsp;
                    <Button className="btn btn-primary testimony-switch"><FaArrowRight/></Button>
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
            {/* ****** */}
        </div>
    </section>
  )
}
