

import Image from 'next/image';
import styles from './basketItemCard.module.css'

const BasketItemCard = ({product}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={product.imgae} alt={product.name} width={100} height={100} />
      </div>
      <div className={styles.text}>
        <p>{product.description}</p>

        <div className={styles.price}>
          <p>{product.price} kr.</p>
        </div>
      </div>
    </div>
  );
};
export default BasketItemCard;