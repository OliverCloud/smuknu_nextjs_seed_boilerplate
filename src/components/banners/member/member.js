
import Image from 'next/image';
import styles from './member.module.css';

const Member = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <p className={styles.title}>BLIV MEDLEM</p>
              
              <div className={styles.text}>
                <p>Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem.</p>
                <p>Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.</p>
              </div>
            </div>
            
        </div>
    )
}
export default Member;