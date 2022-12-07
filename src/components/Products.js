import React from "react";
import headphones from "../assets/headphones.png";
import laptop from "../assets/laptop.png";
import phone from "../assets/phone.png";
import Product from "./Product";
import { v4 as uuidv4 } from 'uuid';
const Products = () => {
  const products = [
    {id:uuidv4(), title: "Headphone", image: headphones,price:100000, quantity:0},
    {id:uuidv4(),title: "Laptop", image: laptop,price:200000,quantity:0 },
    { id:uuidv4(),title: "Phone", image: phone,price:300000,quantity:0 },
    { id:uuidv4(),title: "Xphone", image: phone ,price:400000,quantity:0},
    {id:uuidv4(), title: "Headphone", image: headphones,price:100000,quantity:0},
    {id:uuidv4(),title: "Laptop", image: laptop,price:200000,quantity:0 },
    { id:uuidv4(),title: "Phone", image: phone,price:300000,quantity:0 },
    { id:uuidv4(),title: "Xphone", image: phone ,price:400000,quantity:0}
  ];
  return (
    <div className="bg-[#eaeded]  w-full">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  mx-auto w-[80vw] xl:w-[70vw] gap-5">
        {products.map((product, index) => (
          <Product key={index}  quantity={product.quantity} id={product.id} title={product.title} image={product.image} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
