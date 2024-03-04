import React from "react";
import img1 from 'public/images/img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
export default function Estorebody(){
const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'img1.jpg',
    description: 'Description of product 1',
    price: 10
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'img2.jpg',
    description: 'Description of product 2',
    price: 20
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'img3.jpg',
    description: 'Description of product 3',
    price: 30
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'img4.jpg',
    description: 'Description of product 4',
    price: 40
  },
  {
    id: 5,
    name: 'Product 5',
    image: 'img5.jpg',
    description: 'Description of product 5',
    price: 50
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'img6.jpg',
    description: 'Description of product 6',
    price: 60
  }
];

const Product = ({ product }) => {
  const { name, image, description, price } = product;
  
  return (
    <div className="product">
      <img src={image} alt={a} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};



}