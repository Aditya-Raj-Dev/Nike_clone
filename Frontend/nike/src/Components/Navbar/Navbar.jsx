import React, { useState } from 'react'
import "./navbar.css"
import { Box, Button, Input, Menu, MenuButton, MenuItem, MenuList, Select, useToast } from '@chakra-ui/react'
import { BiHeart} from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Drawernavbar from './Drawernavbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PriceHighToLow, PriceLowToHigh, ratingHighToLow, ratingLowToHigh, resetFilters, ShowFilter,  } from '../../Redux/Appreducer/Product/action';
import { FcFilledFilter } from 'react-icons/fc';
import { GrSort } from 'react-icons/gr';
import { AiOutlineDown } from 'react-icons/ai';



const Navbar = () => {
    const [hovered, setHovered] = useState(false);
  

  return (
    <div>

       <div className='nav1'>
         <img src="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg" alt="" height="30px" />
         <div style={{display:"flex",gap:"2rem",marginTop:"-0px"}} className="navlog">
          <p>Join Us</p>
          <p>Sign In</p>
         </div>
       </div>
       <div className='navbar'>
            <img src="https://www.freeiconspng.com/thumbs/nike-logo/logo-brand-nike-png-10.png" alt=""  height="40px" width="100px"/>
            {/* 1st div */}
            <div className='navbarprod' >
                <h3>Men</h3>
                <h3>Women</h3>
                <h3>Kids</h3>
            </div>

              {/* 2nd div */}
            <div className='navbarcart'>
               <input placeholder=' Search' size='sm' className='navsearch'/>
               <BiHeart fontSize="30px" className='circle'/>
               <HiOutlineShoppingBag fontSize="29px" className='circle'/>
            </div>
              <div className='hamburger'>
                <GiHamburgerMenu/>
              {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen} /> */}
           {/* <Drawernavbar/> */}
              </div>
       </div>
       {/* marquee */}
       <br />
       {/* <div className='marquee'>
       <marquee><h4>Hello Nike App</h4></marquee>
   
       </div> */}
       <br />
       {/* filter Buttons */}
      
       
    </div>
  )
}

export default Navbar