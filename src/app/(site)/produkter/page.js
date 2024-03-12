

import Footer from '@/components/footer/footer';
import Members from '@/components/members/members';

import Products from '@/components/products/products';
import Hero from '@/components/banners/hero/hero';

const Page = () => {
    return (
        <main>
            <Hero
                btn={false}
                bgImg={"/headers/products.jpg"}
                title={"SKØNNE PRODUKTER"}
                subTitle={"Herunder finder du alle vores produkter"}
                text={false}
                bgColorBox={"#000000E6"}
                colorTitle={"#fff"}
                colorText={"#fff"}
            />
            <Products />
            <Members />
            <Footer />
        </main>
    )
}
export default Page;