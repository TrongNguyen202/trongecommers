
import { Button } from 'react-bootstrap';

import {useSelector} from 'react-redux';
import Navbar from './Navbar';



const Total=()=> {
const cart = useSelector((state) => state.cart)

const getTotal = () => {
 
  let totalQuantity = 0
  let totalPrice = 0
  cart.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += item.price * item.quantity
  })
  return  {totalPrice, totalQuantity}

}


  return (
   
      
    <div className='d-flex flex-column justify-content:center align-items-center'>
<p >
  total ({getTotal().totalQuantity} items) 
  : <strong>${getTotal().totalPrice}</strong>
</p>
<Button
variant='primary'
className='text-dark'
>
    Pay
    </Button>
    </div>
  )
}
export default Total
