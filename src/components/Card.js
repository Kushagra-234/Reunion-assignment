import React from "react";
import { BsHeart } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import {MdOutlineBathroom} from "react-icons/md"
import {TbChartAreaLine} from "react-icons/tb"
import "./card.css";

const Card = ({data}) => {
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
         { data.map((data)=>{
              return (
             <div className="col-lg-4 col-md-6 mt-5 ps-2">
               <div className="row cardcontainer">
                 <img
                   className="img"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaPKd_RNaLzOBxnUbKDryg_txfUNzIVywtw&usqp=CAU"
                 />
                 <div className="content">Popular</div>
                 <div className="row">
                   <div className="col-6 mt-2 ps-4 currency">
                     {data.price}
                     <span className="month">/month</span>
                   </div>
                   <div className="col-6 mt-2 text-end  hearticon ">
                     <BsHeart />
                   </div>
                   <div className="col-12 ps-4 name">{data.name}</div>
                   <div className="col-12  ps-4 address">{data.address}</div>
                   <div className="row  mt-3 ">
                     <div className="col-4  text-start accesories">
                       <MdOutlineBedroomParent className="bedicon" />{data.beds} Bed
                     </div>
                     <div className="col-4 pe-0 text-start accesories">
                       <MdOutlineBathroom className="bedicon" />{data.bathrooms} Bedroom
                     </div>
                     <div className="col-4 text-end accesories">
                       <TbChartAreaLine className="bedicon" />
                       {data.area}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
              )

          }) }
        
        
          
        </div>
      </div>
    </>
  );
};

export default Card;
