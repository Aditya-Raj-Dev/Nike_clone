import { Box, Flex, useToast } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ShowCartdata } from '../../Redux/Appreducer/Product/action'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const Cart = () => {
  const dispatch=useDispatch()
  const toast=useToast()
  const data=useSelector((state)=>state.ProductReducer.cart)
  console.log(data)

  useEffect(()=>{
   dispatch(ShowCartdata("http://localhost:8080/bag",toast))
  },[])
  return (
    <Flex
    width="80%"
    margin="auto"
    >
       <Flex
       direction={["column"]}
       gap="1.5rem"
       >
         {
          data.map((item)=>(
            <Box key={item._id} textAlign="left">
                <Flex gap="2rem">
                  <Image src={item.img[0]} alt='Cart Data'  
                  width="150px"/>
                   <Flex direction="column" gap="6px">
                   <Heading as='h3' size='lg'>
                    {item.title}
                  </Heading>
                  <Heading as='h5' size='md' color="grey" fontWeight="500">
                    {item.description}
                  </Heading>
                  <Heading as='h5' size='md' color="grey" fontWeight="500">
                    {item.color}     {item.category}
                  </Heading>
                  <Heading as='h5' size='md' color="grey" fontWeight="500">
                    {item.size}
                  </Heading>
                   </Flex>
                </Flex>
            </Box>
          ))
         }
       </Flex>
       <Box>

       </Box>
    </Flex>
  )
}

export default Cart