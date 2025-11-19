import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'

function View() {
  const userwishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  //get product id from url
  const { id } = useParams()
  console.log(id)
  //state for storing products to be viewed
  const [product, setProduct] = useState({})
  console.log(product)
  useEffect(() => {
    if (sessionStorage.getItem("products")) {
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setProduct(allProducts.find((item) => item.id == id))
    }
  }, [])
  const handleWishlist=()=>{
    const existingProduct=userwishlist?.find(item=>item.id==id)
    if(existingProduct){
      alert("product already in wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    <>
      <Header />
      <div className='container py-5'>
        <div className="row my-5">
          <div className="col-md-6">
            <img className='img-fluid ' src={product?.thumbnail
            } alt="" />
            <div className="d-flex justify-content-start  align-items-center ">
              <button onClick={handleWishlist} className="btn btn-info">Add to wishlist</button>
              <button className="btn btn-info ms-5">Add to Cart</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1 >{product?.title
            }</h1>
            <h4>${product?.rating}</h4>
            <h6><b>Brand</b>:{product?.brand
            }</h6>
            <h6><b>Category</b>:{product?.category
            }</h6>
            <p><b>Description</b>:{product?.description

            }</p>
            <h4>Client reviews</h4>
            {
              product?.reviews?.length>0?
              product?.reviews?.map((item,index)=>(
                <div key={index} className='my-3'>
              <div className="row border shadow rounded w-100 p-3 my-2">
                <h6><b>{item?.reviewerName}</b>:{item?.comment}</h6>
                <h6>rating:{item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning'></FontAwesomeIcon></h6>
              </div>
              
              
            </div>
              )):
              <div>No Client Reviews Are Available</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default View