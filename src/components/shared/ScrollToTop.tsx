"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const listenToScroll = () => {
            const hidden = 500;
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (winScroll > hidden) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        if (typeof globalThis !== "undefined") {
            globalThis.addEventListener("scroll", listenToScroll);
            return () => {
                globalThis.removeEventListener("scroll", listenToScroll);
            };
        }
    }, []);

    return (
        <>
            {isVisible && (
                <div className={`fixed flex items-center duration-200 scale-100 bg-white/30 backdrop-blur-md z-10 right-5 md:bottom-10 bottom-32 rounded-full p-5 shadow-black shadow-lg`}>
                    <ChevronUp onClick={goToBtn} className="cursor-pointer" />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
