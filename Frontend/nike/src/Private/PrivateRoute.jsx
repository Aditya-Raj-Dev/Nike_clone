import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


const PrivateRoute = ({children}) => {
    const isAuth=useSelector((state)=>state.authReducer.isAuth)
   const toast=useToast()
     const {pathname}=useLocation()

    if(isAuth){
     return children
    }
    else{
        console.log(pathname,"kja")
        toast({
            title: 'Please Login First.',
            description: "You are Not Authorized.",
            status: 'info',
            duration: 2000,
            position:"top",
            variant:"subtle",
            isClosable: true,
          })
  
     return <Navigate to="/login"  state={{from:pathname}} replace/>
    }
  
}

export default PrivateRoute