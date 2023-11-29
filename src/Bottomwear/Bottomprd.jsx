import React, { useState } from 'react'
import img1 from '../images/heart (1).png'
import img2 from '../images/heart (3).png'
import { PRODUCTS } from '../Data';
import { Link } from 'react-router-dom';

export const Bottomprd = (props) => {



        const {id ,name,image,price,image2,image3,priceo,color,brand,tag}=props.data;
        const [love,setLove]=useState(img1);
       
        
      
        return (
          <div className='product12-border12'>
            <div className='image-container'>
            <img className='product-img' src={image} alt="" />
      <Link to='/mor' state={{selectedProduct:props.data}}>      <div className='caption9'>
              <button className='caption8'>Quick View</button></div></Link>
            </div>
            <div className='product-love'><span className='product-name'>{name}</span><img className='product-img1' onClick={()=>setLove(img2)} src={love} alt="" /></div>
            <span className='product-price'>{price}</span>
      
      
      
      
      
          </div>
        )
      }
