import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'
function Wishlist() {
  const userWishlist=useSelector(state=>state.wishlistReducer)
  const usercart= useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const handleCart=(product)=>{
      const existingProduct=usercart?.find(item=>item.id==product.id)
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
         Swal.fire({
          title: 'success',
          text: existingProduct?`Quantity of ${product.title} is updated successfully`:'product added to your cart',
          icon: 'success',
          confirmButtonText: 'ok'
        })
  
    }
  return (
    <div>
      <Header/>
      <div className="container py-5">
        {
          userWishlist?.length>0?
          <div className="row my-5">
          {/* duplicate */}
          {
            userWishlist?.map(product=>(
              <div className="col-md-3 mb-3">
            {/* card-reactbootstrap */}
            <Card >
              <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title className='text-center'>{product?.title}</Card.Title>
                <div className="d-flex justify-content-evenly align-items-center">
                  <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className="btn btn-info"><FontAwesomeIcon icon={faHeartCircleXmark}></FontAwesomeIcon></button>
                  <button onClick={()=>handleCart(product)} className="btn btn-primary"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
                </div>
                
              </Card.Body>
            </Card>

          </div>
            ))
          }
        </div>
        : <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img className='w-25' src="https://assets-v2.lottiefiles.com/a/09823a3e-117d-11ee-aa74-87493bf51c06/rEfI5zOX3n.gif" alt="" />
          <h3>Wishlist is empty</h3>
          <Link to={'/'} className='btn btn-primary'>Add more ...</Link>
        </div>
        }
      </div>
    </div>
  )
}

export default Wishlist