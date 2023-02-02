import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Payment = () => {
    const address=useSelector((state)=>state.ProductReducer.shipping)
    console.log(address)
  return (
    <Flex width={["80%"]}
    
    margin="auto">
        <Box>
        <Heading as='h3' size='lg'>
           Shipped to 
        </Heading>
        <br />
           <Box bg="gray.100" padding="30px"
           textAlign={["left"]}>
           <Heading as='h5' size='sm'>
                Name : {address.fname} {address.lname}
            </Heading>
            <Heading as='h5' size='sm'>
                 Address :{address.address1}
            </Heading>
            <Heading as='h5' size='sm'>
                Locality : {address.locality}
            </Heading>
            <Heading as='h5' size='sm'>
                State : {address.state}
            </Heading>
            <Heading as='h5' size='sm'>
            Country : {address.country}
            </Heading>
            <Heading as='h5' size='sm'>
                 Email : {address.email}
            </Heading><Heading as='h5' size='sm'>
                 Phone : {address.number}
            </Heading>
          
           </Box>
        </Box>
         <Box>

        </Box>
    </Flex>
  )
}

export default Payment