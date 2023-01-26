import React, { useState } from "react";
import "../Navbar/navbar.css";
import {
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  useToast,
} from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  PriceHighToLow,
  PriceLowToHigh,
  ratingHighToLow,
  ratingLowToHigh,
  resetFilters,
  ShowFilter,
} from "../../Redux/Appreducer/Product/action";
import { FcFilledFilter } from "react-icons/fc";
import { GrSort } from "react-icons/gr";
import { AiOutlineDown } from "react-icons/ai";
import "./Sorting.css"

const Sorting = () => {
  const filter = useSelector((state) => state.ProductReducer.showfilter);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = ({ target: { textContent } }) => {
    toast({
      title: "Success",
      description: `${textContent} applied successfully`,
      status: "info",
      duration: 1000,
      position: "top",
      isClosable: true,
    });

    switch (textContent) {
      case "Price: Low-High":
        return dispatch(PriceLowToHigh());
      case "Price: High-Low":
        return dispatch(PriceHighToLow());
      case "Rating: Low-High":
        return dispatch(ratingLowToHigh());
      case "Rating: High-Low":
        return dispatch(ratingHighToLow());
      default:
        console.log("default");
    }
  };

  return (
    <div
      className="sortingbox"
    >
      <div className="sorting">
        <div>
          <Button
          fontSize={["13px", "16px"]}
            rightIcon={<FcFilledFilter />}
            onClick={() => {
              dispatch(ShowFilter());
            }}
          >
            {filter ? "Hide" : "Show"} Filter{" "}
          </Button>
        </div>
        <Button
        fontSize={["13px", "16px"]}
          onClick={() => {
            dispatch(resetFilters());
            toast({
              title: "Success",
              description: `Filter Reset successfully`,
              status: "success",
              duration: 1000,
              position: "top",
              isClosable: true,
            });
          }}
        >
          Reset Filters
        </Button>
        <div>
          <Box>
            <Menu>
              <MenuButton
                fontSize={["13px", "16px"]}
                rightIcon={<AiOutlineDown />}
                as={Button}
              >
                Sort By
              </MenuButton>
              <MenuList
                onClick={() => {
                  console.log("textContent");
                }}
              >
                <MenuItem onClick={handleChange}>Price: Low-High</MenuItem>
                <MenuItem onClick={handleChange}>Price: High-Low</MenuItem>
                <MenuItem onClick={handleChange}>Rating: Low-High</MenuItem>
                <MenuItem onClick={handleChange}>Rating: High-Low</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
