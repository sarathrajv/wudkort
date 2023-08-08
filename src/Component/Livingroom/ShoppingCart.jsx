import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import homeicon from "../NavbarImgs/home.png";
import shopbag from "../NavbarImgs/shopping-bag.png";
import profile from "../NavbarImgs/user.png";
import carticon from "../NavbarImgs/shopping-cart.png";
import navlogo from "../alldivimage/footer-logo.svg";
import { Alldatas } from '../Datass';

const ShoppingCart = ({cart,setCart,handleChange}) => {
    const[price,setPrice]=useState(0)


    const handlePrice =()=>{
      let ans = 0;
      cart.map((item)=>(
        ans += item.amount* item.itenrate

      ))
      setPrice(ans)
    }
    useEffect(()=>{
      handlePrice();
    }

    )
    
    const handleRemove= (id)=>{
      const arr = cart.filter((item)=>item.id !== id);
      setCart(arr)
      // handlePrice();
    }
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
      setModalVisible(true);
    };
    
    const hideModal = () => {
      setModalVisible(false);
    };

    const [userData, setUserData] = useState({
      name: '',
      address: '',
      phoneNumber: '',
      
    });



    const handleInputChange2 = (event) => {
      const { name, value } = event.target;
      setUserData({
        ...userData,
        [name]: value,
      });
    };

    const handleCheckout = () => {
      // Save the userData array in the localStorage
      localStorage.setItem('userDetails', JSON.stringify(userData));
      // Proceed with the checkout process
      // ...
    };


    const handleShareWhatsApp = () => {
      const message = `You have recieved some product order :\n\n================================\nOrder Details\n================================\n\n` +
        `Name: ${userData.name}\n` +
        `Address: ${userData.address}\n` +
        `Phone Number: ${userData.phoneNumber}\n\n`+
        'Ordered Products :- \n\n';
    
      const message2 =`\n\nTotal Amount: Rs. ${price}\n`;
      
      const servicesDetails =cart.filter((product) => cart[product.id] !== 0)
        .map((product) => `\nProduct:  ${product.itemname} | Price : ${product.itenrate} `)
        .join('\n');
    
      const fullMessage = `${message}${servicesDetails}${message2}`;
    
      const encodedMessage = encodeURIComponent(fullMessage);
      const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent('7356194215')}&text=${encodedMessage}`;
      
      window.open(whatsappURL, '_blank');
  
    };


  return (

    <div  >
      <div className='cartnavbg' >
        <div className="livingroomnavdiv">
            <Link to={"/"} ><img width="250px" src={navlogo} alt="" /></Link>
            <div>
            <Link to={'/'}><img className="iconsadj" src={homeicon} alt="" /></Link> 
              
            </div>
            <div>
              <img className="iconsadj" src={profile} alt="" />
            
            </div>
            <div>
              <img className="iconsadj" src={shopbag} alt="" />
              
            </div>
         <Link to={"/ShoppingCart"}> <div>
            
              <img className="iconsadj" src={carticon} alt="" />
            
            </div></Link>
            <div>
            {isModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <div className="mailid">
                <div className='details-for-popup'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                  <h4 className='popup-detail-design'> Name : {userData.name}</h4>
                  <h4 className='popup-detail-design'> PhoneNumber : {userData.phoneNumber}</h4>
                  <h4 className='popup-detail-design'> Address : {userData.address}</h4>
                  

                </div>
                <div className='heading-tag-in-last-veri'>
                  <h4 className='popup-detail-design'>Item</h4>
                  <h4 className='popup-detail-design'>Quantity</h4>
                  <h4 className='popup-detail-design'>Rate</h4>
                </div>
                
                <div className="cart-details-on-popup">
                  {
                    cart.map((god)=>
                    <div className='popup-finlissima'>
                      <div className='itemname-finalisima'>
                      <span className='popup-detail-design flex'> {god.itemsecname}</span>
                      </div>
                      <div className='itemname-finalisima'>
                      <span className='popup-detail-design'>{god.amount}</span>
                      </div>
                      <div className='itemname-finalisima'>
                      <span className='popup-detail-design flex_end_rate'>{god.itenrate}.00</span>
                      </div>


                    </div>
                    
                    )
                  }
                  


                </div>
               


            



               
              </div>
          

              

              <div className="buttondiv">
                <button className="buynowbutton-in-checkout" onClick={hideModal}>Close</button>
                <h3 className='popup-detail-design' > Total Amount : {price}.00</h3>
                <button className='buynowbutton-in-checkout'onClick={handleShareWhatsApp}>ORDER</button>

              </div>
            </div>
          </div>
        )}</div>
          </div>
          </div>
          <div className='cart-all-div'>
            <div className='first-body-in-cart'>
      <h1>My shopping cart</h1>
      
      {
        cart?.map((item)=>
            // <div>
            //     <img src={item.itemimages} alt="" />
            //     <span>{item.itemname}</span>
            //     <span>{item.itemcolor}</span>

            //     <button>-</button>
            //     <h5></h5>
            //     <button>+</button>
            //     <div>
            //         <span>{item.itenrate}</span>
            //     </div>
            // </div>
            <div className='all-call-card'>
            <div className='cart-card'>
            <img width="150px" height={170} className='cart-item-images' src={item.itemimages} alt="" />
            <div className="cardalldivsecdivcrt">
               
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
            <div className="bankandbuttoninlivrmcart" >
            <h5 className="pricedrop12">{item.itembankdetails}</h5>
            <div className='buttonalldivincart'>
              <div className='pos_neg'>
            <button onClick={()=>handleChange(item,-1)} className='plusandminus'>-</button>
            <h5>{ item.amount}</h5>
              <button onClick={()=>handleChange(item,+1)} className='plusandminus'>+</button>
              </div>
              <div>
                <button onClick={()=>handleRemove(item.id)} className='remove-btn-in-cart' >remove</button>
              </div>

            </div>
            
            </div>
            
            
          </div>
          </div>
          </div>
          
            
        )
      }
      </div>
      <div className='second-div-in-cart'>
        
      
     
    <div className='all-checkout-div ' >
        <h1 className='checkoutheaddiv' >Checkout Session</h1>
        <div className='price-in-checkout'>
        <h2 className='checkoutheaddiv1'>Total Amount</h2>
        <h2 className='checkoutheaddiv1'>RS = {price} /-</h2>
        </div>
        <section class="section_form">
  <div id="consultation-form" class="feed-form" action="#">
    <input required="" placeholder="Name" type="text" value={userData.name} onChange={handleInputChange2} name='name'/>
    <input width='250px' height='10px' name="phoneNumber" required="" placeholder="Phone number" value={userData.phoneNumber}  onChange={handleInputChange2}  />
    <input name="address" required="" placeholder="Address" type="text" value={userData.address} onChange={handleInputChange2}/>
    <button class="button_submit" onClick={showModal}>ORDER</button>
  </div>
</section>
       
        
        <div className='guarantee-in-checkout'>
         
        </div>
      </div>
    </div>

    </div>
  
    </div>
   
  )
}

export default ShoppingCart

