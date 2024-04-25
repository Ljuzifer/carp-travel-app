import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../sections/Hero/Hero"));
const About = dynamic(() => import("../sections/About/About"));
const Offer = dynamic(() => import("../sections/Offer/Offer"));
const Career = dynamic(() => import("../sections/Career/Career"));

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Offer />
            <Career />
        </main>
    );
}
