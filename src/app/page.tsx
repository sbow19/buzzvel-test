import * as styles from "./page.module.css";
import { HeaderBar } from "@/slides/header/header_bar";
import { Footer } from "@/slides/footer/footer";
import { TeachWW } from "@/slides/home/teach_worldwide/TeachWW";
import { AllInOne } from "@/slides/home/all_in_one/AllInOne";
import { Quotes } from "@/slides/home/quotes/quotes";
import { MeetInt } from "@/slides/home/meet_int/meet_int";
import { Figures } from "@/slides/home/figures/figures";
import { Testimonials } from "@/slides/home/testimonials/testimonials";
import { Features } from "@/slides/home/features/features";
import { CTAJoin } from "@/slides/home/cta_join/cta_join";
import { Form } from "@/slides/home/form/form";


export default function Home() {
  return (
    <>
      <HeaderBar />
      <main className={styles.main_content}>
        <TeachWW />
        <AllInOne />
        <Quotes />
        <MeetInt />
        <Figures />
        <Testimonials />
        <Features />
        <CTAJoin />
        <Form />
      </main>
      <Footer />
    </>
  );
}
