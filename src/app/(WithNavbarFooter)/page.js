// import Image from "next/image";
// import Navbar from "./component/shared/Navbar/Navbar";
// import Footer from "./component/shared/Footer/Footer";
// import HomePage from "./(WithNavbarFooter)/home/page";
// import ChrisAction from "./(WithNavbarFooter)/christ-action/page";
// import Projects from "./(WithNavbarFooter)/projects/page";
// import HowItWorks from "./(WithNavbarFooter)/how-it-works/page";
// import MonthlyIncome from "./component/Projects/MonthlyIncome/MonthlyIncome";
// import Movement from "./component/Movement/Movement";
// import TransparentFinance from "./(WithNavbarFooter)/finance/page";

// import Mission from "./(WithNavbarFooter)/mission/page";
// import FAQ from "./(WithNavbarFooter)/faq/page";

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
