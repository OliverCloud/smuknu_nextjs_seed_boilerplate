
import Image from 'next/image';
import styles from './health.module.css';

const Health = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <p className={styles.title}>SPØRG OM SUNDHED</p>
              
              <div className={styles.text}>
                <p>Herunder har vi samlet spørgsmål og svar om sundhed.</p>
                <p>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>
              </div>

            </div>
            
        </div>
    )
}
export default Health;