"use client";

import { navigation } from "@/data/navigation";
import { MobileMenuProps } from "@/utils/types";
import Link from "next/link";

export default function HeaderNavList({
    isMenuOpen,
    toggleMenu,
}: MobileMenuProps) {
    return (
        <>
            {isMenuOpen && (
                <div className='absolute top-0 left-0 w-screen h-screen grid place-content-center bg-menu-background backdrop-blur-filter'>
                    <nav>
                        <ul className='flex flex-col items-center gap-12 text-lg font-normal tracking-[1.8px]'>
                            {navigation.map((item) => (
                                <li key={item}>
                                    <Link href={`#${item}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        type='button'
                        className=''
                        onClick={() => toggleMenu()}>
                        close
                    </button>
                </div>
            )}
        </>
    );
}
