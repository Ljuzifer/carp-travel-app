import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../sections/Hero/Hero"));
const About = dynamic(() => import("../sections/About/About"));
const Offer = dynamic(() => import("../sections/Offer/Offer"));
const Career = dynamic(() => import("../sections/Career/Career"));
const Gallery = dynamic(() => import("../sections/Gallery/Gallery"));
const Contacts = dynamic(() => import("../sections/Contacts/Contacts"));

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Offer />
            <Career />
            <Gallery />
            <Contacts />
        </main>
    );
}
