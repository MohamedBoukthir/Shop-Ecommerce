import { Route , Routes  , Navigate} from 'react-router-dom'

import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Cart from '../Pages/Cart'
import ProductDetails from '../Pages/ProductDetails'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

import ProtectedRoute from './ProtectedRoute'

//Admin Routes
import AddProducts from '../Admin/AddProducts'
import AllProducts from '../Admin/AllProducts'
import Dashboard from '../Admin/Dashboard'
import Users from '../Admin/Users'



const Routers = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='home'/>} />
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/:id' element={<ProductDetails/>}/>
      <Route path='cart' element={<Cart/>}/>

      <Route path='/*' element={<ProtectedRoute/>}>
        <Route path='checkout' element={<Checkout/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='dashboard/all-products' element={<AllProducts/>} />
        <Route path='dashboard/add-product' element={<AddProducts/>} />
        <Route path='dashboard/users' element={<Users/>} />
      </Route>
        
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routers