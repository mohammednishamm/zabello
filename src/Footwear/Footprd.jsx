import React, { useState } from 'react'
import img1 from '../images/heart (1).png'
import img2 from '../images/heart (2).png'
import img3 from '../images/heart (3).png'
import { Link } from 'react-router-dom';

export const Footprd = (props) => {

  const {id ,name,image,price,image2,image3,priceo,color,brand,tag}=props.data;
  const [love,setLove]=useState(img1);

  return (
    <div className='product12-border12'>
      <div className='image-container'>
      <img className='product-img' src={image} alt="" />
      <div className='caption9'>
      <Link to='/mor' state={{selectedProduct:props
        .data}}>  <button className='caption8'>Quick View</button></Link></div>
      </div>
      <div className='product-love'><span className='product-name'>{name}</span><img className='product-img1' onClick={()=>setLove(img3)} src={love} alt="" /></div>
      <span className='product-price'>{price}</span>




    </div>
  )
}
