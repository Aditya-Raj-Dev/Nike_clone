import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Showsingleproduct } from '../../Redux/Appreducer/Product/action'
import ProductDetails from '../ProductDetail/ProductDetails'

const Kidsdetail = () => {

  const dispatch=useDispatch()
  const {id}=useParams()
  const product=useSelector((state)=>state.ProductReducer.singleprod)


  useEffect(()=>{
    dispatch(Showsingleproduct(`https://nike-backend-bw9b.onrender.com/kids/${id}`))
   },[])
  return (
    <ProductDetails product={product}/>
  )
}

export default Kidsdetail