

import Health from '@/components/banners/health/health';
import styles from './page.module.css';
import Footer from '@/components/footer/footer';
import Members from '@/components/members/members';
import Accordions from '@/components/accordions/accordions';

const Page = () => {
    return (
        <main>
            <Health />
            <Accordions />
            <Members />
            <Footer />
        </main>
    )
}
export default Page;