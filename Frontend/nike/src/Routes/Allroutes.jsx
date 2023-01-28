import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import Kids from '../Pages/Child/Kids'
import Kidsdetail from '../Pages/Child/Kidsdetail'
import Favourite from '../Pages/Favourite/Favourite'
import Home from '../Pages/Home/Home'
import Men from '../Pages/Men/Men'
import Mendetail from '../Pages/Men/Mendetail'
import Login from '../Pages/Signup/Login'
import Signup from '../Pages/Signup/Signup'
import Women from '../Pages/Women/Women'
import Womendetails from '../Pages/Women/Womendetails'
import PrivateRoute from '../Private/PrivateRoute'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/favourite" element={<PrivateRoute><Favourite/></PrivateRoute>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/men/:id" element={<Mendetail/>}/>
            <Route path="/women" element={<Women/>}/>
            <Route path="/women/:id" element={<Womendetails/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/kids/:id" element={<Kidsdetail/>}/>
            <Route path= "/cart" element={<PrivateRoute> <Cart/></PrivateRoute> }/>
        </Routes>
    </div>
  )
}

export default Allroutes