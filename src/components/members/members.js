

import Image from 'next/image';
import styles from './members.module.css'; 

const Members = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
   
          <p className={styles.title}>MEDLEM?</p>

          <div className={styles.text}>
            <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
          </div>

          <div className={styles.btn}>Se udvalgte produkter</div>
      </div>
      <div className={styles.imgs}>
          <Image src="/reviews/phoebe_larsen.jpg" alt="members" width={500} height={500} />
          <Image src="/reviews/phoebe_larsen.jpg" alt="members" width={500} height={500} />
          <Image src="/reviews/phoebe_larsen.jpg" alt="members" width={500} height={500} />
          <Image src="/reviews/phoebe_larsen.jpg" alt="members" width={500} height={500} />
        </div>
    </div>
  );
};
export default Members;