import React, { useContext } from 'react'
import { Shopcontext } from '../Shop/Shopcontext'

export const Cartitems = (props) => {
    const {id,image,name,brand,color,price}=props.data;
    const {cartitems,addToCart,removeFromCart,deleteCart}=useContext(Shopcontext);
  return (

    <div className='erl'>
        <img className='erlimg' src={image} alt="" />

        <div className='erling'>
            <h6>{brand}</h6>
            <span className='erl2'>{name}</span>
            <span>Color: {color}</span>


        </div>
        <span className='erlp'>{price}</span>
        <div className='erld'>
            <span className='erlm' onClick={()=>addToCart(id)}>+</span>
            <span className='erlm'>{cartitems[id]}</span>
            <span className='erlm' onClick={()=>removeFromCart(id)}>-</span>
        </div>
        <span className='xx' onClick={()=>deleteCart(id)}>X</span>

    </div>
  )
}
