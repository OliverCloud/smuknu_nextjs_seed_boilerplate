

import styles from './page.module.css';
import Footer from '@/components/footer/footer';
import Form from '@/components/form/form';
import Hero from '@/components/banners/hero/hero';

const Page = () => {
    return (
        <main>
            <Hero
                btn={false}
                bgImg={"/headers/subscribers.jpg"}
                title={"BLIV MEDLEM"}
                subTitle={"Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem."}
                text={"Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog."}
                bgColorBox={"#fff"}
                colorTitle={"#FA96AA"}
                colorText={"#000"}
            />
            <Form />
            <Footer />
        </main>
    )
}
export default Page;