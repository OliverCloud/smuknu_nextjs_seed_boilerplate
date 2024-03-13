import Navigasion from "@/components/navigasion/navigasion";
import { BasketContextProvider } from "@/context/basket";

export default function siteLayout({ children }) {
    return <div>
        <BasketContextProvider>
            <Navigasion />
            {children}
        </BasketContextProvider>
    </div>
}