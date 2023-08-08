import React from 'react'

function KitchenPopup({trigger,setTrigger,product,handClick}) {
  return trigger ? ( 
    <div>
<div className='popup'>
  <div className="popup-inner">
    <div>
        <h2></h2>
    </div>
    
    <div className="popupsubdiv">

    <button className='close-btn' onClick={()=>setTrigger(false)} >close</button>
    
<div className="headinginproping" >
  <h2  className="prophead">{product.itemname}
</h2>
  </div>
  <div className="ratedetailspopup">
                  <h4 className="pricedrop1">{product.itenrate}</h4>
                  <h4 className="pricedrop">{product.itemdisrate}</h4>
                  <h4   className="pricedrop12">{product.itemdispers}</h4>
                  <button className="addcartbutton" onClick={()=>handClick(product)} >Add To Cart</button>
                </div>
                <div className="allbankinpops">
                <h3 className="allheadingpop">Available offers</h3>
                <li className="allheadingpop" >Special PriceExtra ₹4000 off(price inclusive of discount)</li>
                <li className="allheadingpop">Bank Offer10% off on ICICI Cards Upto ₹1000T&C</li>
                <li className="allheadingpop">Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999</li>
                <li className="allheadingpop">Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999</li>
                <li className="allheadingpop">Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or more</li>
                <li className="allheadingpop">Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000</li>
                <li className="allheadingpop">Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI Trxns on orders of ₹50,000 and above</li>
                <li className="allheadingpop">Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
                </div>
                </div>


  </div>

</div>

    </div>
  ) :("");
}

export default KitchenPopup