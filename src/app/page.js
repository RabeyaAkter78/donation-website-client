import Image from "next/image";
import Navbar from "./component/shared/Navbar/Navbar";
import Footer from "./component/shared/Footer/Footer";
import HomePage from "./(WithNavbarFooter)/home/page";

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
