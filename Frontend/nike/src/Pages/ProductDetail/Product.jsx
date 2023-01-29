import { Box, Flex, Grid } from '@chakra-ui/react';
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Filter from '../../Components/Filter/Filter';
import Sorting from '../../Components/Sorting/Sorting';
import { getData } from '../../Redux/Appreducer/Product/action';

const Product = ({url}) => {

  const dispatch = useDispatch();
  const [searchparam]=useSearchParams()
 
  const filter = useSelector((state) => state.ProductReducer.showfilter);
  const prod = useSelector((state) => state.ProductReducer.prod);
  const sort = useSelector((state) => state.ProductReducer.sort);
  const [data, setData] = useState([])
  const location=useLocation()
const navigate=useNavigate()

  useEffect(() => {
    const prodparam={
      params:{
        category:searchparam.getAll("category"),
        color:searchparam.getAll("color")
      }
    }
    dispatch(getData(`http://localhost:8080/${url}`,prodparam));
    if (prod.length > 0) {
      setData(prod);
    }
  }, [prod.length, sort,location.search]);
     console.log('f',filter,"s",sort)
  return (
    <Flex direction={["column"]} gap="2rem" fontSize={['13px', '16px']}>
        <Sorting  />
    <Flex gap="2rem" 
          direction={["column","column","column","row","row"]}
    >
      { filter? <Flex 
      width={["100%","100%","100%","15%","15%"]}
       ma
      >
           <Filter category={prod.map((item)=>item.category)} color={prod.map((item)=>item.color)}/>
        </Flex> :""}
    <Grid
    width={["80%"]}
      templateColumns={[ "repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)"]}
      gap={["1rem"]}
      margin={["auto"]}>      
        {data &&
        data.map((item) => (
          <Box 
          textAlign={["left"]}
          style={{cursor:"pointer"}} key={item._id} onClick={()=>{
            navigate(`/${url}/${item._id}`)}}>
            <img src={item.img[0]} alt="" />
            <h5>{item.title}</h5>
            <p style={{color:"gray"}}>{item.description}</p>
            <p style={{color:"gray"}}>{item.color}</p>
            <h4>Ratings : {item.rating}</h4>
            <h5>MRP :₹ {item.price} </h5>
          </Box>
        ))}
        </Grid>
        </Flex>
     </Flex>
  )
}

export default Product