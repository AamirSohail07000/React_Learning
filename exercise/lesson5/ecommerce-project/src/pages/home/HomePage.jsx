import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({cart, loadCart }) {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getHomeData = async() => {
      const response = await axios.get('/api/products')
      setProducts(response.data);   
    };

    getHomeData(); 
  }, []);

// []   Dependency Array lets us control when useEffect runs []= it runs only once

  return (
    <>

      <title>Ecommerce Project</title>
      <Header cart = {cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}