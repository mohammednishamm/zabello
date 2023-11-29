import React, { useState } from 'react'
import '../topwear/Top.css'
import { Bottomprd } from './Bottomprd'
import { PRODUCTS } from '../Data'

export const Bottom = () => {
    const [isFilterActive, setFilterActive] = useState(false);
    const [type,setType]=useState(null);
    const [color,setColor]=useState(null);
    const [brand,setBrand]=useState(null);
    const [range,setRange]=useState(null);
    const [tag,setTag]=useState(null);
  
    

    const toggleFilterVisibility = () => {
        setFilterActive(!isFilterActive);
      };
      const typeCategory=(type)=>{
        setType(type);
      }
      const colorCategory=(color)=>{
        setColor(color);
      }
      const brandCategory=(brand)=>{
        setBrand(brand)
      }
      const  rangeCategory=(range)=>{
        setRange(range)
      }
      const tagCategory=(tag)=>{
        setTag(tag)
      }
      const filteredProduct=PRODUCTS.slice(20,40).filter((product)=>
      product.name.toLowerCase()
      ) ; 


      const filteredByCategory =()=>{
        let filtered=filteredProduct;
        if(type){
          filtered=filtered.filter((product)=>product.type===type)
        }
        if(color){
          filtered=filtered.filter((product)=>product.color === color)
        }
        if(brand){
          filtered=filtered.filter((product)=>product.brand === brand)
        }
        if(range){
          filtered=filtered.filter((product)=>product.range === range)
        }
        if(tag){
          filtered=filtered.filter((product)=>product.tag === tag)
        }
        return filtered;
      }

      const clear1=()=>{
        setBrand(null)
        setColor(null)
        setRange(null)
        setTag(null)
        setType(null)
      }

  return (
    <>
       <div className='top'>
      <div className={`top1 ${isFilterActive ? 'active' : ''}`}>
        <div className='top11'>
          <div className='fillu'>
          <span className='filter-jacket' onClick={()=>clear1(null)}>All products</span>
          <span className='filter-jacket' onClick={()=>typeCategory("jean")}>Jeans</span>
          <span className='filter-jacket'onClick={()=>typeCategory("track")}>Track-Pant</span>
          <span className='filter-jacket' onClick={()=>typeCategory("boxer")}>Boxer</span>
    
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
                    <span className='netplay' onClick={()=>brandCategory("NETPLAY")}>Netplay</span>
                    <span className='netplay' onClick={()=>brandCategory("WRANGLER")}>WRANGLER</span>
                    <span className='netplay' onClick={()=>brandCategory("DNDX")} >DNDX</span>
                    <span className='netplay' onClick={()=>brandCategory("ALLEN SOLLY")} >ALLEN SOLLY</span>
                    <span className='netplay'>Adidas</span>

                  </div>
                  <div className='jhg2'>
                    <h5>Color</h5>
                    <div onClick={()=>colorCategory("black")} className='chamba'><div className='color1'></div><span className='netplay1'>Black</span></div>
                    <div onClick={()=>colorCategory("white")} className='chamba'><div className='color2'></div><span className='netplay1'>White</span></div>
                    <div onClick={()=>colorCategory("red")} className='chamba'><div className='color3'></div><span className='netplay1'>Red</span></div>
                    <div onClick={()=>colorCategory("blue")} className='chamba'><div className='color4'></div><span className='netplay1'>Blue</span></div>
                    <div onClick={()=>colorCategory("grey")} className='chamba'><div className='color5 color7'></div><span className='netplay1'>Grey</span></div>
                    <div onClick={()=>colorCategory("green")}  className='chamba'><div className='color6 color8'></div><span className='netplay1'>Green</span></div>





                  </div>
                  <div className='jhg3'>
                      <h5>Price</h5>
                      <span className='netplay' onClick={()=>rangeCategory("0-500")} >₹0-₹500</span>
                      <span className='netplay' onClick={()=>rangeCategory("500-1000")}>₹500-₹1000</span>
                      <span className='netplay' onClick={()=>rangeCategory("1000-1500")}>₹1000-₹1500</span>
                      <span className='netplay' onClick={()=>rangeCategory("1500-2000")}>₹1500-₹2000</span>
                      <span className='netplay' onClick={()=>rangeCategory("2000-2500")}>₹2000-₹2500</span>
                      <span className='netplay' onClick={()=>rangeCategory("2500-3000")}>₹2500-₹3000</span>

                  </div>
                  <div className='jhg4'>
                    <h5>Tag</h5>
                  <div className='tagilla'><span  className='tagil' onClick={()=>tagCategory("normal")}>Normal</span><span onClick={()=>tagCategory("casual")} className='tagil llal'>Casual</span></div>
                  <div className='tagilla'><span onClick={()=>tagCategory("style")} className='tagil'>Style</span><span className='tagil llal'>Street</span></div>
                  <span className='tagil'>Denim</span>
                  </div>

                </div>
              
            </div>
            
          )}
        </div>
      </div>
      <div className="top2">
      {filteredByCategory().map((product)=>(
        <Bottomprd data={product}/>  
            ))}
      </div>
    </div>

    </>
  )
}
