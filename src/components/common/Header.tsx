"use client";
import { HEADER_DATA_LIST } from "@/utils/helper";
import Link from "next/link";
import React, { useState, useEffect } from "react";


const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-white mx-auto w-full flex justify-center items-center">
            <div className="flex justify-between items-center mx-auto w-full max-w-[1212px] px-4 rounded-[20px] overflow-hidden lg:py-[18px] md:py-4 py-2.5">
                <button onClick={handleOpen} className={`hidden size-7 justify-center max-lg:absolute max-lg:right-4 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 ${open ? "rotate-45 after:rotate-90 after:!bg-black !bg-black" : ""}`}></span>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black ${open ? "hidden" : ""}`}></span>
                    <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black after:!bg-black ${open ? "-translate-x-10 !bg-black" : ""}`}></span>
                </button>
                <Link href="/">
                    <img className="xl:max-w-[93px] xl:min-w-[93px] lg:max-w-20 md:max-w-16 max-w-12 w-full" src="/assets/images/png/header-logo.png" alt="page-logo" />
                </Link>
                <div className={`flex xl:gap-[30px] max-lg:px-4 bg-white relative w-full mx-auto justify-center lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern bg-cover bg-center max-lg:duration-300 max-lg:justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                    {HEADER_DATA_LIST.map((item, index) => (
                        <Link href={item.path} className="text-black lg:hidden max-lg:block font-bold lg:text-base text-sm transition-all duration-300 ease-linear hover:text-yellow" key={index}>{item.link}</Link>
                    ))}
                </div>
                <div className="lg:block max-lg:hidden">
                    <div className="flex gap-[38px]">
                        {HEADER_DATA_LIST.map((item, index) => (
                            <Link href={item.path} className="text-black font-bold lg:text-base text-sm transition-all duration-300 ease-linear hover:text-yellow" key={index}>{item.link}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
