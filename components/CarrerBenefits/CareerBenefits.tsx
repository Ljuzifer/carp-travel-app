import { CareerCredentials } from "@/data/career";

export default function CareerBenefits() {
    const { description, question, benefits } = CareerCredentials;

    return (
        <>
            <p
                className='ml-auto mb-[36px] w-[179px] text-sm font-extralight leading-[20px]
                    tab:m-0 tab:w-[221px] tab:absolute tab:top-16 tab:right-8 
                    tab:text-justify tab:text-[13px] tab:leading-[20px]
                    desk:w-[293px] desk:top-[120px] desk:right-6 desk:text-lg desk:leading-[24px]'>
                {description}
            </p>

            <h3
                className='ml-auto mb-[36px] w-[179px] uppercase text-[30px] font-extralight leading-[30px]
                    tab:ml-[80px] tab:mt-[12px] 
                    desk:ml-[146px] desk:my-[45px] desk:text-4xl desk:leading-[39px]'>
                {question}
            </h3>

            <ul
                className='mr-auto w-[181px] flex flex-col gap-[16px] text-right text-xs font-extralight leading-[20px]
                    tab:w-[225px] tab:gap-[24px] 
                    desk:w-[600px] desk:leading-[24px]'>
                {benefits.map((benefit, i) => (
                    <li
                        className='desk:grid desk:tab:grid-cols-2 desk:gap-x-[24px]'
                        key={benefit.name}>
                        <h4
                            className={`
                            mb-[8px] text-sm font-normal tab:text-base desk:mb-0 desk:text-lg
                            ${i === 2 ? "tab:mb-[28px]" : null}
                        `}>
                            {benefit.name}
                        </h4>
                        <p className='desk:text-left'>{benefit.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
