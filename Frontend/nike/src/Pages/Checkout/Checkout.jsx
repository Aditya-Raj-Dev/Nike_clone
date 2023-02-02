import { Flex, useToast } from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Shippingdata } from '../../Redux/Appreducer/Product/action'
import { useNavigate } from 'react-router-dom'
import { setToast } from "../../Function/Toastfunction";

const Checkout = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const toast=useToast()
  const [shipping,setShipping]=useState({
    fname:"",
    lname:"",
    address1:"",
    address2:"",
    postal:"",
    locality:"",
    state:"",
    country:"",
    email:"",
    number:""
  })
  const handlechange=(e)=>{
   const {name,value}=e.target;
    setShipping({
      ...shipping,
      [name]:value
    })
  }

  return (
    <Flex
    direction={["column"]} gap={["2rem"]}
    width={["80%","70%","60%","50%","28%"]}
    margin="auto"
    >
      <Heading as='h2' size='xl'>
        Shipping Address
      </Heading>
      <Input placeholder='First Name' size='lg' onChange={handlechange} name="fname" />
      <Input placeholder='Last Name' size='lg' onChange={handlechange} name="lname" />
      <Input placeholder='Address Line 1' size='lg' onChange={handlechange} name="address1" />
      <Input placeholder='Address Line 2' size='lg' onChange={handlechange} name="address2" />
  
      <Flex gap="10px">
      <Input placeholder='Postal Code' size='lg' onChange={handlechange} name="postal" />
      <Input placeholder='Locality' size='lg' onChange={handlechange} name="locality" />
      </Flex>

      <Flex gap="10px">
      <Input placeholder='State' size='lg' onChange={handlechange} name="state" />
      <Input placeholder='Country' size='lg' onChange={handlechange} name="country" />
      </Flex>

        <Heading as='h2' size='md'>
            What's your contact information?
        </Heading>

        <Input placeholder='Email' size='lg' onChange={handlechange} name="email" />
        <Input placeholder='Phone Number' size='lg' onChange={handlechange} name="number" />

        <Button bg='Black' size='lg' onClick={()=>{
           if(shipping.address1 ===""|| shipping.address2===""|| shipping.fname===""
            || shipping.lname===""|| shipping.locality===""|| shipping.country===""
            || shipping.state===""|| shipping.email===""|| shipping.number===""|| shipping.postal===""){
               setToast(toast,"Please give full Details","","error")
               return
           }
          dispatch(Shippingdata(shipping))
          navigate("/payment")
       }}
         color="white" borderRadius="35px">
          Continue 
        </Button>
    </Flex>
  )
}

export default Checkout