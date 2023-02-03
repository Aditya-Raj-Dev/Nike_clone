import { Box, Button, color, Flex, useToast } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCartItem,
  ShowCartdata,
  UpdateCartItem,
} from "../../Redux/Appreducer/Product/action";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { BsHeart, BsFillQuestionCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const toast = useToast();
  const data = useSelector((state) => state.ProductReducer.cart);
 const URL=process.env.URL

  let price = data.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  // let price=0

  function handlechangeqty(e, id, qty) {
    // if(e===qty){
    //   setToast(toast,`Quantity is Already ${qty}`,"",'info')
    // }
    dispatch(UpdateCartItem(`https://nike-backend-q8of.onrender.com//bag/${id}`, e, toast));
  }

  useEffect(() => {
    dispatch(ShowCartdata("https://nike-backend-q8of.onrender.com//bag", toast));
  }, []);

  return (
    <Flex
      width={["95%", "90%", "90%", "90%", "80%"]}
      margin="auto"
      direction={["column", "column", "column", "row", "row"]}
      justifyContent={["space-between"]}
    >
      <Flex
        direction={["column"]}
        gap={["10px", "1.5rem"]}
        textAlign={["left"]}
        width={["100%", "100%", "85%", "80%", "70%"]}
        marginBottom="40px"
      >
        {data.length === 0 ? (
          <Image src="https://media1.giphy.com/media/L2kr3y97uJauF6T6Lh/giphy.gif?cid=6c09b952suxva3ci5udrovh9s25dr281dqrr3r7odbyz8drc&rid=giphy.gif&ct=s" />
        ) : (
          <Heading as="h5" size="lg" fontWeight={["400"]}>
            Bag
          </Heading>
        )}
        {data.map((item) => (
          <Box key={item._id} textAlign="left" marginBottom="20px">
            <Flex justifyContent={["space-around"]}>
              <Flex gap={["1px", "1.5rem"]}>
                <Image
                  src={item.img[0]}
                  alt="Cart Data"
                  width={["50px", "80px", "80px", "100px", "150px"]}
                  height={["50px", "80px", "80px", "100px", "150px"]}
                />

                {/* main detail box */}
                <Flex direction="column" gap="6px">
                  {/* name and price */}

                  <Heading as="h3" size={["sm", "md"]} fontWeight={["400"]}>
                    {item.title}
                  </Heading>

                  <Heading
                    as="h5"
                    size={["sm", "md"]}
                    color="grey"
                    fontWeight={["400"]}
                  >
                    {item.description}
                  </Heading>
                  <Heading
                    as="h5"
                    size={["sm", "md"]}
                    color="grey"
                    fontWeight={["400"]}
                  >
                    {item.color} {item.category}
                  </Heading>
                  {/* size and quantity */}
                  <Flex gap={["10px", "2rem"]}>
                    <Heading
                      as="h5"
                      size={["sm", "md"]}
                      color="grey"
                      fontWeight={["400"]}
                    >
                      {item.size}
                    </Heading>
                    <Flex gap={["10px"]}>
                      <Heading
                        as="h5"
                        size={["sm", "md"]}
                        color="grey"
                        fontWeight={["400"]}
                      >
                        Quantity
                      </Heading>
                      <Heading
                        as="h5"
                        size={["sm", "md"]}
                        color="grey"
                        fontWeight={["400"]}
                        style={{ display: "inline-flex" }}
                      >
                        {item.quantity}
                      </Heading>
                      <Select
                        placeholder={item.quantity}
                        height={["24px"]}
                        fontWeight={["500"]}
                        onChange={(e) =>
                          handlechangeqty(
                            e.target.value,
                            item._id,
                            item.quantity
                          )
                        }
                        width={["4rem"]}
                        marginTop={["3px"]}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5">5</option>
                      </Select>
                    </Flex>
                  </Flex>
                  {/* delete and favourite */}
                  <Flex fontSize={["25px"]} marginTop={["10px"]} gap={["3rem"]}>
                    <BsHeart className="deletebutt" />
                    <RiDeleteBin6Line
                      className="deletebutt"
                      onClick={() =>
                        dispatch(
                          DeleteCartItem(
                            `https://nike-backend-q8of.onrender.com//bag/${item._id}`,
                            toast
                          )
                        )
                      }
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Heading as="h3" size={["sm", "md"]} fontWeight={["400"]}>
                MRP : ₹ {item.price}
              </Heading>
            </Flex>
          </Box>
        ))}
      </Flex>
      {data.length === 0 ? (
        <Image src="https://media0.giphy.com/media/UU5nZHiM86H37VBAcU/giphy.gif?cid=6c09b95250dcbe6f87869f943beeb77170d4d75331ab0a23&rid=giphy.gif&ct=s" />
      ) : (
        <Box width={["90%", "400px"]} textAlign={["left"]}>
          <Heading as="h5" size="lg" fontWeight={["400"]}>
            Summary
          </Heading>
          <br />
          <br />
          <Flex justifyContent={["space-between"]}>
            <Flex gap={["10px"]}>
              {/* subtotal */}
              <Heading as="h5" size="md" fontWeight={["400"]}>
                Subtotal
              </Heading>
              <BsFillQuestionCircleFill style={{ marginTop: "5px" }} />
            </Flex>
            <Heading as="h5" size="md" fontWeight={["400"]}>
              ₹ {price}.00
            </Heading>
          </Flex>
          <br />
          <Flex justifyContent={["space-between"]}>
            <Heading
              as="h5"
              size="md"
              fontWeight={["400"]}
              marginBottom={["15px"]}
            >
              Estimated Delivery & Handling
            </Heading>
            <Heading
              as="h5"
              size="md"
              fontWeight={["400"]}
              marginBottom={["15px"]}
            >
              ₹ 750.00
            </Heading>
          </Flex>
          <hr />
          <Flex justifyContent={["space-between"]}>
            <Heading
              as="h5"
              size="md"
              fontWeight={["400"]}
              marginTop={["15px"]}
              marginBottom={["15px"]}
            >
              Total
            </Heading>
            <Heading
              as="h5"
              size="md"
              fontWeight={["400"]}
              marginTop={["15px"]}
              marginBottom={["15px"]}
            >
              ₹ {price + 750}.00
            </Heading>
          </Flex>
          <hr />
          <br />
          <Button
            width={["100%"]}
            color="white"
            bg="black"
            height={["60px"]}
            fontSize={["20px"]}
            borderRadius="40px"
            onClick={()=>navigate("/checkout")}
          >
            Checkout
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Cart;
