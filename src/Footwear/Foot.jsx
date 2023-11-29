import React, { useState } from 'react';
import '../topwear/Top.css';
import { PRODUCTS } from '../Data';
import { Footprd } from './Footprd';


export const Foot = () => {
  const [isFilterActive, setFilterActive] = useState(false);
  const [selectBrand,setSelectBrand]=useState(null);
  const [type,setType]=useState(null);
  const [color,setColor]=useState(null);
  const [range,setRange]=useState(null);
  const [tag,setTag]=useState(null);
  

  const toggleFilterVisibility = () => {
    setFilterActive(!isFilterActive);
  };
  const brandCategory = (brand) =>{
    setSelectBrand(brand);
  }
  const typeCategory =(type)=>{
    setType(type)
  }
  const colorCategory=(color)=>{
    setColor(color)
  }
  const rangeCategory =(range)=>{
    setRange(range)
  }
  const tagCategory=(tag)=>{
    setTag(tag);
  }

  const filteredProduct=PRODUCTS.slice(40,55).filter((product)=>
  product.name.toLowerCase());

  const filtereByCategory=()=>{
    let filtered = filteredProduct;
    if(selectBrand){
      filtered=filtered.filter((product)=>product.brand === selectBrand);
    }
    if(type){
      filtered=filtered.filter((product)=>product.type=== type)
    }
    if(color){
      filtered=filtered.filter((product)=>product.color===color)
    }
    if(range){
      filtered=filtered.filter((product)=>product.range === range)
    }
    if(tag){
      filtered=filtered.filter((product)=>product.tag === tag)
    }
    return filtered

  }
  const clearproduct =() => {
    setSelectBrand(null);
    setType(null);
    setColor(null);
    setRange(null);
    setTag(null);
  }
  

  return (
    <> 
       <div className='top'>
      <div className={`top1 ${isFilterActive ? 'active' : ''}`}>
        <div className='top11'>
          <div className='fillu'>
          <span className='filter-jacket' onClick={()=>clearproduct(null)}>All products</span>
          <span className='filter-jacket' onClick={()=>typeCategory("normal")}>Normal</span>
          <span className='filter-jacket' onClick={()=>typeCategory("lace-up")}>Lace-up</span>
          <span className='filter-jacket' onClick={()=>typeCategory("boot")}>Boot</span>
          <span className='filter-jacket' onClick={()=>typeCategory("running")}>Running</span>
          <span className='top111' onClick={toggleFilterVisibility}>
            <img className='hridayam' src="https://cdn-icons-png.flaticon.com/128/7693/7693332.png" alt="" />
            Filter
          </span>
          </div>
          {isFilterActive && (
            <div className='hide'>
                <div className='jhg'>
                  <div className='jhg1'>
                    <h5>Brand</h5>
                    <span className='netplay' onClick={()=>brandCategory("WOODLAND")}>WOODLAND</span>
                    <span className='netplay' onClick={()=>brandCategory("NIKE")}>NIKE</span>
                    <span className='netplay' onClick={()=>brandCategory("ALLEN COOPER")} >ALLEN COOPER</span>
                    {/* <span className='netplay' onClick={()=>brandCategory("WOXEN")}>Woxen</span> */}
                    <span className='netplay'>Adidas</span>

                  </div>
                  <div className='jhg2'>
                    <h5>Color</h5>
                    <div onClick={()=>colorCategory("black")} className='chamba'><div className='color1'></div><span className='netplay1'>Black</span></div>
                    <div onClick={()=>colorCategory("white")} className='chamba'><div className='color2'></div><span className='netplay1'>White</span></div>
                    <div onClick={()=>colorCategory("red")} className='chamba'><div className='color3'></div><span className='netplay1'>Red</span></div>
                    <div onClick={()=>colorCategory("green")} className='chamba'><div className='color4 color8'></div><span className='netplay1'>Green</span></div>
                    <div onClick={()=>colorCategory("grey")} className='chamba'><div className='color5 color7'></div><span className='netplay1'>Grey</span></div>
                    <div onClick={()=>colorCategory("purple")} className='chamba'><div className='color6'></div><span className='netplay1'>Purple</span></div>





                  </div>
                  <div className='jhg3'>
                      <h5>Price</h5>
                      <span className='netplay' onClick={()=>rangeCategory("1500-2000")}>₹1500-₹2000</span>
                      <span className='netplay' onClick={()=>rangeCategory("2000-2500")}>₹2000-₹2500</span>
                      <span className='netplay' onClick={()=>rangeCategory("2500-3000")}>₹2500-₹3000</span>
                      <span className='netplay' onClick={()=>rangeCategory("3000-3500")}>₹3500-₹4000</span>
                      <span className='netplay' onClick={()=>rangeCategory("3500-4000")}>₹4000-₹4500</span>
                      {/* <span className='netplay'onClick={()=>rangeCategory("2500-3000")}>₹2500-₹3000</span> */}

                  </div>
                  <div className='jhg4'>
                    <h5>Tag</h5>
                  <div className='tagilla'><span onClick={()=>tagCategory("normal")} className='tagil'>Normal</span><span onClick={()=>tagCategory("casual")} className='tagil llal'>Casual</span></div>
                  <div className='tagilla'><span onClick={()=>tagCategory("style")} className='tagil'>Style</span><span className='tagil llal'>Street</span></div>
                  <span className='tagil'>Denim</span>
                  </div>

                </div>
              
            </div>
          )}
        </div>
      </div>
      <div className="top2">
      {filtereByCategory().map((product)=>(
        <Footprd data={product}/>  
            ))}
      </div>
    </div>

    </>

  );
};
