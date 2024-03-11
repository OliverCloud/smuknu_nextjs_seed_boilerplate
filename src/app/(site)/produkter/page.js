

import Footer from '@/components/footer/footer';
import Members from '@/components/members/members';

import Product from '@/components/banners/Product/Product';
import Products from '@/components/products/products';

const Page = () => {
    return (
        <main>
            <Product />
            <Products />
            <Members />
            <Footer />
        </main>
    )
}
export default Page;