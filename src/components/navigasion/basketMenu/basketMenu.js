
import styles from './basketMenu.module.css';
import BasketItemCard from "./basketItemCard/basketItemCard";
import { useState } from 'react';
import BasketItems from './basketItems/basketItems';



const BasketMenu = () => {

  const [basket, setBasket] = useState([{}]);

  return (
    <div className={styles.container}>
      {basket.length > 0 ? (
        <div className={styles.wrapper}>
          
          <BasketItemCard  product={{name: 'test', description: 'test', price: '998989', imgae: '/reviews/phoebe_larsen.jpg'}} />
          
          <div className={styles.checkout}>
            <p>Ialt</p>
            <p className={styles.inTotal}>8998 kr.</p>
          </div>

        </div>
      ) : (
        <div className={styles.empty}>
          <p>Din kurv er tom</p>
        </div>
      )
      }
    </div>
  )
}
export default BasketMenu;