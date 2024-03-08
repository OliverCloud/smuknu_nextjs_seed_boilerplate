
import Image from 'next/image';
import styles from './member.module.css';

const Member = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <p className={styles.title}>BLIV MEDLEM</p>
              
              <div className={styles.text}>
                <p>Alt hvad du behøver...</p>
                <p>SMUK NU</p>
              </div>

              <div className={styles.btn}>Se udvalgte produkter</div>
            </div>
            
        </div>
    )
}
export default Member;