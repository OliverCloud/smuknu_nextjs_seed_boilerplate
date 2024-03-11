
import Link from 'next/link';
import styles from './success.module.css';
import Image from 'next/image';

const Succes = ({user}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    TAK!
                    <span>{user.name}</span>
                </p>

                <div className={styles.subTitle}>
                    <p >Vi er enormt glade for at få dig som medlem.</p>
                </div>
                

                <div className={styles.img}>
                    <Image src="/reviews/phoebe_larsen.jpg" alt="review" width={100} height={100}/>
                </div>

            
                <div className={styles.text}>
                    <p>Vi er enormt glade for at få dig som medlem.</p>
                    <p>Kig I din inbox vi har sendt en lille velkomst gave.</p>
                    
                </div>

                
                <Link className={styles.btn} href={'/'}>Tilbage til forsiden</Link>
            </div>  
                
          
        </div>
    )
}
export default Succes;