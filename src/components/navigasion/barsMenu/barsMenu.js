
import Link from 'next/link';
import styles from './barsMenu.module.css';

const BarsMenu = () => {
    return (
        <div className="barsMenu">
            <Link className="barsMenu__item" href={'/'}>we</Link>
            <Link className="barsMenu__item" href={'/'}>we</Link>
            <Link className="barsMenu__item" href={'/'}>we</Link>
        </div>
    )
}
export default BarsMenu;