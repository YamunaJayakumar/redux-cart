import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem,decrementCartItem,incrementCartItem } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'


function Cart() {
  const userCart = useSelector(state => state.cartReducer)
  const [sum,setSum]=useState(0)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    setSum(userCart?.reduce((acc,curr)=>Number(acc)+Number(curr.totalPrice),0))
  },[userCart])
  const handleDecrementCart=(product)=>{
    if(product.quantity>1)
      {
        dispatch(decrementCartItem(product))
  }
  else{
    dispatch(removeCartItem(product.id))
  }
}
  const checkOut=()=>{
    dispatch(emptyCart())
    navigate('/')
    Swal.fire({
      title:"Order Placed",
      text:"Thank you for purchasing with us",
      icon:'success',
      confirmButtonText:'Ok'
    })
  }
  return (
    <>
      <Header />
      <div className="container py-5">
        {userCart?.length > 0 ? (
          <div className="my-5">
            <h1 className="text-danger fw-bold">Cart Summary</h1>
            <div className="row mt-5">

              {/* LEFT SIDE TABLE */}
              <div className="col-md-8 border rounded p-5">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {userCart.map((product, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product?.title}</td>
                        <td>
                          <img
                            width="50"
                            height="50"
                            src={product?.thumbnail}
                            alt="product"
                          />
                        </td>

                        <td>
                          <div className="d-flex">
                            <button onClick={()=>handleDecrementCart(product)} className="btn fs-3 fw-bold">-</button>
                            <input
                              style={{ width: "50px" }}
                              value={product?.quantity}
                              type="text"
                              className="form-control"
                              readOnly
                            />
                            <button onClick={()=>dispatch(incrementCartItem(product))} className="btn fs-4 fw-bold">+</button>
                          </div>
                        </td>

                        <td>{product?.totalPrice}</td>

                        <td>
                          <button onClick={()=>dispatch(removeCartItem(product?.id))} className="btn text-danger">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
                <div className="float-end" my-3>
                  <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>Empty</button>
                  <Link to={'/'} className='btn btn-primary'>Shop More</Link>
                </div>
              </div>

              {/* RIGHT SIDE TOTAL */}
              <div className="col-md-4">
                <div className="border rounded p-5">
                  <h3 className="fw-bold">
                    Total Amount : <span className="text-danger">${sum}</span>
                  </h3>
                  <hr />
                  <div className="d-grid mt-2">
                    <button onClick={checkOut} className="btn btn-success">CHECK OUT</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          // EMPTY CART BLOCK
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <img
              className="w-25"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThoxHQpqvmrvogMmia2ShWJStfXqLNZXjvKDT32d3qghdbolRO5oX71cs3AgrASx-0V4&usqp=CAU"
              alt="Empty Cart"
            />
            <h3 className="m-3">Cart is Empty</h3>
            <Link className="btn btn-primary" to="/">
              Add More
            </Link>
          </div>
        )}
      </div>
    </>
  )

}

export default Cart