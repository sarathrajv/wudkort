import React from 'react'
import navlogo from "../alldivimage/footer-logo.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import ads from '../alldivimage/add.jpg'
import homeicon from "../NavbarImgs/home.png";
import shopbag from "../NavbarImgs/shopping-bag.png";
import profile from "../NavbarImgs/user.png";
import carticon from "../NavbarImgs/shopping-cart.png";
import { useEffect } from 'react';
import { Alldatas } from "../Datass";
import BedroomPopup from './BedroomPopup';
import Footer from '../Footer';
const BedRoom = ({size,handClick,setShow,handleChange}) => {
  const[buttonpopup,setbuttonpopup]=useState(false)
  const[product,setproduct]=useState()
  const onclickAbout=(item)=>{
    setbuttonpopup(true)
    setproduct(item)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bedroom =Alldatas.filter((item)=>item.cat==="bed")
  return (
    <div>
  <div className="livingroommaindiv">
        <div className="secnavlogobginlivrom">
          <div className="livingroomnavdiv">
           <Link to={'/'} ><img width="250px" src={navlogo} alt="" /></Link> 
           <div>
              <Link to={'/'}><img className="iconsadj" src={homeicon} alt="" /></Link> 
              
            </div>
            <div>
              <img className="iconsadj" src={profile} alt="" />
            
            </div>
            <div>
              <img className="iconsadj" src={shopbag} alt="" />
              
            </div>
            <Link to={"/ShoppingCart"}> <div onClick={()=>setShow(false)}>
            <span>{size}</span>
              <img className="iconsadj" src={carticon} alt="" />
            
            </div></Link>
          </div>
        </div>
        <div className="secondnavbarbackinlivrom">
          <div id="secondnavbarinlivrom" className="secondnavbar activee">
            <Link className="linkedmainheads" to={"/LivingRoom"}>
              {" "}
              <h4 id="animation2" className="allheading">
                LIVING ROOM
              </h4>
            </Link>
            <Link className="linkedmainheads" to={"/DiningRoom"}>
              {" "}
              <h4 id="animation2" className="allheading">
                DINING ROOM
              </h4>
            </Link>
            <Link className="linkedmainheads" to={"/BedRoom"}>
              <h4 id="animation2" className="allheading">
                BED ROOM
              </h4>
            </Link>
            <Link className="linkedmainheads" to={"/Kitchen"}>
              <h4 id="animation2" className="allheading">
                KITCHEN
              </h4>
            </Link>
            <Link className="linkedmainheads" to={"/StoreRoom"}>
              <h4 id="animation2" className="allheading">
                STORAGE
              </h4>
            </Link>
          </div>
        </div>
        <div className="cardbigforpopup">
        <div className="carddivlivrm">
          {bedroom.map((item) => (
            <div className="cardalldiv">
              <div className="cardalldivfirstdiv">
                <img
                  className="furnitureimage"
                  // width="180px"
                  src={item.itemimages}
                  alt=""
                />
              </div>
              <div className="cardalldivsecdiv">
                <div className="cardsitemnameinlivrm">
                  <h4 className="allheading">{item.itemname}</h4>
                </div>
                <div className="assurancediv">
                  <img width="25px" src={item.itemassureicon} alt="" />
                  <span className="pricedrop123">{item.itemassurance}</span>
                </div>
                <div className="ratedetails">
                  <h4 className="pricedrop1">{item.itenrate}</h4>
                  <h4 className="pricedrop">{item.itemdisrate}</h4>
                  <h4   className="pricedrop12">{item.itemdispers}</h4>
                </div>
                <div>
                  {" "}
                  <h5 className="allheading">{item.itemdelivery}</h5>
                </div>
                <div className="bankandbuttoninlivrm" >
                <h5 className="pricedrop12">{item.itembankdetails}</h5>
                <button className="popopenbtn" onClick={()=> onclickAbout(item)} >More Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="popupbig">
        
        <div className="popup1">
        <img src={ads} alt="" className="imgnh"/>
<BedroomPopup trigger ={buttonpopup} setTrigger={setbuttonpopup}
product={product}  handClick={handClick} handleChange={handleChange} />


</div>
</div>
</div>
      </div>
      <Footer/>
    </div>
       
    
  )
}

export default BedRoom