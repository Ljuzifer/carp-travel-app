import Subtitle from "@/components/Subtitle/Subtitle";
import { AboutCredentials } from "@/data/about";
import "./About.css";

export default function About() {
    const { subTitle, description, banner } = AboutCredentials;

    return (
        <section
            id='About'
            className='about relative bg-cover bg-no-repeat bg-center'>
            <div
                className='container relative px-5 py-[55px]
                    tab:px-8 tab:py-16 tab:h-[697px]
                    desk:px-6 desk:py-[104px] desk:h-[824px]'>
                <Subtitle caption={subTitle} styles='mb-[8px]' />

                <div
                    className='w-[180px] text-sm font-extralight leading-5
                    tab:w-[221px] tab:absolute tab:top-16 tab:right-8 tab:text-base tab:leading-[20px]
                    desk:w-[292px] desk:left-[654px] desk:top-[104px] desk:text-lg desk:leading-6'>
                    <p className='mb-[20px] tab:mb-[16px] desk:mb-[24px]'>
                        <span className='font-normal'>
                            {description[0].primary}
                        </span>
                        {description[0].secondary}
                    </p>
                    <p className='mb-[40px] tab:mb-0'>
                        <span className='font-normal'>
                            {description[1].primary}
                        </span>
                        {description[1].secondary}
                    </p>
                </div>

                <div
                    className='ml-auto mb-10 w-[180px] text-sm font-normal leading-5
                        tab:mb-0 tab:w-[221px] tab:absolute tab:bottom-[188px] tab:left-8 tab:text-base tab:leading-[20px]
                        desk:w-[296px] desk:bottom-[104px] desk:right-6 desk:text-lg desk:leading-6'>
                    <span className='block uppercase'>{banner.from}</span>
                    <span className='block uppercase text-right'>
                        {banner.to}
                    </span>
                    <span
                        className='mr-[-15px] block font-extralight tracking-[-0.14px] 
                            tab:tracking-[0.32px] desk:mr-[-20px] desk:tracking-[2.16px]'>
                        {banner.offer}
                    </span>
                </div>

                <p
                    className='text-sm font-extralight leading-5
                        tab:w-[463px] tab:absolute tab:bottom-16 tab:right-8 tab:text-base tab:leading-[20px]
                        desk:w-[605px] desk:bottom-[104px] desk:left-6 desk:text-lg desk:leading-6'>
                    <span className='font-medium'>
                        {description[2].primary}
                    </span>
                    {description[2].secondary}
                </p>
            </div>
        </section>
    );
}
