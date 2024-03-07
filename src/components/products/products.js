
import { useEffect, useState } from 'react';
import ProductCard from './productCard/productCard';
import styles from './products.module.css';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>UDVALGT <span>SKØNHED</span></p>
        </div>
        <div className={styles.products}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Products;