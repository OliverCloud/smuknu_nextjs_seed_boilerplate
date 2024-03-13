
import styles from './basketMenu.module.css';
import BasketItemCard from "./basketItemCard/basketItemCard";
import { useEffect, useState } from 'react';
import { useBasket } from '@/context/basket';


const BasketMenu = ({close}) => {

  const { basket } = useBasket();

  const [basketItems, setBasketItems] = useState([]);

  const [inTotal, setInTotal] = useState(0);

  useEffect(() => {
    const getProductByRange = async () => {
      let idRange = basket.map((item) => item.id);

      if (idRange.length > 0) {
        let products = await fetch("api/products?range=" + idRange);
        products = await products.json();

        products.forEach((product) => {
          let basketItem = basket.find((item) => item.id === product._id);
          if (basketItem) {
            product.amount = basketItem.amount;
          }
        });
        setBasketItems(products);
      }
    };

    getProductByRange();
  }, [basket]);

  useEffect(() => {
    const inTotal = () => {
      let total = 0;
      basketItems.forEach(item => {
        total += item.amount * item.price;
      });
      setInTotal(total);
    };
    inTotal();
  }, [basketItems]); 

  return (
    <div className={styles.container}>
      {basket.length > 0 ? (
        <div ref={close} className={styles.wrapper}>

          {basketItems.map((item, index) => {

            return <BasketItemCard key={index} product={item} />
          })}
          
          <div className={styles.checkout}>
            <p>Ialt</p>
            <p className={styles.inTotal}>{inTotal} kr.</p>
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