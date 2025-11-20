import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const useWishlist= useSelector(state=>state.wishlistReducer)
  const usercart= useSelector(state=>state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-primary position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-white text-decoration-none fw-bold' > <FontAwesomeIcon icon={faTruckFast} className='text-decoration-none text-white  '></FontAwesomeIcon> Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-md-auto d-md-flex align-items-md-center  gap-3">
            <Link to={'/wishlist'} className="text-decoration-none  text-white fw-bold  ms-md-5 d-flex align-items-center"> <FontAwesomeIcon icon={faHeart} className='text-white'></FontAwesomeIcon> WishList<Badge pill bg="dark">{useWishlist?.length}</Badge></Link>
            <Link to={'/cart'} className="text-decoration-none text-white fw-bold me-5 "> <FontAwesomeIcon icon={faCartShopping} className="text-white me-1"></FontAwesomeIcon> Cart<Badge pill bg="dark"className="ms-1">{usercart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header