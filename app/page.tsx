import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../sections/Hero/Hero"));

export default function Home() {
    return (
        <main>
            <Hero />
        </main>
    );
}
