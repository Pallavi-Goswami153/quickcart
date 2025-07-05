import './App.css'
import { ProductList } from './pages/ProductList'
import { Route,Routes } from 'react-router-dom'
import { ProductDetails } from './pages/ProductDetails'
import { NavBar } from './Components/Navbar'
import { Cart } from './pages/Cart'
function App() {

  return (
    <>
     <NavBar/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
