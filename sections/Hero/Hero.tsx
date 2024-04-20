import { heroCredentials } from "@/data/hero";
import "./Hero.css";
import Subtitle from "@/components/Subtitle/Subtitle";
import JoinButton from "@/components/JoinButton/JoinButton";

export default function Hero() {
    const { mainTitle, subTitle, description, towns } = heroCredentials;
    const headline = mainTitle.split(" ");

    return (
        <section
            className='hero mt-[-105px] pt-[105px] bg-cover bg-no-repeat bg-center
            tab:mt-[-124px] tab:pt-[124px]
            desk:mt-[-130px] desk:pt-[130px]'>
            <div
                className='container px-[20px] pb-[56px]
                tab:relative tab:px-8 tab:pb-16 tab:h-[410px]
                desk:px-6 desk:pb-20 desk:h-[577px]'>
                <h1
                    className='uppercase flex flex-wrap justify-end w-[120px] text-right ml-auto mb-6
                    tab:w-[230px] tab:absolute tab:right-8 tab:top-0 desk:w-[305px] desk:right-6'>
                    <span
                        className='text-[37px] font-medium leading-9
                            tab:text-[67px] tab:leading-[67px]
                            desk:text-[98px] desk:leading-[98px]'>
                        {headline[0]}
                    </span>
                    <span
                        className='text-[37px] font-thin tracking-[1.665px] leading-9
                            tab:text-[67px] tab:leading-[67px] tab:tracking-[6.7px]
                            desk:text-[98px] desk:leading-[98px] desk:tracking-[1px]'>
                        {headline[1]}
                    </span>
                    <span
                        className='relative right-[-5px] text-xs font-light tracking-[9.48px] leading-3
                            tab:right-[-20px] tab:text-sm tab:leading-3 tab:tracking-[25.9px] 
                            desk:right-[-30px] desk:text-base desk:leading-4 desk:tracking-[36.48px]'>
                        {headline[2]}
                    </span>
                </h1>

                <Subtitle
                    caption={subTitle}
                    styles='flex flex-col-reverse w-[280px] mb-[24px]
                            tab:w-[426px] tab:absolute tab:left-8 tab:top-0
                            desk:w-[646px] desk:left-6'
                />

                <p
                    className='font-extralight leading-4 mb-6 w-[165px] text-[10px]
                    tab:absolute tab:mb-0 tab:w-[270px] tab:bottom-16 tab:left-8 tab:text-sm tab:tracking-[1.26px]
                    tab:leading-[16px]
                    desk:w-auto desk:bottom-20 desk:left-6 desk:text-base desk:leading-6 desk:tracking-[1.44px]'>
                    {towns}
                </p>
                <div
                    className='w-[280px] 
                        tab:w-[230px] tab:absolute tab:bottom-16 tab:right-8
                        desk:w-[294px] desk:bottom-20 desk:right-6'>
                    <p
                        className='font-extralight text-justify text-sm leading-[20px] mb-[24px] 
                        tab:mb-7 tab:text-base tab:leading-[20px]
                        desk:text-lg desk:leading-6'>
                        {description}
                    </p>

                    <JoinButton />
                </div>
            </div>
        </section>
    );
}
