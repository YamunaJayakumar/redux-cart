import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <img src="https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif" alt="Page not found" />
        <h1>Page not found</h1>
        <h5>We are sorry but the page you are looking for does not exist.</h5>
        <Link to={'/'} className="btn text-white" style={{backgroundColor:'#4169E1'}}>BACK TO HOME</Link>
      </div>
    </div>
  )
}

export default Pnf