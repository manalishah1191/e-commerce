import React from 'react';
import img5 from '../assets/images/banner-girl-recommended.png'
import Recommended_product from '../layout/Body/Recommended_product';
const Recommended = () =>{
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-6 featured'>
          <h1>Recommended Product</h1>
        </div>
        <div className='col-6'>
        <img src={img5} width="500px"></img>
        </div>
      </div>
    </div>
      <Recommended_product/>
      
    </>
  );
}
export default Recommended;



