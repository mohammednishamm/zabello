import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../Data';


export const Shopcontext=createContext(null);



  const getdefaultcart=()=>{
    let cart={};
    for(let i=1 ;i<PRODUCTS.length+1;i++){
      
      cart[i]=0;
    }
    return cart;
  }



  
export const Shopcontextprovider = (props) => {

  const [cartitems,setCartitems]=useState(getdefaultcart());
 const getTotalCartAmount=()=>{
  let totalAmount=0;
  for(const item in cartitems){
    if(cartitems[item] > 0){
      let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
      totalAmount += cartitems[item] * itemInfo.priceo;
    }
  }
  return totalAmount;
 }

  // const getTotalCartAmount=()=>{
  //   let totalAmount=0;
  //   for(const item in cartitems){
  //       if(cartitems[item]>0){
  //           let itemInfo=PRODUCTS.find((product)=>product.id === Number(item));
  //           totalAmount += cartitems[item] * itemInfo.productprice;
  //       }
  //   }
  //   return totalAmount;
  // }


  const addToCart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid] + 1}))
  };
  const removeFromCart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid] - 1}))
  }
  const deleteCart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid] - prev[itemid]}))
  }




  const contextValue={cartitems,addToCart,removeFromCart,getTotalCartAmount,deleteCart}




  return (
    <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>
  )
}



