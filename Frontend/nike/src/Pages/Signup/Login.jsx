import { Box, Heading, Input, InputGroup,Flex, Button, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GetLoginsuccess } from '../../Redux/Authreducer/action'
import { useToast } from '@chakra-ui/react'

const Login = () => {
  const toast = useToast()
  const {pathname}=useLocation()
  const navigate=useNavigate()
const dispatch=useDispatch()
const logincred=useSelector((state)=>state.authReducer)
console.log(logincred)
  const [show,setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [logindata,setLogindata]=useState({
    email:"",
    password:""
  })

  function handlelogin(e){
    const {name,value}=e.target;
    setLogindata({
      ...logindata,
      [name]:value
    })
  }

  function handleloginsubmit(){
    dispatch(GetLoginsuccess(logindata))
   if(pathname==="/login"){
    navigate("/")
   }
   else{
    navigate(pathname)
   }
    // navigate("/")
  }

  useEffect(()=>{
      if(logincred.isAuth){
        toast(
          {
            title:`${logincred.msg}`,
            description: logincred.toast==="s"?"you can shop now.":"You Can Login Now",
            status: logincred.toast==="s"?"success":"info",
            duration: 2000,
            position:"top",
            isClosable: true,
          }
        )
        // navigate("/")
      }
  },[logincred.isAuth])
   
  return (
    <Box
    width={["80%","90%"]}
    margin={["auto"]}
    gap={["2"]}
    >
        <img src="https://www.freeiconspng.com/thumbs/nike-logo/logo-brand-nike-png-10.png"
        style={{margin:"auto",marginBottom:"10px"}}
        alt="Nike" height="60px" width="60px"/>
        <Heading as='h2' size='lg'
        width={["89%","70%","50%","30%"]}
        margin="auto"
        marginBottom="20px">
        YOUR ACCOUNT FOR EVERYTHINK NIKE
        </Heading>
       
        <Flex
        width={["89%","60%","40%","25%"]}
        margin={["auto"]}
        gap={["15px"]}
        direction={["column"]}>
        <Input placeholder='Email address' size='md' name="email"
        onChange={handlelogin}/>
        
        <InputGroup size='md'>
      <Input
      onChange={handlelogin}
      name="password"
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

        <Button bg="black" color="white" onClick={handleloginsubmit}>
          Sign In
        </Button>
        <Heading as='h5' size='xs'
         margin={["auto"]}
         marginBottom="20px"
        color="gray" fontWeight="400">
       Not a Member? <Link to="/Signup" style={{textDecoration:"underline",color:"black"}}> Join Us</Link>
        </Heading>
        </Flex>
    </Box>
  )
   
}

export default Login