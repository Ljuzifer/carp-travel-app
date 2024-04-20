"use client";

import Link from "next/link";
import { useTransition, animated } from "@react-spring/web";
import { MobileMenuProps } from "@/utils/types";
import { navigation } from "@/data/navigation";

export default function HeaderNavList({
    isMenuOpen,
    toggleMenu,
}: MobileMenuProps) {
    const transitions = useTransition(isMenuOpen, {
        from: {
            transform: "translate(100%, -100%) scale(0)",
            transformOrigin: "top right",
        },
        enter: {
            transform: "translate(0%, 0%) scaleX(1)",
            transformOrigin: "top right",
        },
        leave: {
            transform: "translate(-100%, 100%) scaleX(0)",
            transformOrigin: "bottom left",
        },
        config: {
            duration: 888,
        },
    });

    return (
        <>
            {transitions((styles, isMenuOpen) => (
                <>
                    {isMenuOpen && (
                        <animated.div
                            style={styles}
                            className='absolute top-0 left-0 w-screen h-screen grid place-content-center bg-menu-background backdrop-blur-filter z-50'>
                            <nav>
                                <ul className='flex flex-col items-center gap-12 text-lg font-normal tracking-[1.8px]'>
                                    {navigation.map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`#${item}`}
                                                onClick={() => toggleMenu()}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <button
                                type='button'
                                className='absolute top-[43px] right-5 text-sm font-normal tracking-[1.4px] uppercase tab:hidden'
                                onClick={() => toggleMenu()}>
                                close
                            </button>
                        </animated.div>
                    )}
                </>
            ))}
        </>
    );
}
