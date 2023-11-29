import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../images/heart (2).png';
import { Shopcontext } from '../Shop/Shopcontext';

export const More1 = ({ data }) => {
    const {cartitems,addToCart}=useContext(Shopcontext)
    const navigate = useNavigate();

    const handleClick = () => {
        // Pass the selected product to the "/mor" route when the button is clicked
        navigate('/mor', { state: { selectedProduct: data } });
    };

    const nisham=data.id
    return (
        <div className='product12-border12'>
            <div className='image-container'>
                <img className='product-img' src={data.image} alt="" />
                <div className='caption9'>
                    <button className='caption8' onClick={()=>addToCart(nisham)}>Add to cart</button>
                </div>
            </div>
            <div className='product-love'>
                <span className='product-name'>{data.name}</span>
                <img className='product-img1' src={img1} alt="" />
            </div>
            <span className='product-price'>{data.price}</span>
        </div>
    );
};
