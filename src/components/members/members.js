

import Image from 'next/image';
import styles from './members.module.css'; 
import Link from 'next/link';

const Members = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
   
          <p className={styles.title}>MEDLEM?</p>

          <div className={styles.text}>
            <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
          </div>

          <Link className={styles.btn} href={'/medlem'}>Se udvalgte produkter</Link>
      </div>
      <div className={styles.imgs}>
          <Image src="/reviews/phoebe_larsen.jpg" alt="members" width={500} height={500} />
          <Image src="/reviews/kathrine_udgaard.jpg" alt="members" width={500} height={500} />
          <Image src="/reviews/kathrine_udgaard.jpg" alt="members" width={500} height={500} />
          <Image src="/reviews/phoebe_larsen.jpg" alt="members" width={500} height={500} />
        </div>
    </div>
  );
};
export default Members;