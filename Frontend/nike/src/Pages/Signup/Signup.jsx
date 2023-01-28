import { Box, Button, Flex, InputGroup } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Input,InputRightElement } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {GetSignupsuccess} from "../../Redux/Authreducer/action"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Signup = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const toast = useToast()
  let sig=useSelector((state)=>state.authReducer)
  const [show,setShow] = React.useState(false)
  const [selected, setSelected] = useState(null);
  const handleClick = () => setShow(!show)
  const [signupdata,setSignupdata]=useState({
     email:"",
     password:"",
     firstname:"",
     lastname:"",
     dob:"",
     gender:"",
     country:""
  })
  
  function handlesignup(e){
    const {name,value,type,checked}=e.target;
    setSignupdata({
      ...signupdata,
       [name]:value
    })
  }

async function handlesignupsubmit(){
    if(signupdata.country ==="" 
    || signupdata.dob===""
     || signupdata.email===""
     || signupdata.firstname==="" 
     || signupdata.lastname===""
     || signupdata.gender===""
     || signupdata.password===""){
     return toast({
        title:"Please Fill All the Details",
        description:"",
        status:"error",
        duration:2000,
        isClosable:true
      })
     }
   await dispatch(GetSignupsuccess(signupdata))

  }

 
  useEffect(()=>{
    console.log(sig)
        if(sig.signup){
          toast(
            {
              title:`${sig.msg}`,
              description: sig.toast==="s"?"We've created your account.":"You Can Login Now",
              status: sig.toast==="s"?"success":"info",
              duration: 2000,
              position:"top",
              isClosable: true,
            }
          )
          
        }

  },[sig.signup])

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
        <Input placeholder='Email address' size='md' name='email' onChange={handlesignup}/>
        
        <InputGroup size='md'>
      <Input
       onChange={handlesignup}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        name="password"
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

        <Input placeholder='First Name' size='md' name="firstname"  onChange={handlesignup} />
        <Input placeholder='Last Name' size='md' name="lastname"  onChange={handlesignup}/>
        <Input placeholder='Date of Birth' size='md'  onChange={handlesignup}
        type="date" name="dob"/>
        <Input placeholder='Country' size='md' name="country"  onChange={handlesignup}/>
     
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
              <Checkbox colorScheme='gray' 
              value="Male"
              checked={selected==="Male"}
              name="gender"  onChange={handlesignup} >
            Male
            </Checkbox>
            <Checkbox 
            value="Female"
          checked={selected==="Female"}
            colorScheme='gray' 
            name="gender"  onChange={handlesignup} >
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
        <Button bg="black" color="white"
        onClick={handlesignupsubmit}>
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