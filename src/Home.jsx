import React from 'react'
import NavBar from './Component/NavBar'
import Firstbody from './Component/Firstbody'
import { useEffect } from 'react';
import SecondBody from './Component/SecondBody'
import ThirdDiv from './Component/ThirdDiv'
import Fourthdiv from './Component/Fourthdiv'
import Footer from './Component/Footer'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        
        <Firstbody/>
        <SecondBody/>
        <ThirdDiv/>
        <Fourthdiv/>
        <Footer/>


    </div>
  )
}

export default Home