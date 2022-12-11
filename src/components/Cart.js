import React from 'react';
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import Total from './Total';
import CartStyle from '../styles/Cart.css'
function Cart() {
  const cart = useSelector((state) => state.cart)
  
  return (

// src/pages/Cart.js
<div className='container d-flex  justify-content:center align-items-center mt-3rounded-full'>
  <div className=' position-relative mb-20'>
    <h1 className=' headline text-uppercase ont-weight-bold font-size bg-primary text-center mb-2'>Shopping Cart</h1>
    {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      />
    ))}
    <div className='position-absolute bottom--20 left-60'>
  < Total  />
  </div>
  </div>
  
</div>
  )
}

export default Cart
