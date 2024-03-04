import React from "react";

export default function Estorebody(){
const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'image1.jpg',
    description: 'Description of product 1',
    price: 10
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'image2.jpg',
    description: 'Description of product 2',
    price: 20
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'image3.jpg',
    description: 'Description of product 3',
    price: 30
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'image4.jpg',
    description: 'Description of product 4',
    price: 40
  },
  {
    id: 5,
    name: 'Product 5',
    image: 'image5.jpg',
    description: 'Description of product 5',
    price: 50
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'image6.jpg',
    description: 'Description of product 6',
    price: 60
  }
];

const Product = ({ product }) => {
  const { name, image, description, price } = product;
  
  return (
    <div className="product">
      <img src={image} alt={name} />
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

export default ProductList;

}