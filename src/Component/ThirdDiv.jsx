import React from 'react'
import thirddbodyimg from './alldivimage/20230718203319_[fpdl.in]_modern-lounge-attic-with-wooden-ceiling-beam-windows-roo_1441-4007_medium.jpg'

const ThirdDiv = () => {
  return (
    <div>
         <div className='thirdbodymaindiv'>
            <div className='thirddbodyfirstdiv'>
            <img width= "800px" src={thirddbodyimg} alt="" />

            </div>
            <div className='thirddbodythirdddiv'>
                <div className='thirddbodythirddsubdiv' >
                    <div>
                    <h2 className='allheading' id='linemodernarc'>Minimalism</h2>
                    </div>
                    
                    <h3 className='allheading'>Sofa Pair : 390$</h3>
                    <h3 className='allheading'>frameset :450$ </h3>
                    <h3 className='allheading'>Table : 250$</h3>
                    <h3 className='allheading'>flowerwase : 100$</h3>
                    <h3 className='allheading'>Floor : 560$</h3>
                    <h2 className='allheading'>Worth : 5660$</h2>

                </div>

            </div>
            

        </div>
    </div>
  )
}

export default ThirdDiv