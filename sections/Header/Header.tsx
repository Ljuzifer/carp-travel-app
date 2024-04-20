"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useMedia from "use-media";
import HeaderNavList from "@/components/HeaderNavList/HeaderNavList";

export default function Header() {
    const isMobile = useMedia({ maxWidth: "767px" });
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            const mobile = window.matchMedia("(max-width: 767px)").matches;
            setIsMenuOpen(!mobile);
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=' mx-auto bg-header-gradient'>
            <div className='flex justify-between items-center py-9 px-5'>
                <Link href={"/"}>
                    <Image
                        src='/icons/logo.svg'
                        width={61}
                        height={33}
                        alt='Carp Travel Logo'
                    />
                </Link>

                <HeaderNavList
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                />

                <button
                    type='button'
                    onClick={() => toggleMenu()}
                    className='uppercase text-sm tracking-widest tab:hidden'>
                    menu
                </button>
            </div>
        </header>
    );
}
