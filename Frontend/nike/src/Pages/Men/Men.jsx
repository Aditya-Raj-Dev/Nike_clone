import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../../Components/Filter/Filter'
import { getData, ShowFilter } from '../../Redux/Appreducer/Product/action'
import "./men.css"
const Men = () => {

  const dispatch=useDispatch()
  const filter=useSelector((state)=>state.ProductReducer.showfilter)
  const prod=useSelector((state)=>state.ProductReducer.prod)
  const sort=useSelector((state)=>state.ProductReducer.sort)
  const [data,setData]=useState([])
    
  useEffect(()=>{
   dispatch(getData("http://localhost:8080/mens"))
  
   if(prod.length>0){
    setData(prod)
  }
  },[prod.length,sort])   
  console.log(prod)
  return (
  <div className={filter?"menboxfilter":"menbox"} >
    <div className={filter?"showfilter":"noshowfilter"} >
    <Filter />
    </div>
    
     <div className={filter?"menprodfilter":"menprod"} >
     
      {
        data && data.map((item)=>(
          <div key={item._id}>
                     <img src={item.img[0]} alt="" />
                     <h5>{item.title}</h5>
                     <p>{item.description}</p>
                      <p>{item.color}</p>
                      <h4>Ratings : {item.rating}</h4>
                     <h5>MRP :₹ {item.price} </h5>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Men