
import styles from "./basketItems.module.css";
import BasketItemCard from "../basketItemCard/basketItemCard";


const BasketItems = ({ items, removeItem }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <BasketItemCard key={index} product={item} removeItem={() => removeItem(index)} />
      ))}

      <div className={styles.text}>
        <p>Ialt</p>
        <p className={styles.inTotal}>8998 kr.</p>
      </div>
    </div>
  );
}
export default BasketItems;