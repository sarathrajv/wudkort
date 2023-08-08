import React from "react";
import logo from "./NavbarImgs/logo.svg";
import { useState,useEffect } from "react";
import {  Outlet,Link } from "react-router-dom";
import homeicon from "./NavbarImgs/home.png";
import shopbag from "./NavbarImgs/shopping-bag.png";
import profile from "./NavbarImgs/user.png";
import carticon from "./NavbarImgs/shopping-cart.png";

const NavBar = ({size, setShow}) => {
  const [navbar,setnavbar]=useState(false)




  const changebackground= ()=>{
    if(window.scrollY>=200){
      setnavbar(  true)
    }
    else{
      setnavbar(false)
    }
    
  }
  window.addEventListener('scroll',changebackground)



  return (
    <div>
      <div className="mainnavbg" id="mainnav2">
        <div className={navbar ?'mainnavbar active' :'mainnavbar'}>
          <div className="logodiv">
            <img className="logodesign " src={logo} alt="" />
          </div>
          <div  className="navitems">
            <div>
              <img className="iconsadj" src={homeicon} alt="" />
              
            </div>
            <div>
              <img className="iconsadj" src={profile} alt="" />
            
            </div>
            <div>
              <img className="iconsadj" src={shopbag} alt="" />
              
            </div>
            <Link to={"/ShoppingCart"}><div >
              <span style={{color: "red"}} >{size}</span>
              <img className="iconsadj" src={carticon} alt="" />
            
            </div></Link>
          </div>
        </div>
        <div className='secondnavbar activee'>
         <Link className="linkedmainheads" to={"/LivingRoom"} > <h4   id="animation2" className="allheading mediafirsthead"    >LIVING ROOM</h4></Link>
         <Link className="linkedmainheads" to={"/DiningRoom"}> <h4 id="animation2"  className="allheading mediafirsthead" >DINING ROOM</h4></Link>
          <Link className="linkedmainheads" to={"/BedRoom"}><h4 id="animation2"  className="allheading mediafirsthead">BED ROOM</h4></Link>
          <Link className="linkedmainheads" to={"/Kitchen"}><h4 id="animation2"  className="allheading mediafirsthead">KITCHEN</h4></Link>
          <Link className="linkedmainheads" to={"/StoreRoom"}><h4 id="animation2" className="allheading mediafirsthead">STORAGE</h4></Link>


        </div>
        <div className="mainpagefont">
          <h1>GIVING YOUR HOME A NEW STYLE <br /> WITH NATURAL FURNITURES</h1>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default NavBar;
