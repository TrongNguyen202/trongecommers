import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch} from 'react-redux';
import {addToCart} from '../components/cartSlice';
import { incrementQuantity, decrementQuantity, removeItem} from '../components/cartSlice'
const Product = ({id, title, image,price, quantity, key}) => {
  const [disPlayQuantity, setdisPlayQuantity] = useState(false)
  const [virtualQuantity, setVirtualQuantity] = useState(1)

  const dispatch = useDispatch()
 
  const handleAddToCard=()=>{
   setdisPlayQuantity(!disPlayQuantity)
   dispatch(addToCart({
    id, title, image,price,quantity
   }))
  }
  return (
    <Card className="h-100 ">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-0.5">{title}</span>
          <span className="ms-0.1 text-muted">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {disPlayQuantity === false ? (
            <Button variant="success" className="w-100 text-dark" onClick={handleAddToCard}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button className="text-dark" onClick={() => {dispatch(decrementQuantity(id))
                setVirtualQuantity(virtualQuantity-1)
                }}>-</Button>
                <div>
                  <span className="fs-3">{virtualQuantity}</span> in cart
                </div>
                <Button className="text-dark" onClick={() => {dispatch(incrementQuantity(id))
                 setVirtualQuantity(virtualQuantity+1)
                
                
                }}>+</Button>
              </div>
              <Button
               
                variant="danger"
                size="sm"
                className="text-dark font-weight-bold "
                onClick={()=> {setdisPlayQuantity(!disPlayQuantity)
                  dispatch(removeItem(id))
                }}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
};

export default Product;
