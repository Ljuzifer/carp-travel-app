"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { animated, useTransition } from "@react-spring/web";

import "swiper/css";
import "swiper/css/effect-fade";
import "./Offer.css";
import { subTitle, offerLabels, offerCredentials } from "@/data/offer";
import Subtitle from "@/components/Subtitle/Subtitle";
import OfferBadge from "@/components/OfferBadge/OfferBadge";
import OfferMenu from "@/components/OfferMenu/OfferMenu";

export default function Offer() {
    const [slideOrderNumber, setSlideOrderNumber] = useState<number>(1);
    const [slogan, setSlogan] = useState<string>(offerCredentials[0].slogan);

    const frontSwiperRef: any = useRef<typeof Swiper | null>(null);
    const backSwiperRef: any = useRef<typeof Swiper | null>(null);

    const transition = useTransition(slideOrderNumber, {
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
            duration: phase === "enter" ? 800 : 400,
        }),
    });

    const onMenuSelect = (e: React.MouseEvent<HTMLLIElement>) => {
        const currentItemIndex = offerLabels.indexOf(e.currentTarget.innerHTML);

        if (currentItemIndex === -1) {
            return;
        }

        const currentItemId = currentItemIndex + 1;
        const currentSlide = offerCredentials.find(
            (s) => s.id === currentItemId
        );

        setSlideOrderNumber(currentItemId);

        slideTo(currentItemIndex);

        if (currentSlide) {
            setSlogan(currentSlide.slogan);
        }
    };

    const slideTo = (index: number) => {
        if (frontSwiperRef) {
            frontSwiperRef.current.swiper.slideTo(index, 1800);
            backSwiperRef.current.swiper.slideTo(index, 1800);
        }
    };

    return (
        <section id='Services' className='relative'>
            <Swiper
                ref={backSwiperRef}
                effect={"fade"}
                slidesPerView={1}
                fadeEffect={{
                    crossFade: true,
                }}
                speed={1800}
                allowTouchMove={false}
                modules={[EffectFade]}
                grabCursor={false}
                wrapperTag='ul'
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }}>
                {offerCredentials.map((credential) => (
                    <SwiperSlide
                        key={credential.id}
                        className={`background-badge ${credential.class}`}
                        tag='li'></SwiperSlide>
                ))}
            </Swiper>

            <div
                className='container relative px-[20px] pt-[54px] pb-[56px] h-[851px]
                tab:px-[32px] tab:py-[64px] tab:h-[621px]
                desk:px-[24px] desk:py-[104px] desk:h-[779px]'>
                <Subtitle caption={subTitle} styles='mb-[24px] tab:mb-0' />

                <div
                    className=' mb-[13px] text-right text-[43px] font-thin leading-[43px]
                    tab:absolute tab:mb-0 tab:top-16 tab:left-[515px] tab:text-[67px] tab:leading-[67px]
                    desk:top-[104px] desk:left-[644px] desk:text-[98px] desk:leading-[98px] '>
                    0
                    {transition((style, slideOrderNumber) => (
                        <animated.span style={style}>
                            {slideOrderNumber}
                        </animated.span>
                    ))}
                    /
                    <span className='opacity-20'>
                        0{offerCredentials.length}
                    </span>
                </div>

                <Swiper
                    ref={frontSwiperRef}
                    effect={"fade"}
                    slidesPerView={1}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    speed={1800}
                    allowTouchMove={false}
                    modules={[EffectFade]}
                    grabCursor={false}
                    wrapperTag='ul'
                    className='tab:w-full tab:h-full'>
                    {offerCredentials.map((credential) => (
                        <SwiperSlide key={credential.id} tag='li'>
                            <OfferBadge
                                image={credential.image}
                                slogan={credential.slogan}
                                name={credential.name}
                                text={credential.text}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <OfferMenu
                    slideOrderNumber={slideOrderNumber}
                    slogan={slogan}
                    onMenuSelect={onMenuSelect}
                />
            </div>
        </section>
    );
}
