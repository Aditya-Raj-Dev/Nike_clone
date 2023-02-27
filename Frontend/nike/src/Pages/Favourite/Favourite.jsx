import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {deletefav, showallfav} from "../../Redux/Appreducer/Product/action"
import { Box, Button, Grid } from '@chakra-ui/react'

 const Favourite = () => {
  const dispatch=useDispatch()
  const prod=useSelector((state)=>state.ProductReducer.fav)


  useEffect(()=>{
    dispatch(showallfav())
  },[])
  return (
    <Box>
      
       <Grid
       templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}
       width={["80%"]}
       gap="3rem"
       margin="auto"
       >
          {
            prod && prod.map((item)=>(
              <Box key={item._id}
              padding="20px"
              borderRadius="15px"
              bgColor="gray.100"
              >
                 <img src={item.img[0]} alt="" />
                 <br />
                 <Button colorScheme="red"
                 onClick={()=>dispatch(deletefav(item._id))}
                 >Remove From Favourite</Button>
              </Box>
            ))
          }
       </Grid>
    </Box>
  )
}

export default Favourite