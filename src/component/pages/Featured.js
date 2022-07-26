import React from 'react';
import img4 from '../assets/images/banner-guy-featured.png'
import Featured_product from '../layout/Body/Featured_product';
const Featured = () =>{
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-6 featured'>
          <h1>Featured Product</h1>
        </div>
        <div className='col-6'>
        <img src={img4} width="400px"></img>
        </div>
      </div>
    </div>
      <Featured_product/>
      
    </>
  );
}
export default Featured;

