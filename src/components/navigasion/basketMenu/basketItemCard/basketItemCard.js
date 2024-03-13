

import Image from 'next/image';
import styles from './basketItemCard.module.css'

const BasketItemCard = ({product}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={product.image} alt={product.title} width={100} height={100} />
      </div>
      <div className={styles.text}>
        <p>{product.title}</p>

        <div className={styles.price}>
          <p>{product.amount}</p>
          <p>{product.price} kr.</p>
        </div>
      </div>
    </div>
  );
};
export default BasketItemCard;