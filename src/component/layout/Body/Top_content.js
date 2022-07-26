import React from 'react'
import img2 from '../../assets/images/banner-girlpng.png'
const Top_content = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
      <div className='col-4 mt-5'>
        <h1><strong>See</strong> everything with <strong>Clarity</strong></h1>
        <small>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</small>
        <button className="btn btn-outline-success" type="submit">Shop Now</button>
        </div>
        <div className='col-6 mt-5 mx-2'>
        <img src={img2} style={{width:'600px'}}></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default Top_content