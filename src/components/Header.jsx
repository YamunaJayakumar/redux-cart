import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'



function Header({insideHome}) {
  const list=useSelector(state=>state.wishlistReducer)
  // console.log(list);
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()

  
  return (
    <Navbar expand="lg" className="bg-primary position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast} className='me-2'/>Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center">
            { insideHome&&
            <Nav.Item className='me-lg-2'><input onChange={(e)=>dispatch(searchProduct(e.target.value))} type='text' className='form-control me-lg-5' placeholder='Search by product name'/></Nav.Item>
            }<Link to={'/wishlist'} className='text-decoration-none  text-light fw-bold d-flex align-items-center'><FontAwesomeIcon icon={faHeart} className='text-danger me-1'/>Wishlist <Badge pill bg="dark" className='ms-1'>{list?.length}</Badge></Link>
            
            <Link to={'/cart'} className='text-decoration-none  text-light fw-bold d-flex align-items-center'><FontAwesomeIcon icon={faCartShopping} className='text-danger me-1'/>Cart <Badge pill bg="dark" className='ms-1'>{userCart?.length}</Badge></Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header