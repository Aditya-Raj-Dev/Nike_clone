import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Showsingleproduct } from '../../Redux/Appreducer/Product/action'
import ProductDetails from '../ProductDetail/ProductDetails'

const Womendetails = () => {
  const dispatch=useDispatch()
  const {id}=useParams()
  const product=useSelector((state)=>state.ProductReducer.singleprod)

  useEffect(()=>{
    dispatch(Showsingleproduct(`https://nike-backend-q8of.onrender.com//women/${id}`))
   },[])
   console.log(product)
  return (
    <div>
      <ProductDetails product={product}/>
    </div>
  )
}

export default Womendetails