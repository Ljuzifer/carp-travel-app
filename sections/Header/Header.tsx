"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import HeaderNavList from "@/components/HeaderNavList/HeaderNavList";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

    useEffect(() => {
        if (isTablet) {
            setIsMenuOpen(true);
            return;
        }
        setIsMenuOpen(false);
    }, [isTablet]);

    useEffect(() => {
        if (isMobile && isMenuOpen) {
            document.body.style.overflow = "hidden";
            return;
        }
        if (isMobile && !isMenuOpen) {
            document.body.style.overflow = "visible";
            return;
        }
    }, [isMobile, isMenuOpen]);

    const toggleMenu = () => {
        if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    return (
        <header className=' mx-auto bg-header-gradient h-[105px]'>
            <div
                className='flex justify-between items-center py-9 px-5 mx-auto max-w-screen-lg-mob 
                tab:px-8 tab:pt-[25px] tab:pb-[66px] tab:w-[768px] tab:max-w-screen-tab
                desk:pl-6 desk:pr-[21px] desk:w-[1280px] desk:max-w-screen-desk'>
                <Link href={"/"}>
                    <Image
                        src='/icons/logo.svg'
                        width={61}
                        height={36}
                        alt='Carp Travel Logo'
                    />
                </Link>

                <HeaderNavList
                    screen={isMobile}
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                />

                <button
                    type='button'
                    onClick={() => toggleMenu()}
                    className='uppercase text-sm font-normal tracking-[1.4px] tab:hidden'>
                    menu
                </button>
            </div>
        </header>
    );
}
