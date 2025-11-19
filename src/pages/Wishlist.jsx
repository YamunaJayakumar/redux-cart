import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';

function Wishlist() {
  return (
    <div>
      <Header/>
      <div className="container py-5">
        <div className="row my-5">
          {/* duplicate */}
          <div className="col-md-3 mb-3">
            {/* card-reactbootstrap */}
            <Card >
              <Card.Img height={'250px'} variant="top" src="https://img.freepik.com/free-photo/closeup-red-lipstick-women_53876-16634.jpg?semt=ais_incoming&w=740&q=80" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <div className="d-flex justify-content-evenly align-items-center">
                  <button className="btn btn-info"><FontAwesomeIcon icon={faHeartCircleXmark}></FontAwesomeIcon></button>
                  <button className="btn btn-primary"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
                </div>
                
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist