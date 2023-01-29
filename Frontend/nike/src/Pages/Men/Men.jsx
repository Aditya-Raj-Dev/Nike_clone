import { color } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Filter from "../../Components/Filter/Filter";
import Sorting from "../../Components/Sorting/Sorting";
import { getData, ShowFilter } from "../../Redux/Appreducer/Product/action";
import "./men.css";
const Men = () => {
  const dispatch = useDispatch();
  const [searchparam]=useSearchParams()
  const filter = useSelector((state) => state.ProductReducer.showfilter);
  const prod = useSelector((state) => state.ProductReducer.prod);
  const sort = useSelector((state) => state.ProductReducer.sort);
  const [data, setData] = useState([]);
  const location=useLocation()
const navigate=useNavigate()

  useEffect(() => {
    const prodparam={
      params:{
        category:searchparam.getAll("category"),
        color:searchparam.getAll("color")
      }
    }
    dispatch(getData("http://localhost:8080/mens",prodparam));
    if (prod.length > 0) {
      setData(prod);
    }
  }, [prod.length, sort,location.search]);
     console.log(prod)
  return (
    <div>
      <div>
        <Sorting />
      </div>
      <div className={filter ? "menboxfilter" : "menbox"}>
        <div className={filter ? "showfilter" : "noshowfilter"}>
          <Filter category={prod.map((item)=>item.category)} color={prod.map((item)=>item.color)} />
        </div>

        <div className={filter ? "menprodfilter" : "menprod"}>
          {data &&
            data.map((item) => (
              <div style={{cursor:"pointer"}} key={item._id} onClick={()=>{
                console.log(item._id)
                navigate(`/men/${item._id}`)}}>
                <img src={item.img[0]} alt="" />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <p>{item.color}</p>
                <h4>Ratings : {item.rating}</h4>
                <h5>MRP :₹ {item.price} </h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
