import React, { useState } from 'react'
import "./navbar.css"
import { Input } from '@chakra-ui/react'
import { BiHeart} from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Drawernavbar from './Drawernavbar';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [hovered, setHovered] = useState(false);
    
  return (
    <div>
       
       <div className='navbar'>
            <img src="https://www.freeiconspng.com/thumbs/nike-logo/logo-brand-nike-png-10.png" alt=""  height="40px"/>
            {/* 1st div */}
            <div className='navbarprod' >
                <h3>Men</h3>
                <h3>Women</h3>
                <h3>Kids</h3>
            </div>

              {/* 2nd div */}
            <div className='navbarcart'>
               <Input placeholder=' Search' size='sm' className='navsearch'/>
               <BiHeart fontSize="30px" className='circle'/>
               <HiOutlineShoppingBag fontSize="29px" className='circle'/>
            </div>
              <div className='hamburger'>
                <GiHamburgerMenu/>
              {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen} /> */}
           {/* <Drawernavbar/> */}
              </div>
       </div>

    </div>
  )
}

export default Navbar