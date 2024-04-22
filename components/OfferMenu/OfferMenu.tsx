import { animated, useTransition } from "@react-spring/web";

// import { options } from "@/utils/staticData/services";
import { OfferMenuProps } from "@/utils/types";
import { offerLabels } from "@/data/offer";

export default function OfferMenu({
    slideOrderNumber,
    slogan,
    onMenuSelect,
}: OfferMenuProps) {
    const transition = useTransition(slogan, {
        exitBeforeEnter: true,
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
        config: (item, index, phase) => ({
            duration: phase === "enter" ? 1000 : 0,
        }),
    });

    return (
        <ul
            className='w-[189px] absolute bottom-[210px] left-5 z-10 flex flex-col gap-4 text-xl font-extralight leading-[17px] uppercase
                tab:w-[206px] tab:absolute tab:bottom-auto tab:top-[182px] tab:left-[515px] tab:text-[22px] tab:leading-[18px]
                desk:w-[255px] desk:left-[644px] desk:gap-6 desk:top-[244px] desk:text-[28px] desk:leading-[24px]'>
            {offerLabels.map((label) => (
                <li
                    key={label}
                    onClick={(e) => onMenuSelect(e)}
                    className={
                        offerLabels.indexOf(label) + 1 === slideOrderNumber
                            ? "active-offer opacity-100"
                            : "opacity-50 cursor-pointer hover:opacity-100 hover:ml-2 focus:opacity-100 focus:ml-2 transition-all ease-in duration-500"
                    }>
                    {label}

                    {offerLabels.indexOf(label) + 1 === slideOrderNumber &&
                        transition((style, slogan) => (
                            <animated.span
                                style={style}
                                className='hidden desk:block desk:w-[293px] desk:absolute desk:top-0 desk:right-[-335px] desk:text-xs desk:font-extralight desk:leading-6 desk:tracking-[2.4px] desk:capitalize'>
                                {slogan}
                            </animated.span>
                        ))}
                </li>
            ))}
        </ul>
    );
}
