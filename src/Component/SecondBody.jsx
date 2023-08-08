import React from 'react'
import secondbodyimg from './alldivimage/seconddivimg.jpg'

const SecondBody = () => {
  return (
    <div>
        <div className='seconbodymaindiv'>
            <div className='secondbodyfirstdiv'>
            <img width= "800px" src={secondbodyimg} alt="" />

            </div>
            <div className='secondbodyseconddiv'>
                <div className='secondbodysecondsubdiv' >
                    <div>
                    <h2 className='allheading' id='linemodernarc'>Modern </h2>
                    </div>
                    
                    <h3 className='allheading'>Chair pair : 340$</h3>
                    <h3 className='allheading'>frameset :150$ </h3>
                    <h3 className='allheading'>Table : 250$</h3>
                    <h3 className='allheading'>flowerwase : 100$</h3>
                    <h3 className='allheading'>Floor : 500$</h3>
                    <h2 className='allheading'>Worth : 3660$</h2>

                </div>

            </div>
            

        </div>
    </div>
  )
}

export default SecondBody