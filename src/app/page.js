import Image from "next/image";
import Navbar from "./component/shared/Navbar/Navbar";
import Footer from "./component/shared/Footer/Footer";
import HomePage from "./(WithNavbarFooter)/home/page";
import ChrisAction from "./(WithNavbarFooter)/christ-action/page";
import Projects from "./(WithNavbarFooter)/projects/page";
import HowItWorks from "./(WithNavbarFooter)/how-it-works/page";
import MonthlyIncome from "./component/Projects/MonthlyIncome/MonthlyIncome";
import Movement from "./component/Movement/Movement";
import TransparentFinance from "./(WithNavbarFooter)/finance/page";
import Testimopnials from "./(WithNavbarFooter)/testimonials/page";

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
    </main>
  );
}
