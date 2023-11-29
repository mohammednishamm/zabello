import React from 'react'
import { Mainimg } from './Mainimg'
import { Collection } from './Collection'
import { Background } from './Background'
import { Clt } from './Clt'
import { Seller } from './Seller'
import { Collection2 } from './Collection2'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <div>

      
       <Mainimg/> 
       <Collection/>
       <Background/>
       <Clt/>
       <Seller/>
       <Collection2/>
       <Footer/>
       
    </div>
  )
}
