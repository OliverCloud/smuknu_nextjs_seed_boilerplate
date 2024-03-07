import Navigasion from "@/components/navigasion/navigasion";

export default function siteLayout({ children }) {
    return <div>
        <Navigasion />
        {children}
    </div>
}