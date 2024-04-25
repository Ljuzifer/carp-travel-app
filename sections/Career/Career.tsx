"use client";

import { useState, useEffect } from "react";
import { CareerCredentials } from "@/data/career";
import Subtitle from "@/components/Subtitle/Subtitle";
import CareerBenefits from "@/components/CarrerBenefits/CareerBenefits";
import CareerForm from "@/components/CareerForm/CareerForm";

import "./Career.css";

export default function Career() {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    const { subTitle } = CareerCredentials;

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        window.addEventListener("resize", onScreenResize);

        return () => {
            window.removeEventListener("resize", onScreenResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth && windowWidth < 768) {
            setIsMobile(true);
        }

        if (windowWidth && windowWidth >= 768) {
            setIsMobile(false);
        }
    }, [windowWidth]);

    const onScreenResize = () => {
        setWindowWidth(window.innerWidth);
    };

    return (
        <>
            <section
                id='Career'
                className='career relative bg-cover bg-no-repeat bg-center'>
                <div
                    className='container px-[20px] py-[56px] relative z-10
                        tab:px-8 tab:py-16 desk:py-[104px] 
                        desk:px-6 desk:h-[818px]'>
                    <Subtitle caption={subTitle} styles='mb-[24px] tab:mb-0' />

                    <CareerBenefits />

                    {!isMobile && (
                        <div
                            className='tab:absolute tab:bottom-[64px] tab:right-8
                                desk:bottom-[104px] desk:right-6'>
                            <CareerForm />
                        </div>
                    )}
                </div>
            </section>

            {isMobile && (
                <section
                    id='Career'
                    className='career relative career-mob bg-cover bg-no-repeat bg-center'>
                    <div className='container relative px-[20px] py-[56px] z-10'>
                        <CareerForm />
                    </div>
                </section>
            )}
        </>
    );
}
