import React,{useEffect, useRef} from 'react'
import Hometop1 from "../../Images/Hometop1.png"
import Hometop2 from "../../Images/Hometop2.png"
import Hometop3 from "../../Images/Hometop3.png"
import "./home.css"
import Homemen from "../../Images/Homemen.png"
import Homewomen from "../../Images/Homewomen.png"
import Homekids from "../../Images/Homekids.png"
import nikevid from "./nikevid.mp4"
import { Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
const navigate=useNavigate()
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play();
    }
}, []);
  return (
    <div className='homebox'>
      <img src={Hometop1} alt="" className='hometopimg'/>
      {/* first div */}
      <br />
       <br />
       <br />
       <p className='featured'>Featured</p>
      <div className='home'>
        <div>
          <img src={Hometop2} alt="" />
        </div>
        <div>
          <img src={Hometop3} alt="" />
        </div>
      </div>
      <br />
      <br />
      <p className='featured'>The Latest</p>
      <video ref={videoRef} src={nikevid}></video>
      <br />
      <div className='homemore'>
           <p>The all new Phantom GX</p>
        <div>
           <h1>
                MORE GRIP.
          </h1>
          <h1>
            MORE PRECISION.
          </h1>    
         </div>
          <p> Phantom GX's precision, Powered by Gripknit</p>
          <br />
          <button>Shop</button>
      </div>
      <br />
      <br />
      <br />
      <img src="https://wallpaper.dog/large/11527.jpg" alt="" />
    <br />
    <div className='homemore'>  
           <p>Nike Yoga</p>
        <div>
           <h1>
               STAY PRESENT IN
          </h1>
          <h1>
            EVERY POSE
          </h1>    
         </div>
          <p>Focus on your practice, not your clothes thanks to yoga essentials</p>
          <br />
          <button>Shop</button>
      </div>
      <div className='homelast'>
        <img src={Homemen} alt=""  onClick={()=>navigate("/men")}/>
        <img src={Homewomen} alt="" onClick={()=>navigate("/women")} />
        <img src={Homekids} alt="" onClick={()=>navigate("/kids")}/>
      </div>
    </div>
  )
}

export default Home