"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { subTitle, galleryImages } from "@/data/gallery";
import Subtitle from "@/components/Subtitle/Subtitle";
import GalleryStaticList from "@/components/GalleryStaticList/GalleryStaticList";
import GalleryImageSlider from "@/components/GalleryImageSlider/GalleryImageSlider";
import GalleryNavSlider from "@/components/GalleryNavSlider/GalleryNavSlider";

// import { galleryItems, gallerySectionTitle } from "@/utils/staticData/gallery";

// import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
// import { GalleryMobile } from "@/components/GalleryMobile/GalleryMobile";
// import { GallerySwiperNav } from "@/components/GallerySwiperNav/GallerySwiperNav";
// import { GallerySwiperSlide } from "@/components/GallerySwiperSlide/GallerySwiperSlide";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./Gallery.css";

export default function Gallery() {
    const [sliderUpload, setSliderUpload] = useState(false);

    const prevButton = useRef<HTMLButtonElement | null>(null);
    const nextButton = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (prevButton && nextButton) {
            setSliderUpload(true);
        }
    }, [prevButton, nextButton]);

    return (
        <section id='Gallery' className='gallery relative'>
            <div
                className='container relative z-10 px-[20px] py-[56px]
                tab:px-[32px] tab:pt-[64px] tab:pb-[58px] desk:py-[104px] tab:h-[575px]
                desk:px-0 desk:h-[818px]'>
                <Subtitle caption={subTitle} styles='mb-[24px] tab:mb-[64px]' />

                <GalleryStaticList />

                <div className='hidden tab:block'>
                    <GalleryNavSlider
                        sliderUpload={sliderUpload}
                        prevButton={prevButton}
                        nextButton={nextButton}
                    />

                    {sliderUpload && (
                        <Swiper
                            effect={"coverflow"}
                            className='h-[294px] desk:h-[429px] flex justify-center gap-[24px] relative'
                            loop={true}
                            loopPreventsSliding={true}
                            // loopAddBlankSlides={true}
                            // loopedslides={1}
                            // loopAdditionalSlides={1}
                            grabCursor={true}
                            wrapperTag='ul'
                            centeredSlides={true}
                            slidesPerView={2}
                            // slidesPerGroup={3}
                            speed={1800}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 200,
                                modifier: 1.32,
                                slideShadows: false,
                            }}
                            breakpoints={{
                                768: {
                                    coverflowEffect: {
                                        rotate: 0,
                                        stretch: 50,
                                        depth: 0,
                                        modifier: 1.32,
                                        scale: 0.45,
                                    },
                                },
                                1280: {
                                    coverflowEffect: {
                                        rotate: 0,
                                        stretch: 120,
                                        depth: 0,
                                        modifier: 1.32,
                                        scale: 0.65,
                                    },
                                },
                            }}
                            navigation={{
                                prevEl: prevButton?.current,
                                nextEl: nextButton?.current,
                            }}
                            modules={[EffectCoverflow, Navigation]}>
                            {galleryImages.map((img) => (
                                <SwiperSlide key={img} tag='li'>
                                    {({ isActive }: { isActive: boolean }) => (
                                        <GalleryImageSlider
                                            isActive={isActive}
                                            image={img}
                                        />
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    );
}
