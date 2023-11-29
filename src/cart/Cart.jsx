import React, { useContext } from 'react'
import { Shopcontext } from '../Shop/Shopcontext'
import { PRODUCTS } from '../Data';
import { Cartitems } from './Cartitems';

export const Cart = () => {
    const {cartitems,addToCart,getTotalCartAmount}=useContext(Shopcontext);
    const totalAmount=getTotalCartAmount();
    const offer= Math.round(totalAmount/10);
    const last=totalAmount-offer;
    const atlast=last+40;
    
  return (
    <>
    <div className='novalle'>
        
      <div className='priyan1'>
      
      {PRODUCTS.map((Product)=>{
        if(cartitems[Product.id] !== 0)
        {
          return ( 
            <div>
              <Cartitems data={Product}/>
            </div>
          )
        }
      
      })}


    </div>
    {totalAmount > 0 ?
    <div className='priyan'>
      <h5 className='bag4'>Order Summary</h5>
      <div className='bag'><span className='bag1'>Bag Total</span><span className='bag2'>₹ {totalAmount}.00</span></div>
      <div className='bag'><span className='bag1'>Bag Discount</span><span className='bag2'>₹ {offer}.00</span></div>
      <div className='bag'><span className='bag1'>Delivery</span><span className='bag2'>{last >500 ? <><span>FREE</span></>:<><span>₹ 40.00</span></>}</span></div>
      <div className='bag'><span className='bag1'>Total</span><span className='bag2'>{last >500 ? <><span>{last}</span></>:<><span>{atlast}</span></>}.00</span></div>
      <button className='bag3'>Place Order</button>


        </div> :<img className='empty' src='https://cdn-icons-png.flaticon.com/128/11329/11329060.png'/>}
    </div>
    {/* <div className='baby'></div> */}
    </>
  )
}
