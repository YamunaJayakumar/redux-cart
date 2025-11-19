
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Pnf from './pages/Pnf'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/wishlist' element={<Wishlist/>} />
     <Route  path='/cart' element={<Cart/>} />
     <Route  path='/products/:id/view' element={<View/>} />
     <Route  path='/*' element={<Pnf/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
