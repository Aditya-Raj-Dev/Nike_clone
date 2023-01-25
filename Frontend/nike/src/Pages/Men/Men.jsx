import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/Appreducer/Product/action'

const Men = () => {
  const dispatch=useDispatch()
  const prod=useSelector((state)=>state.ProductReducer)
  console.log(prod)

  useEffect(()=>{
   dispatch(getData("http://localhost:8080/shoes")).then(()=>{
    console.log(prod)
   })
  },[])
  return (
    <div>

    </div>
  )
}

export default Men