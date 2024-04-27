import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/sections/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Carp Travel",
    description: "Uncover Carpathian's Secrets",
    icons: [
        {
            url: "/icons/favicon-dark.svg",
            media: "(prefers-color-scheme: dark)",
            rel: "icon",
            type: "image/svg",
        },
        {
            url: "/icons/favicon-light.svg",
            media: "(prefers-color-scheme: light)",
            rel: "icon",
            type: "image/svg",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className='scroll-smooth'
            style={{ scrollBehavior: "smooth" }}>
            <body className={inter.className}>
                <Header />
                {children}

                <Toaster
                    position='top-center'
                    reverseOrder={false}
                    toastOptions={{
                        style: {
                            borderRadius: "8px",
                            background: "#5a5a5a",
                            color: "#f7f1f1",
                            textShadow:
                                "1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000",
                        },
                        duration: 2800,
                    }}
                />
            </body>
        </html>
    );
}
