
import { faArrowRight, faArrowRightArrowLeft, faCartShopping, faForward, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='bg-primary pt-5 pb-1 px-3 text-white'>
      <div className="row">
        <div className='col-md-3'>
          <h5 className="fw-bold text-white"><FontAwesomeIcon icon={faCartShopping}/>Daily cart</h5>
            <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p>Code licensed Luminar,docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
        </div>
        <div className='col-md-3'>
          <h5 className="fw-bold text-white"><FontAwesomeIcon icon={faCartShopping}/>Links</h5>
            <Link to={'/'} className='text-decoration-none text-light'>Landing Page</Link><br />
            <Link to={'/'} className='text-decoration-none text-light'>Home Page</Link><br />
            <Link to={'/history'} className='text-decoration-none text-light'>Watch History Page</Link>
        </div>
        <div className='col-md-3'>
          <h5 className="fw-bold text-white"><FontAwesomeIcon icon={faCartShopping}/>Guides</h5>
            <Link className='text-decoration-none text-light'>React</Link><br />
            <Link className='text-decoration-none text-light'>React Bootstrap</Link><br />
            <Link className='text-decoration-none text-light'>React Router</Link>
        </div>
        <div className='col-md-3'>
          <h5 className="fw-bold text-white"><FontAwesomeIcon icon={faCartShopping}/>Contact Us</h5>
            <div className='d-flex align-items-center'><input type="text" className='form-control' placeholder='Enter your email here' /> <FontAwesomeIcon icon={faArrowRight} className='fw-bold fs-3'/></div>
            <div className="d-flex justify-content-between align-items-center pe-4 py-3">
              
            </div>
        </div>
      </div>
      <p className='text-center'>Copyright &Copy; July 2025 Batch, Daily Cart.Built with React Redux.</p>
    </div>
  )
}

export default Footer