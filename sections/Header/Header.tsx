"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderNavList from "@/components/HeaderNavList/HeaderNavList";
import { useEffect, useState } from "react";
import useMedia from "use-media";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const isMobile = useMedia({ maxWidth: "767px" });

    useEffect(() => {
        if (!isMobile) {
            setIsMenuOpen(true);
        }
    }, [isMobile]);

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
