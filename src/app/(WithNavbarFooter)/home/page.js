import Image from "next/image";
import hero from "../../../images/hero.jpg"
const HomePage = () => {
    return (
        <div>
            <div>
                <Image src={hero} alt="hero img" height={0} width={0} className="h-screen object-cover"></Image>
            </div>
        </div>
    );
};

export default HomePage;