
import { useEffect, useState } from 'react';
import ReviewCard from './reviewCard/reviewCard';
import styles from './reviews.module.css';

const Reviews = () => {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <p><span>UDVALGT</span> SKØNHED</p>
            </div>
            <div className={styles.reviews}>
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
    );
}
export default Reviews;