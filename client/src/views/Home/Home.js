import React, { useEffect, useState } from 'react';
import "./Home.css";
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import { checkLogin } from '../../utils/auth';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';

function Home() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response);
      setProducts(response?.data?.data);
    } catch (err) {
      console.log(err);
      alert("error loading products");
    }
  }

  useEffect(() => {
    checkLogin();
    loadProducts();
  }, []);

  return (
    <div>
      <Navbar/>
      <h1 className='text-center'>All Products</h1>
      <div className='product-container'>
        {products?.map((product, index) => {
          const { _id, name, price, description, image } = product;

          return (<ProductCard key={index} id={_id} name={name} price={price} description={description} image={image} />)
        })
        }
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
