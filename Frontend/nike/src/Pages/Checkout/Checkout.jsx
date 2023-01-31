import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Checkout = () => {
  return (
    <Flex
    direction={["column"]} gap={["2rem"]}
    width={["80%","70%","60%","50%","28%"]}
    margin="auto"
    >
      <Heading as='h2' size='xl'>
        Shipping Address
      </Heading>
      <Input placeholder='First Name' size='lg' />
      <Input placeholder='Last Name' size='lg' />
      <Input placeholder='Address Line 1' size='lg' />
      <Input placeholder='Address Line 2' size='lg' />
  
      <Flex gap="10px">
      <Input placeholder='Postal Code' size='lg' />
      <Input placeholder='Locality' size='lg' />
      </Flex>

      <Flex gap="10px">
      <Input placeholder='State' size='lg' />
      <Input placeholder='Country' size='lg' />
      </Flex>

        <Heading as='h2' size='md'>
            What's your contact information?
        </Heading>

        <Input placeholder='Email' size='lg' />
        <Input placeholder='Phone Number' size='lg' />

        <Button bg='Black' size='lg' color="white" borderRadius="35px">
          Continue 
        </Button>
  
    </Flex>
  )
}

export default Checkout