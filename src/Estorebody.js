import React from "react";
import img1 from '.images/img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
export default function Estorebody(){
const products = [
  {
    id: 1,
    name: 'Book 1',
    image: 'img1.jpg',
    description: 'Written By- Ashok kumar',
    price: 700
  },
  {
    id: 2,
    name: 'Book 2',
    image: 'img2.jpg',
    description: 'Written By- Anthony Deorr',
    price: 1200
  },
  {
    id: 3,
    name: 'Book 3',
    image: 'img3.jpg',
    description: 'Written By- Willingam',
    price: 1030
  },
  {
    id: 4,
    name: 'Book 4',
    image: 'img4.jpg',
    description: 'Written By- Audren Blake',
    price: 790
  },
  {
    id: 5,
    name: 'Book 5',
    image: 'img5.jpg',
    description: 'Written By- Gareth Brown',
    price: 1500
  },
  {
    id: 6,
    name: 'Book 6',
    image: 'img6.jpg',
    description: 'Written By- Akshat Gupta',
    price: 2600
  }
];

const Product = ({ product }) => {
  const { name, image, description, price } = product;
  
  return (
    <>
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button className="btn">Add to Cart</button>
    </div>
    </>
  );
};

const ProductList = () => {
  return (
    <>
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};



}