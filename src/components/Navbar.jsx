import React, { useState } from 'react'
import './Navbar.css'
import img1 from '../images/magnifying-glass.png'
import img2 from '../images/profile.png'
import img3 from '../images/heart.png'
import img4 from '../images/bag.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  const [search,setSearch]=useState(false);
  const toggl1eModel=()=>{
    setSearch(!search)
  }
  return (
    <div>
        <div className='num1'>
            <div className='num11'>

            <span className='zaballo'><span className='za'>Za</span>bello</span>
          <Link className='jiji' to='/'>  <span className='home'>HOME</span></Link>
         <Link className='jiji' to='/top'>  <span className='home home11'>TOPWEAR
           
           <div className='home1'>
            <div className='home2'>
            <span>Shirts</span>
            <span>T-shirt</span>
            <span>Jacket & Outwear</span>
            <span>Tanks</span>
            <span>Blazers</span>
            <span>Hoodies</span>
            <span>Polos</span>
            </div>

           </div>
           </span>
           </Link>
        <Link className='jiji' to='/bottom'>   <span className='home home11'>BOTTOMWEAR
           
           <div className='home18'>
            <div className='home28'>
            <span>Shorts</span>
            <span>Pants</span>
            <span>Sweatpants</span>
           
          
            </div>

           </div>
           </span>
           </Link>
   <Link to='/foot'>        <span className='home home11'>FOOTWEAR
           <div className='home18'>
            <div className='home28'>
            <span>Espadrillers</span>
            <span>Snickers</span>
            <span>Juttis</span>
          
            </div>

           </div>
           </span>
           </Link>
          </div>
          <div className='num12'>
          <div className='ki'>  <img className='img1 immg' onClick={toggl1eModel} src={img1} alt="" /> 
              {/* <div className='kil'> <input className='kill' type="text" placeholder='Search' /></div>  */}
           </div>
            <img className='img1' src={img2} alt="" />
            <img className='img1' src={img3} alt="" />
      <Link className='jiji' to='/car'>     <img className='img1' src={img4} alt="" /></Link> 
          </div>

        </div>
        {search && (
          <div className='likey'>
            <input className='kill' id="myInput" type="text" placeholder='Search' />
          </div>
        )}

        
    </div>
  )
}
