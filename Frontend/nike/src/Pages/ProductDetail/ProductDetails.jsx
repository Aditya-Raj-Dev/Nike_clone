import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

const ProductDetails = ({product}) => {
  const [size,setSize]=useState('')
  const [sizeselected,setSizeselected]=useState(false)
      
  function handlesize(e){
    setSize(e.target.textContent)
     setSizeselected(!sizeselected)
  }
  function handlereset(){
    setSizeselected(!sizeselected)
  }

  return (
    
   <Flex
   width={["100%","90%","92%"]}
   margin={["auto"]}
   direction={["column","column","column","row"]}
>
     <Box
     >
        {
            product.map((item)=>(
                <Grid
                templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
                gap={["1rem"]}
                margin={["auto"]}
                >
                  {
                    item.img.map((item)=>(
                        <Box
                         marginBottom={["1rem"]}
                         marginRight={["1rem"]}
                        height={["400px","450px", "500px",'500px', '550px']}
                        width={[ "350px","320px", '360px','450px', '450px']}
                        margin={['auto']}
                        >
                            <Image src={item} alt='Dan Abramov'
                              height={["100%"]}
                              width={["100%"]}
                              margin={["auto"]}
                            />
                        </Box>
                    ))
                  }
                </Grid>
            ))
        }
     </Box>
     <Box 
      width={["80%"]}
      textAlign={["left"]}
      marginLeft={["4rem"]}
      >
        {
            product.map((item)=>(
                <Box>
                      <Heading as='h3' size='lg'>
                        {item.title}
                    </Heading>
                    <Heading as='h4' size='md'>
                    {item.category}
                  </Heading>
                  <br />
                  <Heading as='h4' size='md'>
                   MRP : ₹ {item.price}
                </Heading>
                  <h1 style={{fontSize:"18px",color:"gray"}}>
                    incl. of taxes
                    
                  </h1>
                  <h1 style={{fontSize:"18px",color:"gray"}}
                  >(Also includes all applicable duties)</h1>
                  <br />
                  <Flex
               
                  gap={["1rem"]}>
                   <Heading as='h4' size='md'
                   style={{marginTop:"6px"}}
                   >
                  Size : 
                </Heading>{
                  sizeselected?
                  <Flex
                  gap={"1rem"}>
                  <Heading as='h4' size='md'   style={{marginTop:"6px"}}>
                { size}
               </Heading>
                  <Button
                  onClick={handlereset}
                     variant="outline"
                     >Reset Size</Button>
                      </Flex>               :<Box >
                    <Button variant="outline"
                    marginRight="10px"
                    onClick={handlesize}
                    >
                       {item.size[0]}
                    </Button>
                    <Button onClick={handlesize}
                    marginRight="10px"
                    variant="outline">
                       {item.size[1]}
                    </Button>
                    <Button onClick={handlesize}
                    variant="outline">
                       {item.size[2]}
                    </Button>
                    </Box>}
                  </Flex>

                  <Button width={["210px","350px"]}
                         bg="black"
                         color="white"
                  marginTop="15px"
                  rightIcon={<FaShoppingBag/>}>
                    Add To Bag
                   </Button>

                  <Button
                  marginTop="15px"
                  width={["210px","350px"]}
                  rightIcon={<BsHeart fontSize="20px"/>}>
                       Favourite
                  </Button>
                  <br />
                  <br />
                    <p style={{fontSize:"17px"}}
                    >This soft cotton tee has an easy, relaxed fit that keeps you comfortable while honouring the on-court leaders of the past and the leaders they inspired in the years to come.

</p>
<br />
<Heading as='h4' size='md'>
                  Color  Shown : {item.color}
                </Heading>
                </Box>
            ))
        }
     </Box>
   </Flex>
  
  )
}

export default ProductDetails