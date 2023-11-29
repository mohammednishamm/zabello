import React, { useContext, useState } from 'react';
import '../more/more.css';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../images/heart (3).png'
import img11 from '../images/heart (4).png'
import img3 from '../images/heart (3).png'

import { PRODUCTS } from '../Data';
import { More1 } from './More1';
import { Shopcontext } from '../Shop/Shopcontext';

export const More = (props) => {
    const {cartitems,addToCart}=useContext(Shopcontext)
    const location = useLocation();
    
    // Check if selectedProduct exists in location.state
    const selectedProduct = location.state ? location.state.selectedProduct : null;
    const [image, setImage] = useState(selectedProduct ? selectedProduct.image : '');
    const [love, setLove] = useState(img11);
    const nisham=selectedProduct.id
    
    const handPick = () => {
        if (love === img11) {
            setLove(img1);
        } else {
            setLove(img11);
        }
    }
    
    if (!selectedProduct) {
        return <div>No product selected</div>;
    }
    
    return (
        <>
            <div className='mia'>
                <div className='mia1'>
                    <img className='miai' src={image} alt="" />
                    <div className='mai11'>
                        <img className='miaimg' onClick={() => setImage(selectedProduct.image1)} src={selectedProduct.image1} alt="" />
                        <img className='miaimg' onClick={() => setImage(selectedProduct.image2)} src={selectedProduct.image2} alt="" />
                        <img className='miaimg' onClick={() => setImage(selectedProduct.image)} src={selectedProduct.image} alt="" />
                    </div>
                </div>
                <div className='mia2'>
                    <span className='stock'>IN STOCK</span>
                    <h1 className='selectedproduct'>{selectedProduct.brand}</h1>
                    <span className='stock1'>{selectedProduct.name}</span>
                    
                    <span className='stock3'>You have made the right choice And it is good for you because as we all know people change their claims with the course of time, and our good will be actual for a long time. </span>
                    <span className='stock2'>{selectedProduct.price}.00</span>
                    <span className='stockda'>Color: {selectedProduct.color}</span>
                    <span className='stock4'>Qty:</span>
                    <div className='stock51'>
                        <span className='stock5'>{cartitems[nisham]}</span>
                        <div className='stock6'>
                            <img onClick={handPick} src={love} alt="" />
                        </div>
                    </div>
                    <button className='stock7' onClick={()=>addToCart(nisham)}>Add to cart</button>
                        
                
                        <button className='stock7'>Buy now</button>

                </div>
            </div>
         
<div className='chai'>
    {PRODUCTS.map((product) => {
        if (product.type === selectedProduct.type) {
         return   <More1 data={product}/>
          
    }})}
</div>

        </>
    );
};
