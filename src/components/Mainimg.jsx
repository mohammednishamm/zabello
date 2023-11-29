import React from 'react'

export const Mainimg = () => {
  return (
    <div className='mainimg'>
        
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.zobello.com/cdn/shop/files/shirts_066b19d1-a5ac-4566-8ac7-ae80cf929fbd_2048x.jpg?v=1613716480" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.zobello.com/cdn/shop/files/SNEAKER_SLIDER-min_2048x.jpg?v=1613717547" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.zobello.com/cdn/shop/files/DENIM-JACKETS-min_2048x.jpg?v=1613717547" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
