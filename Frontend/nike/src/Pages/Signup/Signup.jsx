import { Box, Button, Flex, InputGroup } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Input,InputRightElement } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Signup = () => {
  const [show,setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  return (
    <Box
    width={["80%","90%"]}
    margin={["auto"]}
    gap={["2"]}
    >
        <img src="https://www.freeiconspng.com/thumbs/nike-logo/logo-brand-nike-png-10.png"
        style={{margin:"auto",marginBottom:"10px"}}
        alt="Nike" height="60px" width="60px"/>
        <Heading as='h2' size='xl'
        marginBottom="20px">
        BECOME A NIKE MEMBER
        </Heading>
        <Heading as='h5' size='sm'
         width={["89%","70%","50%","30%"]}
         margin={["auto"]}
         marginBottom="20px"
        color="gray" fontWeight="600">
        Create your Nike Member profile and get first access 
        to the very best of Nike products, inspiration and community.
        </Heading>
        <Flex
        width={["89%","60%","40%","25%"]}
        margin={["auto"]}
        gap={["10px"]}
        direction={["column"]}>
        <Input placeholder='Email address' size='md' />
        
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

        <Input placeholder='First Name' size='md' />
        <Input placeholder='Last Name' size='md' />
        <Input placeholder='Date of Birth' size='md' type="datetime-local"/>
        <Input placeholder='Country' size='md' />
     
          <Accordion  defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton width="100%">
        <Box as="span"textAlign='left' width="100%">
          Select Gender
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex gap={["1rem"]}
          width={["70%","120%"]}
          margin={["auto"]}>
              <Checkbox colorScheme='gray' >
            Male
            </Checkbox>
            <Checkbox colorScheme='gray' >
              Female
            </Checkbox>
          </Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Heading as='h5' size='xs'
         margin={["auto"]}
         marginBottom="20px"
        color="gray" fontWeight="400">
     By creating an account, you agree to Nike's Privacy Policy and Terms of Use.
        </Heading>
        <Button bg="black" color="white">
          Join Us
        </Button>
        <Heading as='h5' size='xs'
         margin={["auto"]}
         marginBottom="20px"
        color="gray" fontWeight="400">
       Already a Member? <Link to="/login" style={{textDecoration:"underline",color:"black"}}> Sign In</Link>
        </Heading>
        </Flex>
    </Box>
  )
}

export default Signup