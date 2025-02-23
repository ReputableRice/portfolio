import about__me from "/src/public/assets/videos/About Me.mp4"

import {
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Live2D from "../../components/live2d/Live2D"
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


export default function About() {

    const container = useRef();

    useGSAP(() => {
        gsap.from('.fadeInGSAP', {
            y: 300,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.5,
            opacity: 0,
        });

    }, { scope: container })

    return (
        <div className="flex clex-col">
            <div className="flex sm:flex-col items-center justify-center -top-[112px] absolute bg-zinc-900 pb-[212px]" ref={container}>
                <div className="flex justify-center sm:flex-col lg:flex-row-reverse items-start sm:items-center gap-6 h-full m-auto">
                    <Live2D />
                    <div className="flex flex-col h-full lg:w-1/5 sm:w-full justify-center">
                        <h1 className="text-3xl font-bold white__text fadeInGSAP">About <span className="green__text">Me!</span></h1>
                        <p className="white__text fadeInGSAP"><span className="font-bold">I'm an artist and graphic designer</span> based in British Columbia with experience in web development, branding and marketing. As a hobby I create VTuber models, play games, and do some video editing!
                            <div className="mt-3">I strive to create content and visuals that can be appreciated and inspire others!</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}