import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../sections/Hero/Hero"));
const About = dynamic(() => import("../sections/About/About"));

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
        </main>
    );
}
