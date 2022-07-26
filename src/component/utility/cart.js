import axios from 'axios'
import React from 'react'

const Cart = (props) => {

  const addToCart = () => {

    let payload = {
      title: props.product.title,
      description: props.product.description,
      image: props.product.image
    // id: props.product.id
    }

    axios.post(`http://localhost:3005/cart/`, payload)
      .then((response) => {
        console.log("RESPONSE", response);
      }).catch((error) => {
        console.log("ERROR", error)
      })
  }

  return (
    <>
      <div className="add-to-cart mb-3">
        <button onClick={() => addToCart()} className="btn btn-primary">Add to Cart</button>
      </div>
    </>
  )
}

export default Cart 
