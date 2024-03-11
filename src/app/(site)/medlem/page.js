

import Member from '@/components/banners/member/member';
import styles from './page.module.css';
import Footer from '@/components/footer/footer';
import Form from '@/components/form/form';

const Page = () => {
    return (
        <main>
            <Member />
            <Form />
            <Footer />
        </main>
    )
}
export default Page;