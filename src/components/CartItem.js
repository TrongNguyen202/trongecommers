// src/components/CartItem.js
import { incrementQuantity, decrementQuantity, removeItem} from '../components/cartSlice'
import { useDispatch } from 'react-redux'
import {Button} from 'react-bootstrap'
function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="container d-flex flex-direction:row">
      <img className="rounded mx-auto d-block  w-50 h-50 border border-success mb-2 img-fluid" src={image} alt='item'/>
      <div className="d-flex flex-column  justify-content:center align-items:center ">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <Button className='text-dark' onClick={() => dispatch(decrementQuantity(id))}>-</Button>
          <p>{quantity}</p>
          <Button className='text-dark' onClick={() => dispatch(incrementQuantity(id))}>+</Button>
        </div>
        <Button 
          className='text-dark' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </Button>
      </div>
    </div>
  )
}

export default CartItem