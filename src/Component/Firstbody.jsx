import React from 'react'
import secdivimg1 from './firstdivimages/sectdivimg1.jpg'
import secdivimg2 from './firstdivimages/secdivimg2.jpg'
import secdivimg3 from './firstdivimages/secdivimg3.jpg'
import secdivimg4 from './firstdivimages/secdivimg4.jpg'


const Firstbody = () => {
  return (
    <div>
        <div className="firstbodymaindiv">
            <div className='cardfirstdiv'>
            <img className='secdivimgss' src= {secdivimg1} alt="" />
            <h3 className='allheading'>Mid-century modern</h3>
            <h3 className='allheading' >Worth $ 10000</h3>
            </div>
            <div className='cardfirstdiv'>

            <img className='secdivimgss' src= {secdivimg2} alt="" />
            <h3 className='allheading'>Minimalism</h3>
            <h3 className='allheading'   >Worth $ 19000</h3>
            </div >
            <div className='cardfirstdiv'>
            <img className='secdivimgss' src= {secdivimg3} alt="" />
            <h3 className='allheading'>Art Deco</h3>
            <h3 className='allheading' >Worth $ 18000</h3>
            </div>
            <div className='cardfirstdiv'>
            <img className='secdivimgss' src= {secdivimg4} alt="" />
            <h3 className='allheading'>Shabby chic</h3>
            <h3 className='allheading' >Worth $ 11000</h3>
            </div>

        </div>
    </div>
  )
}

export default Firstbody