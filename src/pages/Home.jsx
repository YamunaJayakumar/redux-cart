import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward';
import { faForward } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const { loading, allProducts, error } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const [currentPage,setCurrentPage]=useState(1)
  const productsperPage=8
  const totalPages=Math.ceil(allProducts.length/productsperPage)

  const pageItemLastIndex=currentPage *productsperPage
  const pageItemStartIndex=pageItemLastIndex-productsperPage
  const visibleProductsArray=allProducts?.slice(pageItemStartIndex,pageItemLastIndex)
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  
  const navigateNextPage=()=>{
    if(currentPage !=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigatePreviousPage=()=>{
    if(currentPage !=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <Header insideHome={true}  />
      <div className="container py-5">

        {loading ? (
          <div className="text-center my-5 fw-bolder fs-5">
            <img className="w-25 me-1" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />Loading
          </div>
        ) : (
          <div className="row my-5">

            {allProducts?.length > 0 ? (
              visibleProductsArray.map(product => (
                <div key={product?.id} className="col-md-3 mb-3 text-center">
                  <Card>
                    <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                    <Card.Body>
                      <Card.Title>{product?.title}</Card.Title>
                      <Link to={`/products/${product?.id}/view`} className="btn btn-primary">
                        View More ...
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <p className="fs-5 fw-bolder my-5">Product not found</p>
            )}

          </div>
        )}
        <div className="my-3 text-center">
          <button onClick={navigatePreviousPage} className="btn-primary">
            <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
          </button>
          <span className='fw-bolder'>{currentPage} of {totalPages}</span>
          <button onClick={navigateNextPage} className="btn-primary">
            <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home;
