import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { prod } from './Data';



export const Seller = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };



  return (
    <div>
      {/* <div className='oop'> */}
      <h2 className='best-seller'>Best Seller</h2>
        <div className='oop'>
            
           
            <Carousel responsive={responsive}>
  {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
  {prod.map((item)=>{
    return (
      <div className='oop2'>
        <img className='oou' src={item.img} alt="" />
        <span className='item-name'>{item.name}</span>
        <span className='item-price'>{item.price}</span>
      </div>
    )
  }
  )}
</Carousel>
          
        </div>
    </div>
    // </div>
  )
}


     {/* <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20221117/89FO/63766bfaf997ddfdbd825fa0/-473Wx593H-469200093-black-MODEL.jpg" alt="" />
               </div>
               <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20230315/zVKV/6411e6f9aeb26924e3c43c98/-473Wx593H-469211064-charcoal-MODEL.jpg" alt="" />
               </div>
               <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20230331/faqn/6426f518907deb497ac0b937/-473Wx593H-469419027-charcoal-MODEL.jpg" alt="" />
               </div>
               <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20221019/cimN/634ef96ef997ddfdbd3161b0/-473Wx593H-469168482-darkgreen-MODEL.jpg" alt="" />
               </div>
               <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20221019/cimN/634ef96ef997ddfdbd3161b0/-473Wx593H-469168482-darkgreen-MODEL.jpg" alt="" />
               </div>
               <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20230331/faqn/6426f518907deb497ac0b937/-473Wx593H-469419027-charcoal-MODEL.jpg" alt="" />
               </div>
               <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20221019/cimN/634ef96ef997ddfdbd3161b0/-473Wx593H-469168482-darkgreen-MODEL.jpg" alt="" />
               </div>
               <div className='oop2'>
                <img className='oou' src="https://assets.ajio.com/medias/sys_master/root/20221019/cimN/634ef96ef997ddfdbd3161b0/-473Wx593H-469168482-darkgreen-MODEL.jpg" alt="" />
               </div> */}
