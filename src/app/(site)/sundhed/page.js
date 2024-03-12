
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Members from "@/components/members/members";
import Accordions from "@/components/accordions/accordions";
import Hero from "@/components/banners/hero/hero";

const Page = () => {
  return (
    <main>
      <Hero
        btn={false}
        bgImg={"/headers/abouthealth.jpg"}
        title={"SPØRG OM SUNDHED"}
        subTitle={"Herunder har vi samlet spørgsmål og svar om sundhed."}
        text={"Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion"}
        bgColorBox={"#FA96AA"}
        colorTitle={"#fff"}
        colorText={"#fff"}
      />
      <Accordions />
      <Members />
      <Footer />
    </main>
  );
};
export default Page;
