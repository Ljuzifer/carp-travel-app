import { heroCredentials } from "@/data/hero";
import "./Hero.css";
import Subtitle from "@/components/Subtitle/Subtitle";
import JoinButton from "@/components/JoinButton/JoinButton";

export default function Hero() {
    const { mainTitle, subTitle, description, towns } = heroCredentials;
    const headline = mainTitle.split(" ");

    return (
        <section className='hero mt-[-105px] pt-[105px] bg-cover bg-no-repeat bg-center'>
            <div className='container px-[20px] pb-[56px]'>
                <h1 className='uppercase flex flex-wrap justify-end w-[120px] text-right ml-auto mb-6'>
                    <span className='text-[37px] font-medium leading-9'>
                        {headline[0]}
                    </span>
                    <span className='text-[37px] font-thin tracking-[1.665px] leading-9'>
                        {headline[1]}
                    </span>
                    <span className='relative right-[-5px] text-xs font-light tracking-[9.48px] leading-3'>
                        {headline[2]}
                    </span>
                </h1>

                <Subtitle
                    caption={subTitle}
                    styles='flex flex-col-reverse w-[280px] mb-[24px]'
                />

                <p className='font-extralight leading-4 mb-6 w-[165px] text-[10px]'>
                    {towns}
                </p>
                <div className='w-[280px] tab:w-[230px] tab:absolute tab:bottom-16 tab:right-8 desk:w-[294px] desk:bottom-20 desk:right-6'>
                    <p className='font-extralight text-justify text-sm leading-[20px] mb-[24px] tab:mb-7 tab:text-base tab:leading-[20px] desk:text-lg desk:leading-6'>
                        {description}
                    </p>

                    <JoinButton />
                </div>
            </div>
        </section>
    );
}
