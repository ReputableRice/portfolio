import about__me from "/src/public/assets/videos/About Me.mp4"

import {
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import Live2D from "../../components/live2d/Live2D"
import Footer from "../../components/Footer/Footer";
import { useEffect, useRef, useState } from "react";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


export default function About() {
    const container = useRef();
    const alertContainer = useRef();


    useGSAP(() => {
        gsap.from('.fadeInGSAP', {
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.5,
            opacity: 0,
        });
        gsap.from('.slideInGSAP', {
            x: -300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.5,
            opacity: 0,
        });
    }, { scope: container })

    useGSAP(() => {

        var tl = gsap.timeline();
        tl.from(".alertGSAP", {
            duration: 0.3,
            ease: "power3.out",
            y: -100
        });
        tl.to(".alertGSAP", {
            y: 0,
            opacity: 1,
            duration: 5
        });
        tl.to(".alertGSAP", {
            y: 0,
            opacity: 0
        });

    }, { scope: alertContainer })

    return (
        <>
            <div className="overflow-hidden absolute h-svh w-full -top-0 flex items-center drop-shadow-2xl" ref={container}>
                <div className="sm:hidden lg:flex">
                    <div>
                        <Live2D />
                        <svg xmlns="http://www.w3.org/2000/svg" width="1103" height="1080" viewBox="0 0 1103 1080" fill="none"
                            className="slideInGSAP"
                        >
                            <path d="M0 0H1103L820 1080H0V0Z" fill="#71A850" />
                        </svg>
                    </div>
                </div>

                <div className="relative lg:w-1/5 items-center lg:p-0 sm:p-6">
                    <h1 className="text-3xl font-bold fadeInGSAP">About <span className="green__text">Me!</span></h1>
                    <p className="fadeInGSAP mt-6"><span className="font-bold">I'm an artist and graphic designer</span> based in British Columbia with experience in web development, branding and marketing. As a hobby I create VTuber models, play games, and do some video editing!
                        <span className="mt-3">I strive to create content and visuals that can be appreciated and inspire others!</span>
                    </p>
                </div>
            </div>
            <div className="w-1/5" ref={alertContainer}>
                <div className="absolute bottom-6 right-6 w-1/3">
                    <Alert className="alertGSAP">
                        <AlertTitle>Try it!</AlertTitle>
                        <AlertDescription>
                            Click on the character!
                        </AlertDescription>
                    </Alert>
                </div>

            </div>
        </>
    )
}