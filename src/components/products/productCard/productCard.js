
import Image from 'next/image';
import styles from './productCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image className={styles.img} src={product.image} alt={product.title} width={100} height={100} />
        <div className={styles.text}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>{product.price} kr.</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;