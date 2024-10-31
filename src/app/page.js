import Image from "next/image";
import Navbar from "./component/shared/Navbar/Navbar";
import Footer from "./component/shared/Footer/Footer";
import HomePage from "./(WithNavbarFooter)/home/page";
import ChrisAction from "./(WithNavbarFooter)/christ-action/page";
import Projects from "./(WithNavbarFooter)/projects/page";

export default function Home() {
  return (
    <main>
      <HomePage />
      <ChrisAction />
      <Projects/>
    </main>
  );
}
