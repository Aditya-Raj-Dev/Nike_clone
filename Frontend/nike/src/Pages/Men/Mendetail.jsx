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
   dispatch(Showsingleproduct(`http://localhost:8080/mens/${id}`))
  },[])
  return (
    <div>
       <ProductDetails product={product}/>
    </div>
  )
}

export default Mendetail