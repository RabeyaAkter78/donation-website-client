
import Movement from "../component/Movement/Movement";
import MonthlyIncome from "../component/Projects/MonthlyIncome/MonthlyIncome";
import ChrisAction from "./christ-action/page";
import FAQ from "./faq/page";
import TransparentFinance from "./finance/page";
import HomePage from "./home/page";
import HowItWorks from "./how-it-works/page";
import Mission from "./mission/page";
import Projects from "./projects/page";
import Testimopnials from "./testimonials/page";
export default function Home() {
    return (
        <main>
            <HomePage />
            <ChrisAction />
            <Projects />
            <MonthlyIncome />
            <HowItWorks />
            <Projects />
            <Movement />
            <TransparentFinance />
            <Testimopnials />
            <Mission />
            <FAQ />
        </main>
    );
}
