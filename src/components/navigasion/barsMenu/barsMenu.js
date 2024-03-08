
import Link from 'next/link';
import styles from './barsMenu.module.css';

const BarsMenu = () => {
    return (
        <div className={styles.container}>
            <Link href={'/'}>we</Link>
            <Link href={'/'}>we</Link>
            <Link href={'/'}>we</Link>
        </div>
    )
}
export default BarsMenu;