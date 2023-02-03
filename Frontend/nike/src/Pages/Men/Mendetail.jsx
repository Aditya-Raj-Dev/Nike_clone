import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Showsingleproduct } from '../../Redux/Appreducer/Product/action'
import ProductDetails from '../ProductDetail/ProductDetails'

const Mendetail = () => {
  const {id}=useParams()
  const product=useSelector((state)=>state.ProductReducer.singleprod)
  const dispatch=useDispatch()

  useEffect(()=>{
   dispatch(Showsingleproduct(`https://nike-backend-q8of.onrender.com//mens/${id}`))
  },[])
  return (
    <div>
       <ProductDetails product={product} url="men"/>
    </div>
  )
}

export default Mendetail