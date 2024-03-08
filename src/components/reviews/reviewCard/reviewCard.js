

import Image from 'next/image';
import styles from './reviewCard.module.css';

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.container}>
  
        <div className={styles.img}>
          <Image src={review.image} alt={review.name} width={100} height={100}/>
        </div>
        <div className={styles.text}>
          <p>{review.description}</p>
        </div>
        <div className={styles.byline}>
            <h3>{review.name}</h3>
            <p>{review.byline}</p>
          </div>
        <div className={styles.line}></div>
    </div>
  );
}
export default ReviewCard;